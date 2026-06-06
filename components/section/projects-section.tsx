"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;
const ALL_PROJECTS_FILTER = "ALL";
const PROJECT_FILTERS = [ALL_PROJECTS_FILTER, "APP", "WEB", "WORDPRESS", "N8N"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>(ALL_PROJECTS_FILTER);
  const filteredProjects = activeFilter === ALL_PROJECTS_FILTER ? DATA.projects : DATA.projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-outline-variant to-transparent" />
            <div className="z-10 rounded-xl border bg-primary px-4 py-1">
              <span className="text-sm font-medium text-on-primary">My Projects</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-outline-variant to-transparent" />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Check out my latest work</h2>
            <p className="text-balance text-center text-on-surface-variant md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              I&apos;ve worked on mobile apps, dashboards, automation workflows, WordPress systems, and operational tools.
            </p>
            <div className="flex max-w-full flex-wrap justify-center gap-2 pt-1">
              {PROJECT_FILTERS.map((filter) => {
                const isActive = activeFilter === filter;

                return (
                  <Button
                    key={filter}
                    type="button"
                    size="sm"
                    variant={isActive ? "default" : "outline"}
                    className={cn("h-8 rounded-full px-3 text-[11px]", isActive && "shadow-primary/20")}
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={isActive}
                  >
                    {filter === ALL_PROJECTS_FILTER ? "ALL PROJECTS" : filter}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-[800px] auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
          {filteredProjects.map((project, id) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05} className="h-full">
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={[project.category, project.tech]}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
