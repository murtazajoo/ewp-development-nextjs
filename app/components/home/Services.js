import { ArrowForwardIos } from "@mui/icons-material";
import { Badge, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import Service from "./Service";

export default function Services() {
  const Content = services.map((service) => (
    <Service
      key={service.service}
      name={service.service}
      description={service.description}
    />
  ));
  return (
    <section className="py-20 text-center bg-white bg-pattern-light ">
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
    </section>
  );
}

const services = [
  {
    service: "Web Development",
    description:
      "Transforming Ideas into Engaging Online Experiences with Expert Web Development Services.",
  },
  {
    service: "App Development",
    description:
      "Bringing Ideas to Life Through App Development: Your Vision, Our Expertise in Action",
  },
  {
    service: "Digital Marketing",
    description:
      "Fueling Success Through Digital Marketing: Tailored Strategies for Your Brand's Growth.",
  },
  {
    service: "Logo Designing",
    description:
      "Shaping Identities Creatively: Expert Logo Design Services for a Lasting Impression.",
  },
  {
    service: "Web Design",
    description:
      "Unveiling Your Unique Identity: Expert Web Design Bringing Your Online Vision to Life.",
  },
  {
    service: "Website Maintenance",
    description: "Comprehensive Website Maintenance for Seamless Performance",
  },
];
