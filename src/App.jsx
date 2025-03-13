import { useState, useEffect } from 'react'
import { ThemeProvider } from './Theme/Theme'
import Btn from './Theme/btn'
import './App.css'
import TodoForm from './components/TodoForm'
import App2 from './App2'

function App() {

  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = () => {
    setThemeMode('dark')
  }
  const lightTheme = () => {
    setThemeMode('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <>
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className='w-full h-screen dark:bg-customDarkBlue justify-items-center content-center bg-gray-300 overflow-auto'>
        <div className='mb-9 mt-9 flex justify-center'><Btn /></div>
        <h1 className='dark:text-white text-black text-2xl mb-9'>Manage your Todos</h1>
        <div className='w-[35%] mb-10 rounded-lg shadow-lg pb-9 tododiv'>
          <App2 />
        </div>
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
