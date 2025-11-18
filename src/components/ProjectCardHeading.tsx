import { motion } from 'framer-motion';

const ProjectCardHeading = () => {
  return (
    <>
      <div className="bg-black relative z-10 overflow-hidden">
        {/* Subtle depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" />

        <div className="container mx-auto px-4 py-20 md:py-24 lg:py-28">
          <div className="text-center">
            {/* Use scale instead of y + add will-change + backface-visibility fix */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{
                willChange: 'opacity, transform',
                backfaceVisibility: 'hidden',
                WebkitFontSmoothing: 'antialiased',
              }}
            >
              Specialized SAM Experts in Managing Licensing for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-amber-300 to-orange-400 inline-block">
                Top Global Vendors
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2"
              style={{
                willChange: 'opacity',
                backfaceVisibility: 'hidden',
              }}
            >
              Providing deep licensing insight, audit readiness, and optimization strategies for complex vendors like{' '}
              <span className="font-medium text-gray-100">Microsoft, Adobe, IBM, Oracle</span>, and more.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCardHeading;