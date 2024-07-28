"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function WhoIAm() {
  return (
    <section
      style={{ scrollSnapAlign: "start" }}
      data-section="who-i-am"
      id="who-i-am"
      className="bg-light-dark-green relative min-h-screen text-white w-full lg:min-h-screen flex flex-col lg:p-20"
    >
      <div className="absolute top-0 right-0 w-1/2 bg-white h-40 rounded-bl-full ">
        <Link
          href={"/#menus"}
          className="flex text-light-green justify-center items-center h-full w-full"
        >
          <h3 className="lg:text-2xl text-md font-nourd-bold uppercase">
            Bekijk Menu&apos;s
          </h3>
        </Link>
      </div>

      <motion.p
        initial={{ y: "-20%", opacity: 0 }}
        animate={{ y: 0, opacity: 1, rotate: 12 }}
        transition={{ duration: 1 }}
        className="absolute lg:bottom-20 bottom-14 left-4 lg:left-auto lg:right-10 text-light-yellow rotate-12 font-migra-extrabold text-4xl lg:text-7xl"
      >
        Aroy is back!
      </motion.p>
      <div className="flex lg:flex-row lg:pt-0 pt-10 lg:pl-0 pl-4 flex-col w-full h-full">
        <span className="lg:w-1/4 w-full lg:h-full pr-0 flex flex-col">
          <h1 className="lg:text-4xl text-xl text-light-yellow font-migra-extrabold">
            Hallo ik ben
            <br />
            <b className="lg:text-[9rem] text-6xl">Noi</b>
          </h1>
          <picture className="lg:w-[130%] w-[40%] -bottom-10 lg:bottom-20 absolute lg:relative right-0 rounded-lg shadow-lg hover:rotate-6 hover:scale-150 hover:translate-x-[100%] z-30 lg:mt-32 transition-all -rotate-6 cursor-pointer duration-200  lg:h-80 h-96 overflow-hidden flex items-start  pl-0">
            <img
              src="/assets/noi.jpg"
              alt="Noi"
              className="w-full -translate-y-1/4 object-cover filter drop-shadow-xl"
            />
          </picture>
        </span>
        <div className="flex flex-col gap-8 lg:text-xl font-nourd lg:pl-32 lg:mt-40 mt-10">
          <p>
            Welkom op mijn culinaire reis! Mijn naam is Noi en ik ben verheugd om de authentieke smaken van de Thaise keuken bij u thuis te brengen. Mijn passie voor koken begon in mijn geboortestad in Thailand, waar ik de geheimen van traditionele recepten leerde die al generaties lang worden doorgegeven.
          </p>
          <p>

            Jarenlang had ik een succesvol Thais restaurant, waar ik klanten verrukte met mijn verse, smaakvolle gerechten. Nu heb ik besloten om een nieuw avontuur aan te gaan en dezelfde heerlijke, huisgemaakte Thaise maaltijden naar uw eettafel te brengen.
          </p>
          <p>

            Mijn doel is om een gezellige en authentieke Thaise eetervaring bij u thuis te creëren. Er is niets beters dan samen met dierbaren aan tafel te genieten van een heerlijke maaltijd. Daarom breng ik de rijke en geurige smaken van Thailand direct naar uw huis, zodat u kunt genieten van een bijzondere eetervaring zonder de deur uit te hoeven.
          </p>
          <p>
            Ik kijk ernaar uit om mijn liefde voor de Thaise keuken met u te delen en samen onvergetelijke culinaire momenten te creëren.
          </p>
          <p>
            Met warme groet,
            Noi
          </p>
        </div>
      </div>
    </section>
  );
}
