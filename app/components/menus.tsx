import { motion } from "framer-motion";

const menuData = [
  {
    title: "Menu 1",
    price: 80.0,
    items: [
      {
        title: "Tom Kha Kai",
        description: "Beschrijving 1",
      },
      {
        title: "Paneng Kai Yang",
        description: "Beschrijving 2",
      },
      {
        title: "Phad Thai Kip",
        description: "Beschrijving 3",
      },
    ],
  },
  {
    title: "Menu 2",
    price: 110.0,
    items: [
      {
        title: "Por Pia Sod",
        description: "Beschrijving 3",
      },
      {
        title: "Massaman Rundvlees",
        description: "Beschrijving 4",
      },
      {
        title: "Miehoen Singapore",
        description: "Beschrijving 5",
      },
    ],
  },
  {
    title: "Menu 3",
    price: 150.0,
    items: [
      {
        title: "Tom Kha Koong",
        description: "Beschrijving 5",
      },
      {
        title: "Kheam Phed Yang",
        description: "Beschrijving 6",
      },
      {
        title: "Phad Thai Scampi",
        description: "Beschrijving 7",
      },
    ],
  },
];

export default function Menus() {
  return (
    <section
      style={{ scrollSnapAlign: "start" }}
      data-section="menus"
      id="menus"
      className="w-full bg-white px-4 lg:pb-0 pb-20 flex flex-col h-auto lg:min-h-screen lg:h-screen lg:px-20 pt-20 relative"
    >
      <div className="absolute bottom-0 left-0 w-1/2 bg-light-dark-green lg:h-40 h-20 mt-auto rounded-tr-full" />

      <div className="flex lg:flex-row flex-col">
        <section className="flex flex-col lg:pr-64">
          <motion.h2
            initial={{ x: "-20%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-migra-extrabold text-light-black text-7xl"
          >
            Onze favorieten
          </motion.h2>
          <ul className="list-disc list-inside">
            <li className="font-nourd-bold text-light-black text-xl uppercase">
              PHAD THAI
            </li>
            Dunne rijstnoedels, ei, bosui, taugé, tofu in zoetzure tamarindesaus.
            <li className="font-nourd-bold text-light-black text-xl uppercase">
              MASSAMAN CURRY
            </li>
            Rundvlees, aardappel, wortel en ui in kokosmelk.
            <li className="font-nourd-bold text-light-black text-xl uppercase">
              KHEAM PHED YANG
            </li>
            Geroosterde eend, rode curry, ananas, cherrytomaat en basilicum.
          </ul>
          {/* <button className="bg-light-yellow mt-auto outline-none uppercase w-[30rem] h-[3rem] underline underline-offset-2 text-2xl">
            SEE OUR FULL MENU
          </button> */}
        </section>
        <picture className="h-96 hidden lg:flex lg:w-1/2 w-full relative">
          <h3 className="absolute drop-shadow-[5px_0px_0_#3A5527] z-10 -top-10 -right-20 rotate-[14deg] text-light-yellow font-migra-extrabold text-7xl">
            Phad Thai
          </h3>
          <img
            className="w-full h-full drop-shadow-[15px_15px_0_#88734E] object-cover rounded-lg shadow-lg"
            src="/assets/pad-thai.jpg"
          />
        </picture>
      </div>
      <div className="w-full h-full grid lg:grid-cols-3 grid-cols-1 mt-8 gap-20">
        {menuData.map((menu) => (
          <section
            className=" bg-white group rounded-xl duration-200 transition-all"
            key={menu.title}
          >
            <span className="flex justify-between">
              <h3 className=" font-migra-extrabold text-5xl ">{menu.title}</h3>
              <p className="w-fit">€ {menu.price} p/p</p>
            </span>
            <ul className="list-disc list-inside">
              {menu.items.map((item) => (
                <li
                  key={item.title}
                  className="font-nourd-bold  uppercase text-light-black text-xl"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Minimaal 5 maximaal 20 personen */}
      <span className="lg:text-white  lg:p-0 text-light-primary text-md mt-auto z-10 flex flex-col lg:flex-row mb-12 relative">
        <b className=" text-light-yellow text-xl mr-1">*</b>
        <span>
          <p>min. 5 max. 20 personen. Voor grotere groepen, neem contact met ons op.</p>
          <p>Gebakken rijst is ook inbegrepen.</p>
        </span>
        <div className="flex flex-col gap-1 lg:ml-auto">
          <a
            href="tel:+32484767586"
            className="bg-light-yellow hover:opacity-90 hover:scale-x-105 transition-all duration-200 text-light-primary flex justify-center items-center  outline-none uppercase w-full lg:w-[30rem] h-[3rem] underline underline-offset-2 text-2xl"
          >
            Bestel nu
          </a>
          <p className="text-lg flex justify-center items-center font-nourd-bold text-light-primary">
            of bel +32 484 76 75 86
          </p>
        </div>
      </span>
      {/* <section className="w-1/2 h-[20rem] bg-light-dark-green rounded-tr-full flex" /> */}
    </section>
  );
}
