"use client";

import React from "react";
import Image from "next/image";
import { NumberTicker } from "./magicui/number-ticker";
import { BlurFade } from "./magicui/blur-fade";
import Lumina from "@/assets/images/Lumina.svg";
import FdaImage from "@/assets/images/fda.svg";
import LayerBlur from '@/assets/background/layer-blur.svg'

export default function Clients() {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    // This runs only on the client
    setWidth(window.innerWidth);
  }, []);
  const nummber = width < 1100 ? 2 : 4;

  return (
    <div id="clients" className="py-20">
      <section className="container">
        <BlurFade inView>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center">
            We use proven DM methods that consistently deliver measurable
            results.
          </h3>
        </BlurFade>
      </section>
      <div className="relative overflow-hidden">
        <section className="relative z-10 container grid md:grid-cols-3 lg:gap-16 gap-8 md:gap-14 py-10">
          {Rating.map((items, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center lg:gap-16 gap-8 md:gap-14"
            >
              {idx % nummber !== 0 ? (
                <div
                  className={`h-[1.05px] md:h-32 w-full grow md:grow-0 md:w-[1.05px] bg-gradient-to-r md:bg-gradient-to-b from-primary/0 via-primary to-primary/0 from-25% via-55% to-85%`}
                />
              ) : (
                <div className="h-32 hidden w-[1.05px] bg-gradient-to-b from-primary/0 via-primary to-primary/0 from-25% via-55% to-85% " />
              )}
              <BlurFade inView delay={0.3 + idx * 0.05} className="text-center">
                <h3 className="font-semibold text-4xl lg:text-6xl text-primary">
                  {items.prefix && items.prefix}
                  <NumberTicker
                    className="text-primary"
                    value={items.number}
                    decimalPlaces={items.prefix ? 1 : 0}
                  />
                  {items.suffix && items.suffix}
                </h3>
                <p className="font-normal max-w-3xs md:text-lg">
                  {items.description}
                </p>
              </BlurFade>
            </div>
          ))}
        </section>
        <section className="container">
          <div className="grid md:grid-cols-2 gap-5">
            <BlurFade
              delay={0.2}
              inView
              className="py-3 pb-6 px-12 w-full mx-auto text-center rounded-lg text-base bg-primary/10 border border-primary text-white font-normal font-sans flex flex-col items-center justify-center"
            >
              <Image
                src={FdaImage}
                alt="Logo Icon"
                sizes="100%"
                className="h-14 w-auto"
              />
              <p className="text-sm shrink-0">7 Million Amazon Coaching Business</p>
            </BlurFade>
            <BlurFade
              delay={0.5}
              inView
              className="py-4 w-full mx-auto text-center rounded-lg text-base bg-primary/10 border border-primary text-white gap-2 font-normal font-sans flex flex-col items-center justify-center"
            >
              <Image
                src={Lumina}
                alt="Logo Icon"
                sizes="100%"
                className="h-8 w-auto"
              />
              <p className="text-sm shrink-0">Lumina | Crypto Marketing Firm</p>
            </BlurFade>
          </div>
        </section>
        <Image
          src={LayerBlur}
          alt="Logo Icon"
          sizes="100%"
          className="absolute z-0 bottom-0 opacity-75"
        /> 
      </div>
    </div>
  );
}

const Rating = [
  {
    prefix: "£",
    number: 1.8,
    suffix: "+",
    description: "Million generated in sales through DM setting",
  },
  {
    number: 100,
    suffix: "%",
    description: "Proven results INSTANTLY ",
  },
  {
    number: 30,
    suffix: "+",
    description: "Calls booked per month",
  },
];
