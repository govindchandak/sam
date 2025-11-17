import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {


  const navigate = useNavigate();

  return (
    <section
      className="fixed top-0 left-0 w-full h-screen bg-black flex items-start justify-center overflow-hidden pt-28 md:pt-40"
      style={{ zIndex: 1 }}
    >
      <div className="min-h-screen w-full bg-black relative">

        {/* Ember Glow Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 110% 70% at 25% 80%, rgba(147, 51, 234, 0.12), transparent 55%),
            radial-gradient(ellipse 130% 60% at 75% 15%, rgba(59, 130, 246, 0.10), transparent 65%),
            radial-gradient(ellipse 80% 90% at 20% 30%, rgba(236, 72, 153, 0.14), transparent 50%),
            radial-gradient(ellipse 100% 40% at 60% 70%, rgba(16, 185, 129, 0.08), transparent 45%),
            #000000
            `,
          }}
        />

        {/* TEXT CONTENT */}
        <div className="relative w-full max-w-5xl mx-auto px-6 md:px-8 text-center">
        <div className="space-y-6 md:space-y-8">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm"
          >
           <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-orange-300 tracking-widest uppercase">
            Enterprise Software Asset Management
          </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-bold tracking-tight text-white"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
            lineHeight: '1',
          }}
        >
            <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/90">
            Get the Solution
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-amber-300 to-orange-400 relative">
            Every IT Team Wishes They Had
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-60 blur-sm" />
          </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-lg md:text-xl lg:text-2xl font-light text-gray-200 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Drive smarter software investments with transparent usage data, accurate licensing insights, and fully optimized spend.
        </motion.p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2 animate-fade-up animation-delay-600">
              
              {/* CTA Button */}
              <button className="group inline-flex items-center gap-3 px-9 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-xl hover:from-orange-500 hover:to-amber-500 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
              
              onClick={() => navigate('/contact')}

              >
                <span className="relative z-10">Say Hello</span>
      
              </button>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
