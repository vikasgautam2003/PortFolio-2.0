// export default function Contact() {
//   return (
//     <section className="py-24 px-6 bg-background relative overflow-hidden">
//       <div className="container mx-auto max-w-5xl relative z-10">
        
//         {/* Large Background Text */}
//         <h2 className="text-[12vw] font-bold text-center text-white/5 absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap">
//           LET'S CONNECT
//         </h2>

//         <div className="mt-32 grid md:grid-cols-2 gap-12 bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10">
//           <div>
//             <h3 className="text-3xl font-bold text-white mb-6">Get in touch</h3>
//             <form className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <input type="text" placeholder="Name" className="w-full bg-background border border-white/10 p-4 rounded-xl focus:border-accent outline-none text-white placeholder:text-gray-600 transition" />
//                 <input type="email" placeholder="Email" className="w-full bg-background border border-white/10 p-4 rounded-xl focus:border-accent outline-none text-white placeholder:text-gray-600 transition" />
//               </div>
//               <textarea rows="4" placeholder="Your Message" className="w-full bg-background border border-white/10 p-4 rounded-xl focus:border-accent outline-none text-white placeholder:text-gray-600 transition"></textarea>
//               <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition">
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Visual abstract sphere */}
//           <div className="hidden md:flex items-center justify-center relative">
//              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-800 to-black shadow-[inset_-10px_-10px_20px_rgba(255,255,255,0.1)] border border-white/5"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-white overflow-hidden"
    >
      {/* Soft background wash */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-black/5 blur-[160px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Large background text */}
        <h2 className="absolute top-0 left-1/2 -translate-x-1/2 text-[11vw] font-extrabold text-black/5 pointer-events-none whitespace-nowrap">
          LET’S CONNECT
        </h2>

        <div className="relative mt-36 grid md:grid-cols-2 gap-14 bg-white rounded-3xl border border-black/10 p-8 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
          {/* Left */}
          <div>
            <span className="text-xs tracking-[0.35em] uppercase text-black/40">
              Contact
            </span>

            <h3 className="mt-4 text-3xl font-semibold text-black">
              Get in touch
            </h3>

            <p className="mt-4 text-sm text-black/60 max-w-md leading-relaxed">
              Have a project in mind or want to collaborate?  
              Feel free to reach out. I’m always open to discussing ideas,
              architecture, or opportunities.
            </p>

            <form className="mt-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="
                    w-full rounded-xl px-4 py-3
                    border border-black/15
                    bg-white
                    text-black text-sm
                    placeholder-black/40
                    focus:border-black
                    focus:outline-none
                    transition
                  "
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="
                    w-full rounded-xl px-4 py-3
                    border border-black/15
                    bg-white
                    text-black text-sm
                    placeholder-black/40
                    focus:border-black
                    focus:outline-none
                    transition
                  "
                />
              </div>

              <textarea
                rows="4"
                placeholder="Your message"
                className="
                  w-full rounded-xl px-4 py-3
                  border border-black/15
                  bg-white
                  text-black text-sm
                  placeholder-black/40
                  focus:border-black
                  focus:outline-none
                  transition
                "
              />

              <button
                className="
                  w-full rounded-xl py-3.5
                  bg-black text-white
                  text-sm font-semibold
                  hover:bg-black/90
                  transition
                  shadow-[0_12px_30px_rgba(0,0,0,0.25)]
                "
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right visual */}
          <div className="hidden md:flex items-center justify-center relative">
            <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-white to-black shadow-[inset_-20px_-20px_40px_rgba(255,255,255,0.4),0_30px_80px_rgba(0,0,0,0.25)] border border-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
