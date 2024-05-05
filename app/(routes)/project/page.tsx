"use client"
import React from "react";

const ProjectPage = () => {
  return (
    <div className="w-full">
      <div className="w-full px-4 md:px-0 xl:w-[1100px] lg:w-[900px] md:w-[740px] sm:w-[600px] h-[calc(100vh-80px)] mx-auto">
        <h1 className="font-bold text-3xl text-center py-10">
          <span className="text-primary">My</span> Projects
        </h1>
        <div className="block sm:flex sm:justify-center gap-4 sm:gap-8 py-6">
          <div className="w-full sm:w-[320px] h-[360px] mb-4 sm:mb-0 border-2 border-[#212537] bg-[#212537] shadow-custom transition duration-300 hover:border-[hsl(var(--primary))] rounded-lg">
            <div className="flex flex-col h-[360px] justify-center items-center">
              <div className="flex justify-center items-center mb-8">
                <div className="w-40 h-40 flex justify-center items-center rounded-full border-8 border-[hsl(var(--primary))]">
                  <img
                    className="w-full p-11 object-cover"
                    src="./surcode.png"
                    alt=""
                  />
                </div>
              </div>
              <h1 className="font-bold text-3xl text-center">Sur Code</h1>
            </div>
          </div>
          <div className="w-full sm:w-[320px] h-[360px] border-2 border-[#212537] bg-[#212537] shadow-custom transition duration-300 hover:border-[hsl(var(--primary))] rounded-lg">
            <div className="flex flex-col h-[360px] justify-center items-center">
              <div className="flex justify-center items-center mb-8">
                <div className="w-40 h-40 flex justify-center items-center rounded-full border-8 border-[hsl(var(--primary))]">
                  <img
                    className="w-full p-4 object-cover"
                    src="./jobroom.png"
                    alt=""
                  />
                </div>
              </div>
              <h1 className="font-bold text-3xl text-center">Job Room</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
