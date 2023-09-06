import Image from "next/image";
import React from "react";

export default function Service({ name, description }) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="flex flex-col items-center justify-center p-4 "
    >
      <Image
        src={`/images/services/${name.split(" ").join("-").toLowerCase()}.svg`}
        alt={name.split(" ").join("-").toLowerCase()}
        width={50}
        height={50}
        className="w-1/3 h-1/3"
      />
      <h1 className="mt-4 text-xl font-bold text-gray-800">{name}</h1>
      <p className="mt-2 text-center text-gray-500 max-w-[300px]">
        {description}
      </p>
    </div>
  );
}
