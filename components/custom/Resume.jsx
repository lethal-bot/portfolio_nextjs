"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaJava,
} from "react-icons/fa";
import { SiAdobephotoshop, SiTailwindcss, SiMongodb } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { ScrollArea } from "../ui/scroll-area";
import { motion } from "framer-motion";
const about = {
  title: "About me",
  description:
    " I am a passionate and dedicated student currently pursuing my Bachelor of Technology in Computer Science and Engineering. With a strong foundation in programming and a curiosity for emerging technologies, I am eager to explore the limitless possibilities in the world of computer science.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Aditya Keshari",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 9832861229",
    },
    {
      fieldName: "Email",
      fieldValue: "aditya165.in@gmail.com",
    },
    {
      fieldName: "Currently",
      fieldValue: "7th sem (CSE)",
    },
    {
      fieldName: "Location",
      fieldValue: "Kolkata, India",
    },
  ],
};

const acheivments = {
  title: "My Acheivments",
  items: [
    {
      acheivmentTitle: "TCS Codevita Season XI",
      year: "2023",
      position: "1663",
      participants: "400000+ Registration globally",
    },
    {
      acheivmentTitle: "Smart India Hackathon",
      year: "2023",
      position: "2nd",
      participants: "35+ Groups College Level",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "",
  skillList: [
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <FaHtml5 />,
      name: "html",
    },
    {
      icon: <FaCss3 />,
      name: "css",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "Nodejs",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "PhotoShop",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

function Resume() {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="aboutme"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="aboutme">About Me</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="acheivments">Acheivments</TabsTrigger>
              <TabsTrigger value="coding">Coding</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
              <TabsContent value="acheivments" className="w-full">
                Acheivments
              </TabsContent>
              <TabsContent value="skills" className="w-full">
                Skills
              </TabsContent>
              <TabsContent value="aboutme" className="w-full">
                About me
              </TabsContent>
              <TabsContent value="coding" className="w-full">
                Coding
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;
