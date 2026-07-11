"use client";

import { useDict } from "@/shared/lib";
import { ContactItem } from "@/entities/contact";
import { CONTACT_STATIC } from "../model/data";

export const Contacts = () => {
  const data = useDict("contacts");

  return (
    <div id="contact" className="min-h-screen max-w-7xl mx-auto w-full px-6 py-16 flex justify-center items-center ">
      <div>
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[700px] h-[700px] rounded-full bg-indigo-500/10 blur-[160px]" />
        </div>
        <div
          className="relative z-10 w-full max-w-5xl rounded-3xl drop-shadow-[0_0_8px_rgb(129_140_248)] text-center bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 shadow-[0_30px_80px_rgba(0,0,0,0.6)] p-10 text-white"
        >
          <div className="mb-10">
            <h2 className="text-4xl font-semibold tracking-tight">
              {data.title}
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-xl">
              {data.subtitle}
            </p>
          </div>
          <div className="">
            <div className="space-y-6 text-neutral-300">
              <ContactItem
                label="Email"
                value={CONTACT_STATIC.email}
                href={`mailto:${CONTACT_STATIC.email}`}
              />
              <ContactItem
                label="GitHub"
                value={CONTACT_STATIC.github}
                href={CONTACT_STATIC.github}
              />
              <ContactItem
                label="Telegram"
                value={CONTACT_STATIC.telegram}
                href={CONTACT_STATIC.telegram}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
