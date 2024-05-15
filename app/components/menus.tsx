const menuData = [
  {
    title: "Menu 1",
    price: 80.0,
    items: [
      {
        title: "Tom Kha Kai",
        description: "Description 1",
      },
      {
        title: "Paneng Kai Yang",
        description: "Description 2",
      },
      {
        title: "Phad Thai Kip",
        description: "Description 3",
      },
    ],
  },
  {
    title: "Menu 2",
    price: 110.0,
    items: [
      {
        title: "Por Pia Sod",
        description: "Description 3",
      },
      {
        title: "Massaman Beef",
        description: "Description 4",
      },
      {
        title: "Miehoen Singapoor",
        description: "Description 5",
      },
    ],
  },
  {
    title: "Menu 3",
    price: 150.0,
    items: [
      {
        title: "Tom Kha Koong",
        description: "Description 5",
      },
      {
        title: "Kheam Phed Yang",
        description: "Description 6",
      },
      {
        title: "Phad Thai Scampi",
        description: "Description 7",
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
      className="w-full bg-white flex flex-col min-h-screen h-screen px-20 pt-20 relative"
    >
      <div className="absolute bottom-0 left-0 w-1/2 bg-light-dark-green h-40 rounded-tr-full " />
      <div className="flex">
        <section className="flex flex-col pr-64">
          <h2 className="font-migra-extrabold text-light-black text-7xl">
            Our favourites
          </h2>
          <ul className="list-disc">
            <li className="font-nourd-bold text-light-black text-xl uppercase">
              PHAD THAI
            </li>
            Thin rice noodle, egg, scallion, bean sprout, tofu in sweet and sour
            tamarind sauce.
            <li className="font-nourd-bold text-light-black text-xl uppercase">
              MASSAMAN CURRY
            </li>
            Beef, potato, carrot, and onion in coconut milk.
            <li className="font-nourd-bold text-light-black text-xl uppercase">
              KHEAM PHED YANG
            </li>
            Roasted duck, red curry, pineapple, cherry tomato, and basil.
          </ul>
          {/* <button className="bg-light-yellow mt-auto outline-none uppercase w-[30rem] h-[3rem] underline underline-offset-2 text-2xl">
            SEE OUR FULL MENU
          </button> */}
        </section>
        <picture className="h-96 w-1/2 relative">
          <h3 className="absolute z-10 -top-10 -right-20 rotate-[14deg] text-light-yellow font-migra-extrabold text-7xl">
            Phad Thai
          </h3>
          <img
            className="w-full h-full object-cover rounded-lg shadow-lg"
            src="/assets/pad-thai.jpg"
          />
        </picture>
      </div>
      <div className="w-full h-full grid grid-cols-3 mt-8 gap-20">
        {menuData.map((menu) => (
          <section
            className=" bg-white group rounded-xl duration-200 transition-all"
            key={menu.title}
          >
            <span className="flex justify-between">
              <h3 className=" font-migra-extrabold text-5xl ">{menu.title}</h3>
              <p className="w-fit">€ {menu.price} p/p</p>
            </span>
            <ul className="list-disc">
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
      {/* Minimum 5 max 20 people */}
      <span className="text-white text-md mt-auto z-10 flex mb-12">
        <b className=" text-light-yellow text-3xl mr-2">*</b>
        <span>
          <p>Minimum 5 max 20 people. For larger groups, please contact us.</p>
          <p>Fried rice also included.</p>
        </span>
      </span>
    </section>
  );
}
