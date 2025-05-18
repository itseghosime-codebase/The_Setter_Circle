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

export default function Faq() {
  return (
    <div id="faq" className="py-10">
      <div className="container">
        <h4 className="text-center text-2xl md:text-3xl font-semibold text-primary pb-5">
          Frequently Asked Question
        </h4>
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
        <section className="my-10 bg-[#0B0B0B] py-14 px-6 md:px-14 rounded-2xl relative overflow-hidden">
          <div className="max-w-md space-y-2">
            <h4 className="text-2xl md:text-3xl font-semibold text-primary">Ready to Plug DM Setters Into Your Business?</h4>
            <p className="text-sm md:text-lg">
              Let’s fill your calendar and your pipeline — without the
              headaches.
            </p>
            <Link
              href={""}
              className="py-4 px-12 rounded-full inline-block text-sm bg-primary text-black font-medium"
            >
              <span>Book a free call</span>
            </Link>
          </div>
          <Image
          src={IconHalf}
          alt="Icon Half"
          sizes="100%"
          className="w-full h-full object-top object-cover absolute -right-1/4 top-0"
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
      " Yes. It comes with default styles that matches the other components&apos; aesthetic.",
  },
  {
    heading: "What exactly do your DM setters do?",
    description:
      " Yes. It comes with default styles that matches the other components&apos; aesthetic.",
  },
  {
    heading: "What exactly do your DM setters do?",
    description:
      " Yes. It comes with default styles that matches the other components&apos; aesthetic.",
  },
  {
    heading: "What exactly do your DM setters do?",
    description:
      " Yes. It comes with default styles that matches the other components&apos; aesthetic.",
  },
];
