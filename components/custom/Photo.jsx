"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import adityaImg from "../../utils/aditya.jpeg";
function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
        className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
      >
        <Image
          src={adityaImg}
          priority
          quality={100}
          fill
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}

export default Photo;
