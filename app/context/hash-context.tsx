"use client";
import { createContext, useContext, useState } from "react";

const HashContext = createContext(
  {} as {
    currentHash: string;
    setCurrentHash: (hash: string) => void;
  }
);

export const HashProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentHash, setCurrentHash] = useState("");

  return (
    <HashContext.Provider value={{ currentHash, setCurrentHash }}>
      {children}
    </HashContext.Provider>
  );
};

export const useHash = () => useContext(HashContext);
