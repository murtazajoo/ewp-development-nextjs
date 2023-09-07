import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
export default function Hero() {
  return (
    <header className="flex items-center justify-center py-20 ">
      <div
        data-aos="zoom-in"
        className="flex flex-col-reverse sm:flex-row items-center justify-between max-w-[1300px] m-auto px-5"
      >
        <div className="flex flex-col items-start justify-start sm:w-1/2 ">
          <h1 className="text-6xl font-bold leading-tight text-gray-800 uppercase break-words">
            E-Website <br />
            <span className="text-6xl font-bold leading-tight uppercase break-words text-amber-600">
              {" "}
              Provider
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Build intelligent enterprises with speed and agility
          </p>
          <div>
            <ul className="mt-6 text-gray-600 ">
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="text-emerald-600" />
                <span>Fast</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="text-emerald-600" />
                <span>Secure</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="text-emerald-600" />
                <span>Reliable</span>
              </li>
            </ul>
          </div>
          <button className="btn">Get Started</button>
        </div>
        <div className="items-center justify-end w-1/2 sm:flex animate__animated animate__backInRight">
          <Image
            src="/images/hero.svg"
            alt="illustration"
            width={600}
            height={600}
          />
        </div>
      </div>
    </header>
  );
}
