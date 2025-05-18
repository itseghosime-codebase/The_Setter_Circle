import React from "react";
import { BlurFade } from "./magicui/blur-fade";

export default function Works() {
  return (
    <div id="works">
      <div className="container text-center py-14">
        <BlurFade inView>
          <h3 className="text-3xl md:text-5xl font-semibold underline decoration-primary decoration-1 underline-offset-[16px]">
            How it works
          </h3>
        </BlurFade>
        <section className="grid lg:grid-cols-2 items-center justify-center gap-8 mt-14">
          {HowItWorks.map((items, index) => (
            <BlurFade
              inView
              delay={0.25 + index * 0.05}
              key={index}
              className={`border ${
                HowItWorks.length - 1 === index
                  ? " last:lg:col-span-2 last:justify-self-center"
                  : ""
              } rounded-3xl border-primary max-w-lg h-full`}
            >
              <div className="space-y-2 bg-gradient-to-r via-primary/15 py-10 px-5 h-full relative z-10">
                <div className="bg-primary rounded-full flex items-center justify-center mx-auto font-mono h-11 w-11 text-xl font-semibold text-black ">
                  {index + 1}
                </div>
                <h4 className="text-xl lg:text-2xl font-semibold text-primary">
                  {items.heading}
                </h4>
                <p className="text-sm md:text-base">{items.description}</p>
              </div>
            </BlurFade>
          ))}
        </section>
      </div>
    </div>
  );
}

const HowItWorks = [
  {
    heading: "We Assign a Trained DM Setter",
    description:
      "Our setters are skilled in high-converting outreach and follow-up — ready to start conversations that actually convert.",
  },
  {
    heading: "You Get More Qualified Calls",
    description:
      "We book sales calls directly into your calendar with prospects who are pre-qualified and interested.",
  },
  {
    heading: "You Focus on Closing",
    description:
      "No more cold outreach, ghosting, or wasted time. Just consistent, quality calls that grow your revenue.",
  },
];
