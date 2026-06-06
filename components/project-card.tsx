/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="h-48 w-full bg-surface-container" />;
  }

  return <img src={src} alt={alt} className="h-48 w-full object-cover" onError={() => setImageError(true)} />;
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({ title, href, description, dates, tags, image, video, links, className }: Props) {
  return (
    <div className={cn("flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-outline-variant bg-background transition-all duration-200 hover:ring-2 hover:ring-outline-variant/50", className)}>
      <div className="relative shrink-0">
        <Link href={href || "#"} target={href && href !== "#" ? "_blank" : undefined} rel={href && href !== "#" ? "noopener noreferrer" : undefined} className="block">
          {video ? <video src={video} autoPlay loop muted playsInline className="h-48 w-full object-cover" /> : <ProjectImage src={image || ""} alt={title} />}
        </Link>
        {links && links.length > 0 && (
          <div className="absolute right-2 top-2 flex flex-wrap gap-2">
            {links.map((link, index) => (
              <Link href={link.href} key={index} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
                <Badge className="flex items-center gap-1.5 bg-black text-xs text-white hover:bg-black/90" variant="default">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-on-surface-variant">{dates}</time>
          </div>
          {href && href !== "#" && (
            <Link href={href} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant transition-colors hover:text-on-surface" aria-label={`Open ${title}`}>
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          )}
        </div>
        <p className="flex-1 text-pretty text-xs leading-relaxed text-on-surface-variant">{description}</p>
        <div className="mt-auto flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <Badge key={`${tag}-${index}`} className="h-6 w-fit border border-outline-variant px-2 text-[11px] font-medium" variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
