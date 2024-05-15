"use client";

import Link from "next/link";

export default function WhoIAm() {
  return (
    <section
      style={{ scrollSnapAlign: "start" }}
      data-section="who-i-am"
      id="who-i-am"
      className="bg-light-dark-green relative text-white w-full min-h-screen h-screen flex flex-col p-20"
    >
      <div className="absolute top-0 right-0 w-1/2 bg-white h-40 rounded-bl-full ">
        <Link
          href={"/#menus"}
          className="flex text-light-green justify-center items-center h-full w-full"
        >
          <h3 className="text-2xl font-nourd-bold uppercase">See menus</h3>
        </Link>
      </div>

      <p className="absolute bottom-20 right-10 text-light-yellow rotate-12 font-migra-extrabold text-7xl">
        Aroy is back!
      </p>
      <div className="flex w-full h-full">
        <span className="w-1/4 h-full pr-0 flex flex-col">
          <h1 className="text-5xl text-light-yellow font-migra-extrabold">
            Hello I am
            <br />
            <b className="text-[9rem]">Noi</b>
          </h1>
          <picture className="w-[130%] rounded-lg shadow-lg hover:rotate-6 hover:scale-150 hover:translate-x-[100%] z-30 mt-32 transition-all -rotate-6 cursor-pointer duration-200  h-80 overflow-hidden flex items-start  pl-0">
            <img
              src="/assets/noi.jpg"
              alt="Noi"
              className="w-full -translate-y-1/4 object-cover filter drop-shadow-xl"
            />
          </picture>
        </span>
        <div className="flex flex-col gap-8 text-3xl font-nourd pl-32 mt-40">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            doloremque distinctio, non nesciunt repellendus repellat, qui dicta
            corporis et porro asperiores illum rem voluptates! Numquam enim
            sapiente vitae assumenda qui.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            doloremque distinctio, non nesciunt repellendus repellat, qui dicta
            corporis et porro asperiores illum rem voluptates! Numquam enim
            sapiente vitae assumenda qui.
          </p>
        </div>
      </div>
    </section>
  );
}
