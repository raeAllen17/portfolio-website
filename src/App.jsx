import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { NotFound } from './pages/NotFoundPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <MainPage /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
