import { Badge } from "@mui/material";
import React, { useState } from "react";
import { ArrowForwardIosOutlined } from "@mui/icons-material";

export default function Faqs({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="flex flex-col px-5 sm:flex-row gap-10 items-center justify-between max-w-[1000px] mx-auto">
        <div className="mx-auto sm:w-1/3">
          <Badge badgeContent="FAQs" color="warning" className="pr-5" />
          <h2 className="my-6 text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            E-Website Provider Private Limited (EWPPL) is a professional Web
            Services, Mobile Apps Development, and Digital Marketing Company.
          </p>
        </div>
        <div className="sm:w-1/2">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={index === openIndex}
              toggleFaq={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const FaqItem = ({ faq, isOpen, toggleFaq }) => {
  return (
    <div data-aos="fade-left" className="p-2">
      <div className="flex justify-between cursor-pointer" onClick={toggleFaq}>
        <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
        <button className="focus:outline-none">
          <ArrowForwardIosOutlined
            className={`text-yellow-600 duration-300 transition-all transform ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>
      {isOpen && (
        <p className="mt-2 text-gray-500 faq-answer-open text-sm transition-all max-w-[400px] duration-300 opacity-100">
          {faq.answer}
        </p>
      )}
    </div>
  );
};
