"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLinkIcon } from "./Icons";

export default function AccordionItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 text-left transition-colors duration-300 hover:bg-white/5 px-4 rounded-md"
      >
        <span className="font-semibold text-lg text-white">{item.name}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-gray-400">
          <ChevronDown />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: "easeInOut" },
                opacity: { duration: 0.25, delay: 0.15 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.4, ease: "easeInOut" },
                opacity: { duration: 0.25 },
              },
            }}
            className="overflow-hidden"
          >
            <div className="pb-6 pt-2 px-4 text-gray-300 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
              <div className="md:col-span-2 space-y-4">
                <p className="text-white/90 leading-relaxed">{item.longDescription}</p>

                {item.tech && (
                  <div className="flex flex-wrap gap-2">
                    <span className="font-semibold text-white">Tech Stack:</span>
                    {item.tech.map((t) => (
                      <span key={t} className="bg-slate-700 text-xs font-medium px-2 py-1 rounded-md text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600/50 text-purple-300 hover:bg-purple-600/80 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg font-semibold text-sm"
                >
                  <div className="flex items-center gap-2">
                    <span>View Link</span>
                    <ExternalLinkIcon />
                  </div>
                </a>
              </div>

              <div className="md:col-span-1">
                <img
                  src={item.showcaseImage}
                  alt={`Showcase for ${item.name}`}
                  className="w-full h-auto object-cover rounded-lg border border-white/10 shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
