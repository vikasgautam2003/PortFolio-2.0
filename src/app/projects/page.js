













// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { projects } from "@/utils/projectsList";
// import ProjectModal from "@/components/ProjectModal";

// export default function ProjectsShowcase() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [openProject, setOpenProject] = useState(null);

//   const activeProject = projects[activeIndex];

//   return (
//     <>
//       <section className="relative min-h-screen bg-black text-white px-6 py-52 overflow-hidden">
//         {/* ambient */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1600px] bg-white/4 blur-[300px]" />
//         </div>

//         <div className="relative max-w-[92rem] mx-auto">
//           {/* HEADER */}
//           <div className="mb-32">
//             <p className="text-xl tracking-[0.45em] uppercase text-white/35 mb-4">
//               My Projects
//             </p>
//             <motion.div
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="origin-left w-24 h-px bg-white/30"
//             />
//           </div>

//           {/* FEATURED PROJECT */}
//           <div className="grid lg:grid-cols-2 gap-24 items-center">
//             {/* LEFT — STORY */}
//             <motion.div
//               initial={{ opacity: 0, y: 24 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <p className="text-sm uppercase tracking-wide text-white/40 mb-4">
//                 Featured Case Study
//               </p>

//               <h3 className="text-3xl lg:text-4xl font-medium leading-snug">
//                 {activeProject.title}
//               </h3>

//               <p className="mt-6 text-white/60 leading-relaxed max-w-xl">
//                 {activeProject.longDescriptions?.[0] ||
//                   activeProject.description}
//               </p>

//               <div className="mt-10 flex flex-wrap gap-3">
//                 {activeProject.tech.slice(0, 8).map((t) => (
//                   <span
//                     key={t}
//                     className="px-4 py-2 text-xs rounded-full border border-white/15 text-white/70"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               {/* ACTIONS */}
//               <div className="mt-14 flex flex-wrap items-center gap-6">
//                 <motion.button
//                   whileHover={{ y: -2 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => setOpenProject(activeProject)}
//                   className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition"
//                 >
//                   View Case Study →
//                 </motion.button>

//                 {activeProject.link && (
//                   <motion.a
//                     href={activeProject.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ y: -2 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white hover:text-black transition"
//                   >
//                     Live Website ↗
//                   </motion.a>
//                 )}
//               </div>
//             </motion.div>

//             {/* RIGHT — VISUAL */}
//             <motion.div
//               key={activeProject.id}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="relative"
//             >
//               <div className="relative aspect-[16/9] rounded-[28px] overflow-hidden shadow-[0_60px_160px_rgba(0,0,0,0.75)]">
//                 <Image
//                   src={activeProject.images[0]}
//                   alt={activeProject.title}
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
//               </div>
//             </motion.div>
//           </div>

//           {/* ARCHIVE */}
//           {/* ARCHIVE */}
// <div className="mt-36">
//   <p className="text-xs tracking-[0.35em] uppercase text-white/30 mb-10">
//     Project Archive
//   </p>

//   <div className="relative">
//     <div
//       className="
//         flex gap-10
//         overflow-x-auto
//         pb-10
//         snap-x snap-mandatory
//         scrollbar-hide
//       "
//     >
//       {projects.map((project, i) => {
//         const isActive = i === activeIndex;

//         return (
//           <motion.div
//             key={project.id}
//             onClick={() => setActiveIndex(i)}
//             whileHover={{ y: -10 }}
//             transition={{ type: "spring", stiffness: 200, damping: 20 }}
//             className={`
//               snap-center
//               relative
//               min-w-[300px]
//               rounded-3xl
//               cursor-pointer
//               overflow-hidden
//               transition-all duration-500
//               ${
//                 isActive
//                   ? "bg-white/20 scale-[1.05]"
//                   : "bg-white/5 scale-[0.95] opacity-70 hover:opacity-100"
//               }
//             `}
//           >
//             {/* IMAGE */}
//             <div className="relative h-44">
//               <Image
//                 src={project.images[0]}
//                 alt={project.title}
//                 fill
//                 className={`
//                   object-cover transition duration-700
//                   ${isActive ? "scale-105" : "scale-100"}
//                 `}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
//             </div>

//             {/* CONTENT */}
//             <div className="p-6">
//               <p className="text-sm font-medium leading-snug">
//                 {project.title}
//               </p>
//               <p className="text-xs text-white/45 mt-3 line-clamp-2">
//                 {project.description}
//               </p>
//             </div>

//             {/* ACTIVE RING */}
//             {isActive && (
//               <motion.div
//                 layoutId="archive-active-ring"
//                 className="
//                   absolute inset-0
//                   rounded-3xl
//                   ring-1 ring-white/40
//                   pointer-events-none
//                 "
//               />
//             )}
//           </motion.div>
//         );
//       })}
//     </div>

//     {/* FADE EDGES */}
//     <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent" />
//     <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent" />
//   </div>
// </div>
// </div>
//       </section>

//       <ProjectModal
//         project={openProject}
//         onClose={() => setOpenProject(null)}
//       />
//     </>
//   );
// }




















// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { projects } from "@/utils/projectsList";
// import ProjectModal from "@/components/ProjectModal";

// export default function ProjectsShowcase() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [openProject, setOpenProject] = useState(null);
//   const [search, setSearch] = useState("");


//   const activeProject = projects[activeIndex];

//   return (
//     <>
//       <section className="relative min-h-screen bg-white text-black overflow-hidden">
//         {/* CINEMATIC BACKDROP */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-white to-white" />
//         </div>

//         {/* TOP BAR */}
//         <div className="relative z-20 flex items-center justify-between px-10 pt-8">
//           <button
//             onClick={() => window.history.back()}
//             className="text-sm font-medium text-black/60 hover:text-black transition"
//           >
//             ← Back
//           </button>

//           <h1 className="text-sm tracking-[0.45em] uppercase text-black/60">
//             My Projects
//           </h1>

//           <div className="w-16" />
//         </div>

//         {/* HERO PROJECT */}
//         <div className="relative z-10 mt-20 max-w-[92rem] mx-auto px-10">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeProject.id}
//               initial={{ opacity: 0, scale: 1.02 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="grid lg:grid-cols-2 gap-24 items-center"
//             >
//               {/* LEFT — STORY */}
//               <div>
//                 <p className="text-xs tracking-[0.35em] uppercase text-black/50 mb-4">
//                   Featured Project
//                 </p>

//                 <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
//                   {activeProject.title}
//                 </h2>

//                 <p className="mt-6 text-black/65 max-w-xl leading-relaxed">
//                   {activeProject.longDescriptions?.[0] ||
//                     activeProject.description}
//                 </p>

//                 <div className="mt-8 flex flex-wrap gap-3">
//                   {activeProject.tech.slice(0, 6).map((t) => (
//                     <span
//                       key={t}
//                       className="px-4 py-2 text-xs rounded-full border border-black/15 text-black/70"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="mt-12 flex gap-6">
//                   <motion.button
//                     whileHover={{ y: -2 }}
//                     onClick={() => setOpenProject(activeProject)}
//                     className="px-8 py-4 rounded-full bg-black text-white text-sm font-medium hover:bg-black/90 transition"
//                   >
//                     View Case Study →
//                   </motion.button>

//                   {activeProject.link && (
//                     <motion.a
//                       href={activeProject.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       whileHover={{ y: -2 }}
//                       className="px-8 py-4 rounded-full border border-black/30 text-black text-sm font-medium hover:bg-black hover:text-white transition"
//                     >
//                       Live Website ↗
//                     </motion.a>
//                   )}
//                 </div>
//               </div>

//               {/* RIGHT — CINEMATIC VISUAL */}
//               <div className="relative aspect-[16/9] rounded-[36px] overflow-hidden shadow-[0_40px_140px_rgba(0,0,0,0.35)]">
//                 <Image
//                   src={activeProject.images[0]}
//                   alt={activeProject.title}
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* MOUSE-DRIVEN THUMB STRIP */}
//     <div className="relative z-10 mt-28 pb-28">
//   <div className="max-w-[92rem] mx-auto px-10">
//     <div className="flex items-center justify-between mb-10">
//       <p className="text-xs tracking-[0.35em] uppercase text-black/40">
//         Browse Projects
//       </p>

//       <input
//         type="text"
//         placeholder="Search projects..."
//         onChange={(e) => setSearch(e.target.value)}
//         className="
//           w-72 px-4 py-2 text-sm rounded-full
//           border border-black/20
//           text-black placeholder-black/40
//           focus:outline-none focus:border-black
//         "
//       />
//     </div>

//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//       {projects
//         .filter((project) => {
//           if (!search) return true;
//           const q = search.toLowerCase();
//           return (
//             project.title.toLowerCase().includes(q) ||
//             project.description.toLowerCase().includes(q)
//           );
//         })
//         .map((project, i) => {
//           const isActive = i === activeIndex;

//           return (
//             <motion.article
//               key={project.id}
//               onMouseEnter={() => setActiveIndex(i)}
//               onClick={() => setOpenProject(project)}
//               whileHover={{ y: -8 }}
//               transition={{ duration: 0.35, ease: "easeOut" }}
//               className={`
//                 relative
//                 cursor-pointer
//                 rounded-3xl
//                 overflow-hidden
//                 bg-black
//                 group
//                 shadow-[0_40px_120px_rgba(0,0,0,0.25)]
//                 ${isActive ? "ring-2 ring-black/50" : ""}
//               `}
//             >
//               {/* IMAGE */}
//               <div className=" relative min-h-[340px]">
//                 <Image
//                   src={project.images[0]}
//                   alt={project.title}
//                   width={800}
//                   height={600}
//                   className="
//                     w-full
//                     h-auto
//                     object-cover
//                     transition-transform duration-700
//                     group-hover:scale-105
//                   "
//                 />

//                 {/* GRADIENT OVERLAY */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//               </div>

//               {/* CONTENT OVERLAY */}
//               <div className="absolute inset-0 flex flex-col justify-end p-6">
//                 <h3 className="text-lg font-semibold text-white leading-snug">
//                   {project.title}
//                 </h3>

//                 <p className="mt-2 text-sm text-white/75 leading-relaxed">
//                   {project.description}
//                 </p>

//                 {/* TECH STACK */}
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {project.tech.slice(0, 5).map((t) => (
//                     <span
//                       key={t}
//                       className="
//                         px-3 py-1 text-[11px]
//                         rounded-full
//                         bg-white/15
//                         text-white/80
//                         backdrop-blur
//                       "
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* HOVER FRAME */}
//               <div className="
//                 absolute inset-0
//                 rounded-3xl
//                 ring-1 ring-white/0
//                 group-hover:ring-white/30
//                 transition
//                 pointer-events-none
//               " />
//             </motion.article>
//           );
//         })}
//     </div>
//   </div>
// </div>


//       </section>

//       <ProjectModal
//         project={openProject}
//         onClose={() => setOpenProject(null)}
//       />
//     </>
//   );
// }















// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { projects } from "@/utils/projectsList";
// import ProjectModal from "@/components/ProjectModal";
// import ProjectHoverPreview from "@/components/ProjectHoverPreview";

// export default function ProjectsShowcase() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [hoveredProject, setHoveredProject] = useState(null);
//   const [openProject, setOpenProject] = useState(null);
//   const [search, setSearch] = useState("");
//   const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
// const [mousePos, setMousePos] = useState({ x: 0, y: 0 });


//   const activeProject = projects[activeIndex];

//   return (
//     <>
//       <section className="relative min-h-screen bg-white text-black overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-white to-white pointer-events-none" />

//         <div className="relative z-20 flex items-center justify-between px-10 pt-8">
//           <button
//             onClick={() => window.history.back()}
//             className="text-sm font-medium text-black/60 hover:text-black"
//           >
//             ← Back
//           </button>
//           <h1 className="text-sm tracking-[0.45em] uppercase text-black/60">
//             My Projects
//           </h1>
//           <div className="w-16" />
//         </div>

//         <div className="relative z-10 mt-20 max-w-[92rem] mx-auto px-10">
//           <motion.div
//             key={activeProject.id}
//             initial={{ opacity: 0, scale: 1.02 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="grid lg:grid-cols-2 gap-24 items-center"
//           >
//             <div>
//               <p className="text-xs tracking-[0.35em] uppercase text-black/50 mb-4">
//                 Featured Project
//               </p>

//               <h2 className="text-4xl lg:text-5xl font-semibold">
//                 {activeProject.title}
//               </h2>

//               <p className="mt-6 text-black/65 max-w-xl leading-relaxed">
//                 {activeProject.longDescriptions?.[0] ||
//                   activeProject.description}
//               </p>

//               <div className="mt-8 flex flex-wrap gap-3">
//                 {activeProject.tech.slice(0, 6).map((t) => (
//                   <span
//                     key={t}
//                     className="px-4 py-2 text-xs rounded-full border border-black/15 text-black/70"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               <div className="mt-12">
//                 <button
//                   onClick={() => setOpenProject(activeProject)}
//                   className="px-8 py-4 rounded-full bg-black text-white text-sm font-medium hover:bg-black/90"
//                 >
//                   View Case Study →
//                 </button>
//               </div>
//             </div>

//             <div className="relative aspect-[16/9] rounded-[36px] overflow-hidden shadow-[0_40px_140px_rgba(0,0,0,0.35)]">
//               <Image
//                 src={activeProject.images[0]}
//                 alt={activeProject.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </motion.div>
//         </div>

//         <div className="relative z-10 mt-32 pb-28 max-w-[92rem] mx-auto px-10">
//           <div className="flex justify-between mb-10">
//             <p className="text-xs tracking-[0.35em] uppercase text-black/40">
//               Browse Projects
//             </p>
//             <input
//               type="text"
//               placeholder="Search projects..."
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-72 px-4 py-2 text-sm rounded-full border border-black/20"
//             />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {projects
//               .filter((p) => {
//                 if (!search) return true;
//                 const q = search.toLowerCase();
//                 return (
//                   p.title.toLowerCase().includes(q) ||
//                   p.description.toLowerCase().includes(q)
//                 );
//               })
//               .map((project, i) => (
//                 <motion.article
//   key={project.id}
//   onMouseMove={(e) =>
//     setMousePos({ x: e.clientX, y: e.clientY })
//   }
//   onMouseEnter={() => setHoveredProject(project)}
//   onMouseLeave={() => setHoveredProject(null)}
//   onClick={() => setActiveIndex(i)}
//   whileHover={{ y: -6 }}
//   className="relative rounded-3xl overflow-hidden cursor-pointer shadow-[0_40px_120px_rgba(0,0,0,0.25)]"
// >

//                   <div className="relative h-[360px]">
//                     <Image
//                       src={project.images[0]}
//                       alt={project.title}
//                       fill
//                       className="object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//                   </div>

//                   <div className="absolute inset-0 flex flex-col justify-end p-6">
//                     <h3 className="text-lg font-semibold text-white">
//                       {project.title}
//                     </h3>
//                     <p className="mt-2 text-sm text-white/75 leading-relaxed">
//                       {project.description}
//                     </p>
//                     <div className="mt-4 flex flex-wrap gap-2">
//                       {project.tech.slice(0, 5).map((t) => (
//                         <span
//                           key={t}
//                           className="px-3 py-1 text-[11px] rounded-full bg-white/15 text-white/85 backdrop-blur"
//                         >
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.article>
//               ))}
//           </div>
//         </div>
//       </section>

//       <ProjectModal
//         project={openProject}
//         onClose={() => setOpenProject(null)}
//       />

//       <ProjectHoverPreview
//   project={hoveredProject}
//   position={hoverPos}
//   onHoverStart={() => setHoveredProject(hoveredProject)}
//   onHoverEnd={() => setHoveredProject(null)}
//   onOpen={() => setOpenProject(hoveredProject)}
// />

//     </>
//   );
// }


















"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/utils/projectsList";
import ProjectModal from "@/components/ProjectModal";
import ProjectHoverPreview from "@/components/ProjectHoverPreview";

export default function ProjectsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [openProject, setOpenProject] = useState(null);
  const [search, setSearch] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const activeProject = projects[activeIndex];

  return (
    <>
      <section className="relative min-h-screen bg-white text-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-white to-white pointer-events-none" />

        <div className="relative z-20 flex items-center justify-between px-10 pt-8">
          <button
            onClick={() => window.history.back()}
            className="text-sm font-medium text-black/60 hover:text-black"
          >
            ← Back
          </button>
          <h1 className="text-sm tracking-[0.45em] uppercase text-black/60">
            My Projects
          </h1>
          <div className="w-16" />
        </div>

        <div className="relative z-10 mt-20 max-w-[92rem] mx-auto px-10">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid lg:grid-cols-2 gap-24 items-center"
          >
            <div>
              <p className="text-xs tracking-[0.35em] uppercase text-black/50 mb-4">
                Featured Project
              </p>

              <h2 className="text-4xl lg:text-5xl font-semibold">
                {activeProject.title}
              </h2>

              <p className="mt-6 text-black/65 max-w-xl leading-relaxed">
                {activeProject.longDescriptions?.[0] ||
                  activeProject.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {activeProject.tech.slice(0, 6).map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 text-xs rounded-full border border-black/15 text-black/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-12">
                <button
                  onClick={() => setOpenProject(activeProject)}
                  className="px-8 py-4 rounded-full bg-black text-white text-sm font-medium hover:bg-black/90"
                >
                  View Case Study →
                </button>
              </div>
            </div>

            <div className="relative aspect-[16/9] rounded-[36px] overflow-hidden shadow-[0_40px_140px_rgba(0,0,0,0.35)]">
              <Image
                src={activeProject.images[0]}
                alt={activeProject.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 mt-32 pb-28 max-w-[92rem] mx-auto px-10">
          <div className="flex justify-between mb-10">
            <p className="text-xs tracking-[0.35em] uppercase text-black/40">
              Browse Projects
            </p>
            <input
              type="text"
              placeholder="Search projects..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-72 px-4 py-2 text-sm rounded-full border border-black/20"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects
              .filter((p) => {
                if (!search) return true;
                const q = search.toLowerCase();
                return (
                  p.title.toLowerCase().includes(q) ||
                  p.description.toLowerCase().includes(q)
                );
              })
              .map((project, i) => (
                <motion.article
                  key={project.id}
                  onMouseMove={(e) =>
                    setMousePos({ x: e.clientX, y: e.clientY })
                  }
                  onMouseEnter={() => setHoveredProject(project)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => setActiveIndex(i)}
                  whileHover={{ y: -6 }}
                  className="relative rounded-3xl overflow-hidden cursor-pointer shadow-[0_40px_120px_rgba(0,0,0,0.25)]"
                >
                  <div className="relative h-[360px]">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[11px] rounded-full bg-white/15 text-white/85 backdrop-blur"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={openProject}
        onClose={() => setOpenProject(null)}
      />

      <ProjectHoverPreview
        project={hoveredProject}
        position={mousePos}
        onHoverStart={() => setHoveredProject(hoveredProject)}
        onHoverEnd={() => setHoveredProject(null)}
        onOpen={() => setOpenProject(hoveredProject)}
      />
    </>
  );
}
