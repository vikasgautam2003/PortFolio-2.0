














// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function About() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const leftRailX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
//   const rightRailX = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
//   const desktopY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

//   return (
//     <section
//       ref={ref}
//       id="about"
//       className="relative min-h-screen bg-white overflow-hidden"
//     >
//       <motion.div
//         style={{ y: desktopY }}
//         className="absolute inset-0 hidden md:grid grid-cols-4 gap-6 p-12 opacity-40"
//       >
//         <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl" />
//         <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl" />
//         <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl" />
//         <div className="bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl" />
//         <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl" />
//         <div className="bg-gradient-to-br from-rose-400 to-red-500 rounded-2xl" />
//         <div className="bg-gradient-to-br from-sky-400 to-cyan-500 rounded-2xl" />
//         <div className="bg-gradient-to-br from-lime-400 to-green-500 rounded-2xl" />
//       </motion.div>

//       <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white" />

//       <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
//         <p className="text-black/50 text-xs tracking-[0.3em] uppercase mb-4">
//           About Me
//         </p>

//         <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
//           Hi There!
//         </h2>

//         <p className="text-black/70 leading-relaxed max-w-xl mb-10">
//           I’m Devansh Prakash, a passionate graphic designer with expertise in
//           visual storytelling and a sharp eye for detail. Since 2018, I’ve honed
//           my skills in crafting designs that balance creativity and precision.
//         </p>

//         <div className="flex gap-8 text-sm font-medium mb-20">
//           <a
//             href="#contact"
//             className="px-6 py-2 rounded-full bg-black text-white hover:bg-black/90 transition"
//           >
//             Let’s Connect
//           </a>
//           <a
//             href="#blog"
//             className="px-6 py-2 rounded-full border border-black/20 text-black hover:bg-black hover:text-white transition"
//           >
//             Blog
//           </a>
//         </div>

//         <div className="w-full md:hidden space-y-10 overflow-hidden">
//           <motion.div
//             style={{ x: leftRailX }}
//             className="flex w-[750%] gap-6"
//           >
//             <div className="flex gap-6 w-1/2">
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-500" />
//             </div>
//             <div className="flex gap-6 w-1/2">
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-500" />
//             </div>
//           </motion.div>

//           <motion.div
//             style={{ x: rightRailX }}
//             className="flex w-[750%] gap-6"
//           >
//             <div className="flex gap-6 w-1/2">
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-yellow-300 to-orange-400" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-rose-400 to-red-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-lime-400 to-green-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
//             </div>
//             <div className="flex gap-6 w-1/2">
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-yellow-300 to-orange-400" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-rose-400 to-red-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-lime-400 to-green-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


















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
  const desktopY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* Desktop background grid */}
 <motion.div
  style={{ y: desktopY }}
  animate={{
    scale: [1, 1.02, 1],
    opacity: [0.12, 0.16, 0.12],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute inset-0 hidden lg:grid
    grid-cols-2 gap-14
    p-20
    pointer-events-none
  "
>
  <div className="h-[22rem] rounded-[3.5rem] bg-gradient-to-br from-cyan-400 to-blue-500 blur-[3px]" />
  <div className="h-[22rem] rounded-[3.5rem] bg-gradient-to-br from-purple-400 to-pink-500 blur-[3px]" />

  <div className="h-[26rem] rounded-[3.5rem] bg-gradient-to-br from-emerald-400 to-teal-500 blur-[4px]" />
  <div className="h-[26rem] rounded-[3.5rem] bg-gradient-to-br from-yellow-300 to-orange-400 blur-[4px]" />
</motion.div>



      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/90 to-white" />

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
          >
            <p className="text-black/50 text-xs tracking-[0.3em] uppercase">
              About Me
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Me
              </span>
            </h2>

            <p className="text-base sm:text-lg text-black/70 max-w-xl leading-relaxed">
              My passion for software development comes from solving complex
              problems and translating them into scalable, user-focused
              products. I enjoy working across the stack, with particular
              interest in architecture, performance, and AI-powered systems.
            </p>

            {/* CGPA CARD */}
            <div className="mt-4 w-full max-w-xs">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] text-center">
                <p className="text-sm uppercase tracking-widest text-black/50">
                  Academic CGPA
                </p>
                <p className="mt-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  9.39
                </p>
              </div>
            </div>

            {/* SKILLS */}
            <div className="mt-6 w-full">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {[
                  "Full Stack Development",
                  "Next.js & React",
                  "System Design",
                  "LLM Integration",
                  "Backend APIs",
                  "Cloud Deployment",
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ y: -4 }}
                    className="px-4 py-2 rounded-xl bg-white border border-black/10 text-sm text-black/80 shadow-sm hover:shadow-md transition"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-black/90 transition text-center"
              >
                Let’s Connect
              </a>
              <a
                href="/project/resume1.pdf"
                download
                className="px-6 py-3 rounded-full border border-black/20 text-black font-semibold hover:bg-black hover:text-white transition text-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* RIGHT EMPTY SPACE FOR BALANCE */}
          <div className="hidden lg:block" />
        </div>

        {/* MOBILE RAILS (UNCHANGED) */}
        <div className="w-full md:hidden space-y-10 overflow-hidden mt-24">
          <motion.div style={{ x: leftRailX }} className="flex w-[1950%] gap-6">
            <div className="flex gap-6 w-1/2">
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
            </div>
            <div className="flex gap-6 w-1/2">
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
            </div>
          </motion.div>

          <motion.div style={{ x: rightRailX }} className="flex w-[1950%] gap-6">
            <div className="flex gap-6 w-1/2">
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-yellow-300 to-orange-400" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-rose-400 to-red-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-lime-400 to-green-500" />
               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
            </div>
            <div className="flex gap-6 w-1/2">
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-yellow-300 to-orange-400" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-rose-400 to-red-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-lime-400 to-green-500" />
               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
              <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
