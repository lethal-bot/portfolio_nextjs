"use client";
import { motion } from "framer-motion";
const education = [
  {
    year: "2021 - 2025",
    title: "Bachelor of Technology",
    course: "Computer Science and Engineering",
    percentage: "8.4 cgpa till 5th sem",
    institute: "Netaji Subhash Engineering College",
    logo: "",
  },
  {
    year: "2018 - 2020",
    title: "Senior Secondary Examination",
    course: "Science (PCMB)",
    percentage: "81%",
    institute: "Kendriya Vidyalaya, Andal",
    logo: "",
  },
];

function Education() {
  return (
    <div className="container mx-auto">
      <h2 className="h1 text-accent underline underline-offset-8 text-center mb-8">
        Education
      </h2>
      <section className="flex flex-col justify-center  py-12 xl-py-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {education.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-around items-center md:items-start group gap-6"
              >
                <div className="border-b border-white/20 w-full"></div>
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {item.year}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 text-center md:text-start">
                  {item.institute}
                </h2>
                <div className="text-lg">
                  <p>{item.title}</p>
                  <p>{item.course}</p>
                  <p>{item.percentage}</p>
                </div>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}

export default Education;
