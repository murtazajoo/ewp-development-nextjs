import React from "react";
import TeamMember from "./TeamMember";

export default function Team() {
  return (
    <div className="py-20 bg-pattern-dark">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="mx-auto mb-2 text-4xl font-bold text-center text-white">
          Our team is the best in the business.
        </h2>
        <p className="text-center text-gray-300">
          Highly professional and capable of running your business across all
          digital channels.
        </p>

        <div className="grid items-center content-center grid-cols-1 gap-10 mx-auto my-10 gap-y-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
          {teamMembers.map((person) => (
            <TeamMember key={person.name} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
}

const teamMembers = [
  {
    name: "Pradeep Kumar",
    post: "CEO & Founder",
  },
  {
    name: "Minhaj Alam",
    post: "CFO & CO-Founder",
  },
  {
    name: "Asif Ullah",
    post: "Director & CO-Founder",
  },
  {
    name: "Roshan Kumar Jha",
    post: "Architect",
  },
  {
    name: "Pooja Pandey",
    post: "Frontend Manager",
  },
  {
    name: "Prince Mishra",
    post: "Chief Operating Officer",
  },
  {
    name: "Deepak Kumar",
    post: "Senior Advisor",
  },
  {
    name: "Vivek Kumar",
    post: "Service Provider",
  },
  {
    name: "Dinanath Kumar",
    post: "Service Provider",
  },
];
