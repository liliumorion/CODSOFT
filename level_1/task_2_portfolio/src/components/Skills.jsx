"use client";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import skills from "../../lib/skills";
import img from "../../public/assets/skills.svg";
const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <section id="skills" className="pt-16 xl:py-16 md:h-screen flex flex-col items-center gap-10">
      <h2 className="text-4xl md:text-7xl xl:leading-[80px] tracking-[-2px] font-bold pl-6">
            My Skills
          </h2>
      <div className="flex justify-center items-center gap-4 w-screen">
      
 <div>
        <Image src={img} height={400} width={400} className="h-[400px] w-[400px] -scale-x-100 p-4"/>
      </div> 
      <Slider {...settings} className="max-w-[45%] overflow-hidden p-4">
        {skills.map((skill) => (
          <div key={skill.id}>
            <Image
              src={skill.image}
              alt={skill.name}
              width={120}
              height={120}
              className="w-24 object-fill px-1"
            />
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
};

export default Skills;