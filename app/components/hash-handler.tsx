"use client";
import { useEffect } from "react";
import { useHash } from "../context/hash-context";

const HashHandler = ({ containerId }: { containerId: string }) => {
  const { setCurrentHash } = useHash();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const container = document.getElementById(containerId);

    if (!container) {
      console.error(`No container found with ID "${containerId}"`);
      return;
    }

    const handleScroll = () => {
      const sections = container.querySelectorAll("section[id]");
      let currentSectionId = "";

      sections.forEach((section: any) => {
        const sectionTop = section.offsetTop - container.scrollTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (sectionTop < container.clientHeight && sectionBottom > 0) {
          currentSectionId = section.id;
        }
      });

      if (currentSectionId) {
        const location = window.location.toString().split("#")[0];
        const newUrl = `#${currentSectionId}`;
        if (newUrl !== window.location.hash) {
          console.log("Updating URL hash to:", newUrl);
          window.history.replaceState(null, null as any, newUrl);
          setCurrentHash(newUrl); // Update the shared state
        }
      }
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [containerId, setCurrentHash]);

  return null;
};

export default HashHandler;
