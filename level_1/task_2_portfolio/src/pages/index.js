import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import About from '@/components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={` ${inter.className}`}
    >
     <HeroSection/>
     <About/>
    </main>
  )
}
