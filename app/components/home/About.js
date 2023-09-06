import { Badge } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

export default function About() {
  return (
    <section className="px-5 py-5 bg-gray-800 ">
      <div className="flex flex-col items-center justify-center gap-20 py-5 sm:flex-row ">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          className="flex items-center justify-around sm:w-1/4"
        >
          <Image
            src="/images/home-about.png"
            alt="illustration"
            width={700}
            height={700}
          />
        </div>
        <div
          data-aos="fade-in"
          data-aos-duration="1300"
          className="flex flex-col items-start justify-start sm:w-1/2 "
        >
          <Badge className="block pr-5" badgeContent="About" color="warning" />
          <br />
          <h1 className="text-4xl font-bold text-white uppercase break-words ">
            Who are We?
          </h1>
          <p className="mt-4 text-gray-400 text-md">
            E-Website Provider Private Limited (EWPPL) is a professional Web
            Services ,Mobile Apps Development and Digital Marketing Company.
          </p>
          <p className="mt-4 text-gray-400 text-md">
            We are providing proactive IT and Digital Marketing Solutions for
            more than 1 years to Small-To-high Sized Businesses.
          </p>
          <p className="mt-4 text-gray-400 text-md">
            We are providing proactive IT and Digital Marketing Solutions for
            more than 1 years to Small-To-high Sized Businesses.
          </p>
          <Link href="/about" className="btn">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
