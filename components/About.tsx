import Link from "next/link";
import React from "react";
import { BlurFade } from "./magicui/blur-fade";

export default function About() {
  return (
    <div id="about" className="py-20 bg-black relative z-10">
      <div className="container">
        <div className="grid md:grid-cols-5 items-center gap-10 lg:gap-20 w-full">
          <section className="md:col-span-3 space-y-5">
            <BlurFade>
              <h3 className="text-3xl md:text-4xl font-semibold text-primary">
                The Setter Circle
              </h3>
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <p className="text-sm md:text-base lg:text-lg">
                We’re a performance-driven team that specializes in one thing:
                booking you more qualified calls through high-converting DM
                conversations. We’ve worked with 7- and 8-figure agencies,
                coaches, and consultants — helping them scale faster by turning
                social media traffic into real revenue. Our setters are
                handpicked, trained in proven frameworks, and equipped with the
                tools to engage, qualify, and convert leads directly inside your
                inbox.
              </p>
            </BlurFade>

            <BlurFade delay={0.5} inView>
              <Link
                href={""}
                className="py-4 px-12 rounded-full inline-block text-sm bg-primary text-black font-medium"
              >
                <span>Start your journey with us</span>
              </Link>
            </BlurFade>
          </section>
          <section className="md:col-span-2 space-y-3">
            <BlurFade
              inView
              delay={0.25}
              className="border-4 w-full mx-auto max-w-2xs rounded-3xl border-primary bg-[#1c1c1c] h-80 relative"
            >
              '
            </BlurFade>
            <BlurFade
              inView
              delay={0.5}
              className="py-4 px-12 w-full mx-auto max-w-2xs text-center rounded-xl text-xl bg-primary/10 border border-primary text-primary font-medium font-mont"
            >
              <h6 className="text-lg">Josh McKee</h6>
              <p className="text-xs text-white">Founder</p>
            </BlurFade>
          </section>
        </div>
      </div>
    </div>
  );
}
