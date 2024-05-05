"use client";

const AboutPage = () => {
  const onDownloadCVClicked = () => {
    alert("This will implement in the future.");
  };
  return (
    <div className="w-full">
      <div className="w-full px-4 md:px-0 xl:w-[1100px] lg:w-[900px] md:w-[740px] sm:w-[600px] h-[calc(100vh-80px)] mx-auto">
        <h1 className="font-bold text-3xl text-center py-10">
          <span className="text-primary">About</span> Me
        </h1>
        <div className="block md:flex xl:justify-between gap-2 sm:gap-7 lg:gap-10 py-6 px-2 sm:px-8 xl:px-40">
          <div className="w-full xl:w-[340px] h-[440px] sm:h-[440px] xl:h-[440px] bg-[hsl(var(--primary))] rounded relative">
            <div className="w-full xl:w-[340px] h-[440px] sm:h-[440px] xl:h-[440px] rounded absolute -top-3 -left-3 xl:-top-4 sm:-top-4 sm:-left-4 xl:-left-4">
              <img
                className="overflow-hidden w-full h-full rounded object-cover"
                src="./about.jpg"
                alt="about me"
              />
            </div>
          </div>
          <div className="w-full xl:w-[360px] h-[440px] flex items-center">
            <div className="w-full">
              <h1 className="font-bold text-3xl mb-8 text-center sm:text-left">
                Heng Chantrea
              </h1>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-[hsl(var(--primary))]"></div>
                  <div className="flex justify-between">
                    <h1 className="w-32 font-bold text-[18px]">Career :</h1>
                    <h1 className="font-bold text-[18px] text-primary">
                      Software Engineer
                    </h1>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-[hsl(var(--primary))]"></div>
                  <div className="flex justify-between">
                    <h1 className="w-32 font-bold text-[18px]">Experience :</h1>
                    <h1 className="font-bold text-[18px] text-primary">
                      3 Years
                    </h1>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-[hsl(var(--primary))]"></div>
                  <div className="flex justify-between">
                    <h1 className="w-32 font-bold text-[18px]">University :</h1>
                    <h1 className="font-bold text-[18px] text-primary">RUPP</h1>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-[hsl(var(--primary))]"></div>
                  <div className="flex justify-between">
                    <h1 className="w-32 font-bold text-[18px]">Education :</h1>
                    <h1 className="font-bold text-[18px] text-primary">
                      Bachelor degree
                    </h1>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-[hsl(var(--primary))]"></div>
                  <div className="flex justify-between">
                    <h1 className="w-32 font-bold text-[18px]">Location :</h1>
                    <h1 className="font-bold text-[18px] text-primary">
                      Phnom Penh
                    </h1>
                  </div>
                </li>
              </ul>
              <div className="w-full flex justify-center sm:justify-start">
                <button
                  onClick={onDownloadCVClicked}
                  className="px-8 font-bold rounded-lg py-3 border-2 border-[hsl(var(--primary))]"
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
