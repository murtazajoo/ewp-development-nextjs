import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

export default function TeamMember({ person }) {
  return (
    <div
      data-aos="zoom-in"
      className="flex flex-col items-center justify-center w-full "
    >
      <div className="mb-2 overflow-hidden duration-500 rounded-full pointer-events-none w-28 h-28 ">
        <Image
          src={`/images/team/${person.name.split(" ")[0].toLowerCase()}.jpeg`}
          alt="CEO of e-website-provider"
          width={120}
          height={100}
        />
      </div>
      <div className="text-center">
        <h3 className="text-xl text-white">{person.name}</h3>
        <p className="text-amber-600">{person.post}</p>
      </div>
      <div className="flex items-center w-32 text-gray-500 justify-evenly">
        <a href="">
          <Twitter />
        </a>
        <a href="">
          <Facebook />
        </a>
        <a href="">
          <LinkedIn />
        </a>
      </div>
    </div>
  );
}
