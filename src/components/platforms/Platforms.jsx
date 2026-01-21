// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { platforms } from "./platformData";
// import AccordionItem from "./AccordionItem";
// import { CloseIcon, ExternalLinkIcon } from "./Icons";

// export default function Platforms() {
//   const [selectedPlatform, setSelectedPlatform] = useState(null);

//   useEffect(() => {
//     const navbar = document.querySelector(".sticky-navbar");
//     if (selectedPlatform) {
//       document.body.style.overflow = "hidden";
//       navbar?.classList.add("navbar-unsticky");
//     } else {
//       document.body.style.overflow = "unset";
//       navbar?.classList.remove("navbar-unsticky");
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//       navbar?.classList.remove("navbar-unsticky");
//     };
//   }, [selectedPlatform]);

//   return (
//     /* 🔴 COPY THE ENTIRE JSX BODY FROM YOUR ORIGINAL COMPONENT HERE */
//      <section className="py-24 md:py-32 text-white relative z-10 bg-transparent">
//       <div className="max-w-7xl mx-auto px-4">
//         <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-16 md:mb-24 tracking-tighter">
//           My Digital Footprint
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {platforms.map((platform) => (
//             <motion.div
//               key={platform.id}
//               onClick={() => setSelectedPlatform(platform)}
//               className="relative aspect-[1/1] sm:aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer group shadow-2xl"
//               style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//             >
//               <motion.div style={{ backgroundImage: `url(${platform.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="absolute inset-0 transition-transform duration-500 group-hover:scale-110" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
//               <motion.div whileHover={{ rotateX: 10, rotateY: -10 }} transition={{ duration: 0.4, ease: "easeOut" }} className="relative z-10 w-full h-full flex flex-col justify-end p-6 sm:p-8 text-white">
//                 <img src={platform.logo} alt={`${platform.name} logo`} className="w-12 h-12 sm:w-16 sm:h-16 mb-4"/>
//                 <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">{platform.name}</h3>
//                 <p className="text-gray-300">{platform.tagline}</p>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <AnimatePresence>
//         {selectedPlatform && (
//           // ## FIX: The entire modal is now scrollable on all screen sizes.
//           <motion.div 
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }} 
//             exit={{ opacity: 0 }} 
//             className="fixed inset-0 bg-black/50 backdrop-blur-xl z-50 overflow-y-auto"
//           >
//             {/* ## FIX: This wrapper allows the two-panel layout on desktop while being part of a single scroll on mobile. */}
//             <div className="min-h-full md:flex">
//                 {/* Left Panel */}
//                 <motion.div 
//                 initial={{ x: "-100%" }} animate={{ x: "0%" }} exit={{ x: "-100%" }}
//                 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                 className="w-full md:w-1/3 md:h-screen md:sticky top-0 border-b md:border-b-0 md:border-r border-white/10 p-6 sm:p-8 md:p-12 pt-20 md:pt-24 pb-8 md:pb-12 relative flex flex-col"
//                 >
//                     <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{backgroundImage: `url(${selectedPlatform.panelImage})`}}></div>
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900"></div>

//                     <div className="relative z-10 flex flex-col h-full">
//                         <img src={selectedPlatform.logo} alt={`${selectedPlatform.name} logo`} className="w-20 h-20 sm:w-24 sm:h-24 mb-6"/>
//                         <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tighter">{selectedPlatform.name}</h2>
//                         <p className="text-gray-300 text-base sm:text-lg mb-8 md:mb-12 ">{selectedPlatform.description}</p>
//                         <a href={selectedPlatform.link} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8 py-3 sm:py-4 rounded-full text-white text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg mt-auto">
//                             Visit My Profile <ExternalLinkIcon />
//                         </a>
//                     </div>
//                 </motion.div>

//                 {/* Right Panel */}
//                 <motion.div
//                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//                 transition={{ delay: 0.2, duration: 0.5 }}
//                 className="w-full md:w-2/3 relative"
//                 >
//                     <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/kamranahmedse/driver.js/master/docs/images/bg-pattern.svg')] opacity-10"></div>
                    
//                     <div className="relative p-6 sm:p-8 md:p-12 pb-12">
//                         <button onClick={() => setSelectedPlatform(null)} className="fixed top-6 right-6 text-white z-[60] p-2 rounded-full hover:bg-white/10 transition-colors">
//                             <CloseIcon />
//                         </button>
                        
//                         <div className="space-y-12 pt-12 md:pt-0">
//                             <div className="space-y-6">
//                                 <h3 className="text-3xl sm:text-4xl font-bold text-white border-b border-white/10 pb-4">{selectedPlatform.details.showcase.title}</h3>
//                                 <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
//                                     <img src={selectedPlatform.details.showcase.image} alt="Showcase" className="w-full h-auto object-cover" />
//                                 </div>
//                             </div>

//                             {selectedPlatform.details.repos && (
//                                 <div>
//                                 <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Featured Repositories</h3>
//                                 <div className="bg-slate-800/50 rounded-lg border border-white/10">
//                                     {selectedPlatform.details.repos.map(item => <AccordionItem key={item.name} item={item} />)}
//                                 </div>
//                                 </div>
//                             )}
//                             {selectedPlatform.details.models && (
//                                 <div>
//                                 <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Featured Models</h3>
//                                 <div className="bg-slate-800/50 rounded-lg border border-white/10">
//                                     {selectedPlatform.details.models.map(item => <AccordionItem key={item.name} item={item} />)}
//                                 </div>
//                                 </div>
//                             )}
//                             {selectedPlatform.details.datasets && (
//                                 <div>
//                                 <h3 className="text-2xl sm:text-3xl font-bold mt-12 mb-4 text-white">Featured Datasets</h3>
//                                 <div className="bg-slate-800/50 rounded-lg border border-white/10">
//                                     {selectedPlatform.details.datasets.map(item => <AccordionItem key={item.name} item={item} />)}
//                                 </div>
//                                 </div>
//                             )}
//                             {selectedPlatform.details.spaces && (
//                                 <div>
//                                 <h3 className="text-2xl sm:text-3xl font-bold mt-12 mb-4 text-white">Featured Spaces</h3>
//                                 <div className="bg-slate-800/50 rounded-lg border border-white/10">
//                                     {selectedPlatform.details.spaces.map(item => <AccordionItem key={item.name} item={item} />)}
//                                 </div>
//                                 </div>
//                             )}
//                             {selectedPlatform.details.containers && (
//                                 <div>
//                                 <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Top Container Images</h3>
//                                 <div className="bg-slate-800/50 rounded-lg border border-white/10">
//                                     {selectedPlatform.details.containers.map(item => <AccordionItem key={item.name} item={item} />)}
//                                 </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }












"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import platforms from "./platformData";
import AccordionItem from "./AccordionItem";
import { CloseIcon, ExternalLinkIcon } from "./Icons";

export default function Platforms() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const navbar = document.querySelector(".sticky-navbar");

    if (selectedPlatform) {
      document.body.style.overflow = "hidden";
      navbar?.classList.add("navbar-hidden");
    } else {
      document.body.style.overflow = "";
      navbar?.classList.remove("navbar-hidden");
    }

    return () => {
      document.body.style.overflow = "";
      navbar?.classList.remove("navbar-hidden");
    };
  }, [selectedPlatform]);

  return (
    <section className="py-24 md:py-32 bg-white text-black relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-16 md:mb-24 tracking-tighter"
        >
          My Digital Footprint
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <motion.div
              key={platform.id}
              onClick={() => setSelectedPlatform(platform)}
              className="relative aspect-[1/1] sm:aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer group shadow-2xl"
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                style={{
                  backgroundImage: `url(${platform.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
              <motion.div
                whileHover={{ rotateX: 10, rotateY: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 w-full h-full flex flex-col justify-end p-6 sm:p-8 text-white"
              >
                <img src={platform.logo} alt="" className="w-12 h-12 sm:w-16 sm:h-16 mb-4" />
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  {platform.name}
                </h3>
                <p className="text-white/70">{platform.tagline}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedPlatform && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-xl overflow-y-auto"
                onClick={() => setSelectedPlatform(null)}
              >
                <div
                  className="min-h-full md:flex"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full md:w-1/3 md:h-screen md:sticky top-0 border-b md:border-b-0 md:border-r border-white/10 p-6 sm:p-8 md:p-12 pt-20 md:pt-24 pb-8 relative flex flex-col"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-90"
                      style={{ backgroundImage: `url(${selectedPlatform.panelImage})` }}
                    />
                    <div className="absolute inset-0 bg-black/90" />

                    <div className="relative z-10 flex flex-col h-full text-white">
                      <img src={selectedPlatform.logo} alt="" className="w-20 h-20 sm:w-24 sm:h-24 mb-6" />
                      <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tighter">
                        {selectedPlatform.name}
                      </h2>
                      <p className="text-white/70 text-base sm:text-lg mb-8">
                        {selectedPlatform.description}
                      </p>
                      <a
                        href={selectedPlatform.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-white text-black px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/90 mt-auto"
                      >
                        Visit My Profile <ExternalLinkIcon />
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-full md:w-2/3 bg-black"
                  >
                    <div className="relative p-6 sm:p-8 md:p-12 pb-16">
                      <button
                        onClick={() => setSelectedPlatform(null)}
                        className="fixed top-6 right-6 z-[100000] text-white p-2 rounded-full hover:bg-white/10"
                      >
                        <CloseIcon />
                      </button>

                      <div className="space-y-12">
                        <div>
                          <h3 className="text-3xl sm:text-4xl font-bold text-white border-b border-white/10 pb-4">
                            {selectedPlatform.details.showcase.title}
                          </h3>
                          <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                              src={selectedPlatform.details.showcase.image}
                              alt=""
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        </div>

                        {selectedPlatform.details.repos && (
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                              Featured Repositories
                            </h3>
                            <div className="bg-white/5 rounded-lg border border-white/10">
                              {selectedPlatform.details.repos.map((item) => (
                                <AccordionItem key={item.name} item={item} />
                              ))}
                            </div>
                          </div>
                        )}

                        {selectedPlatform.details.models && (
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                              Featured Models
                            </h3>
                            <div className="bg-white/5 rounded-lg border border-white/10">
                              {selectedPlatform.details.models.map((item) => (
                                <AccordionItem key={item.name} item={item} />
                              ))}
                            </div>
                          </div>
                        )}

                        {selectedPlatform.details.datasets && (
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                              Featured Datasets
                            </h3>
                            <div className="bg-white/5 rounded-lg border border-white/10">
                              {selectedPlatform.details.datasets.map((item) => (
                                <AccordionItem key={item.name} item={item} />
                              ))}
                            </div>
                          </div>
                        )}

                        {selectedPlatform.details.spaces && (
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                              Featured Spaces
                            </h3>
                            <div className="bg-white/5 rounded-lg border border-white/10">
                              {selectedPlatform.details.spaces.map((item) => (
                                <AccordionItem key={item.name} item={item} />
                              ))}
                            </div>
                          </div>
                        )}

                        {selectedPlatform.details.containers && (
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                              Top Container Images
                            </h3>
                            <div className="bg-white/5 rounded-lg border border-white/10">
                              {selectedPlatform.details.containers.map((item) => (
                                <AccordionItem key={item.name} item={item} />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
