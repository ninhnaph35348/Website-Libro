import { Outlet } from "react-router-dom"
import Header from "../../components/Client/Header"
import Footer from "../../components/Client/Footer"
import Preloader from "../../components/Client/Preloader"
import Cursor from "../../components/Client/Cursor"
import TopStart from "../../components/Client/TopStart"
import Offcanvas from "../../components/Client/Offcanvas"

const LayoutClient = () => {
  return (
    <>
      <Cursor />
      <Preloader />
      <TopStart />
      <Offcanvas />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutClient