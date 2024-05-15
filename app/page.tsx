"use client";
import Image from "next/image";
import Menus from "./components/menus";
import Contact from "./components/contact";
import HashHandler from "./components/hash-handler";
import Hero from "./components/hero";
import WhoIAm from "./components/who-i-am";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <>
      <AnimatePresence>
        <Hero />
        <Menus />
        <WhoIAm />
      </AnimatePresence>
      {/* <Contact /> */}
    </>
  );
}
