"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { generateCvPdf } from "@/lib/generate-cv-pdf";

export default function Navbar() {
  const handleDownloadCV = () => {
    const pdf = generateCvPdf(window.location.origin);
    const url = URL.createObjectURL(pdf);
    const link = document.createElement("a");

    link.href = url;
    link.download = "Ilham-Tegar-Bintang-Ananda-CV.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30 no-print">
      <Dock className="pointer-events-auto relative z-50 mx-auto flex h-14 w-fit gap-2 border bg-white/90 p-2 shadow-[0_0_10px_3px] shadow-primary/5 backdrop-blur-3xl">
        {DATA.navbar.map((item) => (
          <Tooltip key={item.href}>
            <TooltipTrigger asChild>
              <a
                href={item.href}
                onClick={item.download ? (event) => {
                  event.preventDefault();
                  handleDownloadCV();
                } : undefined}
              >
                <DockIcon className="size-full cursor-pointer rounded-3xl border border-outline-variant bg-background p-0 text-secondary transition-colors hover:bg-surface-container hover:text-on-surface">
                  <item.icon className="size-full overflow-hidden rounded-sm object-contain" />
                </DockIcon>
              </a>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={8} className="rounded-xl bg-primary px-4 py-2 text-sm text-on-primary shadow-lg">
              <p>{item.label}</p>
              <TooltipArrow className="fill-primary" />
            </TooltipContent>
          </Tooltip>
        ))}
        <Separator className="m-auto h-2/3 w-px bg-outline-variant" />
        {Object.entries(DATA.contact.social)
          .filter(([, social]) => social.navbar)
          .map(([name, social]) => {
            const IconComponent = social.icon;
            return (
              <Tooltip key={name}>
                <TooltipTrigger asChild>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <DockIcon className="size-full cursor-pointer rounded-3xl border border-outline-variant bg-background p-0 text-secondary transition-colors hover:bg-surface-container hover:text-on-surface">
                      <IconComponent className="size-full overflow-hidden rounded-sm object-contain" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={8} className="rounded-xl bg-primary px-4 py-2 text-sm text-on-primary shadow-lg">
                  <p>{name}</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          })}
      </Dock>
    </div>
  );
}
