import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const Layout = lazy(() => import('./components/layout/Layout'));


function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div className="text-center p-4 text-2xl">Loading...</div>}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Navigate to="/home" />} />
              <Route path='/home' element={<HomePage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
