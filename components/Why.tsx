import { ArrowDown } from "lucide-react";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { RiPrinterFill } from "react-icons/ri";

export default function Why() {
  return (
    <div id="why">
      <div className="container py-20">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <section className="md:col-span-3 space-y-5">
            <h3 className="text-3xl md:text-4xl font-semibold text-primary">
              Why it works
            </h3>
            <p className="md:text-lg">
              Most agencies overlook the power of direct messaging, relying too
              heavily on ads, cold email, or waiting for inbound leads. But the
              truth is: your ideal clients are already on social media. They
              just need the right nudge — and that starts with a genuine
              conversation.
            </p>
          </section>
          <section className="md:col-span-2 flex flex-col items-center justify-center gap-3 text-primary">
            <div className="py-4 px-12 w-full mx-auto max-w-2xs text-center rounded-lg text-xl bg-primary/10 border border-primary text-primary gap-2 font-semibold font-mont flex items-center justify-center">
              <IoMdChatbubbles className="shrink-0" />{" "}
              <h6 className="text-lg shrink-0">Real Conversations</h6>
            </div>
            <ArrowDown />
            <div className="py-4 px-12 w-full mx-auto max-w-2xs text-center rounded-lg text-xl bg-primary/10 border border-primary text-primary gap-2 font-semibold font-mont flex items-center justify-center">
              <FaPhone className="shrink-0" />{" "}
              <h6 className="text-lg shrink-0">Qualified Calls</h6>
            </div>
            <ArrowDown />
            <div className="py-4 px-12 w-full mx-auto max-w-2xs text-center rounded-lg text-xl bg-primary/10 border border-primary text-primary gap-2 font-semibold font-mont flex items-center justify-center">
              <RiPrinterFill className="shrink-0" />{" "}
              <h6 className="text-lg shrink-0">More Sales</h6>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
