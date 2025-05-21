import Banner from "@/components/Banner";
import Clients from "@/components/Clients";
import Faq from "@/components/Faq";
import Why from "@/components/Why";
import Works from "@/components/Works";
import Image from "next/image";
import Background from "@/assets/background/Textures.webp";
import Background2 from "@/assets/background/bg-below.webp";

export default function Home() {
  return (
    <main className="relative w-screen overflow-x-hidden">
      <div className="relative z-10">
        <Banner />
       <div className="relative z-10">
       <Works />
       <Clients />
        <Image
               src={Background2}
               alt="Background"
               sizes="100%"
               fill
               className="h-full w-full absolute z-[5] inset-0 object-center object-center"
             />
       </div>
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
