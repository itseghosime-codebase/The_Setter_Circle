'use client'
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";
import IconHalf from "@/assets/background/icon-half.svg";
import { BlurFade } from "./magicui/blur-fade";
import { InlineWidget } from "react-calendly";

export default function Faq() {
  return (
    <div id="faq" className="py-10 relative z-20">
      <div className="container">
        <BlurFade inView>
          <h4 className="text-center text-2xl md:text-3xl font-semibold text-primary pb-5">
            Frequently Asked Question
          </h4>
        </BlurFade>
        <section className="pb-10">
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto space-y-2"
          >
            {FaQuestions.map((items, index) => (
              <AccordionItem
                key={index}
                value={"item-" + index}
                className="bg-white/[1%] border border-white/5 px-5 rounded-md"
              >
                <AccordionTrigger className="md:text-lg font-normal">
                  {items.heading}
                </AccordionTrigger>
                <AccordionContent>{items.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <section id="bookings" className="my-10 bg-[#0B0B0B] py-14 px-6 md:px-14 rounded-2xl relative overflow-hidden">
          <div className="grid md:grid-cols-2 items-center gap-5  relative z-20 ">
            <div className="max-w-md space-y-2">
              <BlurFade inView delay={0.25}>
                <h4 className="text-2xl md:text-3xl font-semibold text-primary">
                  Ready to Plug DM Setters Into Your Business?
                </h4>
              </BlurFade>
              <BlurFade inView delay={0.5}>
                {" "}
                <p className="text-sm md:text-lg">
                  Let’s fill your calendar and your pipeline — without the
                  headaches.
                </p>
              </BlurFade>

              <BlurFade inView delay={0.75}>
                <Link
                  href={"#bookings"}
                  className="py-4 px-12 rounded-full inline-block text-sm bg-primary text-black font-medium"
                >
                  <span>Book a free call</span>
                </Link>
              </BlurFade>
            </div>
            <div className="rounded-lg max-h-[550px] bg-[#0E0E0E] overflow-hidden">
              <InlineWidget
                url="https://calendly.com/josh-thesettercircle"
                pageSettings={{
                  backgroundColor: "#0E0E0E",
                  textColor: "#ffffff",
                  primaryColor: "#FB7F73",
                  hideEventTypeDetails: true,
                }}
              />
            </div>
          </div>
          <Image
            src={IconHalf}
            alt="Icon Half"
            sizes="100%"
            className="w-full h-full object-top object-cover absolute z-0 -right-1/4 top-0"
          />
        </section>
      </div>
    </div>
  );
}

const FaQuestions = [
  {
    heading: "What exactly do your DM setters do?",
    description:
      "Our trained DM setters engage with your leads through direct messages (Instagram, Facebook, LinkedIn, etc.), spark real conversations, qualify prospects, and book them directly into your calendar for sales calls. They handle all the back-and-forth so you can focus on closing.",
  },
  {
    heading: "Who trains your setters?",
    description:
      "All our setters go through a proven training program led by experts in high-ticket sales and conversational marketing. They're taught to understand buyer psychology, objection handling, tonality, and how to represent your offer with clarity and confidence.",
  },
  {
    heading: "Will the setters sound like me or my brand?",
    description:
      "Yes. Before we begin, we work closely with you to understand your brand voice, target audience, and offer. We then create custom scripts and messaging frameworks to ensure every message feels authentic and aligned with your tone.",
  },
  {
    heading: "What platforms do you operate on?",
    description:
      "We currently support DM outreach on Instagram, Facebook, and LinkedIn. If you're active on multiple platforms, we’ll help you prioritize based on where your ideal clients are most engaged.",
  },
];
