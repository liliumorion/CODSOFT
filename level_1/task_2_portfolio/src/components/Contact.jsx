import { useState } from "react";
import { MdOutlineCheck, MdOutlineContentCopy } from "react-icons/md";
import Socials from "./Socials";

function Contact() {
  const [copy, setCopy] = useState(false);
  const email = "hadiadjd@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopy(true);
        setTimeout(() => setCopy(false), 1500);
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  };
  return (
    <section id="contact" className="py-16 flex flex-col gap-4">
      <h2 className="text-4xl md:text-6xl xl:leading-[80px] tracking-[-2px] font-bold  text-center pl-6">
        Connect with me
      </h2>
      <div className="px-12 flex flex-col justify-center items-center gap-4">
        <p className="text-center">I'm ready for new challenges, let's create something cool!</p>
        <div className=" flex justify-center items-center gap-2 text-lg md:text-xl font-semibold  p-4 border-2 border-red-800 rounded-xl">
          <span>{email}</span>
          <button onClick={copyToClipboard}>
            {copy ? <MdOutlineCheck /> : <MdOutlineContentCopy />}
          </button>
        </div>

        <Socials />

      </div>
      
    </section>
  );
}

export default Contact;
