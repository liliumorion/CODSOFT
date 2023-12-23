import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function Layout({children}) {
  return (
    <main>
    <Navbar/>
    {children}
    <Footer/>
    </main>
  )
}

export default Layout;