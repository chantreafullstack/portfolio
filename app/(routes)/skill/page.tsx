"use client";
import SkillCard from "@/components/skill-card";

const skills = [
  {
    language: "HTML",
    percentage: 90,
  },
  {
    language: "CSS",
    percentage: 82,
  },
  {
    language: "JavaScript",
    percentage: 79,
  },
  {
    language: "Typescript",
    percentage: 88,
  },
  {
    language: "Angular",
    percentage: 92,
  },
  {
    language: "NextJs",
    percentage: 89,
  },
  {
    language: "NestJs",
    percentage: 86,
  },
  {
    language: "Spring boot",
    percentage: 86,
  },
];

const SkillPage = () => {
  return (
    <div className="w-full">
      <div className="w-full px-4 md:px-0 xl:w-[1100px] lg:w-[900px] md:w-[740px] sm:w-[600px] h-[calc(100vh-80px)] mx-auto">
        <h1 className="font-bold text-3xl text-center py-10">
          <span className="text-primary">My</span> Skills
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8 py-6 px-2 xl:px-20">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              language={skill.language}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
