"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const route = usePathname();
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="w-full z-50">
      <div className="w-full px-4 lg:px-0 xl:w-[1100px] lg:w-[900px] md:w-[740px] sm:w-[600px] h-20 mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-neutral-200 cursor-pointer flex items-center gap-[6px]">
            <img className="w-7 h-7 rotate-90" src="/logo.png" alt="chantrea" />
            Chantrea
          </h1>
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="block xl:hidden lg:hidden md:hidden py-1 px-[6px] border border-neutral-500 rounded"
        >
          <Bars3Icon className="w-7 h-7" />
        </button>

        {isOpen && (
          <div
            onClick={() => setOpen(false)}
            className="bg-black/50 fixed top-0 left-0 w-full h-full z-30"
          ></div>
        )}
        <aside
          className={`absolute block xl:hidden lg:hidden md:hidden top-0 left-0 h-screen w-[60%] transition ease-in-out duration-500 bg-[#212537] z-50 ${
            isOpen ? "left-0" : "-translate-x-full"
          }`}
        >
          <nav className="w-full">
            <Link href="/">
              <h1 className="text-2xl font-bold text-neutral-200 border-b border-neutral-500 py-4 px-3 cursor-pointer flex items-center gap-[6px]">
                <img
                  className="w-7 h-7 rotate-90"
                  src="/logo.png"
                  alt="chantrea"
                />
                Chantrea
              </h1>
            </Link>
            <ul className="flex flex-col h-9 md:hidden text-base p-3 gap-2">
              <li>
                <Link
                  className={`link ${
                    route === "/"
                      ? "flex items-center px-3 border-l-4 border-[hsl(var(--primary))] h-10 text-neutral-200 bg-[#333953]"
                      : "flex items-center px-3 border-l-4 border-[#212537] transition duration-300 hover:border-[hsl(var(--primary))] h-10 text-neutral-200"
                  }`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    route === "/service"
                      ? "flex items-center px-3 border-l-4 border-[hsl(var(--primary))] h-10 text-neutral-200 bg-[#333953]"
                      : "flex items-center px-3 border-l-4 border-[#212537] transition duration-300 hover:border-[hsl(var(--primary))] h-10 text-neutral-200"
                  }`}
                  href="/service"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    route === "/skill"
                      ? "flex items-center px-3 border-l-4 border-[hsl(var(--primary))] h-10 text-neutral-200 bg-[#333953]"
                      : "flex items-center px-3 border-l-4 border-[#212537] transition duration-300 hover:border-[hsl(var(--primary))] h-10 text-neutral-200"
                  }`}
                  href="/skill"
                >
                  Skill
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    route === "/project"
                      ? "flex items-center px-3 border-l-4 border-[hsl(var(--primary))] h-10 text-neutral-200 bg-[#333953]"
                      : "flex items-center px-3 border-l-4 border-[#212537] transition duration-300 hover:border-[hsl(var(--primary))] h-10 text-neutral-200"
                  }`}
                  href="/project"
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    route === "/about"
                      ? "flex items-center px-3 border-l-4 border-[hsl(var(--primary))] h-10 text-neutral-200 bg-[#333953]"
                      : "flex items-center px-3 border-l-4 border-[#212537] transition duration-300 hover:border-[hsl(var(--primary))] h-10 text-neutral-200"
                  }`}
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    route === "/contact"
                      ? "flex items-center px-3 border-l-4 border-[hsl(var(--primary))] h-10 text-neutral-200 bg-[#333953]"
                      : "flex items-center px-3 border-l-4 border-[#212537] transition duration-300 hover:border-[hsl(var(--primary))] h-10 text-neutral-200"
                  }`}
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="hidden xl:block lg:block md:block">
          <ul className="flex h-12 text-base items-center gap-10">
            <li>
              <Link
                className={`link ${
                  route === "/"
                    ? "flex items-center border-b-4 border-[hsl(var(--primary))] h-12 text-neutral-200"
                    : "flex items-center border-b-4 border-[#25293c] transition duration-300 hover:border-[hsl(var(--primary))] h-12 text-neutral-200"
                }`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  route === "/service"
                    ? "flex items-center border-b-4 border-[hsl(var(--primary))] h-12 text-neutral-200"
                    : "flex items-center border-b-4 border-[#25293c] transition duration-300 hover:border-[hsl(var(--primary))] h-12 text-neutral-200"
                }`}
                href="/service"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  route === "/skill"
                    ? "flex items-center border-b-4 border-[hsl(var(--primary))] h-12 text-neutral-200"
                    : "flex items-center border-b-4 border-[#25293c] transition duration-300 hover:border-[hsl(var(--primary))] h-12 text-neutral-200"
                }`}
                href="/skill"
              >
                Skill
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  route === "/project"
                    ? "flex items-center border-b-4 border-[hsl(var(--primary))] h-12 text-neutral-200"
                    : "flex items-center border-b-4 border-[#25293c] transition duration-300 hover:border-[hsl(var(--primary))] h-12 text-neutral-200"
                }`}
                href="/project"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  route === "/about"
                    ? "flex items-center border-b-4 border-[hsl(var(--primary))] h-12 text-neutral-200"
                    : "flex items-center border-b-4 border-[#25293c] transition duration-300 hover:border-[hsl(var(--primary))] h-12 text-neutral-200"
                }`}
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  route === "/contact"
                    ? "flex items-center border-b-4 border-[hsl(var(--primary))] h-12 text-neutral-200"
                    : "flex items-center border-b-4 border-[#25293c] transition duration-300 hover:border-[hsl(var(--primary))] h-12 text-neutral-200"
                }`}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
