










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
//   const desktopY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

//   return (
//     <section
//       ref={ref}
//       id="about"
//       className="relative min-h-screen bg-white overflow-hidden"
//     >
//       {/* Desktop background grid */}
//  <motion.div
//   style={{ y: desktopY }}
//   animate={{
//     scale: [1, 1.02, 1],
//     opacity: [0.12, 0.16, 0.12],
//   }}
//   transition={{
//     duration: 20,
//     repeat: Infinity,
//     ease: "easeInOut",
//   }}
//   className="
//     absolute inset-0 hidden lg:grid
//     grid-cols-2 gap-14
//     p-20
//     pointer-events-none
//   "
// >
//   <div className="h-[22rem] rounded-[3.5rem] bg-gradient-to-br from-cyan-400 to-blue-500 blur-[3px]" />
//   <div className="h-[22rem] rounded-[3.5rem] bg-gradient-to-br from-purple-400 to-pink-500 blur-[3px]" />

//   <div className="h-[26rem] rounded-[3.5rem] bg-gradient-to-br from-emerald-400 to-teal-500 blur-[4px]" />
//   <div className="h-[26rem] rounded-[3.5rem] bg-gradient-to-br from-yellow-300 to-orange-400 blur-[4px]" />
// </motion.div>



//       <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/90 to-white" />

//       <div className="relative z-10 min-h-screen flex flex-col justify-center px-6">
//         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
//           {/* LEFT CONTENT */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={{
//               hidden: { opacity: 0, y: 40 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: { duration: 0.8, ease: "easeOut" },
//               },
//             }}
//             className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
//           >
//             <p className="text-black/50 text-xs tracking-[0.3em] uppercase">
//               About Me
//             </p>

//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black">
//               About{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//                 Me
//               </span>
//             </h2>

//             <p className="text-base sm:text-lg text-black/70 max-w-xl leading-relaxed">
//               My passion for software development comes from solving complex
//               problems and translating them into scalable, user-focused
//               products. I enjoy working across the stack, with particular
//               interest in architecture, performance, and AI-powered systems.
//             </p>

//             {/* CGPA CARD */}
//             <div className="mt-4 w-full max-w-xs">
//               <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] text-center">
//                 <p className="text-sm uppercase tracking-widest text-black/50">
//                   Academic CGPA
//                 </p>
//                 <p className="mt-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//                   9.39
//                 </p>
//               </div>
//             </div>

//             {/* SKILLS */}
//             <div className="mt-6 w-full">
//               <h3 className="text-2xl font-semibold text-black mb-4">
//                 Core Skills
//               </h3>
//               <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
//                 {[
//                   "Full Stack Development",
//                   "Next.js & React",
//                   "System Design",
//                   "LLM Integration",
//                   "Backend APIs",
//                   "Cloud Deployment",
//                 ].map((skill) => (
//                   <motion.div
//                     key={skill}
//                     whileHover={{ y: -4 }}
//                     className="px-4 py-2 rounded-xl bg-white border border-black/10 text-sm text-black/80 shadow-sm hover:shadow-md transition"
//                   >
//                     {skill}
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* CTA */}
//             <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center lg:justify-start">
//               <a
//                 href="#contact"
//                 className="px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-black/90 transition text-center"
//               >
//                 Let’s Connect
//               </a>
//               <a
//                 href="/project/resume1.pdf"
//                 download
//                 className="px-6 py-3 rounded-full border border-black/20 text-black font-semibold hover:bg-black hover:text-white transition text-center"
//               >
//                 Download Resume
//               </a>
//             </div>
//           </motion.div>

//           {/* RIGHT EMPTY SPACE FOR BALANCE */}
//           <div className="hidden lg:block" />
//         </div>

//         {/* MOBILE RAILS (UNCHANGED) */}
//         <div className="w-full md:hidden space-y-10 overflow-hidden mt-24">
//           <motion.div style={{ x: leftRailX }} className="flex w-[1950%] gap-6">
//             <div className="flex gap-6 w-1/2">
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
//                <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
//                <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
//                <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
//             </div>
//             <div className="flex gap-6 w-1/2">
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
//                <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
//                <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
//                <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
//             </div>
//           </motion.div>

//           <motion.div style={{ x: rightRailX }} className="flex w-[1950%] gap-6">
//             <div className="flex gap-6 w-1/2">
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-yellow-300 to-orange-400" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-rose-400 to-red-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-lime-400 to-green-500" />
//                <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
//                <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
//                <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
//             </div>
//             <div className="flex gap-6 w-1/2">
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-yellow-300 to-orange-400" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-rose-400 to-red-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-lime-400 to-green-500" />
//                <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
//                <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
//                <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />
//               <div className="w-[280px] h-44 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500" />
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
import Image from "next/image";

const images = [
  "alison.png","back.png","dev.png","form2.png","gen.png","gen2.png","image.png",
  "med1.png","pack1.png","post2.png","pack.png","s1.png","sys.png","vidq.png",
  "X.png","Nex.png","multi.png","hostel1.png","hostel2.png","image3.png",
  "cogni1.png","bonzo.png","code1.png","bonzo1.png","cogni2.png","form1.png",
  "dev1.png","dev2.png","gen1.png","back2.png","alison1.png","code.png",
  "med.png","s2.png","s.png","vidq2.png","sys1.png","q.png","q1.png"
];

const pick = (i) => `/project/${images[i % images.length]}`;

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
      <motion.div
        style={{ y: desktopY }}
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.43, 0.46, 0.72],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 hidden lg:grid grid-cols-2 gap-14 p-20 pointer-events-none"
      >
        <div className="relative h-[22rem] rounded-[3.5rem] overflow-hidden">
          <Image src={pick(0)} alt="" fill className="object-cover" />
        </div>
        <div className="relative h-[22rem] rounded-[3.5rem] overflow-hidden">
          <Image src={pick(1)} alt="" fill className="object-cover" />
        </div>
        <div className="relative h-[26rem] rounded-[3.5rem] overflow-hidden">
          <Image src={pick(2)} alt="" fill className="object-cover" />
        </div>
        <div className="relative h-[26rem] rounded-[3.5rem] overflow-hidden">
          <Image src={pick(3)} alt="" fill className="object-cover" />
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/90 to-white" />

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
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

          <div className="hidden lg:block" />
        </div>

        <div className="w-full md:hidden space-y-10 overflow-hidden mt-24">
          <motion.div style={{ x: leftRailX }} className="flex w-[1950%] gap-6">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="relative w-[280px] h-44 rounded-2xl overflow-hidden"
              >
                <Image src={pick(i)} alt="" fill className="object-cover" />
              </div>
            ))}
          </motion.div>

          <motion.div style={{ x: rightRailX }} className="flex w-[1950%] gap-6">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="relative w-[280px] h-44 rounded-2xl overflow-hidden"
              >
                <Image src={pick(i + 24)} alt="" fill className="object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
