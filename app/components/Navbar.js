"use client";
import { Avatar, Menu } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    if (window.innerWidth > 600) {
      setOpen(false);
    } else {
      setOpen(!open);
    }
  };
  const pathName = usePathname();
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
    }
  }, [open]);

  const NavLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="flex items-center  justify-between px-3 py-2 max-w-[1440px] m-auto">
      <div className="w-1/3">
        <Avatar alt="EWP logo" src="/images/logo.svg" />
      </div>

      <ul
        className={` transform absolute sm:relative top-0 right-0 z-50 flex flex-col sm:flex-row items-end justify-start h-full px-10 pt-32 sm:pt-0  text-xl sm:text-sm text-white sm:text-black bg-gray-800 sm:bg-white w-72 sm:w-1/3 gap-y-10 duration-300 transition-all sm:translate-x-0 sm:flex sm:items-center sm:justify-around gap-4 ${
          open ? " translate-x-0 " : "translate-x-full  "
        } `}
      >
        <li className="absolute top-5 right-5 sm:hidden">
          <CancelIcon onClick={toggleOpen} className="sm:hidden" />
        </li>
        {NavLinks.map((link) => {
          const isActive = pathName === link.path;
          return (
            <li key={link.title}>
              <Link
                onClick={toggleOpen}
                className={`${isActive && "active"} px-2 py-1 rounded-full`}
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden">
        <MenuIcon onClick={toggleOpen} className="sm:hidden" />
      </div>
      <div className="items-center justify-end hidden w-1/3 gap-3 sm:flex ">
        <Link href={"/login"} className="underline">
          Login
        </Link>
        <Link
          href={"/signup"}
          className="p-1 px-4 text-white rounded-lg bg-amber-700"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
