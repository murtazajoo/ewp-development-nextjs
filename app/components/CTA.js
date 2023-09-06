import React from "react";

export default function CTA({ variant = "dark" }) {
  const isDark = variant === "dark";

  return (
    <section
      data-aos="fade-in"
      className={`p-5 ${isDark ? "bg-gray-800" : ""} border-t border-b`}
    >
      <div
        className={`flex text-center     flex-col items-center  justify-center gap-10 ${
          isDark
            ? " sm:flex-row sm:text-left sm:justify-between  "
            : "flex-col "
        }  w-full h-[300px] m-auto max-w-[1300px]`}
      >
        <div>
          <h1
            className={`text-2xl font-bold ${
              isDark ? "text-white" : "text-gray-800"
            } uppercase `}
          >
            The fastest way from idea to live site. Period.
          </h1>
          <p
            className={`mt-2 text-md ${
              isDark ? " text-gray-400" : "text-gray-500 "
            }`}
          >
            Ideas Transformed, Sites Ignited – In an Instant.
          </p>
        </div>
        <button className="btn">Get Started</button>
      </div>
    </section>
  );
}
