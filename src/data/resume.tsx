import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Priyansh Y.",
  initials: "PY",
  url: "https://google.com",
  location: "INDIA",
  locationLink: "https://www.google.com/maps/place/INDIA",
  description:
    "Cybersecurity Researcher and Full-stack Developer. I love building things and helping people. Very active on Twitter & Linkedin.",
  summary:
    "At the end of 2022, I started my journey as security researcher before that I am into fulltime building and scaling my own full stack projects. At present, [I am persuing a degree in computer science](/#education), [competed in 2 hackathons where I have learned a lot of things](/#hackathons), I am also contributing as Tech Lead at GDG On Campus.",
  avatarUrl: "/me.png",
  skills: [
    "React Native",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Docker",
    "Wireshark",
    "SQL",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "yawalkarpriyansh@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/priyanshyawalkar",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/priyanshyawalkar",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/priyansh0310/",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "yawalkarpriyansh@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Wallet Hunter",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Community Manager Intern",
      logoUrl: "/wh.png",
      start: "May 2024",
      end: "October 2024",
      description:
        "I am responsible for managing the community of Wallet Hunter. I am also responsible for managing the social media accounts of Wallet Hunter.",
    },
  ],
  education: [
    {
      school: "Chhattisgarh Swami Vivekanand Technical University",
      href: "#",
      degree: "B.Tech (CSE)",
      logoUrl: "/csvtu.png",
      start: "2022",
      end: "present",
    },
  ],
  projects: [
    {
      title: "CrypCharge",
      href: "https://www.github.com/priyanshyawalkar/crypcharge",
      dates: "Sept'2024 - Sept'2024",
      active: false,
      description:
        "Our EV charging app simplifies the charging experience by bringing together multiple EV charging networks onto a single platform.",
      technologies: [
        "React Native",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://crypcharge.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://www.github.com/priyanshyawalkar/crypcharge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/crypcharge.png",
      video:
        "",
    },
    {
      title: "LetMeHelpYou - LMHY",
      href: "#",
      dates: "Nov'2024 - Nov'2024",
      active: true,
      description:
        "This website is a template website which can be used by any freelancer or a new small startup to setup there initial path.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Firebase",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/priyanshyawalkar/lmhy/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/lmhy.png",
      video: "",
    },
    {
      title: "SkinTone-AI",
      href: "#",
      dates: "Jan'2025 - Jan'2025",
      active: false,
      description:
        "This custom made AI model can detect the skin tone of a person and can suggest the best suitable watch or color of strap for them to look cool.",
      technologies: [
        "Next.js",
        "Typescript",
        "Kaggel",
        "ML",
        "TailwindCSS",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/priyanshyawalkar/skintone-ai/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/skai.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack This Fall",
      dates: "November 08th - 10th, 2024",
      location: "Virtual",
      description:
        "Developed a mobile application lists all the events happening in the city and also allows users to create their own events.",
      image:
        "/htf.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg",
      links: [],
    },
    {
      title: "Hack The Space",
      dates: "September 27th - 28th, 2024",
      location: "Bhilai, Chhattisgarh",
      description:
        "Developed a mobile application which helps to pay by web3 tokens for car rentals and evcharging. Secured 1st postion in top 30 inovators.",
      image:
        "/hts.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg",
      links: [],
    },
  ],
} as const;
