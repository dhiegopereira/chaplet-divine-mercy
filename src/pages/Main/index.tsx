import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { sidebarOptions } from './sidebarOptions'
import './styles.css'


const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeContent, setActiveContent] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)

  const renderSubmenu = (subItens: any[]) => (
    <ul className="ml-4 space-y-2">
      {subItens.map((subItem, index) => (
        <li
          key={index}
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => {
            setActiveContent(subItem.content)
            setIsSidebarOpen(false)
          }}
        >
          <img
            src={subItem.icon}
            alt={subItem.title}
            className={`w-5 h-5 ${isDarkMode ? 'filter brightness-0 invert' : ''}`}
          />
          <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{subItem.title}</span>
        </li>
      ))}
    </ul>
  )

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} flex min-h-screen`}>
      <div
        className={`fixed top-0 left-0 h-full ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="p-4 text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
        <ul className="mt-4 space-y-4 p-4">
          {sidebarOptions.map((option, index) => (
            <li key={index}>
              <div
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => {
                  if (!option.subItens) {
                    setActiveContent(option.subItens || '')
                    setIsSidebarOpen(false)
                  }
                }}
              >
                <img
                  src={option.icon}
                  alt={option.title}
                  className={`w-6 h-6 ${isDarkMode ? 'filter brightness-0 invert' : ''}`}
                />
                <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{option.title}</span>
              </div>
              {option.subItens && renderSubmenu(option.subItens)}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 flex flex-col p-4">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className={`fixed top-4 left-4 ${
            isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-800 text-white'
          } p-2 rounded-md shadow-md z-50`}
        >
          ☰
        </button>

        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`fixed top-4 right-4 ${
            isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-800 text-white'
          } p-2 rounded-md shadow-md z-50`}
        >
          {isDarkMode ? '🌙' : '☀️'}
        </button>

        <div
          className={`mt-6 w-full max-w-2xl mx-auto ${
            isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'
          } p-6 rounded-lg shadow-md`}
        >
          {activeContent ? (
            <div className="markdown">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {activeContent}
              </ReactMarkdown>
            </div>            
          ) : (
            <p className="text-lg text-gray-500">
              Selecione uma opção no menu para ver o conteúdo.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Main
