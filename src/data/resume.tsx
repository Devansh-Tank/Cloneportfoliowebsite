import { Icons } from "../app/components/portfolio/icons";
import { Globe } from "lucide-react";
import React from 'react';

export const DATA = {
  name: "Devansh Tank",
  initials: "DT",
  url: "https://portfolio-magicui.vercel.app",
  location: "Tempe, AZ",
  locationLink: "https://www.google.com/maps/place/Tempe,+AZ",
  description:
    "AI Designer & UX Master's Student at ASU. I bring ideas to life through wireframing, prototyping, and vibe-coding.",
  summary:
    "I’m an AI designer with a computer engineering background, currently pursuing my Master’s in User Experience at ASU (4.0 GPA) with 1.5 years of experience. I bring ideas to life through wireframing, prototyping, and tools like Figma — while also leveraging AI and vibe-coding tools such as Figma Make and Lovable to rapidly generate concepts, automate workflows, and design smarter, scalable experiences.",
  avatarUrl: "me.jpg",
  skills: [
    "Interaction Design",
    "User Flows",
    "Wireframing",
    "Visual Design",
    "Vibe Coding",
    "Figma",
    "Google AI Studio",
    "ChatGPT",
    "Claude Code",
    "Adobe Firefly",
    "Zapier",
    "n8n",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Python",
  ],
  navbar: [
    { href: "#hero", icon: Icons.Home, label: "Home" },
    { href: "#projects", icon: Icons.Blog, label: "Projects" },
  ],
  contact: {
    email: "devanshtank14@gmail.com",
    tel: "+13648376410",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com",
        icon: Icons.GitHub,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: Icons.LinkedIn,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:devanshtank14@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      X: {
        name: "X",
        url: "https://twitter.com",
        icon: Icons.X,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.Youtube,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Enterprise Technology - ASU",
      href: "https://asu.edu",
      badges: [],
      location: "Tempe, AZ",
      title: "AI Creative Consultant",
      logoUrl: "https://picsum.photos/seed/asu/40/40",
      start: "Dec 2024",
      end: "Present",
      description: [
        "Designed and refined 15+ visual assets across multiple projects, maintaining 100% brand consistency and reducing revision cycles by 40% through systematic design documentation and brand guideline adherence.",
        "Worked in a cross-functional collaboration with 8-member design and development team to deliver 8 enterprise webpages 2 weeks ahead of schedule, improving site engagement metrics by 35% within first month of launch.",
        "Led end-to-end development of an AI-powered event chatbot for Enterprise Technology, focusing on intuitive conversation design, user satisfaction, and seamless integration."
      ],
    },
    {
      company: "Mayo Clinic",
      badges: [],
      href: "https://mayoclinic.org",
      location: "Hybrid",
      title: "Product Designer",
      logoUrl: "https://picsum.photos/seed/mayo/40/40",
      start: "Sep 2024",
      end: "Dec 2024",
      description: [
        "Led the 0-1 design of an AI-driven triage platform for hematology patients, targeting critical gaps in early risk detection and reducing mis-triage incidents by designing structured, high-accuracy workflows.",
        "Built the full UX foundation including patient intake flows, AI-powered symptom interpretation, intelligent risk-scoring, and automated triage decision support that reduces clinician cognitive load by up to 40%.",
        "Designed agentic AI features that surface real-time red-flag alerts, analyze lab values, and auto-generate standardized triage summaries that streamline handoffs and cut documentation time by an estimated 60%.",
        "Delivered a complete product specification and interactive prototype ready for clinical review and pilot testing."
      ],
    },
  ],
  education: [
    {
      school: "Arizona State University",
      href: "https://asu.edu",
      degree: "Master of User Experience",
      logoUrl: "https://picsum.photos/seed/asu-edu/40/40",
      start: "2024",
      end: "Expected 2026",
    },
    {
      school: "DY Patil University",
      href: "https://dypatil.edu",
      degree: "Bachelor of Computer Science",
      logoUrl: "https://picsum.photos/seed/dy/40/40",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Triage System for Hematology - Mayo Clinic",
      href: "#",
      dates: "Sep 2024 - Present",
      active: true,
      description:
        "Designed and Vibe coded an LLM-powered triage interface that automatically processes referral data. The goal is to create a streamlined, user-friendly tool that improves referral efficiency, reduces unnecessary clinical burden, and ensures patients receive the right care at the right time.",
      technologies: [
        "LLM",
        "Vibe Coding",
        "AI",
        "Healthcare UX",
      ],
      links: [
        {
          type: "Live Link",
          href: "#",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "https://picsum.photos/seed/triage/600/300",
      video: "",
    },
    {
      title: "AI Event Chatbot",
      href: "#",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "Led the end-to-end development of an AI-powered event chatbot for ASU Enterprise Technology. Focused on intuitive conversation design and seamless integration, ensuring high user satisfaction and efficient query resolution for university events.",
      technologies: [
        "AI",
        "Chatbot",
        "Conversation Design",
        "Python",
      ],
      links: [
        {
          type: "Live Link",
          href: "#",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "https://picsum.photos/seed/chatbot/600/300",
      video: "",
    },
    {
      title: "Enterprise Web Redesign",
      href: "#",
      dates: "Dec 2024",
      active: true,
      description:
        "Collaborated with a cross-functional team to deliver 8 enterprise webpages for ASU 2 weeks ahead of schedule. The redesign and optimization efforts resulted in a 35% improvement in site engagement metrics within the first month.",
      technologies: [
        "Web Design",
        "Figma",
        "Brand Consistency",
        "Enterprise UX",
      ],
      links: [
        {
          type: "Live Link",
          href: "#",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "https://picsum.photos/seed/asuweb/600/300",
      video: "",
    },
    {
      title: "Automat8",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Designed an online, no-code automation tool that connects different web applications, allowing users to automate repetitive tasks by creating custom workflows.",
      technologies: [
        "Automation",
        "No-code",
        "AI",
        "Workflow Design",
      ],
      links: [
        {
          type: "Live Link",
          href: "#",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "https://picsum.photos/seed/automat8/600/300",
      video: "",
    },
  ],
  hackathons: [],
};
