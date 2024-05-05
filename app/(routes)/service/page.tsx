import {
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const ServicePage = () => {
  return (
    <div className="w-full">
      <div className="w-full px-4 md:px-0 xl:w-[1100px] lg:w-[900px] md:w-[740px] sm:w-[600px] h-[calc(100vh-80px)] mx-auto">
        <h1 className="font-bold text-3xl text-center py-10">
          <span className="text-primary">My</span> Services
        </h1>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 xl:grid-cols-3 gap-6 py-6 px-2 md:px-8">
          <div className="w-[300px] sm:w-[320px] h-[300px] sm:h-[360px] border-2 border-[#212537] bg-[#212537] shadow-custom transition duration-300 hover:border-[hsl(var(--primary))] rounded-lg">
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 sm:w-40 sm:h-40 flex justify-center items-center rounded-full border-8 border-[hsl(var(--primary))] mt-16">
                  <WrenchScrewdriverIcon className="h-16 w-16 sm:w-20 sm:h-20 text-white" />
                </div>
              </div>
              <h1 className="font-bold text-2xl text-center">UX/UI Design</h1>
            </div>
          </div>
          <div className="w-[300px] sm:w-[320px] h-[300px] sm:h-[360px] border-2 border-[#212537] bg-[#212537] shadow-custom transition duration-300 hover:border-[hsl(var(--primary))] rounded-lg">
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 sm:w-40 sm:h-40 flex justify-center items-center rounded-full border-8 border-[hsl(var(--primary))] mt-16">
                  <ComputerDesktopIcon className="h-16 w-16 sm:w-20 sm:h-20 text-white" />
                </div>
              </div>
              <h1 className="font-bold text-2xl text-center">Web Design</h1>
            </div>
          </div>
          <div className="w-[300px] sm:w-[320px] h-[300px] sm:h-[360px] border-2 border-[#212537] bg-[#212537] shadow-custom transition duration-300 hover:border-[hsl(var(--primary))] rounded-lg">
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 sm:w-40 sm:h-40 flex justify-center items-center rounded-full border-8 border-[hsl(var(--primary))] mt-16">
                  <CodeBracketIcon className="h-16 w-16 sm:w-20 sm:h-20 text-white" />
                </div>
              </div>
              <h1 className="font-bold text-2xl text-center">
                Web Development
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
