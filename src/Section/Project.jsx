import { Github } from "../assets";
import { Projects } from "../constants";

const Project = () => {
  return (
    <section className="sm:px-14 px-7 sm:py-20 py-10" id="projects">
      <h1 className="heading">My Selected Projects</h1>
      <p className="mt-3 text-zinc-400 text-[17px] max-w-3xl leading-[30px]">
        I have applied my knowledge and creativity to deliver innovative
        solutions that drive results. These are my recent projects showcasing my
        skills and expertise. Each project is briefly described with links to
        code repositories and live demos.
      </p>
      <div className="mt-20 flex flex-wrap gap-7">
        {Projects.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-800 shadow-inner shadow-zinc-400/40 p-5 rounded-2xl sm:w-[360px] w-full"
          >
            <div className="relative w-full h-[230px]">
              <img
                src={item.image}
                alt="project"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 flex justify-end m-3">
                <div
                  className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black"
                  onClick={() => window.SVGStopElement(item.href)}
                >
                  <img
                    src={Github}
                    alt=""
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-between flex-col">
              <h3 className="font-bold xl:text-2xl md:text-xl text-base">
                {item.name}
              </h3>
              <p className="grid-subtext">{item.description}</p>
            </div>
            <div className="flex items-center justify-between gap-10 mt-7 mb-3">
              <div className="flex items-center">
                {item.tags.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-zinc-700 rounded-full bg-black xl:w-9 xl:h-9 w-8 h-8 flex justify-center items-center"
                  >
                    <img src={icon} alt="" className="p-2" />
                  </div>
                ))}
              </div>
              <div className="flex">
                <a href={item.href} className="xl:text-[15px] md:text-s text-sm text-gray-300 hover:text-white">Live Site</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Project;
