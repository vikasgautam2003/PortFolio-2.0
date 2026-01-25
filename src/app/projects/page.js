





















"use client";
import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const activeProject = projects[activeIndex];

  return (
    <>
      <section className="relative min-h-screen bg-white text-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-white to-white pointer-events-none" />

       <div className="relative z-20 flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-6 md:px-10 pt-6 md:pt-8">

          <button
            onClick={() => window.history.back()}
            className="text-sm font-medium text-black/60 hover:text-black"
          >
            ← Back
          </button>
          <h1 className="text-sm tracking-[0.45em] uppercase text-black/60 text-center md:text-left">

            My Projects
          </h1>
          <div className="hidden md:block w-16" />

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
        <div className="mt-30 text-center">
            

            <p className="mt-6 max-w-3xl mx-auto text-black/60 text-xl leading-relaxed">
              Select any project card to explore its complete system design,
              architecture decisions, technology stack, key features, and live
              implementation in detail.
            </p>
          </div>

        <div className="relative z-10 mt-20 pb-28 max-w-[92rem] mx-auto px-10">
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
                  onMouseEnter={() => !isMobile && setHoveredProject(project)}
                  onMouseLeave={() => !isMobile && setHoveredProject(null)}
                  onClick={() =>
                   
                       setOpenProject(project)
                      //  setActiveIndex(i)
                  }

                  
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
        </div>
      </section>

      <ProjectModal
        project={openProject}
        onClose={() => setOpenProject(null)}
      />

      {!isMobile && (
        <ProjectHoverPreview
          project={hoveredProject}
          position={mousePos}
          onHoverStart={() => setHoveredProject(hoveredProject)}
          onHoverEnd={() => setHoveredProject(null)}
          onOpen={() => setOpenProject(hoveredProject)}
        />
      )}
    </>
  );
}
