"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative flex items-center justify-center">
        {/* Outer slow orbit */}
        <motion.div
          className="
            absolute
            w-36 h-36
            sm:w-44 sm:h-44
            rounded-full
            border border-black/40
          "
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
        />

        {/* Inner accent ring */}
        <motion.div
          className="
            absolute
            w-28 h-28
            sm:w-36 sm:h-36
            rounded-full
            border-2 border-black
            border-t-transparent
          "
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 2.4,
            ease: "easeInOut",
          }}
        />

        {/* Subtle breathing halo */}
        <motion.div
          className="
            absolute
            w-20 h-20
            sm:w-24 sm:h-24
            rounded-full
            border border-black/20
          "
          animate={{ scale: [1, 1.08, 1] }}
          transition={{
            repeat: Infinity,
            duration: 2.8,
            ease: "easeInOut",
          }}
        />

        {/* V Letter */}
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            font-black
            text-[3.5rem]
            sm:text-[4.5rem]
            tracking-tight
            text-black
            select-none
          "
        >
          V
        </motion.span>
      </div>
    </div>
  );
}
