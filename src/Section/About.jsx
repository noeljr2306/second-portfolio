import Globe from "react-globe.gl";
import Button from "../Components/Button";
import { FiGlobe, FiMapPin, FiTable } from "react-icons/fi";
import { workflow } from "../constants";

const About = () => {
  return (
    <section className="sm:px-6 px-5 my-20" id="about">
      <h1 className="heading">About Me</h1>
      <div className="grid xl:grid-cols-4 xl:gird-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-2 xl:col-span-2">
          <div className="grid-container">
            <div className="flex flex-col mt-3">
              <div>
                <h1 className="grid-headtext">Hi I`m Noel Eruotor</h1>
                <p className="grid-subtext">
                  <br />I am a software developer with over three years of
                  experience. I have optimized my skills in the development of
                  web and mobile applications. I am also learning and adapting
                  to new technologies to improve my skill stack.
                </p>
              </div>
              <div className="flex mt-5 gap-3">
                <div className="flex gap-1 border border-zinc-800 bg-zinc-800 p-2 rounded-lg">
                  <FiMapPin className="mt-1 text-green-500" />
                  <p className="green-text-gradient">Nigeria</p>
                </div>
                <div className="flex gap-1 border p-2 rounded-lg  border-zinc-800 bg-zinc-800">
                  <FiGlobe className="mt-1 text-orange-500" />
                  <p className="orange-text-gradient">English</p>
                </div>
                <div className="flex gap-1 border p-2 rounded-lg text-nowrap  border-zinc-800 bg-zinc-800">
                  <FiTable className="mt-1 text-blue-500" />
                  <p className="blue-text-gradient">Software Dev.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 xl:col-span-1">
          <div className="w-full h-full bg-zinc-900 border-zinc-800 rounded-lg flex flex-col gap-5">
            <img
              src="src/assets/profile.jpg"
              alt="Noel Eruotor"
              className="w-full border rounded-xl border-gray-700 h-fit object-contain"
            />
          </div>
        </div>

        <div className="col-span-2 xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[350px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <h2 className="grid-headtext">
                I am based in Abuja, Nigeria and I am open to work remotely
                worldwide.
              </h2>
            </div>
            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
          </div>
        </div>

        <div className="col-span-2 xl:col-span-1">
          <div className="grid-container">
            <h2 className="grid-headtext">My work process</h2>
            <div className="flex flex-col gap-4">
              {workflow.map(({ id, name, icon }) => (
                <li
                  key={id}
                  className="list-none flex gap-1 border border-zinc-800 bg-zinc-800 p-3 rounded-lg"
                >
                  <div className="tex-3xl text-white">{icon}</div>
                  <p className="text-[#afb0b6] text-base font-generalsans">
                    {name}
                  </p>
                </li>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-2 xl:col-span-2">
          <div className="grid-container">
            <h2 className="grid-headtext">My passion for coding</h2>
            <img
              src="src/assets/grid1.png"
              alt="grid3"
              className="w-full sm:h-[200px] h-fit object-contain"
            />
            <p className="grid-subtext ">
              I love solving problems and building things through code.
              Programming isn&apos;t just my profession—it&apos;s my passion. I
              enjoy exploring new technologies, and enhancing my skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
