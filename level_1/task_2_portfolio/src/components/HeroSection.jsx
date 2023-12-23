import Image from "next/image";
import Link from "next/link";

import { LuDownload, LuSend } from "react-icons/lu";
import { RiArrowDownSLine } from "react-icons/ri";
import Socials from "./Socials";


function HeroSection() {
  return (
    <main className="py-16 h-screen">
    <div className="container mx-auto ">
      <div className="flex justify-between gap-x-8">
        <div
          id="content"
          className="flex max-w-3xl flex-col justify-center mx-auto xl:mx-0"
        >
          <span className="text-sm font-semibold mb-4 uppercase -tracking-tighter text-primary">
            Front-end Web Developer
          </span>
          <h1 className="text-4xl md:text-7xl xl:leading-[80px] tracking-[-2px] font-bold">
            Hello, my name is Hadia Djadallah
          </h1>
          <p className="text-muted-foreground text-lg my-4 font-light max-w-lg mx-auto xl:mx-0">
            Welcome to my little world of wonders 🚀. <br/>I&apos;m a Re:coded &
            Flatiron graduate, and I hold a master's degree in microbial
            biotechnology. i'm also a former pharmacist, which means I'm
            always ready to learn and create new things.
          </p>
          <div
            id="buttons"
            className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-2 md:mb-6"
          >
            <Link href="/#contact">
              <button className="flex gap-2">
                Contact Me <LuSend />
              </button>
            </Link>
            <Link href="/cv/HadiaDjadallahCv.pdf" download>
              <button className="flex gap-2">
                Download CV <LuDownload />
              </button>
            </Link>
          </div>
          <Socials />
        </div>
        <div id="image" className="hidden xl:flex relative">
          <div className="bg-heroBlobLight dark:bg-heroBlobDark w-[420px] h-[420px] bg-no-repeat absolute top-8 right-16">
            <Image src="/assets/portfolioHero.png" priority fill alt="img" />
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="hidden md:flex absolute left-2/4 bottom-6 xl:bottom-8 animate-bounce"
      >
        <RiArrowDownSLine className="text-3xl text-primary" />
      </a>
    </div>
  </main>
  )
}

export default HeroSection;