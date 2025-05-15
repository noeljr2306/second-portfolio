import Button from "../Components/Button";

const Header = () => {
  return (
    <section className=" w-full min-h-screen mx-auto flex relative" id="home">
      <div className="absolute inset-0 xl:top-[120px] top-[190px] max-w-7xl mx-auto flex align-middle gap-5 sm:px-[100px] px-5">
        <div>
          <p className="font-base xl:text-[35px] text-[20px] text-center sm:mb-[20px] mb-[28px] text-zinc-600">
            Hi I`m <span className="text-zinc-300 noel-font">Noel</span>
            <br />
            Software developer based in Nigeria
          </p>
          <h1 className="head-text text-center">
            Building wonderful digital experiences through Technology
          </h1>
          <div className="absolute sm:bottom-[50px] bottom-[160px] left-0 right-0 w-full z-10 sm:px-10 px-5">
            <a href="#works">
              <Button
                name="See my work"
                isBeam
                containerClass="sm:w-fit w-[300px] sm:min-w-[320px] tracking-wider"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
