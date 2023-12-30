import Link from "next/link";
import { useState } from "react";
import links from "../../../lib/links.js";
import { HiOutlineX } from "react-icons/hi";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";

function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((open) => !open);
  };
  return (
    <nav className="lg:hidden z-50">
      <button
        onClick={handleClick}
        className="justify-center px-3 py-2 text-sm font-semibold z-50"
      >
        {open ? (
          <MdOutlineClose className="absolute right-10 top-3 w-6 h-6 text-red-700 z-50" />
        ) : (
          <MdOutlineMenu className="w-6 h-6 text-red-700" />
        )}
      </button>
      <div
        className={`${
          open ? "flex" : "hidden"
        } fixed flex-col justify-center w-screen h-screen top-0 left-0 bg-red-200 z-40`} onClick={handleClick}
      >
        
        {links.map((link, index)=>(<Link href={link.path} key={index} className="py-4 text-center transition-all duration-500 hover:translate-x-1 text-4xl hover:font-semibold">{link.name}</Link>))}
      </div>
      
    </nav>
  )
}

export default MobileMenu;