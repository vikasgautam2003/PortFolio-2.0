










// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// export default function ProjectModal({ project, onClose }) {
//   const [index, setIndex] = useState(0);
//   if (!project) return null;

//   const next = () =>
//     setIndex((i) => (i + 1) % project.images.length);
//   const prev = () =>
//     setIndex((i) => (i === 0 ? project.images.length - 1 : i - 1));






//   return (
//     <AnimatePresence>
//       <motion.div
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   exit={{ opacity: 0 }}
//    onClick={() => {
//     if (window.innerWidth >= 1024) onClose();
//   }}
//   className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xl flex items-center justify-center px-3 sm:px-6"
// >

//         <motion.div
//   onClick={(e) => e.stopPropagation()}
//   initial={{ y: 40, opacity: 0, scale: 0.96 }}
//   animate={{ y: 0, opacity: 1, scale: 1 }}
//   exit={{ y: 40, opacity: 0, scale: 0.96 }}
//   transition={{ duration: 0.45, ease: "easeOut" }}
//           className="
//             relative w-full max-w-6xl
//             max-h-[92vh]
//             overflow-y-auto
//             rounded-3xl
//             bg-white text-black
//             shadow-2xl
//           "
//         >
//           {/* IMAGE CAROUSEL */}
//           <div className="relative w-full h-[240px] sm:h-[320px] md:h-[420px] overflow-hidden rounded-t-3xl">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: 30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -30 }}
//                 transition={{ duration: 0.35, ease: "easeOut" }}
//                 className="absolute inset-0"
//               >
//                 <Image
//                   src={project.images[index]}
//                   alt={project.title}
//                   fill
//                   className="object-cover"
//                 />
//               </motion.div>
//             </AnimatePresence>

//             <button
//               onClick={prev}
//               className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:scale-105 transition"
//             >
//               ←
//             </button>

//             <button
//               onClick={next}
//               className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:scale-105 transition"
//             >
//               →
//             </button>

//             <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
//               {project.images.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setIndex(i)}
//                   className={`h-2 w-6 sm:w-8 rounded-full transition ${
//                     i === index ? "bg-black" : "bg-black/30"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* CONTENT */}
//           <div className="px-6 sm:px-10 md:px-12 py-10 sm:py-14 space-y-12">
//             {/* TITLE */}
//             <div className="text-center">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
//                 {project.title}
//               </h2>
//               <p className="mt-4 sm:mt-6 max-w-4xl mx-auto text-gray-600 leading-relaxed text-sm sm:text-base">
//                 {project.longDescriptions?.[0]}
//               </p>
//               {project.longDescriptions?.[1] && (
//                 <p className="mt-3 max-w-4xl mx-auto text-gray-500 leading-relaxed text-sm sm:text-base">
//                   {project.longDescriptions[1]}
//                 </p>
//               )}
//             </div>

//             {/* TECH STACK */}
//             <div className="flex flex-wrap justify-center gap-3">
//               {project.tech.map((tech, i) => (
//                 <motion.span
//                   key={tech}
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.04 }}
//                   className="
//                     px-4 sm:px-5 py-2
//                     rounded-full
//                     border border-black/20
//                     bg-white
//                     shadow-sm
//                     text-xs sm:text-sm
//                     hover:shadow-md
//                     transition
//                   "
//                 >
//                   {tech}
//                 </motion.span>
//               ))}
//             </div>


//              {/* VIDEO */}
//             {project.video && (
//               <div className="rounded-2xl overflow-hidden border border-black/10">
//                 <video
//                   src={project.video}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="w-full h-auto"
//                 />
//               </div>
//             )}

//             {/* FEATURES */}
//             <div>
//               <h3 className="text-xl sm:text-2xl font-medium text-center mb-8">
//                 Key Features
//               </h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
//                 {project.keyFeatures?.map((f, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 16 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="
//                       rounded-2xl
//                       border border-black/10
//                       bg-gray-50
//                       p-5
//                       text-sm
//                       hover:shadow-md
//                       transition
//                     "
//                   >
//                     {f}
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* BUTTONS */}
//             <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
//               <a
//                 href={project.link}
//                 target="_blank"
//                 className="
//                   w-full sm:w-auto
//                   px-10 sm:px-12 py-3.5 sm:py-4
//                   rounded-full
//                   bg-black text-white
//                   font-medium
//                   text-center
//                   hover:scale-[1.02]
//                   transition
//                 "
//               >
//                 Live Website
//               </a>
//               <a
//                 href={project.sourceCode}
//                 target="_blank"
//                 className="
//                   w-full sm:w-auto
//                   px-10 sm:px-12 py-3.5 sm:py-4
//                   rounded-full
//                   border border-black
//                   text-black
//                   font-medium
//                   text-center
//                   hover:bg-black hover:text-white
//                   transition
//                 "
//               >
//                 GitHub
//               </a>
//             </div>

           

//             {/* CLOSE */}
//             <div className="flex justify-center">
//               <button
//                 onClick={onClose}
//                 className="
//                   px-10 py-3
//                   rounded-full
//                   border border-black/30
//                   text-black
//                   hover:bg-black hover:text-white
//                   transition
//                 "
//               >
//                 Close
//               </button>
//             </div>
//           </div>

//           <button
//             onClick={onClose}
//             className="absolute top-4 sm:top-6 right-4 sm:right-6 text-black/50 hover:text-black text-xl"
//           >
//             ×
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

  // If no project is selected, do not render the modal
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
        onClick={() => {
          if (window.innerWidth >= 1024) onClose();
        }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xl flex items-center justify-center px-3 sm:px-6"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ y: 40, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 40, opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="
            relative w-full max-w-6xl
            max-h-[92vh]
            overflow-y-auto
            rounded-3xl
            bg-white text-black
            shadow-2xl
          "
        >
          {/* Image Slider Section */}
          <div className="relative w-full h-[240px] sm:h-[320px] md:h-[420px] overflow-hidden rounded-t-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={project.images[index]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:scale-105 transition"
            >
              ←
            </button>

            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:scale-105 transition"
            >
              →
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-6 sm:w-8 rounded-full transition ${
                    i === index ? "bg-black" : "bg-black/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="px-6 sm:px-10 md:px-12 py-10 sm:py-14 space-y-12">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                {project.title}
              </h2>
              <p className="mt-4 sm:mt-6 max-w-4xl mx-auto text-gray-600 leading-relaxed text-sm sm:text-base">
                {project.longDescriptions?.[0]}
              </p>
              {project.longDescriptions?.[1] && (
                <p className="mt-3 max-w-4xl mx-auto text-gray-500 leading-relaxed text-sm sm:text-base">
                  {project.longDescriptions[1]}
                </p>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="
                    px-4 sm:px-5 py-2
                    rounded-full
                    border border-black/20
                    bg-white
                    shadow-sm
                    text-xs sm:text-sm
                    hover:shadow-md
                    transition
                  "
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Video Section - Only renders if project.video exists */}
            {project.video && (
              <div className="rounded-2xl overflow-hidden border border-black/10">
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                />
              </div>
            )}

            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-center mb-8">
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {project.keyFeatures?.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="
                      rounded-2xl
                      border border-black/10
                      bg-gray-50
                      p-5
                      text-sm
                      hover:shadow-md
                      transition
                    "
                  >
                    {f}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              <a
                href={project.link}
                target="_blank"
                className="
                  w-full sm:w-auto
                  px-10 sm:px-12 py-3.5 sm:py-4
                  rounded-full
                  bg-black text-white
                  font-medium
                  text-center
                  hover:scale-[1.02]
                  transition
                "
              >
                Live Website
              </a>
              <a
                href={project.sourceCode}
                target="_blank"
                className="
                  w-full sm:w-auto
                  px-10 sm:px-12 py-3.5 sm:py-4
                  rounded-full
                  border border-black
                  text-black
                  font-medium
                  text-center
                  hover:bg-black hover:text-white
                  transition
                "
              >
                GitHub
              </a>
            </div>

            <div className="flex justify-center">
              <button
                onClick={onClose}
                className="
                  px-10 py-3
                  rounded-full
                  border border-black/30
                  text-black
                  hover:bg-black hover:text-white
                  transition
                "
              >
                Close
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 text-black/50 hover:text-black text-xl"
          >
            ×
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}