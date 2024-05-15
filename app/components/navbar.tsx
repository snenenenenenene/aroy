import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex h-24 border-b-2 border-light-secondary">
      <Image
        src="/assets/aroy-banner.png"
        alt="Aroy"
        width={200}
        height={100}
      />
    </nav>
  );
}
