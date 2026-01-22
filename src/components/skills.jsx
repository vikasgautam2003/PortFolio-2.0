// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function SkillsSection({ skills }) {
//   const categories = ["Frontend", "Backend", "Languages", "DevOps", "AI"];
//   const [active, setActive] = useState(categories[0]);
//   const filtered = skills.filter((s) => s.category === active);
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });

//   const handleMove = (e) => {
//     const r = e.currentTarget.getBoundingClientRect();
//     setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
//   };

//   return (
//     <section className="relative py-32 px-6 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <p className="text-xs tracking-[0.35em] uppercase text-black/50 mb-4">
//             Skills & Expertise
//           </p>
//           <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight">
//             Technical Skillset
//           </h2>
//           <p className="mt-6 max-w-2xl mx-auto text-black/60 text-xl leading-relaxed">
//             A focused overview of the technologies and tools I use to design,
//             build, and scale production-ready systems.
//           </p>
//         </div>

//         {/* Categories */}
//         <div className="flex flex-wrap justify-center gap-3 mb-16">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActive(cat)}
//               className={`relative px-5 py-2 text-sm rounded-full border transition
//                 ${
//                   active === cat
//                     ? "border-black text-black"
//                     : "border-black/20 text-black/50 hover:text-black"
//                 }`}
//             >
//               {active === cat && (
//                 <motion.span
//                   layoutId="skill-pill"
//                   className="absolute inset-0 rounded-full bg-black/5"
//                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 />
//               )}
//               <span className="relative z-10">{cat}</span>
//             </button>
//           ))}
//         </div>

//         {/* Grid */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={active}
//             onMouseMove={handleMove}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
//             style={{
//               "--mx": `${mouse.x}px`,
//               "--my": `${mouse.y}px`,
//             }}
//           >
//             {/* Ambient glow */}
//             <div
//               className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700"
//               style={{
//                 background:
//                   "radial-gradient(500px circle at var(--mx) var(--my), rgba(0,0,0,0.06), transparent 40%)",
//               }}
//             />

//             {filtered.map((skill) => (
//               <motion.div
//                 key={skill.name}
//                 initial={{ opacity: 0, y: 24 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//                 className="
//                   relative group
//                   rounded-2xl
//                   border border-black/10
//                   bg-white
//                   p-5
//                   shadow-[0_10px_40px_rgba(0,0,0,0.06)]
//                   hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
//                   transition
//                 "
//               >
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={skill.image}
//                     alt={skill.name}
//                     className="w-10 h-10 object-contain"
//                   />
//                   <h3 className="text-base font-medium text-black">
//                     {skill.name}
//                   </h3>
//                 </div>

//                 <p className="mt-4 text-xs leading-relaxed text-black/60">
//                   {skill.description}
//                 </p>

//                 {/* Hover accent */}
//                 <div className="absolute inset-0 rounded-2xl ring-1 ring-black/0 group-hover:ring-black/10 transition" />
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }

























"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SkillsSection({ skills }) {
  const categories = ["Frontend", "Backend", "Languages", "DevOps", "AI"];
  const [active, setActive] = useState(categories[0]);
  const filtered = skills.filter((s) => s.category === active);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-xs tracking-[0.35em] uppercase text-black/50 mb-4">
            Skills & Expertise
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black tracking-tight">
            Technical Skillset
          </h2>

          <p className="mt-4 sm:mt-6 max-w-xl mx-auto text-black/60 text-base sm:text-lg md:text-xl leading-relaxed">
            A focused overview of the technologies and tools I use to design,
            build, and scale production-ready systems.
          </p>
        </div>

        {/* Categories — UNCHANGED */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2 text-sm rounded-full border transition
                ${
                  active === cat
                    ? "border-black text-black"
                    : "border-black/20 text-black/50 hover:text-black"
                }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="skill-pill"
                  className="absolute inset-0 rounded-full bg-black/5"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            onMouseMove={handleMove}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              relative
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
              gap-4 sm:gap-6
            "
            style={{
              "--mx": `${mouse.x}px`,
              "--my": `${mouse.y}px`,
            }}
          >
            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700"
              style={{
                background:
                  "radial-gradient(500px circle at var(--mx) var(--my), rgba(0,0,0,0.06), transparent 40%)",
              }}
            />

            {filtered.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="
                  relative group
                  rounded-xl sm:rounded-2xl
                  border border-black/10
                  bg-white
                  p-4 sm:p-5
                  shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  transition
                "
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                  <h3 className="text-sm sm:text-base font-medium text-black">
                    {skill.name}
                  </h3>
                </div>

                <p className="mt-3 sm:mt-4 text-xs leading-relaxed text-black/60">
                  {skill.description}
                </p>

                <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-black/0 group-hover:ring-black/10 transition" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
