import './App.css'
import { Routes, Route } from 'react-router-dom'
import TestPage from './pages/TestPage'
import ResultPage from './pages/ResultPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<TestPage />} />
      <Route path='/result' element={<ResultPage />}></Route>
    </Routes>
  )
}

export default App
