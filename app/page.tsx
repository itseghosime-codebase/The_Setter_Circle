import Banner from "@/components/Banner";
import Clients from "@/components/Clients";
import Faq from "@/components/Faq";
import Why from "@/components/Why";
import Works from "@/components/Works";
import Image from "next/image";
import Background from "@/assets/background/Textures.webp";

export default function Home() {
  return (
    <main className="relative">
      <div className="relative z-10">
        <Banner />
        <Works />
        <Clients />
        <div className="bg-[#040404]">
          <Why />
        <Faq />
        </div>
      </div>
      <Image
        sizes="100%"
        fill
        alt="Background Texture"
        src={Background}
        className="h-full w-full object-cover object-center absolute z-0 opacity-[3%] mix-blend-color-dodge"
      />
    </main>
  );
}
