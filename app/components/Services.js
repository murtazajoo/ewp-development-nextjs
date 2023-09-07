import { ArrowForwardIos } from "@mui/icons-material";
import { Badge, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Services({ services, allServices = false }) {
  const Content = services.map((service) => (
    <Service
      key={service.service}
      name={service.service}
      allServices={allServices}
      description={service.description}
    />
  ));
  return (
    <section className="px-5 py-20 text-center bg-pattern-light">
      <div className="text-center">
        <Badge badgeContent="Services" color="warning" />
        <h2
          data-aos="zoom-out"
          className="my-2 text-4xl font-bold leading-tight text-center text-gray-800 uppercase break-words"
        >
          We Provide Better Service for Your Business
        </h2>
        <p className="mt-4 text-sm text-gray-500 max-w-[700px]  m-auto">
          Empowering Success: From Web Development to Digital Marketing and
          Beyond. Join us in Realizing Your Vision with Innovation and
          Commitment to Excellence
        </p>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2
          md:grid-cols-3  gap-4 mt-10 max-w-[1300px] m-auto my-2"
      >
        {Content}
      </div>
      {!allServices && (
        <Link href="/services">
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIos />}
            color="warning"
            size="large"
          >
            All Services
          </Button>
        </Link>
      )}
    </section>
  );
}

const Service = ({ name, description, allServices }) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="flex flex-col items-center justify-center p-4 "
    >
      {!allServices && (
        <Image
          src={`/images/services/${name
            .split(" ")
            .join("-")
            .toLowerCase()}.svg`}
          alt={name.split(" ").join("-").toLowerCase()}
          width={50}
          height={50}
          className="w-1/3 h-1/3"
        />
      )}

      <h1 className="mt-4 text-xl font-bold text-gray-800">{name}</h1>
      <p className="mt-2 text-center text-gray-500 max-w-[300px]">
        {description}
      </p>

      <Link
        href={`services/${name.split(" ").join("-").toLowerCase()}`}
        className="px-4 py-2 mt-4 text-sm font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
      >
        Learn More&nbsp; &rarr;
      </Link>
    </div>
  );
};
