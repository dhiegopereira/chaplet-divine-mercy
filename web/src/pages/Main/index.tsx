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

// Função para carregar posts do localStorage
const loadPosts = (): Post[] => {
  const storedPosts = localStorage.getItem('posts')
  return storedPosts ? JSON.parse(storedPosts) : []
}

// Função para salvar posts no localStorage
const savePosts = (posts: Post[]) => {
  localStorage.setItem('posts', JSON.stringify(posts))
}

// Função para gerar a senha com base na hora atual
const generatePassword = (): string => {
  const now = new Date()
  const hours = now.getHours().toString().padStart(2, '0') // Ex: "17"
  const minutes = now.getMinutes().toString().padStart(2, '0') // Ex: "21"

  const h1 = parseInt(hours[0]) + parseInt(hours[1]) // 1 + 7 = 8
  const m1 = parseInt(minutes[0]) + parseInt(minutes[1]) // 2 + 1 = 3
  const h2 = parseInt(hours[1]) + parseInt(minutes[0]) // 7 + 2 = 9
  const m2 = parseInt(hours[0]) + parseInt(minutes[1]) // 1 + 1 = 2

  return `${h1}${m1}${h2}${m2}` // Ex: "8339"
}

const Main = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [newPost, setNewPost] = useState({ title: '', description: '', contentHtml: '' })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [postToDelete, setPostToDelete] = useState<number | null>(null); // Novo estado para armazenar o ID do post a ser deletado
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Estado para o modal de edição
  const [postToEdit, setPostToEdit] = useState<Post | null>(null); // Estado para armazenar o post a ser editado
  const [isPasswordValidForEdit, setIsPasswordValidForEdit] = useState(false); // Estado para validar senha antes de editar

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
      title: newPost.title,
      description: newPost.description,
      contentHtml: newPost.contentHtml,
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
      setNewPost({ title: '', description: '', contentHtml: '' });
      setIsModalOpen(false);
      setIsPasswordValid(false);
      setPasswordInput('');
    } else {
      alert('Erro ao criar o post.');
    }
  };

  const handleUpdatePost = async (id: number) => {
    const updatedPost = posts.find(post => post.id === id);
    if (updatedPost) {
      const response = await fetch(`https://chaplet-divine-mercy.onrender.com/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPost),
      });
      if (response.ok) {
        const updatedPosts = posts.map(post => (post.id === id ? updatedPost : post));
        setPosts(updatedPosts);
        setSelectedPost(null);
      } else {
        alert('Erro ao atualizar o post.');
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

  const handlePasswordSubmit = () => {
    const generatedPassword = generatePassword()
    if (passwordInput === generatedPassword) {
      setIsPasswordValid(true)
    } else {
      alert('Senha incorreta!')
    }
  }

  const handlePasswordSubmitForDelete = () => {
    const generatedPassword = generatePassword();
    if (passwordInput === generatedPassword) {
      setIsPasswordValid(true);
      if (postToDelete !== null) {
        handleDeletePost(postToDelete); // Deleta o post após validar a senha
        setPostToDelete(null); // Reseta o estado
      }
      setPasswordInput('');
      setIsModalOpen(false);
    } else {
      alert('Senha incorreta!');
    }
  };

  const handleEditPost = (post: Post) => {
    setPostToEdit(post);
    setIsPasswordValidForEdit(false); // Reseta a validação de senha para edição
    setIsModalOpen(true); // Reutiliza o modal para solicitar a senha
  };

  const handlePasswordSubmitForEdit = () => {
    const generatedPassword = generatePassword();
    if (passwordInput === generatedPassword) {
      setIsPasswordValidForEdit(true);
      setIsModalOpen(false); // Fecha o modal de senha
      setIsEditModalOpen(true); // Abre o modal de edição
      setPasswordInput(''); // Reseta o campo de senha
    } else {
      alert('Senha incorreta!');
    }
  };

  const handleSaveEditedPost = async () => {
    if (postToEdit) {
      try {
        const response = await fetch(`https://chaplet-divine-mercy.onrender.com/posts/${postToEdit.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(postToEdit),
        });

        if (response.ok) {
          const updatedPosts = posts.map(post =>
            post.id === postToEdit.id ? postToEdit : post
          );
          setPosts(updatedPosts);
          setIsEditModalOpen(false);
          setPostToEdit(null);
        } else {
          alert('Erro ao salvar as alterações.');
        }
      } catch (error) {
        console.error('Erro ao editar o post:', error);
      }
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
            onClick={() => setIsModalOpen(true)}
            className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors duration-300"
          >
            Novo Post
          </button>
        </div>
      </div>

      {/* Content */}
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
                    handleEditPost(post);
                  }}
                  className="text-blue-600 hover:underline"
                >
                  Editar
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setPostToDelete(post.id);
                    setIsModalOpen(true);
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

      {/* Edit Post Modal */}
      {isEditModalOpen && postToEdit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`p-6 rounded-lg shadow-lg w-full max-w-lg ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <h2 className="text-xl font-bold mb-4">Editar Post</h2>
            <input
              type="text"
              placeholder="Título"
              value={postToEdit.title}
              onChange={(e) => setPostToEdit({ ...postToEdit, title: e.target.value })}
              className={`block w-full p-2 mb-2 rounded-md transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-200 text-gray-800 placeholder-gray-500'}`}
            />
            <input
              type="text"
              placeholder="Descrição"
              value={postToEdit.description}
              onChange={(e) => setPostToEdit({ ...postToEdit, description: e.target.value })}
              className={`block w-full p-2 mb-2 rounded-md transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-200 text-gray-800 placeholder-gray-500'}`}
            />
            <ReactQuill
              value={postToEdit.contentHtml}
              onChange={(value) => setPostToEdit({ ...postToEdit, contentHtml: value })}
              className="mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="p-2 bg-red-600 hover:bg-red-500 text-white rounded-md transition-colors duration-300 mr-2"
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveEditedPost}
                className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors duration-300"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`w-full h-full p-6 overflow-auto rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 rounded-md shadow-md bg-red-600 hover:bg-red-500 text-white transition-colors duration-300"
            >
              ✖
            </button>
            <h1 className="text-3xl font-bold mb-4">{selectedPost.title}</h1>
            <p className="text-sm text-gray-500 mb-4">{selectedPost.description}</p>
            <ReactQuill value={selectedPost.contentHtml} readOnly={true} theme="bubble" />
          </div>
        </div>
      )}

      {/* Create/Edit Password Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`p-6 rounded-lg shadow-lg w-full max-w-lg ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <h2 className="text-xl font-bold mb-4">Digite a senha para continuar</h2>
            <input
              type="password"
              placeholder="Senha"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className={`block w-full p-2 mb-4 rounded-md transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-200 text-gray-800 placeholder-gray-500'}`}
            />
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setPasswordInput('');
                  setPostToEdit(null); // Reseta o post a ser editado
                }}
                className="p-2 bg-red-600 hover:bg-red-500 text-white rounded-md transition-colors duration-300 mr-2"
              >
                Cancelar
              </button>
              <button
                onClick={postToEdit ? handlePasswordSubmitForEdit : handlePasswordSubmit}
                className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors duration-300"
              >
                Validar Senha
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Main
