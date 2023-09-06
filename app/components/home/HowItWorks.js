import { Badge } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function HowItWorks() {
  const Content = Steps.map((step, index) => (
    <div
      data-aos="fade-in"
      className="flex flex-col items-start justify-start gap-2"
      key={index}
    >
      <div className={`flex items-center justify-center gap-4 px-3 `}>
        <p className="flex items-center justify-center w-10 h-10 text-xl font-bold text-white rounded-full bg-amber-900">
          {index + 1}
        </p>
        <h1 className="text-xl font-bold text-white">{step.title}</h1>
      </div>
      <div className="flex flex-col items-start justify-start pl-16">
        <p className="mt-2 text-gray-400">{step.description}</p>
      </div>
    </div>
  ));
  return (
    <section className="px-5 py-10 m-auto bg-gray-800">
      <div className="flex flex-col md:flex-row items-center  gap-10 justify-center w-full  max-w-[1440px] m-auto">
        <Image
          src="/images/how-it-works.png"
          alt="how it works"
          className="sm:w-1/3"
          width={500}
          height={500}
        />
        <div className="relative flex flex-col items-start justify-start sm:w-1/2 ">
          <div className="flex items-center justify-center px-2 mb-1 text-xs uppercase rounded-full text-amber-400 bg-amber-600 bg-opacity-40">
            How It Works
          </div>
          <h1 className="text-2xl font-bold text-white uppercase">
            Gain more insight into how we deliver project
          </h1>
          <div className="grid w-full grid-cols-1 gap-4 mt-10 text-gray-400 md:grid-cols-2 gap-y-10 text-md place-content-center">
            {Content}
          </div>
        </div>
      </div>
    </section>
  );
}
const Steps = [
  {
    title: "Requirements",
    description:
      "Clear communication, precise understanding. Your needs, our guarantee",
  },
  {
    title: "Solution Designing",
    description:
      "Step by step, we partner for your visualized, successful solutions",
  },
  {
    title: "Solution Building",
    description:
      "Delivering Complex tech jargon is unsettling. Stay in control with simple communication during development.",
  },
  {
    title: "Delivering",
    description:
      "In the end, we ensure timely and professional delivery of every project we undertake.",
  },
];
