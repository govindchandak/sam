'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const LicenseOptimizationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* -------------------------------------------------
   *  SECTION 2 – Impact Metrics
   * ------------------------------------------------- */
  const metrics = [
    { value: '40–45%', label: 'Average Cost Reduction' },
    { value: '100%', label: 'Compliance Coverage' },
    { value: '250+', label: 'Vendors Managed' },
    { value: '$187K+', label: 'Avg. Savings Found' },
  ];

  /* -------------------------------------------------
   *  SECTION 3 – Optimization Process
   * ------------------------------------------------- */
  const optimizations = [
    {
      title: 'Analyze Usage',
      desc: 'Deep dive into actual usage patterns versus entitlements to uncover waste',
    },
    {
      title: 'Reclaim Licenses',
      desc: 'Identify and reassign underutilized licenses across your organization',
    },
    {
      title: 'Reduce Costs',
      desc: 'Cut unnecessary expenses and compliance risks without impacting productivity',
    },
    {
      title: 'Unlock Savings',
      desc: 'Discover measurable cost savings through intelligent license management',
    },
  ];

  /* -------------------------------------------------
   *  SECTION 4 – Before / After (Balanced Cards)
   * ------------------------------------------------- */
  const beforeAfter = {
    before: [
      'Paying for unused or underutilized software licenses',
      'Limited visibility into software usage and entitlements',
      'Frequent vendor audit risks and compliance gaps',
      'Delayed renewals and missed optimization opportunities',
      'Difficulty in justifying software budgets to management',
      'Reactive approach to compliance and cost control',
      'Paying for premium editions when lower tiers suffice',
      'Lack of control over SaaS subscriptions and renewals',
      'Vendor negotiations based on assumptions',
      'Surprise true-up costs during audits',
      'Limited scalability of SAM processes as the business grows',
      'Compliance viewed as a burden',
    ],
    after: [
      'Achieved <strong>40–45% cost reduction</strong> through right-sizing and reallocation',
      '<strong>Centralized visibility</strong> of all licenses, usage, and compliance status',
      '<strong>Reduced audit exposure</strong> with accurate, real-time license positions',
      '<strong>Proactive renewal management</strong> and continuous cost optimization',
      '<strong>Data-backed insights</strong> for transparent decision-making',
      '<strong>Strategic, continuous optimization</strong> aligned with business goals',
      '<strong>Optimized license tiers</strong> matched to actual user needs',
      '<strong>Centralized SaaS management</strong> and automated renewals tracking',
      '<strong>Fact-based negotiation power</strong> backed by usage analytics',
      '<strong>Predictable budgeting</strong> with clear visibility into entitlements',
      '<strong>Standardized, scalable SAM model</strong> supporting growth and transformation',
      '<strong>Compliance turned into a business advantage</strong> through proactive governance',
    ],
  };

  return (
    <>
      <Header />

      <main className="relative min-h-screen w-full bg-black text-white overflow-hidden">
        {/* Floating Orbs – Global */}
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-40 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1.2s' }}
        />

        {/* ==================== SECTION 1 – HERO (BUTTON ALWAYS VISIBLE) ==================== */}
<section className="relative min-h-screen flex flex-col justify-center px-6 py-24">
      {/* Background Gradients */}
      <div
  className="absolute inset-0 z-0 pointer-events-none"
  style={{
    backgroundImage: `
      radial-gradient(circle at 50% 50%, 
        rgba(194, 65, 12, 0.18) 0%, 
        rgba(194, 65, 12, 0.1) 25%, 
        rgba(194, 65, 12, 0.04) 35%, 
        transparent 50%
      )
    `,
    backgroundSize: '100% 100%',
  }}
/>

<div className="absolute top-32 sm:top-40 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/5 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" />
<div className="absolute bottom-32 sm:bottom-40 right-1/4 w-64 sm:w-[28rem] h-64 sm:h-[28rem] bg-amber-600/5 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm"
        >
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-orange-300 tracking-widest">
            SOFTWARE LICENSE OPTIMIZATION
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          <span className="block text-white drop-shadow-lg">
            Are You Paying
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-amber-300 to-orange-400 drop-shadow-lg">
            Too Much
          </span>
          <span className="block text-white mt-3 drop-shadow-lg">
            For Your Software?
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-200 max-w-4xl mx-auto"
        >
          Most organizations overspend <strong className="text-amber-300">40–45%</strong> on unused licenses. We help you reclaim control.
        </motion.p>

        {/* CTA BUTTON – ALWAYS VISIBLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-9 py-4 font-bold rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-black shadow-lg transition-all duration-300 hover:from-amber-400 hover:to-orange-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/60"
          >
            <span>Discover Your Savings</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>

        {/* ==================== SECTION 2 – IMPACT METRICS ==================== */}
        <section className="py-20 px-6 bg-stone-950">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-400">
                Numbers That Reflect True Impact
              </span>
            </motion.h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="group relative p-6 rounded-2xl bg-zinc-900/60 border border-amber-500/20 backdrop-blur-md hover:bg-zinc-900/80 hover:border-amber-500/50 transition-all duration-500"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-orange-400 mb-2">
                      {m.value}
                    </div>
                    <div className="text-sm text-gray-300 font-medium">{m.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== SECTION 3 – OPTIMIZATION PROCESS ==================== */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
                  Optimization Process
                </span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                A data-driven approach to reclaiming value from your software estate
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {optimizations.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="group relative p-6 rounded-2xl bg-zinc-900/60 border border-amber-500/20 backdrop-blur-md hover:bg-zinc-900/80 hover:border-amber-500/50 transition-all duration-500"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/30 to-amber-600/30 border border-orange-500/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-lg font-bold text-orange-300">0{i + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

       {/* ==================== SECTION 4 – BEFORE / AFTER (PERFECTLY BALANCED) ==================== */}
<section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-center mb-12"
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">
        Before vs After Optimization
      </span>
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {/* BEFORE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-red-500/5 to-red-600/5 border border-red-500/20 backdrop-blur-sm flex flex-col"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
          <X className="w-6 h-6" />
          Before
        </h3>
        <ul className="space-y-3 flex-1 flex flex-col justify-between">
          {beforeAfter.before.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300">
              <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">{item}</span>
            </li>
          ))}
          {/* Invisible spacer to balance height */}
          {Array.from({ length: beforeAfter.after.length - beforeAfter.before.length }).map((_, i) => (
            <li key={`spacer-before-${i}`} className="flex items-start gap-3 opacity-0 pointer-events-none">
              <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">Placeholder</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* AFTER */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-600/5 border border-amber-500/30 backdrop-blur-sm flex flex-col"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-6 flex items-center gap-2">
          <Check className="w-6 h-6" />
          After
        </h3>
        <ul className="space-y-3 flex-1">
          {beforeAfter.after.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-gray-200"
            >
              <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <span
                className="text-sm leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: item.replace(
                    /<strong>(.*?)<\/strong>/g,
                    '<strong class="text-amber-300 font-bold">$1</strong>'
                  ),
                }}
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </div>
</section>

        {/* ==================== FINAL CTA ==================== */}
        <section className="relative py-24 px-6 bg-gradient-to-t from-black to-stone-950">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-400">
                Spend Less. Achieve More.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            >
              Through smarter license management and data-driven optimization
            </motion.p>

            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/60 transition-all duration-300"
            >
              Start Optimizing Today
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </div>
        </section>
      </main>
    </>
  );
};

export default LicenseOptimizationPage;