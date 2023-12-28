import projects from "../../lib/projects";
import Image from "next/image";
import Link from "next/link";
const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 min-h-screen flex flex-col gap-10"
    >
      <h2 className="text-4xl md:text-7xl xl:leading-[80px] tracking-[-2px] font-bold  text-center pl-6">
        My Projects
      </h2>
      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-8">
        {projects.map((project) => (
          <div key={project.id}
            className="w-[300px] h-96 flex justify-center items-center bg-opacity-20 backdrop-filter backdrop-blur-md group rounded-xl shadow-2xl overflow-hidden cursor-pointer"
          >
            <div
              className="relative w-full h-full bg-cover bg-no-repeat flex flex-col flex-1 justify-center items-center gap-4"
              style={{
                backgroundImage:`linear-gradient(rgba(31, 41, 55, 1), rgba(153, 26, 26, 0.7)), url(${project.image})`,
              }}
            >
              <h2 className="font-black tracking-wider text-white text-4xl">
                {project.title}
              </h2>
              <div className="flex flex-col gap-2 absolute p-8 text-xl font-light w-full h-full bg-red-800 text-white justify-center items-center translate-y-72 opacity-0 transition-all duration-700 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-lg">
                {project.description}
              </p>
              <div className="flex items-center gap-2">
              <button className="  bg-white text-red-800 hover:text-black hover:border-2 hover:border-white hover:bg-transparent rounded-full p-1 w-24 text-base" >
                <Link href={project.path} target="_blank">
                  Preview
                </Link>
              </button>
              <button className=" bg-white text-red-800 hover:text-black hover:border-2 hover:border-white hover:bg-transparent rounded-full p-1 w-24 text-base" >
                <Link href={project.code} target="_blank">
                  Code
                </Link>
              </button>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;