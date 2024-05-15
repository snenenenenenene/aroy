"use client";
import { useCallback } from "react";
import { useHash } from "../context/hash-context";

const routes = [
  {
    title: "Aroy",
    href: "#aroy",
  },
  {
    title: "Menus",
    href: "#menus",
  },
  {
    title: "Who I am",
    href: "#who-i-am",
  },
  // {
  //   title: "Contact",
  //   href: "#contact",
  // },
];

export default function Sidebar() {
  const { currentHash, setCurrentHash } = useHash();

  const handleNavigation = useCallback(
    (e: any, hash: any) => {
      e.preventDefault();
      console.log("Navigating to:", hash);
      if (typeof window !== "undefined") {
        window.location.hash = hash;
        setCurrentHash(hash); // Update the shared state
      }
    },
    [setCurrentHash]
  );

  return (
    <aside className="fixed lg:visible invisible left-0 z-50 top-0 h-full flex">
      <ul className="w-full h-full transition-all duration-200 ease-in-out flex flex-col justify-center items-start pt-10 gap-2 pl-2">
        {routes.map((route) => (
          <li key={route.title}>
            <a
              onClick={(e) => handleNavigation(e, route.href)}
              href={route.href}
              className={`${
                currentHash === route.href ? "opacity-100" : "opacity-80"
              } hover:opacity-100 transition-all bg-blend-multiply font-migra-extrabold duration-200 ease-in-out flex gap-2 justify-start items-start text-sm uppercase`}
            >
              <div
                className={`${
                  currentHash === route.href ? "h-6 px-2" : "w-4 h-4"
                } bg-light-yellow text-light-primary transition-all duration-200 flex justify-center items-center ease-in-out rounded-full`}
              >
                <p
                  className={`${
                    currentHash === route.href ? "flex" : "hidden"
                  }`}
                >
                  {route.title}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
