import EarthCanvas from "../assets/Canvas/Earth";

const Contact = () => {
  return (
    <section className="sm:px-16 px-6 sm:py-16 py-6" id="contact">
      <div className="flex xl:flex-row flex-col-reverse gap-20 overflow-hidden">
        <div className="flex-1 bg-zinc-900  border-gray-800 border p-8 rounded-2xl">
          <h1 className="heading">Contact Me</h1>
          <p className="grid-subtext">Reach out to me quickly!</p>
          <form className="mt-4 flex flex-col gap-5">
            <label className="mt-12 flex flex-col gap-3">
              <span className="text-white font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                placeholder="What is your name?"
                className="bg-zinc-800 py-4 px-6 placeholder:text-zinc-400 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="mt-4 flex flex-col gap-3">
              <span className="text-white font-medium mb-2">Your Email</span>
              <input
                type="text"
                name="email"
                placeholder="What is your email?"
                className="bg-zinc-800 py-4 px-6 placeholder:text-zinc-400 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="mt-2 flex flex-col gap-3">
              <span className="text-white font-medium mb-2">Your Message</span>
              <textarea
                type="text"
                name="name"
                placeholder="What do you want to say?"
                className="bg-zinc-800 py-4 px-6 placeholder:text-zinc-400 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button className="bg-zinc-800 py-3 px-8 mt-8 rounded-xl outline-none w-full text-white font-bold shadow-lg">
              Send
            </button>
          </form>
        </div>
        <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[450px]">
          <EarthCanvas />
        </div>
      </div>
    </section>
  );
};

export default Contact;
