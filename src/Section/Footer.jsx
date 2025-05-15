import { Github, Instagram, Twitter } from "../assets";

const Footer = () => {
  return (
    <footer className="sm:px-10 px-5 sm:py-12 py-6  border-t border-gray-700 bg-black/85 pb-6 pt-7 flex-wrap flex justify-between">
      <div className="flex">
        <p className="text-base text-zinc-300">&copy; 2024 Eruotor Noel.</p>
      </div>
      <div className="flex xl:gap-5 gap-2">
        <img src={Github} alt="" className="h-7" />
        <img src={Instagram} alt="" className="h-7" />
        <img src={Twitter} alt="" className="h-7" />
      </div>
    </footer>
  );
};

export default Footer;
