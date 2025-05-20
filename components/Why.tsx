import { ArrowDown } from "lucide-react";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { RiPrinterFill } from "react-icons/ri";
import { BlurFade } from "./magicui/blur-fade";
import LayerBlur from "@/assets/background/layer-blur-2.svg";
import Image from "next/image";

export default function Why() {
  return (
    <div id="why" className="relative z-10">
      <div className="container relative z-10 py-20">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <section className="md:col-span-3 space-y-5">
            <BlurFade inView>
              <h3 className="text-3xl md:text-4xl font-semibold text-primary">
                Why it works
              </h3>
            </BlurFade>
            <BlurFade inView delay={0.25}>
              <p className="md:text-lg">
                Most agencies overlook the power of direct messaging, relying
                too heavily on ads, cold email, or waiting for inbound leads.
                But the truth is: your ideal clients are already on social
                media. They just need the right nudge — and that starts with a
                genuine conversation.
              </p>
            </BlurFade>
          </section>
          <section className="md:col-span-2 flex flex-col items-center justify-center gap-3 text-primary">
            <BlurFade
              delay={0.25}
              inView
              className="py-4 px-12 w-full mx-auto max-w-2xs text-center rounded-lg text-xl bg-primary/10 border border-primary text-primary gap-2 font-semibold font-mont flex items-center justify-center"
            >
              <IoMdChatbubbles className="shrink-0" />{" "}
              <h6 className="text-lg shrink-0">Real Conversations</h6>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <ArrowDown />
            </BlurFade>
            <BlurFade
              delay={0.35}
              inView
              className="py-4 px-12 w-full mx-auto max-w-2xs text-center rounded-lg text-xl bg-primary/10 border border-primary text-primary gap-2 font-semibold font-mont flex items-center justify-center"
            >
              <FaPhone className="shrink-0" />{" "}
              <h6 className="text-lg shrink-0">Qualified Calls</h6>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <ArrowDown />
            </BlurFade>
            <BlurFade
              delay={0.45}
              inView
              className="py-4 px-12 w-full mx-auto max-w-2xs text-center rounded-lg text-xl bg-primary/10 border border-primary text-primary gap-2 font-semibold font-mont flex items-center justify-center"
            >
              <RiPrinterFill className="shrink-0" />{" "}
              <h6 className="text-lg shrink-0">More Sales</h6>
            </BlurFade>
          </section>
        </div>
      </div>
      <Image
        src={LayerBlur}
        alt="Logo Icon"
        sizes="100%"
        className="absolute z-0 -bottom-[60%] -right-[25%] opacity-75"
      />
    </div>
  );
}
