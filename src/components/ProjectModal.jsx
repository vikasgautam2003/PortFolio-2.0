// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// export default function ProjectModal({ project, onClose }) {
//   if (!project) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center px-6"
//       >
//         <motion.div
//           initial={{ y: 40, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 40, opacity: 0 }}
//           transition={{ duration: 0.35, ease: "easeOut" }}
//           className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-black"
//         >
//           <div className="relative h-[300px] w-full overflow-hidden">
//             <Image
//               src={project.images[0]}
//               alt={project.title}
//               fill
//               className="object-cover opacity-70"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
//           </div>

//           <div className="p-10 space-y-10">
//             <div>
//               <h2 className="text-3xl font-semibold text-white">
//                 {project.title}
//               </h2>
//               <p className="mt-4 text-white/60 leading-relaxed">
//                 {project.longDescriptions?.[0]}
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               {project.tech.map((t) => (
//                 <span
//                   key={t}
//                   className="px-4 py-2 rounded-full border border-white/15 text-sm text-white/70"
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {project.images.map((img, i) => (
//                 <div
//                   key={i}
//                   className="relative aspect-video rounded-xl overflow-hidden border border-white/10"
//                 >
//                   <Image
//                     src={img}
//                     alt=""
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               ))}
//             </div>

//             <div>
//               <h3 className="text-xl font-medium text-white mb-4">
//                 Key Features
//               </h3>
//               <ul className="space-y-3 text-white/70">
//                 {project.keyFeatures?.map((f, i) => (
//                   <li key={i} className="flex gap-3">
//                     <span className="text-white">•</span>
//                     <span>{f}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {project.video && (
//               <div className="rounded-2xl overflow-hidden border border-white/10">
//                 <video
//                   src={project.video}
//                   controls
//                   className="w-full"
//                 />
//               </div>
//             )}

//             <div className="flex gap-6">
//               <a
//                 href={project.link}
//                 target="_blank"
//                 className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition"
//               >
//                 Live Website
//               </a>
//               <a
//                 href={project.sourceCode}
//                 target="_blank"
//                 className="px-6 py-3 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>

//           <button
//             onClick={onClose}
//             className="absolute top-6 right-6 text-white/50 hover:text-white text-sm"
//           >
//             ✕ Close
//           </button>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }









"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0);
  if (!project) return null;

  const next = () =>
    setIndex((i) => (i + 1) % project.images.length);
  const prev = () =>
    setIndex((i) => (i === 0 ? project.images.length - 1 : i - 1));

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xl flex items-center justify-center px-6"
      >
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white text-black shadow-2xl"
        >
          {/* IMAGE CAROUSEL */}
          <div className="relative h-[420px] w-full overflow-hidden rounded-t-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={project.images[index]}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:scale-105 transition"
            >
              ←
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:scale-105 transition"
            >
              →
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-8 rounded-full transition ${
                    i === index ? "bg-black" : "bg-black/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="px-12 py-16 space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-semibold">
                {project.title}
              </h2>
              <p className="mt-6 max-w-4xl mx-auto text-gray-600 leading-relaxed">
                {project.longDescriptions?.[0]}
              </p>
              {project.longDescriptions?.[1] && (
                <p className="mt-4 max-w-4xl mx-auto text-gray-500 leading-relaxed">
                  {project.longDescriptions[1]}
                </p>
              )}
            </div>

            {/* TECH STACK */}
            <div className="flex flex-wrap justify-center gap-3">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-5 py-2 rounded-full border border-black/20 bg-white shadow-sm text-sm hover:shadow-md transition"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* FEATURES */}
            <div>
              <h3 className="text-2xl font-medium text-center mb-10">
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {project.keyFeatures?.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-2xl border border-black/10 bg-gray-50 p-6 hover:shadow-md transition"
                  >
                    {f}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex justify-center gap-8">
              <a
                href={project.link}
                target="_blank"
                className="px-12 py-4 rounded-full bg-black text-white font-medium hover:scale-[1.02] transition"
              >
                Live Website
              </a>
              <a
                href={project.sourceCode}
                target="_blank"
                className="px-12 py-4 rounded-full border border-black text-black font-medium hover:bg-black hover:text-white transition"
              >
                GitHub
              </a>
            </div>

            {/* VIDEO */}
            {project.video && (
              <div className="rounded-2xl overflow-hidden border border-black/10">
                <video
                  src={project.video}
                  controls
                  className="w-full"
                />
              </div>
            )}

            {/* CLOSE */}
            <div className="flex justify-center">
              <button
                onClick={onClose}
                className="px-10 py-3 rounded-full border border-black/30 text-black hover:bg-black hover:text-white transition"
              >
                Close
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-black/50 hover:text-black text-xl"
          >
            ×
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
