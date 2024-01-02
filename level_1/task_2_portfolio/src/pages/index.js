import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import OpenSource from '@/components/OpenSource'
import Blogs from '@/components/Blogs'
import Link from 'next/link'
import { IoChevronUpCircleOutline } from "react-icons/io5";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`px-8 ${inter.className}`}
    >
     <HeroSection/>
     <About/>
      <Skills/> 
     <OpenSource/> 
      <Projects/> 
   <Blogs/>
     <Contact/> 

    <Link href='#' className="fixed z-50 right-16 bottom-16 bg-white rounded-full">
          <IoChevronUpCircleOutline className="w-10 h-10 text-red-800" />
        </Link>

    </main>
  )
}
