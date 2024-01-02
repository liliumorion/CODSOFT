import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

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