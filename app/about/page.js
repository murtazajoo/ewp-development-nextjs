import Image from "next/image";
import React from "react";
import Team from "./components/Team";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";

export const metadata = {
  title: "About-EWP",
  description: " E-Website Provider Private Limited (EWP PVT. LTD.)",
};

export default function About() {
  return (
    <main>
      <div data-aos="zoom-out" className="px-5 mt-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
        <p className="font-semibold text-gray-600">
          Your All-in-One Destination for Web Services, App Development, and
          Digital Marketing Excellence
        </p>
      </div>

      <div
        data-aos="zoom-in"
        className="flex  px-5 flex-col-reverse sm:flex-row items-center justify-between leading-relaxed text-gray-800 my-10 max-w-[1200px] m-auto"
      >
        <div className="sm:w-1/2">
          <p>
            {" "}
            At E-Website Provider Private Limited (EWP PVT. LTD.), we&rsquo;re
            all about providing top-notch web services, crafting mobile apps,
            and delivering effective digital marketing solutions. With more than
            a year of dedicated experience, we&rsquo;ve been serving businesses
            of all shapes and sizes.
          </p>
          <br />
          <p>
            {" "}
            Our expertise lies in a variety of areas, such as web design and
            development, mobile app creation, boosting search engine rankings
            (SEO), engaging social media marketing (SMM), comprehensive digital
            marketing services, eye-catching web advertisements, and the
            creation of compelling content. All of these elements come together
            to help us run highly successful online marketing campaigns.
          </p>
        </div>
        <div className="flex items-center justify-center w-1/2 my-5 sm:w-1/3">
          <Image
            src="/images/hero.png"
            alt="logo of e-website-provider"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div
        data-aos="fade-in"
        className="px-5 py-10 mt-20 text-white bg-gray-800 "
      >
        <div className="max-w-[1200px] mx-auto">
          {" "}
          <h2 className="mb-5 text-3xl font-bold">Our Mission</h2>
          <p className="leading-loose text-gray-300">
            Founded in 2022, E-Website Provider Private Limited (EWP PVT. LTD.)
            has swiftly emerged as a renowned and trusted provider of top-notch
            web development services on a global scale. With a steadfast
            commitment to excellence, we have assembled a team of experienced
            and highly skilled developers who are not only experts in their
            craft but are also driven by an unwavering dedication to delivering
            high-quality solutions that consistently exceed our clients&rsquo;
            expectations. <br /> As we look to the future, our passion for
            innovation and our commitment to staying at the forefront of
            technological advancements remain stronger than ever. We are excited
            to continue our journey, working hand in hand with clients to turn
            their visions into reality and to set new standards of excellence in
            web development. Your success is our success, and at E-Website
            Provider Private Limited, we are poised to take your digital
            presence to new heights.
          </p>
        </div>
      </div>
      <CTA variant="light" />
      <Team />
      <Testimonials />
      <CTA />
    </main>
  );
}
