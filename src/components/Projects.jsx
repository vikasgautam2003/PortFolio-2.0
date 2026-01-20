// "use client";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "QueryAI",
//     category: "AI Answer Engine",
//     desc: "A search engine that answers directly.",
//     tags: ["Next.js", "AI", "RAG"]
//   },
//   {
//     title: "CogniCare AI",
//     category: "Health Tech",
//     desc: "Mental health chatbot with RAG pipeline.",
//     tags: ["Python", "NLP", "React"]
//   },
//   {
//     title: "Syntaxly.ai",
//     category: "Dev Tools",
//     desc: "AI-powered code reviewer and fixer.",
//     tags: ["GenAI", "Parsing"]
//   },
//   {
//     title: "OpsChat",
//     category: "DevOps",
//     desc: "Natural language interface for Docker/K8s.",
//     tags: ["DevOps", "LLM"]
//   }
// ];

// export default function Projects() {
//   return (
//     <section className="py-24 px-6 bg-background">
//       <div className="container mx-auto max-w-6xl">
//         <div className="mb-12">
//           <span className="text-accent text-sm font-bold uppercase tracking-widest">Selected Works</span>
//           <h2 className="text-4xl font-bold mt-2 text-white">Featured Projects</h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {projects.map((project, i) => (
//             <motion.div 
//               key={i}
//               whileHover={{ y: -5 }}
//               className="group bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-colors duration-300"
//             >
//               {/* Fake Image Placeholder */}
//               <div className="h-64 bg-gradient-to-br from-gray-900 to-black relative flex items-center justify-center overflow-hidden">
//                 <h3 className="text-5xl font-bold text-white/5 group-hover:scale-110 transition-transform duration-500">
//                   {project.title}
//                 </h3>
//                 <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300" />
//               </div>

//               <div className="p-8">
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h3 className="text-2xl font-bold text-white">{project.title}</h3>
//                     <p className="text-accent text-sm">{project.category}</p>
//                   </div>
//                 </div>
//                 <p className="text-secondary mb-6 line-clamp-2">{project.desc}</p>
//                 <div className="flex gap-2 flex-wrap">
//                   {project.tags.map(tag => (
//                     <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/5 text-gray-300 border border-white/10">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {projects} from "@/utils/projectsList";

export default function Projects() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-purple-600/10 blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="text-xs tracking-[0.35em] uppercase text-purple-400">
              Featured Websites
            </span>
            <h2 className="mt-4 text-4xl font-semibold text-white">
              Selected Projects
            </h2>
          </div>
          <span className="text-sm text-purple-400 hover:text-purple-300 transition cursor-pointer">
            All Projects →
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group relative aspect-square rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />
              </div>

              <div className="relative h-1/2 w-full overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
                />
              </div>

              <div className="relative h-1/2 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-medium text-white leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-white/55 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-[11px] rounded-full border border-white/15 text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
