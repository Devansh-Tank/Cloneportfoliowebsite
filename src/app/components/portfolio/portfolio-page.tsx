import image_7637bf58bdbb2c544a43e4624d7cf61815f454d0 from 'figma:asset/7637bf58bdbb2c544a43e4624d7cf61815f454d0.png';
import { useState } from "react";
import MorphingPageDots from "../ui/morphing-page-dots";
import { BlurFade } from "../magicui/blur-fade";
import { WordRotate } from "../magicui/word-rotate";
import Navbar from "./navbar";
import { ProjectCard } from "./project-card";
import { WorkflowSection } from "./workflow-section";
import { ResumeCard } from "./resume-card";
import { HackathonCard } from "./hackathon-card";
import { DATA } from "../../../data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Marquee } from "../magicui/marquee";
import exampleImage from "figma:asset/b29e0ff35a1d6ded87b775bde29a2fd9101e4305.png";
import { TypingAnimation } from "../magicui/typing-animation";

const BLUR_FADE_DELAY = 0.04;

export default function PortfolioPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = DATA.projects[activeIndex];

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6 pb-24">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFade delay={BLUR_FADE_DELAY} yOffset={8}>
                <TypingAnimation
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  text="Hi, I'm Devansh 👋"
                />
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 2} yOffset={8} className="text-[rgba(250,250,250,0.5)]">
                <span className="text-xl max-w-[600px] md:text-xl text-black dark:text-white">
                  AI Product designer passionate about crafting meaningful, accessible and engaging experience with and for humans by leveraging AI tools.
                </span>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} yOffset={8}>
              <Avatar className="size-28 border">
                <AvatarImage alt="Devansh" src={image_7637bf58bdbb2c544a43e4624d7cf61815f454d0} />
                <AvatarFallback>D</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3} yOffset={8}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2">
          I’m an AI designer with a computer engineering background, currently pursuing my Master’s in User Experience at ASU with 1.5 years of experience. I bring ideas to life through wireframing, prototyping, and tools like Figma — while also leveraging AI and vibe-coding tools to rapidly generate concepts, automate workflows, and design smarter, scalable experiences.
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5} yOffset={8}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              yOffset={8}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7} yOffset={8}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              yOffset={8}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9} yOffset={8}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10} yOffset={8}>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11} yOffset={8}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="flex flex-col gap-6 max-w-[800px] mx-auto">
            <div className="w-full">
              <ProjectCard
                href={activeProject.href}
                key={activeProject.title}
                title={activeProject.title}
                description={activeProject.description}
                dates={activeProject.dates}
                tags={activeProject.technologies}
                image={activeProject.image}
                video={activeProject.video}
                links={activeProject.links}
                className="w-full"
              />
            </div>
            <MorphingPageDots
              total={DATA.projects.length}
              activeIndex={activeIndex}
              onPageChange={setActiveIndex}
            />
          </div>
        </div>
      </section>
      
      <section id="workflow">
        <WorkflowSection />
      </section>

      <section id="hackathons">
        
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16} yOffset={8}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <a
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </a>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
      <Navbar />
    </main>
  );
}
