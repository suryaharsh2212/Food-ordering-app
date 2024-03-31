
import Footer from '../Elements/Footer/Footer'
import Header from '../Elements/Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default Layout
