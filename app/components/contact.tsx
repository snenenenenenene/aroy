import Link from "next/link";

export default function Contact() {
  return (
    <section
      style={{ scrollSnapAlign: "start" }}
      data-section="contact"
      id="contact"
      className="w-full min-h-screen flex-col h-screen flex p-9 bg-light-dark-green"
    >
      <div className="flex w-full h-full bg-white rounded-3xl">
        <section className="w-full rounded-lg  text-center flex flex-col justify-center items-center">
          <h3 className="text-2xl font-nourd-bold mt-20 uppercase">
            Get in touch
          </h3>
          <a
            href="tel:+32484767586"
            className="flex items-center gap-4 mt-8 text-xl underline"
          >
            <span>+32 484 76 75 86</span>
          </a>
        </section>
        <section className="w-full text-center flex flex-col justify-center items-center">
          <picture className="">
            <img alt="Aroy logo" src="/assets/logo.png" />
          </picture>
        </section>
        <section className="w-full text-center flex flex-col justify-center items-center">
          <h3 className="text-2xl font-nourd-bold mt-20 uppercase">
            Locations
          </h3>
          <ul className="list-disc flex flex-col gap-4 mt-8 text-xl underline">
            <li>Brasschaat</li>
            <li>Schilde</li>
            <li>Kapellen</li>
            <li>Schoten</li>
          </ul>
        </section>
      </div>
      <span className="w-full flex justify-center items-center text-light-yellow font-nourd-bold">
        <p>Developed & Designed by </p>
        <Link className="ml-1 underline" href={"https://www.sennebels.xyz"}>
          Senne Bels
        </Link>
      </span>
    </section>
  );
}
