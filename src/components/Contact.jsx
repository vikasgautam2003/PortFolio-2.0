






// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="relative py-32 px-6 bg-white overflow-hidden"
//     >
//       {/* Soft background wash */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-black/5 blur-[160px]" />
//       </div>

//       <div className="relative max-w-5xl mx-auto">
//         {/* Large background text */}
//         <h2 className="absolute top-0 left-1/2 -translate-x-1/2 text-[11vw] font-extrabold text-black/5 pointer-events-none whitespace-nowrap">
//           LET’S CONNECT
//         </h2>

//         <div className="relative mt-36 grid md:grid-cols-2 gap-14 bg-white rounded-3xl border border-black/10 p-8 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
//           {/* Left */}
//           <div>
//             <span className="text-xs tracking-[0.35em] uppercase text-black/40">
//               Contact
//             </span>

//             <h3 className="mt-4 text-3xl font-semibold text-black">
//               Get in touch
//             </h3>

//             <p className="mt-4 text-sm text-black/60 max-w-md leading-relaxed">
//               Have a project in mind or want to collaborate?  
//               Feel free to reach out. I’m always open to discussing ideas,
//               architecture, or opportunities.
//             </p>

//             <form className="mt-8 space-y-5">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="
//                     w-full rounded-xl px-4 py-3
//                     border border-black/15
//                     bg-white
//                     text-black text-sm
//                     placeholder-black/40
//                     focus:border-black
//                     focus:outline-none
//                     transition
//                   "
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="
//                     w-full rounded-xl px-4 py-3
//                     border border-black/15
//                     bg-white
//                     text-black text-sm
//                     placeholder-black/40
//                     focus:border-black
//                     focus:outline-none
//                     transition
//                   "
//                 />
//               </div>

//               <textarea
//                 rows="4"
//                 placeholder="Your message"
//                 className="
//                   w-full rounded-xl px-4 py-3
//                   border border-black/15
//                   bg-white
//                   text-black text-sm
//                   placeholder-black/40
//                   focus:border-black
//                   focus:outline-none
//                   transition
//                 "
//               />

//               <button
//                 className="
//                   w-full rounded-xl py-3.5
//                   bg-black text-white
//                   text-sm font-semibold
//                   hover:bg-black/90
//                   transition
//                   shadow-[0_12px_30px_rgba(0,0,0,0.25)]
//                 "
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Right visual */}
//           <div className="hidden md:flex items-center justify-center relative">
//             <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-white to-black shadow-[inset_-20px_-20px_40px_rgba(255,255,255,0.4),0_30px_80px_rgba(0,0,0,0.25)] border border-black/10" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }












"use client";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-black/5 blur-[160px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <h2 className="absolute top-0 left-1/2 -translate-x-1/2 text-[11vw] font-extrabold text-black/5 pointer-events-none whitespace-nowrap">
          LET’S CONNECT
        </h2>

        <div className="relative mt-36 grid md:grid-cols-2 gap-14 bg-white rounded-3xl border border-black/10 p-8 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
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

            <form
              className="mt-8 space-y-5"
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                setError("");
                setSuccess(false);

                const form = e.currentTarget;

                const payload = {
                  name: form.name.value,
                  email: form.email.value,
                  message: form.message.value,
                };

                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(payload),
                });

                setLoading(false);

                if (res.ok) {
                  setSuccess(true);
                  form.reset();
                } else {
                  setError("Something went wrong. Please try again.");
                }
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
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
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
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
                name="message"
                rows="4"
                placeholder="Your message"
                required
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
                disabled={loading}
                className="
                  w-full rounded-xl py-3.5
                  bg-black text-white
                  text-sm font-semibold
                  hover:bg-black/90
                  transition
                  shadow-[0_12px_30px_rgba(0,0,0,0.25)]
                  disabled:opacity-60
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-sm text-green-600">
                  Message sent successfully.
                </p>
              )}

              {error && (
                <p className="text-sm text-red-600">
                  {error}
                </p>
              )}
            </form>
          </div>

          <div className="hidden md:flex items-center justify-center relative">
            <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-white to-black shadow-[inset_-20px_-20px_40px_rgba(255,255,255,0.4),0_30px_80px_rgba(0,0,0,0.25)] border border-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
