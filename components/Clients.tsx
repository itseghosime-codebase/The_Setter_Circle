"use client";

import React from "react";
import IconHalf from "@/assets/background/icon-half.svg";
import Image from "next/image";
import { NumberTicker } from "./magicui/number-ticker";
import { BlurFade } from "./magicui/blur-fade";
import Logo1 from "@/assets/images/Logo 6.svg";
import Logo2 from "@/assets/images/Logo 7.svg";
import Logo3 from "@/assets/images/Logo 8.svg";
import Logo4 from "@/assets/images/Logo 9.svg";
import Logo5 from "@/assets/images/Logo 10.svg";
import LayerBlur from "@/assets/background/layer-blur-2.svg";

export default function Clients() {
  const [width, setWidth] = React.useState(0);

  const firstRow = [Logo1, Logo2, Logo3, Logo4, Logo5];

  React.useEffect(() => {
    // This runs only on the client
    setWidth(window.innerWidth);
  }, []);
  const nummber = width < 1100 ? 2 : 4;

  return (
    <div id="clients" className="pt-20">
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
        <Image
          src={IconHalf}
          alt="Icon Half"
          sizes="100%"
          fill
          className="w-full h-full object-top object-cover"
        />
        <Image
          src={LayerBlur}
          alt="Logo Icon"
          sizes="100%"
          className="absolute z-0 -top-[54%] opacity-75"
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
