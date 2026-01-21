"use client";
import { motion } from "framer-motion";

export default function PlatformCard({ platform, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      className="relative aspect-square rounded-3xl overflow-hidden cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${platform.backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
        <img src={platform.logo} className="w-14 mb-4" />
        <h3 className="text-3xl font-bold">{platform.name}</h3>
        <p className="text-white/80">{platform.tagline}</p>
      </div>
    </motion.div>
  );
}
