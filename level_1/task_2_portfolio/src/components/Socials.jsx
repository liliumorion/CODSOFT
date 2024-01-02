import Link from "next/link";
import { FaInstagram , FaGithub ,FaLinkedin } from "react-icons/fa";

const icons = [
  {
    path:"/",
    name: <FaGithub />
  },
  {
    path:"/",
    name: <FaLinkedin />
  },
  {
    path:"/",
    name: <FaInstagram />
  }
]

const Socials = () => {
  return (
    <div className="flex gap-6 mx-auto xl:mx-0">
      {icons.map((icon, index)=>(
        <div className="rounded-full bg-red-800 hover:bg-black p-4 text-2xl text-white hover:text-red-800">
          <Link href={icon.path} key={index}>{icon.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Socials;
