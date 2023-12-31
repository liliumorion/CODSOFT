import { FaRegStar } from "react-icons/fa";
import { IoGitBranchOutline } from "react-icons/io5";
import { RiGitRepositoryLine } from "react-icons/ri";

import Link from "next/link";
import openSourceProjects from "../../lib/openSourceProjects";
function OpenSource() {
  return (
    <section
      id="openSource"
      className="py-16 px-8 min-h-screen flex flex-col items-center gap-10"
    >
      <h2 className="text-4xl md:text-6xl xl:leading-[80px] tracking-[-2px] font-bold pl-6">
        Open Source
      </h2>
      <div className="px-12 flex flex-col justify-center items-center gap-4">
        <p className=" text-lg font-medium text-center">
          If you're interested in being a contributor in open source like me,
          check out the following suggestions:
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {openSourceProjects.map((project) => (
          <div
            key={project.id}
            className="w-96 h-52 rounded-xl shadow-3xl bg-slate-800 flex flex-col justify-between gap-4 text-white p-4"
          >
            <div className="flex items-center gap-2 text-lg font-bold">
              <RiGitRepositoryLine />{" "}
              <Link
                href={project.code}
                target="_blank"
                className="tracking-wider underline"
              >
                {project.title}
              </Link>
            </div>
            <div className="flex flex-col gap-2 font-light self-start h-20">
              <p className="text-lg">{project.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <IoGitBranchOutline />
              <span>{project.fork}</span>
              <FaRegStar />
              <span>{project.star}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OpenSource;
