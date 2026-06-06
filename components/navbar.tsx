"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { generateCvPdf } from "@/lib/generate-cv-pdf";
import { MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

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
    <div className="pointer-events-none fixed inset-x-0 bottom-2 z-30 no-print px-2 sm:bottom-4 sm:px-3">
      <Dock className="dock-compact pointer-events-auto relative z-50 mx-auto flex h-auto max-w-[min(22rem,calc(100vw-1rem))] flex-wrap items-center justify-center gap-1 overflow-visible rounded-2xl border bg-white/90 p-1.5 shadow-[0_0_10px_3px] shadow-primary/5 backdrop-blur-3xl sm:h-14 sm:w-fit sm:max-w-full sm:flex-nowrap sm:items-end sm:gap-2 sm:rounded-full sm:p-2">
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
        <Separator className="m-auto hidden h-2/3 w-px shrink-0 bg-outline-variant sm:block" />
        <Tooltip>
          <TooltipTrigger asChild>
            <button type="button" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label="Toggle color mode" suppressHydrationWarning>
              <DockIcon className="size-full cursor-pointer rounded-3xl border border-outline-variant bg-background p-0 text-secondary transition-colors hover:bg-surface-container hover:text-on-surface">
                <MoonIcon className="size-full overflow-hidden rounded-sm object-contain" />
              </DockIcon>
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={8} className="rounded-xl bg-primary px-4 py-2 text-sm text-on-primary shadow-lg">
            <p>Dark / Light Mode</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
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
