// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About Me", href: "#about" },
//     { name: "Portfolio", href: "#portfolio" },
//     { name: "Designs", href: "#designs" },
//     { name: "Services", href: "#services" },
//     { name: "Blog", href: "#blog" },
//   ];

//   return (
//     <>
//       <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
//         <nav
//           className={`
//             flex items-center justify-between 
//             w-full max-w-6xl 
//             px-4 py-3 md:px-6
//             rounded-full 
//             border border-white/10 
//             bg-[#02040a]/70 backdrop-blur-lg 
//             shadow-[0_4px_30px_rgba(0,0,0,0.1)]
//             transition-all duration-300
//             ${scrolled ? "bg-[#02040a]/90 border-white/5" : ""}
//           `}
//         >
//           <div className="flex items-center gap-3">
//             <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20">
//               <img
//                 src="/images/profile.jpg"
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <span className="text-white font-semibold text-sm tracking-wide">
//   Vikas
// </span>

//           </div>

//           <ul className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   href={link.href}
//                   className="text-sm font-medium text-gray-400 hover:text-white transition"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <div className="flex items-center gap-4">
//             <Link
//               href="#contact"
//               className="
//                 hidden sm:inline-flex
//                 px-6 py-2.5 rounded-full
//                 border border-white/10
//                 bg-white/5
//                 text-xs font-medium text-white
//                 hover:bg-white hover:text-black
//                 transition-all duration-300
//               "
//             >
//               Let’s Connect
//             </Link>

//             <button
//               onClick={() => setOpen(true)}
//               className="md:hidden text-white text-2xl"
//             >
//               ☰
//             </button>
//           </div>
//         </nav>
//       </div>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl"
//           >
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-6 right-6 text-white text-3xl"
//             >
//               ✕
//             </button>

//             <div className="h-full flex flex-col items-center justify-start pt-24 px-6">
//               <div className="w-full max-w-md mb-10">
//                 <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10">
//                   <span className="text-white/60">🔍</span>
//                   <input
//                     type="text"
//                     placeholder="Type here to search"
//                     className="bg-transparent outline-none text-white placeholder-white/50 w-full text-sm"
//                   />
//                 </div>
//               </div>

//               <ul className="w-full max-w-md">
//                 {navLinks.map((link) => (
//                   <li key={link.name}>
//                     <Link
//                       href={link.href}
//                       onClick={() => setOpen(false)}
//                       className="
//                         flex items-center justify-between
//                         py-4 text-lg font-medium
//                         text-white/90
//                         border-b border-white/10
//                       "
//                     >
//                       {link.name}
//                       {link.name === "Portfolio" && (
//                         <span className="text-white/60">⌄</span>
//                       )}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }











"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Project", href: "#projects" },
    { name: "Github", href: "https://github.com/vikasgautam2003" },
    { name: "Hugging Face", href: "https://huggingface.co/vikasgautam2003" },

  ];

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className={`
            flex items-center justify-between
            w-full max-w-6xl
            px-5 py-3 md:px-7 md:py-3.5
            rounded-full
            border border-white/15
            bg-black
            backdrop-blur-md
            shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_14px_45px_rgba(0,0,0,0.65)]
            transition-all duration-300
            ${scrolled ? "bg-black border-white/20" : ""}
          `}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/25">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-semibold text-sm md:text-base tracking-wide">
              Vikas
            </span>
          </div>

          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="
                    text-sm lg:text-base font-medium
                    text-white/65
                    hover:text-white
                    transition
                  "
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="
                hidden sm:inline-flex
                px-6 py-2.5 lg:px-7 lg:py-3 rounded-full
                border border-white/20
                bg-white/5
                text-xs lg:text-sm font-medium text-white
                hover:bg-white hover:text-black
                transition-all duration-300
              "
            >
              Let’s Connect
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white text-2xl"
            >
              ☰
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black backdrop-blur-md"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>

            <div className="h-full flex flex-col items-center justify-start pt-28 px-6">
              

              <ul className="w-full max-w-md">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="
                        flex items-center justify-between
                        py-5 text-lg font-medium
                        text-white/85
                        border-b border-white/10
                        hover:text-white transition
                      "
                    >
                      {link.name}
                      {link.name === "Portfolio" && (
                        <span className="text-white/50">⌄</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
