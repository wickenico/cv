import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nico Wickersheim",
  initials: "NW",
  location: "Freiburg, Germany",
  locationLink: "https://maps.app.goo.gl/wPQbwzPRPN5H9V4X8",
  about: "Software Engineer building secure infrastructure for FinTech.",
  summary:
    "Versatile software engineer with a decade of experience across backend systems, enterprise applications, and modern cloud-native architecture. Currently driving security and identity infrastructure for a FinTech platform.",
  avatarUrl: "/avatar.png",
  personalWebsiteUrl: "https://nicowickersheim.dev",
  contact: {
    email: "nico.wickersheim@yahoo.de",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/wickenico",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nico-wickersheim/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school:
        "Cooperative State University Baden-Württemberg - Center for Advanced Studies",
      degree: "Master's degree in Business Informatics - Software Engineering",
      start: "2018",
      end: "2020",
    },
    {
      school: "Cooperative State University Baden-Württemberg",
      degree:
        "Bachelor's degree in Business Informatics - Software Engineering",
      start: "2014",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Shine GmbH",
      link: "https://shine.co",
      badges: ["Full-time"],
      title: "Software Engineer",
      start: "May 2026",
      end: "Present",
      description:
        "Designing the architecture of a centralized Identity & Access Management platform in FinTech and implementing secure authentication and authorization flows.",
    },
    {
      company: "Spreadity GmbH",
      link: "https://spreadity.com",
      badges: ["Part-time"],
      title: "Full Stack Developer",
      start: "October 2025",
      end: "Present",
      description:
        "Driving the development of Time Engineer with Next, React, Clerk and Supabase.",
    },
    {
      company: "sevDesk GmbH",
      link: "https://sevdesk.de",
      badges: ["Full-time"],
      title: "Advanced Software Developer",
      start: "May 2022",
      end: "April 2026",
      description:
        "Developing central services as part of an agile scrum backend team with Kotlin and Cloud.",
    },
    {
      company: "Telocate GmbH",
      link: "https://en.telocate.de",
      badges: ["Part-time"],
      title: "Front End Developer",
      start: "February 2024",
      end: "September 2025",
      description:
        "Expand indoor localization ui with maps using OpenLayers and JavaScript.",
    },
    {
      company: "trend SWM EDV-Beratung GmbH & Co.KG",
      link: "https://trendswm.de/",
      badges: ["Full-time"],
      title: "Software Developer",
      start: "August 2014",
      end: "May 2022",
      description:
        "Developing a ERP application with focus on business process management in ILE RPG on IBM iSeries (formally known as AS/400).",
    },
  ],
  volunteerWork: [
    {
      organization: "Volunteer Mentor",
      badges: ["Volunteer"],
      title: "Student Placement Support",
      start: "July 2020",
      end: "Present",
      description:
        "Helping students from Madagascar find an FSJ (Freiwilliges Soziales Jahr) or BFD (Bundesfreiwilligendienst) placement in Germany, including preparing application documents and guiding them through the application process.",
    },
  ],
  skills: [
    "Identity & Access Management",
    "Kotlin",
    "TypeScript",
    "React",
    "Spring Boot",
    "AWS",
    "GCP",
    "Terraform",
    "Kubernetes",
    "Docker",
    "SQL",
  ],
  languages: [
    { name: "German", level: "Native" },
    { name: "English", level: "Fluent" },
  ],
  projects: [
    {
      title: "WailBrew",
      techStack: ["Side Project", "Go", "Wails", "React", "macOS"],
      description:
        "Minimalistic Homebrew GUI made with Go, Wails and React for managing your Mac packages.",
      link: {
        label: "WailBrew",
        href: "https://github.com/wickenico/WailBrew",
      },
    },
    {
      title: "Madagassisch.de",
      techStack: ["Side Project", "React", "Node.js", "Firebase", "NoSQL"],
      description:
        "German - Malagasy dictionary built with React and Firebase.",
      link: {
        label: "madagassisch.de",
        href: "https://madagassisch.de/",
      },
    },
    {
      title: "nicowickersheim.dev",
      techStack: ["Side Project", "JavaScript", "Bootstrap", "Portfolio"],
      description: "Developer portfolio built with Bootstrap and JavaScript.",
      link: {
        label: "nicowickersheim.dev",
        href: "https://nicowickersheim.dev/",
      },
    },
  ],
} as const;
