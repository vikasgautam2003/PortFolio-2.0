"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "QueryAI",
    category: "AI Answer Engine",
    desc: "A search engine that answers directly.",
    tags: ["Next.js", "AI", "RAG"]
  },
  {
    title: "CogniCare AI",
    category: "Health Tech",
    desc: "Mental health chatbot with RAG pipeline.",
    tags: ["Python", "NLP", "React"]
  },
  {
    title: "Syntaxly.ai",
    category: "Dev Tools",
    desc: "AI-powered code reviewer and fixer.",
    tags: ["GenAI", "Parsing"]
  },
  {
    title: "OpsChat",
    category: "DevOps",
    desc: "Natural language interface for Docker/K8s.",
    tags: ["DevOps", "LLM"]
  }
];

export default function Projects() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="text-accent text-sm font-bold uppercase tracking-widest">Selected Works</span>
          <h2 className="text-4xl font-bold mt-2 text-white">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="group bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-colors duration-300"
            >
              {/* Fake Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-gray-900 to-black relative flex items-center justify-center overflow-hidden">
                <h3 className="text-5xl font-bold text-white/5 group-hover:scale-110 transition-transform duration-500">
                  {project.title}
                </h3>
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300" />
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-accent text-sm">{project.category}</p>
                  </div>
                </div>
                <p className="text-secondary mb-6 line-clamp-2">{project.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/5 text-gray-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}