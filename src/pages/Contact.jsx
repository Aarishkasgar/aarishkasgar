import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Sparkles, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Gamified bounce animation for emojis
  const toyBounce = (delay = 0) => ({
    y: [0, -14, 0],
    rotate: [0, 8, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mailto fallback so user's email client opens automatically with prefilled message
    const mailtoLink = `mailto:aarishkasgar934@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom:%20${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoLink;
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 max-w-7xl mx-auto space-y-16 relative overflow-hidden">
      
      {/* Decorative Background Toy Emojis */}
      <motion.div animate={toyBounce(0)} className="absolute top-36 -left-4 text-5xl opacity-30 select-none pointer-events-none">
        📬
      </motion.div>
      <motion.div animate={toyBounce(1)} className="absolute top-1/2 right-4 text-5xl opacity-30 select-none pointer-events-none">
        🕹️
      </motion.div>
      <motion.div animate={toyBounce(2)} className="absolute bottom-16 left-1/4 text-5xl opacity-30 select-none pointer-events-none">
        ⚡
      </motion.div>

      {/* --- TITLE HEADER --- */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-black uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Start A New Quest 🎮</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">Touch</span>
        </h1>
        <p className="text-slate-400 text-lg font-medium">
          Have a project in mind, need IT consultation, or want to scale your brand with InfiTech Creatives? Let's team up today!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* --- LEFT SIDE: GAMIFIED CONTACT INFO & WHATSAPP CARD --- */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="p-8 rounded-3xl bg-white/[0.03] border-2 border-white/10 backdrop-blur-xl space-y-6 shadow-xl relative overflow-hidden toy-card-glow">
            
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black text-white">Contact Details 📡</h3>
              <span className="text-2xl">🤝</span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Reach out directly via email or social handles. I always try to respond to new inquiries within 24 hours!
            </p>

            <div className="space-y-4 pt-2">
              {/* Email Card */}
              <a 
                href="mailto:aarishkasgar934@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border-2 border-white/10 hover:border-cyan-400/80 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Email Address</p>
                  <p className="text-white font-black text-sm group-hover:text-cyan-400 transition-colors">
                    aarishkasgar934@gmail.com
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border-2 border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-white font-black text-sm">Muzaffarnagar, India 🇮🇳</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call To Action Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border-2 border-emerald-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">
                  Quick Chat Option
                </span>
                <span className="text-xl">💬</span>
              </div>
              <h4 className="text-white font-black text-base">Need Instant Discussion?</h4>
              <p className="text-slate-400 text-xs font-medium leading-relaxed">
                Connect directly for agency services, website proposals, or quick IT consultation.
              </p>
              <a
                href="https://wa.me/910000000000?text=Hi%20Aarish!%20I%20checked%20your%20portfolio%20and%20want%20to%20discuss%20a%20project." 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-[#050811] font-black text-xs hover:bg-emerald-400 transition-colors w-fit pt-2 mt-1 shadow-lg"
              >
                <span>Message on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* InfiTech Creatives Mini Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-black text-pink-400 uppercase tracking-widest">Agency Spotlight</span>
                <p className="text-white font-bold text-sm">InfiTech Creatives 🚀</p>
              </div>
              <span className="text-2xl">⚡</span>
            </div>

          </div>
        </motion.div>

        {/* --- RIGHT SIDE: INTERACTIVE CYBER-POP FORM --- */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="p-8 md:p-12 rounded-3xl bg-white/[0.03] border-2 border-white/10 backdrop-blur-xl relative shadow-2xl overflow-hidden">
            
            {/* Ambient Corner Neon Glow */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

            {isSubmitted ? (
              /* Gamified Success State */
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-16 space-y-6"
              >
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 mx-auto flex items-center justify-center shadow-2xl shadow-pink-500/30">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-black text-white tracking-tight">
                  Quest Complete! 🎉
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto font-medium leading-relaxed">
                  Your email client should open automatically with your pre-filled message. If it doesn't, you can email me directly at <span className="text-cyan-400 font-bold underline">aarishkasgar934@gmail.com</span>
                </p>
                
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-8 py-3.5 rounded-full bg-white/[0.05] border border-white/10 text-white text-xs font-black hover:bg-white/[0.1] hover:border-pink-500/50 transition-all shadow-md"
                >
                  Send Another Message 🚀
                </button>
              </motion.div>
            ) : (
              /* Message Form */
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl md:text-3xl font-black text-white">Send Me a Message ✍️</h3>
                  <span className="text-xs font-bold text-slate-400 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10">
                    Response: ~24 hours
                  </span>
                </div>
                
                <div>
                  <label className="block text-xs font-black uppercase text-slate-300 mb-2 tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-[#050811]/60 border-2 border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:bg-[#050811] transition-all text-sm font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-300 mb-2 tracking-wider">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-[#050811]/60 border-2 border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-purple-400 focus:bg-[#050811] transition-all text-sm font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-300 mb-2 tracking-wider">
                    Message / Project Requirement
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, timeline, or what you need help with..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-[#050811]/60 border-2 border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-pink-500 focus:bg-[#050811] transition-all text-sm font-bold resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full py-4 text-base font-black">
                  <span>Send Message Now</span>
                  <Send className="w-4 h-4 ml-1 text-white" />
                </Button>
              </form>
            )}

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;