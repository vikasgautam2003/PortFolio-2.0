




"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftRailX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const rightRailX = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const desktopY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen bg-black overflow-hidden"
    >
      <motion.div
        style={{ y: desktopY }}
        className="absolute inset-0 hidden md:grid grid-cols-4 gap-4 p-10 opacity-30"
      >
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl" />
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl" />
        <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl" />
        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl" />
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl" />
        <div className="bg-gradient-to-br from-rose-500 to-red-600 rounded-xl" />
        <div className="bg-gradient-to-br from-sky-500 to-cyan-600 rounded-xl" />
        <div className="bg-gradient-to-br from-lime-500 to-green-600 rounded-xl" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/75 to-black" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase mb-4">
          About Me
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
          Hi There!
        </h2>

        <p className="text-gray-300 leading-relaxed max-w-xl mb-10">
          I’m Devansh Prakash, a passionate graphic designer with expertise in
          visual storytelling and a sharp eye for detail. Since 2018, I’ve honed
          my skills in crafting designs that balance creativity and precision.
        </p>

        <div className="flex gap-6 text-sm font-medium mb-16">
          <a href="#contact" className="text-white hover:underline">
            Let’s Connect
          </a>
          <a href="#blog" className="text-white/70 hover:text-white">
            Blog
          </a>
        </div>

        <div className="w-full md:hidden space-y-8 overflow-hidden">
          <motion.div
            style={{ x: leftRailX }}
            className="flex w-[750%] gap-4"
          >
            <div className="flex gap-4 w-1/2">
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600" />
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500" />
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500" />
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600" />
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600" />
            </div>
            <div className="flex gap-4 w-1/2">
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600" />
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500" />
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500" />
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600" />
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600" />
            </div>
          </motion.div>

          <motion.div
            style={{ x: rightRailX }}
            className="flex w-[750%] gap-4"
          >
            <div className="flex gap-4 w-1/2">
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500" />
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-rose-500 to-red-600" />
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-lime-500 to-green-600" />
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600" />
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500" />
            </div>
            <div className="flex gap-4 w-1/2">
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500" />
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-rose-500 to-red-600" />
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-lime-500 to-green-600" />
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600" />
              <div className="w-[280px] h-46 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


