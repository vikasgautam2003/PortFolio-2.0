



// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import {projects} from "@/utils/projectsList";

// export default function Projects() {
//   return (
//     <section className="relative py-32 px-6 bg-black overflow-hidden">
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-purple-600/10 blur-[200px]" />
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         <div className="mb-16 flex items-end justify-between">
//           <div>
//             <span className="text-xs tracking-[0.35em] uppercase text-purple-400">
//               Featured Websites
//             </span>
//             <h2 className="mt-4 text-4xl font-semibold text-white">
//               Selected Projects
//             </h2>
//           </div>
//           <span className="text-sm text-purple-400 hover:text-purple-300 transition cursor-pointer">
//             All Projects →
//           </span>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//           {projects.map((project) => (
//             <motion.a
//               key={project.id}
//               href={project.link}
//               target="_blank"
//               whileHover={{ y: -6 }}
//               transition={{ duration: 0.25, ease: "easeOut" }}
//               className="group relative aspect-square rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden"
//             >
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
//                 <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />
//               </div>

//               <div className="relative h-1/2 w-full overflow-hidden">
//                 <Image
//                   src={project.images[0]}
//                   alt={project.title}
//                   fill
//                   className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
//                 />
//               </div>

//               <div className="relative h-1/2 p-6 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-lg font-medium text-white leading-snug">
//                     {project.title}
//                   </h3>

//                   <p className="mt-3 text-sm text-white/55 leading-relaxed line-clamp-3">
//                     {project.description}
//                   </p>
//                 </div>

//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {project.tech.slice(0, 6).map((t) => (
//                     <span
//                       key={t}
//                       className="px-3 py-1 text-[11px] rounded-full border border-white/15 text-white/70"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }









"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/utils/projectsList";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <section className="relative py-32 px-6 bg-white overflow-hidden" id="projects">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-black/5 blur-[160px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-xs tracking-[0.35em] uppercase text-black/50">
              Portfolio
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-black tracking-tight">
              Engineering Products, Not Just Projects
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-black/60 text-xl leading-relaxed">
              Select any project card to explore its complete system design,
              architecture decisions, technology stack, key features, and live
              implementation in detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project) => (
              <motion.div
                key={project.id}
                onClick={() => setActiveProject(project)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group cursor-pointer aspect-square rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-xl transition overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-transparent" />
                </div>

                <div className="relative h-1/2 w-full overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700"
                  />
                </div>

                <div className="relative h-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-black leading-snug">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm text-black/60 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-[11px] rounded-full border border-black/20 text-black/70 bg-white hover:bg-black hover:text-white transition"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
