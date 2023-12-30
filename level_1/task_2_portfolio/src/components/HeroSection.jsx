import Image from "next/image";
import Link from "next/link";

import { LuDownload, LuSend } from "react-icons/lu";
import { RiArrowDownSLine } from "react-icons/ri";
import Socials from "./Socials";


function HeroSection() {
  return (
    <main className="p-8 h-screen">
    <div className="container mx-auto ">
      <div className="flex justify-between gap-x-8">
        <div
          id="content"
          className="flex max-w-3xl flex-col justify-center gap-6 py-12 mx-auto xl:mx-0"
        >
          <span className="text-sm font-semibold mb-4 uppercase -tracking-tighter text-red-700">
            Front-end Web Developer
          </span>
          <h1 className="text-4xl md:text-6xl xl:leading-[80px] tracking-[-2px] font-bold">
            Hello, I'm Hadia 👋
          </h1>
          <p className="text-lg my-4 font-light max-w-lg mx-auto xl:mx-0">
            A passionate frontend web developer 🚀. <br/>I&apos;m a Re:coded alumni, I gained experience building cool websites using JavaScript/ Reactjs/ Nodejs/ Nextjs and much more. Reach out to me if you wanna create amazing websites.
          </p>
          <Socials />
          <div
            id="buttons"
            className="flex gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-2 md:mb-6"
          >
            <Link href="/#contact">
              <button className="flex justify-center items-center gap-2 rounded-full border-2 border-red-800 hover:text-white hover:bg-red-800 p-3">
                Contact Me <LuSend />
              </button>
            </Link>
            <Link href="/assets/HadiaDjadallah.pdf" download>
              <button className="flex gap-2 rounded-full border-2 border-red-800 hover:text-white hover:bg-red-800  p-3">
                See my resume <LuDownload />
              </button>
            </Link>
          </div>
        </div>
        <div id="image" className="hidden xl:flex relative">
          <div className="bg-heroBlobLight dark:bg-heroBlobDark w-[500px] h-[500px] bg-no-repeat absolute top-8 right-16">
            <Image src="/assets/portfolioHero.png" priority fill alt="img" />
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="hidden md:flex absolute left-2/4 bottom-6 xl:bottom-8 animate-bounce"
      >
        <RiArrowDownSLine className="text-3xl text-red-800" />
      </a>
    </div>
  </main>
  )
}

export default HeroSection;