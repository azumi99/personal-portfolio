/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;
const SKILL_CATEGORIES = ["Framework & App", "CMS & Backend", "AI Agent & Automation", "Database & Cloud", "Infrastructure & Ops"];

export default function Page() {
  return (
    <main className="relative flex min-h-dvh flex-col gap-14">
      <section id="home">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex flex-col justify-between gap-2 gap-y-6 md:flex-row">
            <div className="order-2 flex flex-col gap-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] text-on-surface-variant md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 rounded-full border shadow-lg ring-4 ring-outline-variant/20 md:size-32">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="max-w-full text-pretty font-sans leading-relaxed text-on-surface-variant">
              {DATA.summary}
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="experience">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + index * 0.05}>
                <Link href={education.href} className="group flex items-center justify-between gap-x-3">
                  <div className="flex min-w-0 flex-1 items-center gap-x-3">
                    {education.logoUrl ? (
                      <img src={education.logoUrl} alt={education.school} className="size-8 flex-none overflow-hidden rounded-full border object-contain p-1 shadow ring-2 ring-outline-variant/20 md:size-10" />
                    ) : (
                      <div className="size-8 flex-none rounded-full border bg-surface-container shadow ring-2 ring-outline-variant/20 md:size-10" />
                    )}
                    <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <div className="flex items-center gap-2 font-semibold leading-none">
                        {education.school}
                        {education.href !== "#" && <ArrowUpRight className="h-3.5 w-3.5 -translate-x-2 text-on-surface-variant opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />}
                      </div>
                      <div className="font-sans text-sm text-on-surface-variant">{education.degree}</div>
                    </div>
                  </div>
                  <div className="flex flex-none items-center gap-1 text-right text-xs tabular-nums text-on-surface-variant">
                    <span>{education.start} - {education.end}</span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="grid gap-4 sm:grid-cols-2">
            {SKILL_CATEGORIES.map((category, categoryIndex) => {
              const skills = DATA.skills.filter((skill) => skill.category === category);

              return (
                <BlurFade key={category} delay={BLUR_FADE_DELAY * 10 + categoryIndex * 0.05}>
                  <div className="flex h-full flex-col gap-3 rounded-xl border border-outline-variant bg-background p-4 ring-2 ring-outline-variant/20">
                    <h3 className="text-sm font-semibold text-primary">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <div key={skill.name} className="flex h-8 w-fit items-center gap-2 rounded-xl border border-outline-variant bg-surface-container-lowest px-3">
                          <skill.icon className="size-4 text-primary" aria-hidden />
                          <span className="text-sm font-medium text-on-surface">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      <section id="portfolio">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
