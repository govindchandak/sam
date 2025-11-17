
import { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import {motion} from 'framer-motion';
import { useNavigate } from 'react-router-dom';

type Service = {
  title: string;
  desc: string;
};  

type Platform = {
  name: string;
  features: string[];
};

// ========================================
// PLATFORM CARD – TYPED
// ========================================
type PlatformCardProps = {
  platform: Platform;
  index: number;
};

const PlatformCard: React.FC<PlatformCardProps> = ({ platform, index }) => (
  <div className="group">
    <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-900/90 to-black/90 border border-amber-500/10 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/20">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-orange-600/0 group-hover:from-amber-500/5 group-hover:to-orange-600/5 transition-all duration-500" />
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-4">
          <span className="text-base font-bold text-amber-400">{index + 1}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-300 mb-6">
          {platform.name}
        </h3>
        <ul className="space-y-4">
          {platform.features.map((feature, j) => (
            <li key={j} className="flex items-start gap-3">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
              <span className="text-sm sm:text-base text-gray-300 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// ========================================
// MAIN PAGE
// ========================================
const ManagedServicesPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const section3Ref = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  /* -------------------------------------------------
     Scroll-progress for Section 3 timeline
  ------------------------------------------------- */
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (!section3Ref.current) return;
      const section = section3Ref.current;
      const { offsetTop, offsetHeight } = section;
      const scrollY = window.scrollY;
      const winH = window.innerHeight;

      const start = offsetTop - winH / 2;
      const end = offsetTop + offsetHeight - winH / 2;
      const progress = Math.max(0, Math.min(1, (scrollY - start) / (end - start)));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* -------------------------------------------------
     Data
  ------------------------------------------------- */
  const services: Service[] = [
    {
      title: 'Continuous Tracking',
      desc: 'Real-time monitoring of licenses and entitlements across your entire software estate',
    },
    {
      title: 'Automated Compliance',
      desc: 'Stay compliant 24/7 with intelligent monitoring and instant alerts',
    },
    {
      title: 'Proactive Management',
      desc: 'Never miss a renewal with automated vendor management and optimization',
    },
    {
      title: 'Expert Support',
      desc: 'Dedicated specialists to align your software strategy with business goals',
    },
  ];

  const platforms: Platform[] = [
    {
      name: 'ServiceNow SAM Pro',
      features: [
        'End-to-end implementation, configuration, and automation for license lifecycle management',
        'Integration with CMDB, Discovery, and Procurement modules for unified visibility',
        'Custom dashboards and reports for compliance, spend, and optimization insights',
      ],
    },
    {
      name: 'Flexera One / FlexNet Manager',
      features: [
        'Advanced license optimization and entitlement reconciliation',
        'Deep analytics for cost reduction and vendor spend insights',
        'Integration with cloud and on-prem environments for full asset coverage',
      ],
    },
    {
      name: 'IBM ILMT (License Metric Tool)',
      features: [
        'Automated sub-capacity reporting to stay audit-ready',
        'Continuous data normalization and reconciliation for accuracy',
        'Compliance tracking aligned with IBM PVU licensing requirements',
      ],
    },
    {
      name: 'Zylo (SaaS Management Platform)',
      features: [
        'Unified SaaS application discovery and usage tracking',
        'Insights into shadow IT, renewals, and cost optimization opportunities',
        'Continuous monitoring for license utilization and renewal forecasting',
      ],
    },
  ];

  /* -------------------------------------------------
     Helper: line colour based on scroll progress
  ------------------------------------------------- */
  const getLineColor = (p: number): string => {
    if (p < 0.25) return `rgba(251, 191, 36, ${0.3 + p * 2.8})`;      // amber-400
    if (p < 0.5) return `rgba(251, 146, 60, ${0.3 + (p - 0.25) * 2.8})`; // orange-400
    if (p < 0.75) return `rgba(234, 179, 8, ${0.3 + (p - 0.5) * 2.8})`;  // yellow-500
    return `rgba(217, 119, 6, ${0.3 + (p - 0.75) * 2.8})`;               // amber-600
  };

  return (
    <>
      <Header />

      <main className="relative min-h-screen w-full bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-white overflow-hidden">
        {/* -------------------------------------------------
            Global subtle effects
        ------------------------------------------------- */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 50% 0%, rgba(217, 119, 6, 0.15) 0%, transparent 50%), radial-gradient(circle at 0% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 50%), radial-gradient(circle at 100% 50%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)',
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(rgba(251, 191, 36, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.3) 1px, transparent 1px)`,
              backgroundSize: '100px 100px',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 100%)',
            }}
          />
        </div>

        {/* ====================== SECTION 1 – HERO (SAME AS LICENSE PAGE) ====================== */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 py-24">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          background: `
            radial-gradient(ellipse 110% 70% at 25% 80%, rgba(147, 51, 234, 0.12), transparent 55%),
            radial-gradient(ellipse 130% 60% at 75% 15%, rgba(59, 130, 246, 0.10), transparent 65%),
            radial-gradient(ellipse 80% 90% at 20% 30%, rgba(236, 72, 153, 0.14), transparent 50%),
            radial-gradient(ellipse 100% 40% at 60% 70%, rgba(16, 185, 129, 0.08), transparent 45%),
            #000000
          `,
        }} 
      />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/30 bg-amber-500/5 backdrop-blur-sm"
        >
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-amber-300 tracking-widest">
            SOFTWARE MANAGED SERVICES
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }} 
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          <span className="block text-white">Is Managing Software</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
            Compliance
          </span>
          <span className="block text-white mt-3">Taking Too Much Time?</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }} 
          className="text-xl text-gray-200 max-w-4xl mx-auto"
        >
          Let us handle it for you. Our managed services give you{' '}
          <strong className="text-amber-300">ongoing control</strong> and{' '}
          <strong className="text-amber-300">visibility</strong> across your entire software estate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={()=>navigate('/contact')}
            className="group inline-flex items-center gap-3 px-9 py-4 font-bold rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-black shadow-lg transition-all duration-300 hover:from-amber-400 hover:to-orange-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/60"
          >
            <span>Get Started</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>

        {/* ====================== SECTION 2 – WHY CHOOSE US ====================== */}
        <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
                  Why We're the Trusted Choice
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-black/80 border border-amber-500/10 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-orange-600/0 group-hover:from-amber-500/10 group-hover:to-orange-600/10 transition-all duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg font-bold text-amber-400">0{i + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-300 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================== SECTION 3 – PLATFORMS ====================== */}
        <section ref={section3Ref} className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
                  We Work with Industry-Leading SAM Platforms
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Our expertise spans across all major Software Asset Management (SAM) and SaaS Management tools —
                ensuring your organization gets the maximum value from every license.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* Center line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-zinc-700 rounded-full" />
                <div
                  className="absolute inset-0 rounded-full transition-all duration-300"
                  style={{
                    background: `linear-gradient(to bottom, ${getLineColor(scrollProgress)} ${
                      scrollProgress * 100
                    }%, transparent ${scrollProgress * 100}%)`,
                    boxShadow: `0 0 20px ${getLineColor(scrollProgress)}`,
                  }}
                />
              </div>

              <div className="space-y-16 sm:space-y-24">
                {platforms.map((platform, i) => (
                  <div key={i} className="relative">
                    {/* Node */}
                    <div
                      className="absolute left-1/2 top-8 -translate-x-1/2 w-8 h-8 rounded-full bg-black border-4 hidden lg:flex items-center justify-center z-20"
                      style={{
                        borderColor:
                          scrollProgress > i / platforms.length ? getLineColor(scrollProgress) : 'rgb(63,63,70)',
                        boxShadow:
                          scrollProgress > i / platforms.length
                            ? `0 0 30px ${getLineColor(scrollProgress)}`
                            : 'none',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <div
                        className="w-4 h-4 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor:
                            scrollProgress > i / platforms.length ? getLineColor(scrollProgress) : 'transparent',
                        }}
                      />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* LEFT */}
                      {i % 2 === 0 && (
                        <>
                          <PlatformCard platform={platform} index={i} />
                          <div className="hidden lg:block" />
                        </>
                      )}
                      {/* RIGHT */}
                      {i % 2 === 1 && (
                        <>
                          <div className="hidden lg:block" />
                          <PlatformCard platform={platform} index={i} />
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ====================== SECTION 4 – BOTTOM CTA ====================== */}
        <section className="relative z-10 border-t border-white/10 bg-gradient-to-b from-transparent to-black py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
                You Focus on Your Business
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              We'll manage the rest. Get complete peace of mind with our comprehensive managed services.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 text-base sm:text-lg"
            >
              Start Your Journey
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default ManagedServicesPage;