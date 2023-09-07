import React from "react";
import Services from "../components/Services";
import services from "../lib/services";

export const metadata = {
  title: "Services-EWP",
  description: " E-Website Provider Private Limited (EWP PVT. LTD.)",
};

export default function Page() {
  return (
    <div>
      <Services services={services} allServices={true} />
    </div>
  );
}
