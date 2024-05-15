import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{ scrollSnapAlign: "start" }}
      data-section="aroy"
      id="aroy"
      className="w-full flex flex-col min-h-screen h-screen lg:px-20 lg:py-10 relative"
    >
      {/* translate-x-1/2 */}
      <picture className="absolute flex lg:-right-1/4 lg:translate-x-0 -translate-y-[7%] lg:-translate-y-0 lg:-top-1/4 h-full -z-10  filter">
        <img
          alt="Hero background"
          src="/assets/TomKhaKai.png"
          className="w-full h-full object-contain drop-shadow-2xl z-50 lg:scale-120 scale-[85%]"
        />
      </picture>
      <span className="flex font-agrandir text-xl uppercase text-light-primary">
        <picture>
          <img className="h-40 lg:-translate-y-12" src="/assets/logo.png" />
        </picture>
        <p className="flex justify-center items-center lg:justify-start lg:items-start lg:translate-y-5 lg:-translate-x-4 font-agrandir">
          Aroy
          <br />
          Thai Homecooking
        </p>
      </span>
      <span className="flex mt-auto lg:p-0 p-10 flex-col gap-4">
        <motion.h1
          initial={{ x: "-20%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-migra text-light-black text-3xl lg:text-8xl"
        >
          Bringing Thai Flavours
          <br /> To Your Home
        </motion.h1>
        <Link
          href={"/#menus"}
          className="bg-light-yellow  outline-none text-center flex justify-center items-center uppercase w-full lg:w-[30rem] h-[3rem] underline underline-offset-2 text-2xl"
        >
          See menus
        </Link>
        <Link
          href={"/#who-i-am"}
          className="bg-light-green outline-none text-center flex justify-center items-center text-white uppercase w-full lg:w-[30rem] h-[3rem] underline underline-offset-2 text-sm"
        >
          Who I am
        </Link>
      </span>
    </section>
  );
}
