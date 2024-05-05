import React from "react";

interface SkillProps {
  language: string;
  percentage: number;
}

const SkillCard = ({ language, percentage }: SkillProps) => {
  return (
    <div className="w-full xl:w-[220px] h-[248px] border-2 border-[#212537] bg-[#212537] shadow-custom transition duration-300 hover:border-[hsl(var(--primary))] rounded-lg">
      <div className="flex flex-col h-[248px] justify-center items-center">
        <div className="flex justify-center items-center mb-6">
          <div className="relative size-28">
            <svg
              className="size-full"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-[hsl(var(--primary))]"
                strokeWidth="3"
              ></circle>
              <g className="origin-center -rotate-90 transform">
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-[#25293c]"
                  strokeWidth="3"
                  strokeDasharray="100"
                  strokeDashoffset={percentage}
                ></circle>
              </g>
            </svg>
            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <span className="text-center text-2xl font-bold">
                {percentage}%
              </span>
            </div>
          </div>
        </div>
        <h1 className="font-bold text-xl text-center">{language}</h1>
      </div>
    </div>
  );
};

export default SkillCard;
