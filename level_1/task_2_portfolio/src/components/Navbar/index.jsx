import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import links from "../../../lib/links.js";

function Navbar() {
  return (
     <header className="fixed flex justify-between items-center top-0 z-50 transition-all w-full bg-red-200 bg-opacity-40 px-16 pt-2 ">
      <div>
          <Link href="/">
          <Image src="/assets/long logo.png" alt="logo" width={200} height={100}/>
          </Link>
      </div>
      <nav className="hidden lg:flex lg:gap-x-8 lg:items-center">
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className="relative transition-all after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <MobileMenu />
    </header>
  )
}

export default Navbar;