import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { lazy, Suspense } from 'react'
import { Spin } from 'antd'

const SuspenseComponent = (Component: any) => (props: any) =>
  (
    <Suspense
      fallback={
        <div className='flex justify-center h-screen items-center'>
          <Spin
            tip={
              <div>
                <p>Loading...</p>
                <p>（若时间过长，请刷新页面）</p>
              </div>
            }
          ></Spin>
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  )

const TestPage = SuspenseComponent(lazy(() => import('./pages/TestPage')))
const ResultPage = SuspenseComponent(lazy(() => import('./pages/ResultPage')))

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
