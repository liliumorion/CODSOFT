import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import OpenSource from '@/components/OpenSource'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={` ${inter.className}`}
    >
     <HeroSection/>
     <About/>
     <Skills/>
     <OpenSource/>
     <Projects/>
     <Contact/>
    </main>
  )
}
