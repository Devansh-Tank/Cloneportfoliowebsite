"use client";

import svgPaths from "../../../imports/svg-rdtqh8q0xs";
import { imgGroup } from "../../../imports/svg-x4qiv";
import { useTheme } from "next-themes";
import { motion, useInView, useMotionValue, useMotionTemplate } from "motion/react";
import { useRef, useCallback, useEffect } from "react";
import { cn } from "../../../lib/utils";

// Images
import imgE3PN6Y0QPze2MBpfPurWphngUPng from "figma:asset/234768ec37661e9ca1237ce8d79799a8c9a4ebf9.png";
import imgMW47FSu3WckotrrVFyA7G3VyMPng from "figma:asset/a6eb13cf6e96191fae43f3bf3dce65c53b308b5f.png";
import imgRKPrZm6Ph4DZr4T5NivfbVw1JzQPng from "figma:asset/b12b1d4091815db7f301993c03b51a94b011e9bf.png";
import imgLs5ZGnt0HECp4Jx7ZbThpeXe6HcPng from "figma:asset/68c3f838eed3891a3b6f7d69ebdb8575eecce6e2.png";
import imgFVp7EiDLeg75R5ErfcOkIIsv0Png from "figma:asset/46980c829f7cf4cac4357c4b0b33c0840c829d99.png";
import imgOOrsesu0TkClDsyuhDj6Grr3ZhIPng from "figma:asset/c61cbb218d6c5de463029187abac9ff73973bb66.png";

const BLUR_FADE_DELAY = 0.04;

interface WorkflowCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
}

function WorkflowCard({ 
  title, 
  description, 
  children,
  delay = 0,
  yOffset = 8
}: WorkflowCardProps) {
  const { theme } = useTheme();
  
  // Fade Animation State
  const ref = useRef<HTMLDivElement>(null);
  const inViewResult = useInView(ref, { once: true, margin: "-50px" });
  const isInView = inViewResult;

  // Magic Card Effect State
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const gradientSize = 200;
  const gradientColor = theme === "dark" ? "#262626" : "#D9D9D955";
  const gradientOpacity = 0.8;

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }, [mouseX, mouseY]);

  const reset = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: yOffset, opacity: 0, filter: "blur(6px)" }}
      animate={isInView ? { y: 0, opacity: 1, filter: "blur(0px)" } : { y: yOffset, opacity: 0, filter: "blur(6px)" }}
      transition={{ delay: 0.04 + delay, duration: 0.4, ease: "easeOut" }}
      className="group relative flex flex-col gap-4 items-start p-6 md:p-8 w-full aspect-square overflow-hidden rounded-[16px] bg-black"
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onPointerEnter={reset}
    >
      {/* Spotlight Gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0 duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
          opacity: gradientOpacity,
        }}
      />

      {/* Content */}
      <div className="flex flex-col font-sans text-sm md:text-base text-[rgba(255,255,255,0.64)] w-full relative z-10">
         <p>{description}</p>
      </div>
      
      <div className="w-full flex justify-center items-center flex-1 relative z-10">
        {children}
      </div>

      <div className="flex flex-col font-medium justify-center text-xl md:text-2xl text-white tracking-[-0.64px] leading-tight w-full relative z-10">
        {title}
      </div>

      {/* Static Border */}
      <div className="absolute inset-0 rounded-[16px] pointer-events-none z-20">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.32)] border-solid inset-0 rounded-[16px]" />
      </div>
    </motion.div>
  );
}

// Reusable SVG Component for the "Star" like shape
function StarIcon() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
        <div className="absolute inset-0 overflow-clip">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(36, 41, 56, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
              <path d={svgPaths.p1c8edc00} fill="var(--fill-0, #242938)" />
            </svg>
          </div>
          <div className="absolute inset-[10.94%_24.08%_10.94%_23.83%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 40">
              <g>
                <path d={svgPaths.p22e74e00} fill="#0ACF83" />
                <path d={svgPaths.p3b09a2b0} fill="#A259FF" />
                <path d={svgPaths.p3ea99e00} fill="#F24E1E" />
                <path d={svgPaths.p8ab100} fill="#FF7262" />
                <path d={svgPaths.p26d48500} fill="#1ABCFE" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconWrapper({ children, shadowColor = "#00f7ff" }: { children: React.ReactNode; shadowColor?: string }) {
  return (
    <div className={`bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0 size-[40px]`} style={{ boxShadow: `0px 1px 10px 0px ${shadowColor}` }}>
       {children}
    </div>
  );
}

function ImageContainer({ src, rounded = "10px" }: { src: string; rounded?: string }) {
  return (
    <div className={`absolute inset-0 rounded-[${rounded}]`}>
      <div className={`absolute inset-0 overflow-hidden pointer-events-none rounded-[${rounded}]`}>
        <img alt="" className="absolute left-0 max-w-none size-full top-0 object-cover" src={src} />
      </div>
    </div>
  );
}


export function WorkflowSection() {
  // Simple fade-in wrapper for the header text since we removed BlurFade
  // Or we can assume header uses a separate BlurFade if we didn't remove the import.
  // Wait, I removed BlurFade import. I should define a simple one or just use motion.div for the header too?
  // The header used BlurFade. I should probably keep BlurFade import for the header or inline it.
  // The user only asked to flatten the CARD hierarchy.
  // But if I remove BlurFade import, the header breaks.
  // I will re-add BlurFade import OR inline it for header.
  // The header implementation is simple:
  // <BlurFade delay={BLUR_FADE_DELAY * 11} yOffset={8}>...
  
  // I'll inline a simple fade for the header to avoid importing the separate component just for one usage,
  // effectively "flattening" dependencies too. Or I can restore BlurFade import just for the header.
  // Given "Eliminate the inner wrapper/div/card", I'll stick to inlining for cards.
  // For the header, I'll use a simple motion.div to replicate BlurFade.
  
  return (
    <div className="w-full space-y-12 py-12">
      <HeaderSection />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: Vibe Coding */}
        <WorkflowCard 
          title="Vibe Coding" 
          description="Generating websites through prompting concepting and texting."
          delay={BLUR_FADE_DELAY * 12}
        >
           <div className="flex gap-[15px] md:gap-[25px] items-center justify-center flex-wrap content-center">
              <IconWrapper>
                  <ImageContainer src={imgE3PN6Y0QPze2MBpfPurWphngUPng} />
              </IconWrapper>
              <div className="relative shrink-0 size-[40px] shadow-[0px_0px_10px_2px_#00f7ff] rounded-[10px]">
                  <ImageContainer src={imgMW47FSu3WckotrrVFyA7G3VyMPng} />
              </div>
              <div className="relative shrink-0 size-[40px] shadow-[0px_1px_10px_2px_#00f7ff] rounded-[10px]">
                  <ImageContainer src={imgRKPrZm6Ph4DZr4T5NivfbVw1JzQPng} />
              </div>
              <StarIcon />
              <div className="relative shrink-0 size-[40px] shadow-[0px_0px_10px_2px_#00f7ff] rounded-[10px]">
                  <ImageContainer src={imgLs5ZGnt0HECp4Jx7ZbThpeXe6HcPng} />
              </div>
           </div>
        </WorkflowCard>

        {/* Card 2: AI - UX Workflow */}
        <WorkflowCard 
          title="AI - UX Workflow" 
          description="Integrating Ai tools in UX workflow reducing time and efforts"
          delay={BLUR_FADE_DELAY * 13}
        >
           <div className="flex gap-[15px] md:gap-[25px] items-center justify-center flex-wrap content-center">
              <div className="relative shrink-0 size-[40px] shadow-[0px_1px_12px_2px_#00f7ff] rounded-[10px]">
                  <ImageContainer src={imgFVp7EiDLeg75R5ErfcOkIIsv0Png} />
              </div>
              <StarIcon />
              <div className="relative shrink-0 size-[40px] shadow-[0px_0px_10px_2px_#00f7ff] rounded-[10px]">
                  <ImageContainer src={imgLs5ZGnt0HECp4Jx7ZbThpeXe6HcPng} />
              </div>
              <div className="relative shrink-0 size-[40px] shadow-[0px_1px_10px_2px_#00f7ff] rounded-[10px]">
                  <ImageContainer src={imgOOrsesu0TkClDsyuhDj6Grr3ZhIPng} />
              </div>
           </div>
        </WorkflowCard>

        {/* Card 3: Figma MCP Automation */}
        <WorkflowCard 
          title="Figma MCP Automation" 
          description="Figma automation for initial ideation"
          delay={BLUR_FADE_DELAY * 14}
        >
           <div className="flex gap-[15px] md:gap-[25px] items-center justify-center content-center">
              <StarIcon />
              <div className="relative shrink-0 size-[40px] shadow-[0px_0px_8px_1px_#00f7ff] rounded-[10px]">
                  <ImageContainer src={imgLs5ZGnt0HECp4Jx7ZbThpeXe6HcPng} />
              </div>
           </div>
        </WorkflowCard>

        {/* Card 4: AI Workflow Automation */}
        <WorkflowCard 
          title="AI Workflow Automation" 
          description="Automating Sales, Marketing, Outreach and much more"
          delay={BLUR_FADE_DELAY * 15}
        >
           <div className="flex gap-[15px] md:gap-[25px] items-center justify-center content-center">
              <StarIcon />
              <div className="relative shrink-0 size-[40px] shadow-[0px_0px_8px_1px_#00f7ff] rounded-[10px]">
                  <ImageContainer src={imgLs5ZGnt0HECp4Jx7ZbThpeXe6HcPng} />
              </div>
           </div>
        </WorkflowCard>
      </div>
    </div>
  );
}

function HeaderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ y: 8, opacity: 0, filter: "blur(6px)" }}
      animate={isInView ? { y: 0, opacity: 1, filter: "blur(0px)" } : { y: 8, opacity: 0, filter: "blur(6px)" }}
      transition={{ delay: 0.04 * 11, duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center justify-center space-y-4 text-center"
    >
      <div className="space-y-2">
        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
          Workflow
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Wondering what sets me apart
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          AI Integration in my design process
        </p>
      </div>
    </motion.div>
  )
}
