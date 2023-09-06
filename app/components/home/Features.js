import { Badge } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Features() {
  const Content = features.map((feature) => (
    <div
      key={feature.title}
      data-aos="zoom-in"
      className="flex flex-col items-center justify-center p-4 "
    >
      <h1 className="text-xl font-bold text-gray-800">{feature.title}</h1>
      <p className="mt-2 text-center text-gray-500 max-w-[300px]">
        {feature.description}
      </p>
    </div>
  ));
  return (
    <section className="py-20 text-center bg-white bg-pattern-light ">
      <div className="text-center">
        <Badge badgeContent="FEATURES" color="warning" />
        <h2 className="my-2 text-4xl font-bold leading-tight text-center text-gray-800 uppercase break-words">
          Your success is our focus
        </h2>
        <p className="mt-4 text-sm text-gray-500 max-w-[700px]  m-auto">
          Partner with our skilled Indian web developers for rapid project
          delivery. From small business websites to complex apps, we harness
          latest tech to fuel your business growth
        </p>
      </div>
      <Image
        src="/images/features.png"
        alt="illustration"
        className="m-auto"
        width={500}
        height={500}
      />
      <div
        className="grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3  gap-4 mt-10 max-w-[1300px] m-auto my-2"
      >
        {Content}
      </div>
    </section>
  );
}

const features = [
  {
    title: "SEAMLESS FUNCTIONALITY",
    description:
      "Stay connected with your team and make quick decisions wherever you are.",
  },
  {
    title: "EASY TO MANAGE",
    description:
      "Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.",
  },
  {
    title: "STAND OUT",
    description:
      "Our calendar lets you know what is happening with customers and projects.",
  },
];
