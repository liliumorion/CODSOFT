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
    <div className="flex gap-x-6 mx-auto xl:mx-0">
      {icons.map((icon, index)=>(
        <Link className="text-2xl  hover:text-red-700 transition-all" href={icon.path} key={index}>{icon.name}</Link>
      ))}
    </div>
  )
}

export default Socials;
