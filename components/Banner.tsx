import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoIcon from "@/assets/background/BG.webp";
import LayerBlur from "@/assets/background/layer-blur.svg";
import About from "./About";
import { BlurFade } from "./magicui/blur-fade";

export default function Banner() {
  return (
    <div className="relative">
      <div className="container max-w-4xl pt-40 pb-20 lg:min-h-[800px] flex items-center justify-center relative z-10">
        <section className="text-center space-y-3">
          <BlurFade inView>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-mono font-normal text-primary">
              Book More Sales Calls
            </h2>
          </BlurFade>
          <BlurFade delay={0.25} inView>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-medium">
              Make More Revenue
            </h1>
          </BlurFade>
          <BlurFade delay={0.5} inView>
            <p className="text-sm md:text-base lg:text-xl font-normal font-sans">
              We provide trained DM setters to agencies, so you can stay focused
              on what you do best — closing deals. While you're busy scaling,
              our setters are actively starting conversations, qualifying leads,
              and booking calls straight into your calendar.
            </p>
          </BlurFade>

          <div className="flex flex-col md:flex-row items-center gap-5 justify-center">
            <BlurFade delay={0.6} className="w-full md:w-fit" inView>
              <Link
                href={""}
                className="py-4 px-12 w-full md:w-fit rounded-full inline-block text-lg bg-primary text-black font-medium"
              >
                <span>Apply now</span>
              </Link>
            </BlurFade>
            <BlurFade className="w-full md:w-fit" delay={0.75} inView>
              <Link
                href={""}
                className="py-4 px-12 w-full md:w-fit rounded-full inline-block text-lg bg-primary/15 border border-primary text-primary font-medium"
              >
                <span>Learn more</span>
              </Link>
            </BlurFade>
          </div>
        </section>
      </div>
      <About />
      <Image
        src={LayerBlur}
        alt="Logo Icon"
        sizes="100%"
        className="absolute z-0 -top-[5%] -left-[15%] opacity-75"
      />
      <Image
        src={LogoIcon}
        alt="Logo Icon"
        sizes="100%"
        fill
        className="h-full w-full absolute z-[5] inset-0 object-cove object-bottom-left md:object-center-right"
      />
    </div>
  );
}
