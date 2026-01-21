"use client";
import { motion, AnimatePresence } from "framer-motion";
import AccordionItem from "./AccordionItem";
import { CloseIcon, ExternalLinkIcon } from "./Icons";

export default function PlatformModal({ platform, onClose }) {
  if (!platform) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-white z-50 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button
          onClick={onClose}
          className="fixed top-6 right-6 text-black"
        >
          <CloseIcon />
        </button>

        <div className="max-w-5xl mx-auto py-24 px-6">
          <h2 className="text-5xl font-bold mb-6">{platform.name}</h2>
          <p className="text-black/70 mb-8">{platform.description}</p>

          <a
            href={platform.link}
            target="_blank"
            className="inline-flex items-center gap-2 font-semibold underline mb-12"
          >
            Visit Profile <ExternalLinkIcon />
          </a>

          {platform.details.repos && (
            <div className="border rounded-xl overflow-hidden">
              {platform.details.repos.map((item) => (
                <AccordionItem key={item.name} item={item} />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
