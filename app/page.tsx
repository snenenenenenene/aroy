import Image from "next/image";
import Menus from "./components/menus";
import Contact from "./components/contact";
import HashHandler from "./components/hash-handler";
import Hero from "./components/hero";
import WhoIAm from "./components/who-i-am";

export default function Home() {
  return (
    <>
      <Hero />
      <Menus />
      <WhoIAm />
      <Contact />
    </>
  );
}
