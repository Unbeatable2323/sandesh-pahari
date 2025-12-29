import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="group bg-[#0b0b0b] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
      <div
        className="h-56 md:h-72 rounded-t-xl relative overflow-hidden"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 flex items-center justify-center border-2 rounded-full border-[#ADB7BE] hover:border-white bg-white/5"
            aria-label={`View source for ${title}`}
          >
            <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] group-hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 flex items-center justify-center border-2 rounded-full border-[#ADB7BE] hover:border-white bg-white/5"
            aria-label={`Preview ${title}`}
          >
            <EyeIcon className="h-6 w-6 text-[#ADB7BE] group-hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-4 px-4">
        <h5 className="text-lg md:text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-sm md:text-base line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
