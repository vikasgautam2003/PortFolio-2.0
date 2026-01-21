"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ProjectHoverPreview({
  project,
  position,
  onHoverStart,
  onHoverEnd,
  onOpen,
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          style={{
            left: position.x + 20,
            top: position.y + 20,
          }}
          className="
            fixed
            z-50
            w-[340px]
            rounded-2xl
            bg-white
            shadow-[0_40px_120px_rgba(0,0,0,0.25)]
            overflow-hidden
          "
        >
          <div className="relative h-44 bg-black">
            {project.video ? (
              <video
                src={project.video}
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <div className="p-5">
            <h3 className="text-sm font-semibold text-black leading-snug">
              {project.title}
            </h3>

            <p className="mt-2 text-xs text-black/65 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            <button
              onClick={onOpen}
              className="
                mt-4
                w-full
                px-4 py-2.5
                rounded-full
                bg-black
                text-white
                text-xs
                font-medium
                hover:bg-black/90
                transition
              "
            >
              View Project →
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
