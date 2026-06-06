/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="size-8 flex-none rounded-full border bg-surface-container shadow ring-2 ring-outline-variant/30 md:size-10" />;
  }

  return <img src={src} alt={alt} className="size-8 flex-none overflow-hidden rounded-full border object-contain p-1 shadow ring-2 ring-outline-variant/30 md:size-10" onError={() => setImageError(true)} />;
}

export default function WorkSection() {
  return (
    <Accordion type="single" collapsible className="grid w-full gap-6">
      {DATA.work.map((work) => (
        <AccordionItem key={`${work.company}-${work.title}`} value={`${work.company}-${work.title}`} className="grid w-full gap-2 border-b-0">
          <AccordionTrigger className="cursor-pointer rounded-none p-0 transition-colors hover:no-underline group [&>svg]:hidden">
            <div className="flex w-full items-center justify-between gap-x-3 text-left">
              <div className="flex min-w-0 flex-1 items-center gap-x-3">
                <LogoImage src={work.logoUrl} alt={work.company} />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <div className="flex items-center gap-2 font-semibold leading-none">
                    {work.company}
                    <span className="relative inline-flex h-3.5 w-3.5 items-center">
                      <ChevronRight className={cn("absolute h-3.5 w-3.5 shrink-0 translate-x-0 text-on-surface-variant opacity-0 transition-all duration-300 ease-out", "group-hover:translate-x-1 group-hover:opacity-100", "group-data-[state=open]:translate-x-0 group-data-[state=open]:opacity-0")} />
                      <ChevronDown className={cn("absolute h-3.5 w-3.5 shrink-0 rotate-0 text-on-surface-variant opacity-0 transition-all duration-200", "group-data-[state=open]:rotate-180 group-data-[state=open]:opacity-100")} />
                    </span>
                  </div>
                  <div className="font-sans text-sm text-on-surface-variant">{work.title}</div>
                </div>
              </div>
              <div className="flex flex-none items-center gap-1 text-right text-xs tabular-nums text-on-surface-variant">
                <span>{work.start} - {work.end ?? "Present"}</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="ml-13 p-0 text-xs text-on-surface-variant sm:text-sm">
            {work.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
