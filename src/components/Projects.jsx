






// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { projects } from "@/utils/projectsList";
// import ProjectModal from "./ProjectModal";

// export default function Projects() {
//   const [activeProject, setActiveProject] = useState(null);

//   return (
//     <>
//       <section
//         className="relative py-32 px-6 bg-white overflow-hidden"
//         id="projects"
//       >
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-black/5 blur-[160px]" />
//         </div>

//         <div className="relative max-w-7xl mx-auto">
//           {/* HEADER */}
//           <div className="mb-20 text-center">
//             <span className="text-xs tracking-[0.35em] uppercase text-black/50">
//               Portfolio
//             </span>

//             <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-black tracking-tight">
//               Engineering Products, Not Just Projects
//             </h2>

//             <p className="mt-6 max-w-3xl mx-auto text-black/60 text-xl leading-relaxed">
//               Select any project card to explore its complete system design,
//               architecture decisions, technology stack, key features, and live
//               implementation in detail.
//             </p>
//           </div>

//           {/* PROJECT GRID */}
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//             {projects.slice(0, 6).map((project) => (
//               <motion.div
//                 key={project.id}
//                 onClick={() => setActiveProject(project)}
//                 transition={{ duration: 0.2, ease: "easeOut" }}
//                 className="
//                   cursor-pointer aspect-[5/6]
//                   rounded-2xl border border-black/10
//                   bg-white shadow-sm hover:shadow-md
//                   transition overflow-hidden
//                 "
//               >
//                 <div className="relative h-1/2 w-full overflow-hidden">
//                   <Image
//                     src={project.images[0]}
//                     alt={project.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 <div className="relative h-1/2 p-6 flex flex-col">
//                   <div>
//                     <h3 className="text-lg font-medium text-black leading-snug">
//                       {project.title}
//                     </h3>

//                     <p className="mt-3 text-sm text-black/60 leading-relaxed line-clamp-3">
//                       {project.description}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* VIEW MORE */}
//           <div className="mt-20 flex justify-center">
//             <Link
//               href="/projects"
//               className="
//                 group inline-flex items-center gap-3
//                 px-10 py-4 rounded-full
//                 bg-black text-white text-sm font-medium
//                 shadow-lg hover:shadow-xl
//                 transition
//               "
//             >
//               View More Projects
//               <span className="transition group-hover:translate-x-1">→</span>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* MODAL */}
//       <ProjectModal
//         project={activeProject}
//         onClose={() => setActiveProject(null)}
//       />
//     </>
//   );
// }













"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/utils/projectsList";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <section
        className="relative py-32 px-6 bg-white overflow-hidden"
        id="projects"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-black/5 blur-[160px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* HEADER */}
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

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project) => (
              <motion.article
                key={project.id}
                onClick={() => setActiveProject(project)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative rounded-3xl overflow-hidden cursor-pointer shadow-[0_40px_120px_rgba(0,0,0,0.25)]"
              >
                {/* IMAGE */}
                <div className="relative h-[360px]">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/75 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 max-h-[56px] overflow-hidden">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-[11px] rounded-full bg-white/15 text-white/85 backdrop-blur"
                      >
                        {t}
                      </span>
                    ))}

                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 text-[11px] rounded-full bg-white/25 text-white/90 backdrop-blur">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* VIEW MORE */}
          <div className="mt-20 flex justify-center">
            <Link
              href="/projects"
              className="
                group inline-flex items-center gap-3
                px-10 py-4 rounded-full
                bg-black text-white text-sm font-medium
                shadow-lg hover:shadow-xl
                transition
              "
            >
              View More Projects
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
