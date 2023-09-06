import { Avatar } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full pt-20 pb-20 bg-gray-800 border-t">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 max-w-[1440px] px-3 ">
        <div className="flex flex-col items-start justify-center">
          <Avatar alt="EWP logo" src="/images/logo.svg" className="w-12 h-12" />
          <p className="mt-2 text-gray-300">
            Elevating Businesses through Proactive Digital Solutions. Your
            Success, Our Expertise - Unleash the Online Potential!
          </p>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-xl font-bold text-white">Navigation</h1>
          <ul className="mt-2 text-gray-300">
            <li className="mt-2 text-gray-300">Home</li>
            <li className="mt-2 text-gray-300">About</li>
            <li className="mt-2 text-gray-300">Services</li>
            <li className="mt-2 text-gray-300">Contact</li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-xl font-bold text-white">Services</h1>
          <ul className="mt-2 text-gray-300">
            <li className="mt-2 text-gray-300">Web Development</li>
            <li className="mt-2 text-gray-300">Mobile App Development</li>
            <li className="mt-2 text-gray-300">Digital Marketing</li>
            <li className="mt-2 text-gray-300">SEO</li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-xl font-bold text-white">News Letter</h1>
          <div className="flex items-center justify-center w-full mt-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-md outline-none focus:ring-2 focus:ring-amber-600 focus:bg-white focus:text-gray-700"
            />
            <button className="px-4 py-2 ml-2 text-white rounded-md bg-amber-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="flex items-center justify-center w-full mt-20 text-gray-300">
        <p className="text-sm">
          © 2023 E-Website Provider. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
