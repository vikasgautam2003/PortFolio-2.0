export default function Contact() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Large Background Text */}
        <h2 className="text-[12vw] font-bold text-center text-white/5 absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap">
          LET'S CONNECT
        </h2>

        <div className="mt-32 grid md:grid-cols-2 gap-12 bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Get in touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full bg-background border border-white/10 p-4 rounded-xl focus:border-accent outline-none text-white placeholder:text-gray-600 transition" />
                <input type="email" placeholder="Email" className="w-full bg-background border border-white/10 p-4 rounded-xl focus:border-accent outline-none text-white placeholder:text-gray-600 transition" />
              </div>
              <textarea rows="4" placeholder="Your Message" className="w-full bg-background border border-white/10 p-4 rounded-xl focus:border-accent outline-none text-white placeholder:text-gray-600 transition"></textarea>
              <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Visual abstract sphere */}
          <div className="hidden md:flex items-center justify-center relative">
             <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-800 to-black shadow-[inset_-10px_-10px_20px_rgba(255,255,255,0.1)] border border-white/5"></div>
          </div>
        </div>
      </div>
    </section>
  );
}