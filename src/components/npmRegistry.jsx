"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ChitkaraExamAssistantShowcase() {
  const [copied, setCopied] = useState(false);

  const command = "npm install -g chitkara-exam-assistant";

  const copyCommand = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="relative py-32 px-6 bg-white text-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-black/50 mb-6">
              Open Source · NPM Package
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              chitkara-exam-assistant
            </h2>

            <p className="mt-6 text-black/65 leading-relaxed max-w-xl">
              A lightweight CLI tool that lets students interact with Google’s
              Gemini AI directly from the terminal for exam preparation, coding
              help, and quick explanations — without leaving the command line.
            </p>

            <div className="mt-10 flex items-center gap-10">
              <div>
                <p className="text-3xl font-semibold">128+</p>
                <p className="text-sm text-black/50">Total Downloads</p>
              </div>

              <div className="h-10 w-px bg-black/15" />

              <div>
                <p className="text-3xl font-semibold">CLI</p>
                <p className="text-sm text-black/50">Developer Tool</p>
              </div>
            </div>

            <ul className="mt-10 space-y-3 text-sm text-black/70">
              <li>• Direct Gemini 2.5 Flash integration</li>
              <li>• Syntax-highlighted answers in terminal</li>
              <li>• Secure API key storage</li>
              <li>• Interactive chat with history</li>
            </ul>
          </div>

          {/* TERMINAL */}
          <div className="relative">
            <div className="rounded-2xl border border-black/15 bg-black text-white shadow-[0_30px_80px_rgba(0,0,0,0.25)] overflow-hidden">
              {/* TERMINAL HEADER */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                <button
                  onClick={copyCommand}
                  className="text-xs px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              {/* TERMINAL BODY */}
              <div className="px-6 py-6 font-mono text-sm space-y-3">
                <p className="text-white/70">$ {command}</p>
                <p className="text-green-400">
                  ✔ Installed successfully
                </p>
                <p className="text-white/70">$ chitkara-helper</p>
                <p className="text-cyan-400">
                  Gemini ready. Ask your question.
                </p>
              </div>
            </div>

            {/* SUBTLE GLOW */}
            <div className="absolute -inset-6 bg-black/5 blur-3xl -z-10" />
          </div>
        </div>

        {/* USAGE */}
        <div className="mt-28 max-w-3xl">
          <p className="text-xs tracking-[0.35em] uppercase text-black/40 mb-4">
            Usage
          </p>

          <p className="text-black/70 leading-relaxed">
            Install the package globally, run <span className="font-mono">chitkara-helper</span>,
            enter your Gemini API key once, and start asking questions. The tool
            responds with clean, highlighted output directly in your terminal.
          </p>
        </div>
      </div>
    </section>
  );
}
