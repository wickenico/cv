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
  about:
    "Passionated Full Stack Engineer with focus on Kotlin with Ktor, React and Cloud-Native in an agile environment.",
  summary:
    "As a Full Stack Engineer, I have been working on a wide range of projects. Gained experience in building and maintaining process-driven ERP systems, now working with financial web applications. I am a big fan of Kotlin and React. I am also interested in Cloud-Native technologies like Terraform, AWS and DevOps.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/35769900?s=400&u=8d47f586b3c540183875fffa3983953934e6966a&v=4",
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
      company: "sevDesk GmbH",
      link: "https://sevdesk.de",
      badges: ["Remote"],
      title: "Full Stack Developer",
      start: "May 2022",
      end: "today",
      description:
        "Creating central services for the sevDesk ecosystem with Kotlin and building the groundworking infrastructure for the future of sevDesk with Terraform and AWS. Working in an agile environment with Scrum and Jira.",
    },
    {
      company: "trend SWM GmbH",
      link: "https://trendswm.de/",
      badges: ["on-premise"],
      title: "Software Developer",
      start: "August 2014",
      end: "April 2022",
      description:
        "Developing and maintaining process-driven ERP system for the different industries with ILE PRG in an IBM ecosystem.",
    },
  ],
  skills: [
    "Kotlin",
    "Ktor",
    "Docker",
    "AWS",
    "Terraform",
    "Git",
    "React",
    "Node.js",
    "SQL",
    "Scrum",
    "DevOps",
    "Jira",
  ],
  projects: [
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
    {
      title: "PyHtmlToCSVConverter",
      techStack: ["Side Project", "Python", "CSV", "Converter", "Crawling"],
      description:
        "Reading data from website and converting it to CSV file using Python.",
      link: {
        label: "PyHtmlToCSVConverter",
        href: "https://github.com/wickenico/py-html-to-csv-converter",
      },
    },
    {
      title: "Bookify Ktor Backend",
      techStack: [
        "Side Project",
        "Kotlin",
        "Ktor",
        "REST",
        "PostgreSQL",
        "Google Books API",
      ],
      description: "Book management backend built with Kotlin and Ktor.",
      link: {
        label: "bookify-ktor-backend",
        href: "https://github.com/wickenico/bookify-ktor-backend",
      },
    },
    {
      title: "Bookify Vuejs Frontend",
      techStack: ["Side Project", "Vue", "Node.js"],
      description:
        "Book management frontend built with Vue.js and Node.js. Consuming Bookify Ktor Backend.",
      link: {
        label: "bookify-vuejs-frontend",
        href: "https://github.com/wickenico/bookify-vuejs-frontend",
      },
    },
    {
      title: "Scriptable BTC-USD Widget",
      techStack: [
        "Side Project",
        "Scriptable",
        "JavaScript",
        "Widget",
        "Bitcoin",
        "Crypto",
      ],
      description:
        "Bitcoin price widget for iOS built with Scriptable and JavaScript.",
      link: {
        label: "btc-usd-course.js",
        href: "https://github.com/wickenico/btc-usd-course.js",
      },
    },
    {
      title: "Scriptable Crypto Ticker",
      techStack: [
        "Side Project",
        "Scriptable",
        "JavaScript",
        "Widget",
        "Crypto",
        "Coinbase",
      ],
      description:
        "Crypto price widget for iOS built with Scriptable and JavaScript",
      link: {
        label: "crypto-ticker-widget.js",
        href: "https://github.com/wickenico/crypto-ticker-widget.js",
      },
    },
    {
      title: "Scriptable Hub",
      techStack: ["Side Project", "Scriptable", "JavaScript", "Widget"],
      description:
        "Collection of widgets for iOS built with Scriptable and JavaScript.",
      link: {
        label: "scriptable-hub",
        href: "https://github.com/wickenico/scriptable-hub",
      },
    },
  ],
} as const;
