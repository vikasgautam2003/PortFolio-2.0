










"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-white flex items-center justify-center px-4">

      <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[780px] h-[90vw] max-h-[780px] bg-black/20 blur-[180px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/85 to-white" />

      <div className="relative z-10 text-center w-full max-w-5xl">

        <p className="font-primary text-black/60 text-[0.65rem] sm:text-xs tracking-[0.35em] uppercase mb-8">
          Building performant, scalable web experiences
        </p>

        <div className="relative inline-block w-full overflow-hidden">
          <motion.h1
  initial={{
    opacity: 0,
    y: 40,
    scale: 0.96,
    filter: "blur(6px)",
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1], // premium easeOut
  }}
  className="
    font-[var(--font-title)]
    font-black
    text-[clamp(3.8rem,18vw,10rem)]
    sm:text-[clamp(5rem,30vw,11.5rem)]
    leading-[0.72]
    tracking-[-0.075em]
    scale-x-[0.82]
    text-black
    drop-shadow-[0_20px_55px_rgba(0,0,0,0.22)]
    select-none
    mx-auto
    relative
  "
>
  Hi there, I'm Vikas
</motion.h1>

        </div>

      <motion.p
  initial={{ opacity: 0, y: 14 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
  className="
    mt-7
    max-w-3xl
    mx-auto
    text-black/65
    text-sm
    sm:text-base
    lg:text-lg
    leading-relaxed
    tracking-wide
  "
>
  Aspiring Full-Stack Web Developer focused on integrating
  <span className="font-medium text-black"> Large Language Models </span>
  into scalable, production-ready applications.
</motion.p>



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="/projects"
            className="
              px-8 py-3.5 rounded-full
              font-primary text-sm font-semibold
              text-black
              bg-white
              border border-black/15
              hover:bg-black hover:text-white
              hover:scale-[1.03]
              transition-all duration-300
              shadow-sm
              w-full sm:w-auto
            "
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="
              px-9 py-3.5 rounded-full
              font-primary text-sm font-semibold
              text-white
              bg-black
              hover:bg-black/90
              hover:scale-[1.03]
              transition-all duration-300
              shadow-[0_16px_40px_rgba(0,0,0,0.3)]
              w-full sm:w-auto
            "
          >
            Connect with Me
          </a>
        </motion.div>

      </div>
    </section>
  );
}
