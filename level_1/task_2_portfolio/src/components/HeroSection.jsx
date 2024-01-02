import Image from "next/image";
import Link from "next/link";

import { LuDownload, LuSend } from "react-icons/lu";
import { RiArrowDownSLine } from "react-icons/ri";
import Socials from "./Socials";


function HeroSection() {
  return (
    <main className="h-screen flex justify-between items-center">
        <div
          id="content"
          className="flex max-w-3xl flex-col justify-center gap-5 p-12 mx-auto xl:mx-0"
        >
          <span className="text-sm font-semibold uppercase -tracking-tighter text-red-700">
            Front-end Web Developer
          </span>
          <h1 className="text-4xl md:text-6xl xl:leading-[80px] tracking-[-2px] font-bold">
            Hello, I'm Hadia 👋
          </h1>
          <p className="text-lg  font-light max-w-lg mx-auto xl:mx-0">
            A passionate frontend web developer 🚀. <br/>I&apos;m a Re:coded alumni, I gained experience building cool websites using JavaScript/ Reactjs/ Nodejs/ Nextjs and much more. Reach out to me if you wanna create amazing websites.
          </p>
          <Socials />
          <div
            id="buttons"
            className="flex gap-5 md:flex-row mx-auto xl:mx-0 m-2 md:mt-6"
          >
            <Link href="/#contact">
              <button className="w-44 flex justify-center items-center gap-2 rounded-full border-2 border-red-800 hover:text-white hover:bg-red-800 p-3">
                Contact Me <LuSend />
              </button>
            </Link>
            <Link href="/assets/HadiaDjadallah.pdf" target="_blank">
              <button className="w-44 flex justify-center items-center gap-2 rounded-full border-2 border-red-800 hover:text-white hover:bg-red-800  p-3">
                See my resume <LuDownload />
              </button>
            </Link>
          </div>
        </div>
          <div id="illustration">
            <Image src="/assets/portfolioHero.png" height={500} width={500}  alt="img" />
          </div>

      <Link
        href="#about"
        className="hidden md:flex absolute left-2/4 bottom-6 xl:bottom-8 animate-bounce"
      >
        <RiArrowDownSLine className="text-3xl text-red-800" />
      </Link>

  </main>
  )
}

export default HeroSection;