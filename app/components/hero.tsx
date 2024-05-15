import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{ scrollSnapAlign: "start" }}
      data-section="aroy"
      id="aroy"
      className="w-full flex justify-between flex-col min-h-screen h-screen px-40 py-10 relative"
    >
      <picture className="absolute flex left-0 top-0 w-full h-full scale-[130%] -z-10 filter brightness-50 ">
        <img
          alt="Hero background"
          src="/assets/hero-background.webp"
          className="w-full h-full object-cover"
        />
      </picture>
      {/* <picture className="h-40 w-96 object-cover flex justify-start items-start">
        <img
          alt="Aroy banner"
          className="
		  object-contain
		  w-full
		  h-full
		  filter
		"
          src="/assets/aroy-banner.png"
        />
      </picture> */}
      <span className="flex font-agrandir text-xl uppercase text-white">
        <picture>
          <img className="h-40 -translate-y-12" src="/assets/logo.png" />
        </picture>
        <p className="translate-y-5 -translate-x-4 font-agrandir">
          Aroy Homecooking
        </p>
      </span>
      <span className="flex flex-col gap-4">
        <h1 className="font-migra text-light-yellow text-9xl">
          Let us be part of your
          <br /> favourite meal
        </h1>
        <Link
          href={"/#menus"}
          className="bg-light-yellow outline-none text-center flex justify-center items-center uppercase w-[30rem] h-[3rem] underline underline-offset-2 text-2xl"
        >
          See menus
        </Link>
        <Link
          href={"/#who-i-am"}
          className="bg-light-green outline-none text-center flex justify-center items-center text-white uppercase w-[30rem] h-[3rem] underline underline-offset-2 text-sm"
        >
          Who I am
        </Link>
      </span>
    </section>
  );
}
