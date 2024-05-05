"use client";
export default function Home() {
  const onHireClicked = () => {
    alert("This will implement in the future.");
  };
  return (
    <>
      <main className="w-full z-20">
        <div className="w-full px-4 lg:px-0 xl:w-[1100px] lg:w-[900px] md:w-[740px] sm:w-[600px] xl:h-[calc(100vh-80px)] mx-auto flex flex-col xl:flex-row justify-between gap-4 lg:gap-16 xl:gap-16">
          <div className="flex items-center w-full xl:w-[540px] order-last xl:order-first md:mb-8 xl:mb-0">
            <div className="w-full">
              <h1 className="text-[40px] xl:text-[40px] lg:text-[50px] md:text-[48px] text-center xl:text-left font-bold mb-4 xl:mb-4 lg:mb-8 md:mb-6 md:mt-0">
                Hi there, Heng Chantrea
              </h1>
              <h1 className="text-2xl xl:text-2xl lg:text-4xl md:text-4xl font-bold text-center xl:text-left mb-6 xl:mb-6 lg:mb-8 md:mb-6">
                I am a{" "}
                <span className="text-primary">Full Stack Web Developer</span>.
              </h1>
              <p className="text-[20px] xl:text-[20px] lg:text-[32px] md:text-[28px] text-center xl:text-left mb-6 xl:mb-6 lg:mb-8 md:mb-6">
                I have been working as a full-stack web developer for over 3 in
                front-end technologies Angular and Next.js, and I also work with
                back-end technologies like Spring Boot, Nest.js and databases
                like PostgreSQL.
              </p>
              <div className="w-full flex justify-center xl:block xl:justify-normal">
                <button
                  onClick={onHireClicked}
                  className="px-8 xl:px-8 md:px-14 font-bold rounded-lg py-3 xl:py-3 md:py-5 border-2 border-[hsl(var(--primary))] mb-10 md:mb-0 xl:text-[18px] md:text-[24px]"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full xl:w-[540px] xl:h-auto lg:h-[700px] h-[400px] sm:h-[600px] relative order-first xl:order-first xl:-mt-8 lg:mt-10 md:mt-8">
            <div className="z-20 w-full xl:w-[500px] lg:w-[700px] md:w-[600px] absolute">
              <img
                className="w-full h-full"
                src="/profile3.png"
                alt="heng chantrea"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
