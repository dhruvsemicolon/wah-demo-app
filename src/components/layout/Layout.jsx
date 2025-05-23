import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div>
      <Header />
      <main className='p-4 mt-[65px] max-w-[1500px] mx-auto'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
