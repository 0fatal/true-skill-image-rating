import './App.css'
import { Routes, Route } from 'react-router-dom'
import TestPage from './pages/TestPage'
import ResultPage from './pages/ResultPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/vote' element={<TestPage />} />
      <Route path='/result' element={<ResultPage />} />
    </Routes>
  )
}

export default App
