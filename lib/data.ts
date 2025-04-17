import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wartafenoImg from "@/public/images/project/wartefeno/p.png";
import siakadImg from "@/public/images/project/siakad/colab.png";
import amikomImg from "@/public/images/project/amikom/ya.png";
import hrtoolsImg from "@/public/images/project/hr-tools/ntah.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "My Friends",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Ability",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const experiencesData = [
  {
    title: "Front End Developer",
    location: "Jawa Tengah, Indonesia",
    description:
      "Software developers are responsible for designing and implementing the external appearance of a website or application. Ensure that the appearance and functionality of the website run well and according to the design.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - Present",
  },
  {
    title: "WhatsApp Bot Developer",
    location: "Jawa Tengah, Indonesia",
    description:
      "WhatsApp Bots are automated programs that can interact with WhatsApp users. Created using the Node.js language, these Bots can be used to provide information, solve problems, provide customer support, and conduct business transactions",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - Present",
  },
  {
    title: "Pro Player Epep🗿",
    location: "Jawa Tengah, Indonesia",
    description:
      "Cinta bubar, Epep mabar🗿",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - Present",
  },
  {
    title: "Programmer",
    location: "Jawa Tengah, Indonesia",
    description:
      "Seorang programmer abal abal yang masih mengandalkan chat gpt, tapi selalu dikira hacker oleh bocil bocil🗿",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Rizqi🗿",
    description:
      "Dia adalah salah satu makhluk (teman aing) yang sangat buaya🗿",
    screenshots: [
      "images/project/cekresi/furina.png",
    ],
    image: "images/project/cekresi/furina.png",
    tech: [
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "-",
    ],
    languages: ["@chitato345"],
  },
  {
    title: "Arda🙀",
    description:
      "Multifungsi🗿",
    screenshots: [
      "images/project/ikanme/lexxius.png",
    ],
    image: "images/project/ikanme/lexxius.png",
    tech: [
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "beliau sangat multifungsi, minus beliau suka ryo (animek)😹☝🏻",
    ],
    languages: ["@ketek_unta"],
  },
  {
    title: "Marwan😋",
    description:
      "makhluk satu ini adalah ketua kelas yang sangat baik hati dan tidak sombong😎👍🏻",
    screenshots: [
      "images/project/mpl/millicent.png",
    ],
    image: "images/project/mpl/millicent.png",
    tech: [
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "tak tau, bingung mw nulis apa🗿",
    ],
    languages: ["@siputbalap132"],
  },
  {
    title: "Muizz nyuzul😎",
    description:
      "Beliau adalah seorang... ntah lah, malas mikir🗿",
    screenshots: [
      "images/project/siakad/colab.png",
    ],
    image: "images/project/siakad/colab.png",
    tech: [
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "tak tau🗿",
    ],
    languages: ["@nyuzzx"],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "Bootstrap",
  "Laravel",
  "Git",
  // "Framer Motion",
] as const;

export const skilss = [
  {
    id: 2,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    id: 3,
    imgUrl: "/images/icon/bootstrap.svg",
  },
  {
    id: 4,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },

  {
    id: 9,
    imgUrl: "/images/icon/typescript.svg",
  },
  {
    id: 10,
    imgUrl: "/images/icon/javascript.svg",
  },
  // {
  //   id: 10,
  //   imgUrl:
  //     "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
  // },
] as const;
