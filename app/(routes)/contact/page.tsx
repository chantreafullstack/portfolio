"use client";
import React from "react";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/outline";

const ContactPage = () => {
  return (
    <div className="w-full">
      <div className="w-full px-4 md:px-0 xl:w-[1100px] lg:w-[900px] md:w-[740px] sm:w-[600px] h-[calc(100vh-80px)] mx-auto">
        <h1 className="font-bold text-3xl text-center py-10">
          <span className="text-primary">Contact</span> Me
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6 py-6 px-2 lg:px-8">
          <div className="w-full xl:w-[320px] lg:w-[400px] md:w-[348px] h-[360px] border-2 border-[#212537] bg-[#212537] shadow-custom transition duration-300 hover:border-[hsl(var(--primary))] rounded-lg">
            <div className="flex h-[360px] flex-col justify-center items-center">
              <div className="flex justify-center mb-4">
                <div className="w-32 h-32 flex justify-center items-center rounded-full border-8 border-[hsl(var(--primary))]">
                  <MapPinIcon className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="font-bold text-2xl text-center mb-4">Address</h1>
              <p className="text-[18px] text-neutral-400">
                CPC, Tuek Thla, Phnom Penh
              </p>
            </div>
          </div>
          <div className="w-full xl:w-[320px] lg:w-[400px] md:w-[348px] h-[360px] border-2 border-[#212537] bg-[#212537] shadow-custom transition duration-300 hover:border-[hsl(var(--primary))] rounded-lg">
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center mb-4">
                <div className="w-32 h-32 flex justify-center items-center rounded-full border-8 border-[hsl(var(--primary))] mt-16">
                  <EnvelopeIcon className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="font-bold text-2xl text-center mb-4">Gmail</h1>
              <p className="text-[18px] text-neutral-400">
                chantreait230@gmail.com
              </p>
            </div>
          </div>
          <div className="w-full xl:w-[320px] lg:w-[400px] md:w-[348px] h-[360px] border-2 border-[#212537] bg-[#212537] shadow-custom transition duration-300 hover:border-[hsl(var(--primary))] rounded-lg">
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center mb-4">
                <div className="w-32 h-32 flex justify-center items-center rounded-full border-8 border-[hsl(var(--primary))] mt-16">
                  <PhoneArrowUpRightIcon className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="font-bold text-2xl text-center mb-4">Phone</h1>
              <p className="text-[18px] text-neutral-400">+855 60846112</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
