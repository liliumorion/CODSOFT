import Link from "next/link";
import Image from "next/image";
import aboutImage from "../../public/assets/about.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:h-screen flex flex-col justify-between items-center lg:flex-row-reverse"
    >
      <div className="container mx-auto flex flex-col md:flex-row-reverse justify-between gap-x-8">
        <div
          id="text"
          className="flex max-w-3xl flex-col justify-center mx-auto xl:mx-0"
        >
          <h2 className="text-4xl md:text-7xl xl:leading-[80px] tracking-[-2px] font-bold">
            What I Do
          </h2>
          <p className="text-muted-foreground text-lg my-4 font-light mx-auto">
            Welcome again! I'm Hadia, a frontend Web Developer skilled in crafting
            dynamic, user-friendly web applications using JavaScript frameworks
            & libraries.
            <br /> Transitioning from a different career, I've always been
            fascinated and passionate about coding, & I continually embrace the
            opportunity to expand my skills and insights.
            <br /> If you're considering collaboration on a project or seeking
            to work together, don't hesitate to reach out!
          </p>
        </div>
        <figure id="illustration" className="">
          <Image src={aboutImage} alt="About Image" width={500} height={500} />
        </figure>
      </div>
    </section>
  );
};

export default About;
