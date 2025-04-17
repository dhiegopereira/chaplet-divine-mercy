import { useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

type Post = { 
    id: number;
    title: string;
    description: string;
    contentHtml: string;
    createdAt: Date;
    updatedAt: Date;
}


const savePosts = (posts: Post[]) => {
  localStorage.setItem('posts', JSON.stringify(posts))
}

const generatePassword = (): string => {
  const now = new Date()
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')

  const h1 = parseInt(hours[0]) + parseInt(hours[1])
  const m1 = parseInt(minutes[0]) + parseInt(minutes[1])
  const h2 = parseInt(hours[1]) + parseInt(minutes[0])
  const m2 = parseInt(hours[0]) + parseInt(minutes[1])

  return `${h1}${m1}${h2}${m2}`
}

const PasswordModal = ({
  title,
  onCancel,
  onSubmit,
  passwordInput,
  setPasswordInput,
}: {
  title: string;
  onCancel: () => void;
  onSubmit: () => void;
  passwordInput: string;
  setPasswordInput: (value: string) => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="p-6 rounded-lg shadow-lg w-full max-w-lg bg-white text-gray-900">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <input
          type="password"
          placeholder="Senha"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          className="block w-full p-2 mb-4 rounded-md bg-gray-200 text-gray-800 placeholder-gray-500"
        />
        <div className="flex justify-end">
          <button
            onClick={onCancel}
            className="p-2 bg-red-600 hover:bg-red-500 text-white rounded-md transition-colors duration-300 mr-2"
          >
            Cancelar
          </button>
          <button
            onClick={onSubmit}
            className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors duration-300"
          >
            Validar Senha
          </button>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [post, setPost] = useState<Post>({ id: 0, title: '', description: '', contentHtml: '', createdAt: new Date(), updatedAt: new Date() })
  const [passwordInput, setPasswordInput] = useState('')
  const [postToDelete, setPostToDelete] = useState<number | null>(null)

  const [isPasswordModalForNewPostOpen, setIsPasswordModalForNewPostOpen] = useState(false)
  const [isPasswordModalForEditOpen, setIsPasswordModalForEditOpen] = useState(false)
  const [isPasswordModalForDeleteOpen, setIsPasswordModalForDeleteOpen] = useState(false)

  const [isPostModalOpen, setIsPostModalOpen] = useState(false)

  const loadPosts = async (): Promise<Post[]> => {
    const response = await fetch('https://chaplet-divine-mercy.onrender.com/posts');
    return response.json();
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const loadedPosts = await loadPosts();
      setPosts(loadedPosts);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    savePosts(posts)
  }, [posts])

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleCreatePost = async () => {
    const newPostData: Post = {
      id: Date.now(),
      title: post.title,
      description: post.description,
      contentHtml: post.contentHtml,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  
    const response = await fetch('https://chaplet-divine-mercy.onrender.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPostData),
    });
  
    if (response.ok) {
      const createdPost = await response.json();
      setPosts([...posts, createdPost]);
      setPost({ id: 0, title: '', description: '', contentHtml: '', createdAt: new Date(), updatedAt: new Date() });
      setIsPostModalOpen(false);
    } else {
      alert('Erro ao criar o post.');
    }
  };

  const handleSaveEditedPost = async () => {
    if (post) {
      try {
        const response = await fetch(`https://chaplet-divine-mercy.onrender.com/posts/${post.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(post),
        });

        if (response.ok) {
          const updatedPosts = posts.map(post =>
            post.id === post.id ? post : post
          );
          setPosts(updatedPosts);
          setIsPostModalOpen(false);
          setPost({ id: 0, title: '', description: '', contentHtml: '', createdAt: new Date(), updatedAt: new Date() });
        } else {
          alert('Erro ao salvar as alterações.');
        }
      } catch (error) {
        console.error('Erro ao editar o post:', error);
      }
    }
  };

  const handleDeletePost = async (id: number) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);

    try {
      const response = await fetch(`https://chaplet-divine-mercy.onrender.com/posts/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erro ao deletar o post');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  const handleOpenNewPostPasswordModal = () => {
    setIsPasswordModalForNewPostOpen(true);
  };

  const handleOpenEditPasswordModal = (post: Post) => {
    setPost(post);
    setIsPasswordModalForEditOpen(true);
  };

  const handleOpenDeletePasswordModal = (postId: number) => {
    setPostToDelete(postId);
    setIsPasswordModalForDeleteOpen(true);
  };

  const handlePasswordSubmitForNewPost = () => {
    const generatedPassword = generatePassword();
    if (passwordInput === generatedPassword) {
      setIsPasswordModalForNewPostOpen(false);
      setPasswordInput('');
      setIsPostModalOpen(true);
    } else {
      alert('Senha incorreta!');
    }
  };

  const handlePasswordSubmitForEdit = () => {
    const generatedPassword = generatePassword();
    if (passwordInput === generatedPassword) {
      setIsPasswordModalForEditOpen(false);
      setPasswordInput('');
      setIsPostModalOpen(true);
    } else {
      alert('Senha incorreta!');
    }
  };

  const handlePasswordSubmitForDelete = () => {
    const generatedPassword = generatePassword();
    if (passwordInput === generatedPassword) {
      setIsPasswordModalForDeleteOpen(false);
      setPasswordInput('');
      if (postToDelete !== null) {
        handleDeletePost(postToDelete);
        setPostToDelete(null);
      }
    } else {
      alert('Senha incorreta!');
    }
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} flex min-h-screen flex-col transition-colors duration-300`}>
      {/* Navbar */}
      <div className={`fixed top-0 left-0 w-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md z-50 transition-colors duration-300`}>
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-md shadow-md transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-1/2 p-2 rounded-md transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-200 text-gray-800 placeholder-gray-500'}`}
          />
          <button
            onClick={handleOpenNewPostPasswordModal}
            className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors duration-300"
          >
            Novo Post
          </button>
        </div>
      </div>

      <div className="flex-1 mt-16 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className={`p-4 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'}`}
              onClick={() => setSelectedPost(post)}
            >
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.description}</p>
              <p className="text-xs text-gray-400">Atualizado em: {new Date(post.updatedAt).toLocaleDateString()}</p>
              <div className="flex justify-between mt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenEditPasswordModal(post);
                  }}
                  className="text-blue-600 hover:underline"
                >
                  Editar
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenDeletePasswordModal(post.id);
                  }}
                  className="text-red-600 hover:underline"
                >
                  Deletar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPost && (
        <div className={`fixed inset-0 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} flex items-center justify-center z-50 overflow-y-auto`}>
          <div className={`relative w-full h-full max-w-none p-6 rounded-none shadow-none ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-3xl font-bold mb-4">{selectedPost.title}</h2>
            <p className="mb-4 text-gray-500">{selectedPost.description}</p>
            <div
              className={`prose max-w-none ${isDarkMode ? 'prose-invert' : ''}`}
              dangerouslySetInnerHTML={{ __html: selectedPost.contentHtml }}
            />
          </div>
        </div>
      )}

      {isPostModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`w-full h-full p-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <h2 className="text-2xl font-bold mb-4">Criar Novo Post</h2>
            <input
              type="text"
              placeholder="Título"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              className={`block w-full p-2 mb-2 rounded-md transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-200 text-gray-800 placeholder-gray-500'}`}
            />
            <input
              type="text"
              placeholder="Descrição"
              value={post.description}
              onChange={(e) => setPost({ ...post, description: e.target.value })}
              className={`block w-full p-2 mb-2 rounded-md transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-200 text-gray-800 placeholder-gray-500'}`}
            />
            <div className="h-96 overflow-y-auto mb-4">
              <ReactQuill
                value={post.contentHtml}
                onChange={(value) => setPost({ ...post, contentHtml: value })}
                className="h-full"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsPostModalOpen(false)}
                className="p-2 bg-red-600 hover:bg-red-500 text-white rounded-md transition-colors duration-300 mr-2"
              >
                Cancelar
              </button>
              <button
                onClick={post.id === 0 ? handleCreatePost : handleSaveEditedPost }
                className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors duration-300"
              >
                { post.id === 0 ? 'Criar Post' : 'Salvar Alterações' }
              </button>
            </div>
          </div>
        </div>
      )}

      {(isPasswordModalForNewPostOpen || isPasswordModalForEditOpen || isPasswordModalForDeleteOpen) && (
        <PasswordModal
          title={
            `Digite a senha para ${isPasswordModalForNewPostOpen ? 'Criar Novo Post' : isPasswordModalForEditOpen ? 'Editar Post' : 'Deletar Post'}`
          }
          onCancel={() => {
            if (isPasswordModalForNewPostOpen) setIsPasswordModalForNewPostOpen(false);
            if (isPasswordModalForEditOpen) setIsPasswordModalForEditOpen(false);
            if (isPasswordModalForDeleteOpen) setIsPasswordModalForDeleteOpen(false);
          }}
          onSubmit={
            isPasswordModalForNewPostOpen
              ? handlePasswordSubmitForNewPost
              : isPasswordModalForEditOpen
              ? handlePasswordSubmitForEdit
              : handlePasswordSubmitForDelete
          }
          passwordInput={passwordInput}
          setPasswordInput={setPasswordInput}
        />
      )}
    </div>
  )
}

export default Main
