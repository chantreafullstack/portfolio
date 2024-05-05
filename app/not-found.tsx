"use client";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen">
      <h1 className="text-[80px] font-bold">
        4<span className="text-primary">0</span>4
      </h1>
      <h1 className="text-2xl font-bold mb-6">
        <span className="text-primary">Oops!</span> Something went wrong.
      </h1>
      <Link href="/">
        <button className="px-8 text-[18px] xl:px-8 md:px-14 font-bold rounded-lg py-3 xl:py-3 md:py-5 border-2 border-[hsl(var(--primary))] mb-10 md:mb-0 xl:text-[18px] md:text-[24px]">
          Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
