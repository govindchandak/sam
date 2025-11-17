import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '@/components/Header';

type Phase = {
  number: string;
  title: string;
  content: string;
  details: string[];
  outcome: string;
};

const initialSteps = [
  { title: 'Pause Communication', description: 'Halt all communication with the auditor until you have a solid strategy in place.', icon: '01' },
  { title: 'Collect Records', description: 'Gather proof of purchase, contracts, license entitlements, and deployment data.', icon: '02' },
  { title: 'Engage Experts', description: 'Work with a SAM audit defense expert to analyze your position and guide your next move.', icon: '03' },
];

const phases: Phase[] = [
  {
    number: 'Phase 1',
    title: 'Internal Compliance Assessment',
    content: 'We begin with a detailed internal audit to understand your current compliance posture before sharing any data with the vendor.',
    details: [
      'Reviewing all deployed software and associated entitlements',
      'Verifying license ownership and usage accuracy',
      'Identifying compliance gaps, over-licensing, and potential cost risks',
      'Assessing internal discovery tools and inventory reports',
    ],
    outcome: "You'll receive a clear, confidential compliance snapshot—so you know your position before the vendor does.",
  },
  {
    number: 'Phase 2',
    title: 'Remediation & Optimization Planning',
    content: 'Next, we create a risk mitigation and optimization plan to correct shortfalls and strengthen your compliance foundation.',
    details: [
      'Develop action plans for true-up or reallocation of licenses',
      'Identify redundant or unused software to eliminate waste',
      'Align your records and entitlement data with vendor expectations',
      'Prepare internal documentation to support future audit responses',
    ],
    outcome: "This phase ensures you're in full control of your compliance narrative and financial exposure.",
  },
  {
    number: 'Phase 3',
    title: 'Data Validation & Audit Response Preparation',
    content: 'This newly added phase focuses on validating your compliance data and building your audit response strategy before any engagement with the vendor.',
    details: [
      'Verify that all technical data, entitlement summaries, and user reports are 100% accurate',
      'Prepare response templates and documentation sets tailored to vendor requirements',
      'Coach internal teams on communication protocols and escalation handling',
      'Create a defensible audit package ready for submission',
    ],
    outcome: 'The objective is to present accurate, controlled, and strategic data—nothing more, nothing less.',
  },
  {
    number: 'Phase 4',
    title: 'Representation & Negotiation Advisory',
    content: 'Once your position is solid, our team leads all communications and negotiations with the vendor or auditor.',
    details: [
      'Handle all interactions and correspondence on your behalf',
      "Review and challenge the auditor's findings and calculations",
      "Defend against inflated claims or incorrect interpretations",
      'Negotiate final settlements based on verified compliance data',
    ],
    outcome: "You maintain control, transparency, and confidence while we safeguard your organization's financial and legal interests.",
  },
];

type PhaseCardProps = {
  phase: Phase;
  index: number;
};

const PhaseCard: React.FC<PhaseCardProps> = ({ phase, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative"
    >
      {/* Timeline Node - Desktop */}
      <div className="absolute left-1/2 top-12 -translate-x-1/2 hidden md:flex items-center justify-center z-20">
        <motion.div whileHover={{ scale: 1.3 }} className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 shadow-2xl shadow-orange-500/60 border-4 border-black flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{index + 1}</span>
          </div>
          <div className="absolute inset-0 rounded-full bg-orange-500/40 blur-xl animate-pulse" />
        </motion.div>
      </div>

      {/* Mobile: Full stacked card (title first → points) */}
      {/* Mobile: Full stacked card – NUMBER BADGE FIXED */}
<div className="md:hidden mb-24">
  <div className="relative bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-amber-500/40 shadow-2xl overflow-visible"> {/* ← overflow-visible added */}

    {/* Floating Number Badge – now perfectly on top */}
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-30"> {/* ← z-30 + better centering */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="relative"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 shadow-2xl shadow-orange-500/60 border-4 border-black flex items-center justify-center">
          <span className="text-2xl font-black text-white">{index + 1}</span>
        </div>
        <div className="absolute inset-0 rounded-full bg-orange-500/40 blur-xl animate-pulse" />
      </motion.div>
    </div>

    {/* Card content – added pt-12 so text never overlaps the number */}
    <div className="pt-12 p-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/20 border border-orange-500/60 mb-4">
        <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse" />
        <span className="text-sm font-bold text-amber-300 tracking-widest">{phase.number}</span>
      </div>

      <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>
      <p className="text-gray-100 leading-relaxed mb-6">{phase.content}</p>

      <div className="space-y-4 mb-6">
        {phase.details.map((detail, j) => (
          <div key={j} className="flex items-start gap-4">
            <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-100 leading-relaxed font-medium">{detail}</span>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-xl bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-500/60 backdrop-blur-sm">
        <p className="flex items-start gap-3 text-amber-300 font-semibold">
          <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-gray-100">{phase.outcome}</span>
        </p>
      </div>
    </div>
  </div>
</div>

      {/* Desktop: Original beautiful left/right layout (unchanged) */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {isLeft ? (
          <>
            <PhaseContent phase={phase} />
            <PhaseDetails phase={phase} isInView={isInView} />
          </>
        ) : (
          <>
            <PhaseDetails phase={phase} isInView={isInView} />
            <PhaseContent phase={phase} />
          </>
        )}
      </div>
    </motion.div>
  );
};

const PhaseContent: React.FC<{ phase: Phase }> = ({ phase }) => (
  <div className="flex flex-col justify-center">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="p-8 rounded-2xl bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-amber-500/40 shadow-2xl"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/20 border border-orange-500/60 mb-5">
        <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse" />
        <span className="text-sm font-bold text-amber-300 tracking-widest">{phase.number}</span>
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{phase.title}</h3>
      <p className="text-gray-100 leading-relaxed">{phase.content}</p>
    </motion.div>
  </div>
);

const PhaseDetails: React.FC<{ phase: Phase; isInView: boolean }> = ({ phase, isInView }) => (
  <div className="space-y-5">
    {phase.details.map((detail, j) => (
      <motion.div
        key={j}
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3 + j * 0.1 }}
        className="flex items-start gap-4 p-5 bg-zinc-900/80 rounded-xl border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 backdrop-blur-sm"
      >
        <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-100 leading-relaxed font-medium">{detail}</span>
      </motion.div>
    ))}

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: 0.7 }}
      className="mt-6 p-6 rounded-xl bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-500/60 backdrop-blur-sm shadow-xl"
    >
      <p className="flex items-start gap-3 text-amber-300 font-semibold">
        <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-gray-100">{phase.outcome}</span>
      </p>
    </motion.div>
  </div>
);

const AuditDefensePage = () => {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
        {/* HERO - unchanged */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 py-24">
          <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, rgba(194, 65, 12, 0.18) 0%, rgba(194, 65, 12, 0.1) 25%, rgba(194, 65, 12, 0.04) 35%, transparent 50%)`, backgroundSize: '100% 100%' }} />
          <div className="absolute top-32 sm:top-40 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/5 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" />
          <div className="absolute bottom-32 sm:bottom-40 right-1/4 w-64 sm:w-[28rem] h-64 sm:h-[28rem] bg-amber-600/5 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-orange-300 tracking-widest">AUDIT DEFENSE</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-white">Received an Audit</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-amber-300 to-orange-400">Notification?</span>
              <span className="block text-white mt-3">Here's What You Do</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-xl text-gray-200 max-w-4xl mx-auto">
              If you've just received a software audit, <strong className="text-amber-300">don't panic</strong> — but <strong className="text-amber-300">don't respond right away</strong> either.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex justify-center pt-2">
              <a href="/contact" className="group inline-flex items-center gap-3 px-9 py-4 font-bold rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-black shadow-lg transition-all duration-300 hover:from-amber-400 hover:to-orange-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/60">
                <span>Get Expert Help Now</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* First Steps & Pillars - unchanged */}
        <section className="py-20 px-6 bg-stone-950">
          <div className="max-w-7xl mx-auto">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-amber-400">
              Here's what to do first
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {initialSteps.map((card, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }} className="group p-8 rounded-xl bg-zinc-900/70 border border-amber-500/20 backdrop-blur-md hover:border-amber-500/50 transition-all">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/30 to-amber-600/30 border border-orange-500/50 flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-orange-300">{card.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300">{card.title}</h3>
                  <p className="text-gray-300">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4-Phase Fortress Pillars - unchanged */}
        <section className="py-24 px-6 bg-gradient-to-b from-stone-950 to-black">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-20 bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-amber-400">
              Our 4-Phase Defense Fortress
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
              {phases.map((phase, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="group flex flex-col items-center">
                  <div className="relative w-20 sm:w-24 lg:w-28 h-52 sm:h-60 lg:h-64 flex flex-col justify-between">
                    <div className="relative flex-1 w-full bg-gradient-to-b from-zinc-800 via-zinc-900 to-black rounded-t-md shadow-2xl border-x border-t border-amber-700/50 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 via-transparent to-transparent opacity-50" />
                      <div className="absolute inset-y-0 left-1/2 w-px bg-amber-600/30 transform -translate-x-1/2" />
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                        <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-300 via-orange-200 to-amber-400 drop-shadow-2xl">
                          {i + 1}
                        </span>
                      </div>
                    </div>
                    <div className="h-3 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 border-t border-amber-400/70" />
                    <div className="h-5 -mx-2 bg-gradient-to-t from-black to-zinc-900 border-x-2 border-b-2 border-amber-700/60 rounded-b-md shadow-lg" />
                    <div className="absolute -inset-x-6 -top-6 h-20 bg-amber-500/10 blur-3xl rounded-full opacity-60 animate-pulse" />
                  </div>
                  <div className="mt-5 text-center px-1">
                    <h3 className="text-xs sm:text-sm lg:text-base font-bold text-gray-200 group-hover:text-amber-300 transition-colors leading-tight">
                      {phase.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE - Desktop unchanged, Mobile fixed */}
        <section className="py-32 px-6 bg-black relative">
          <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-400/50 to-transparent" />
          <div className="max-w-7xl mx-auto space-y-40">
            {phases.map((phase, i) => (
              <PhaseCard key={i} phase={phase} index={i} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-gradient-to-t from-black to-stone-950">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="block text-white">Ready to protect</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-400">your organization?</span>
              </h2>
              <p className="text-lg text-gray-400 mb-10">Let our experts handle the complexity while you focus on your business</p>
              <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-xl shadow-xl hover:shadow-orange-500/50 transition-all">
                Get Your Free Consultation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AuditDefensePage;










































// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import Header from '@/components/Header';

// type Phase = {
//   number: string;
//   title: string;
//   content: string;
//   details: string[];
//   outcome: string;
// };

// const initialSteps = [
//   {
//     title: 'Pause Communication',
//     description: 'Halt all communication with the auditor until you have a solid strategy in place.',
//     icon: '01',
//   },
//   {
//     title: 'Collect Records',
//     description: 'Gather proof of purchase, contracts, license entitlements, and deployment data.',
//     icon: '02',
//   },
//   {
//     title: 'Engage Experts',
//     description: 'Work with a SAM audit defense expert to analyze your position and guide your next move.',
//     icon: '03',
//   },
// ];

// const phases: Phase[] = [
//   {
//     number: 'Phase 1',
//     title: 'Internal Compliance Assessment',
//     content: 'We begin with a detailed internal audit to understand your current compliance posture before sharing any data with the vendor.',
//     details: [
//       'Reviewing all deployed software and associated entitlements',
//       'Verifying license ownership and usage accuracy',
//       'Identifying compliance gaps, over-licensing, and potential cost risks',
//       'Assessing internal discovery tools and inventory reports',
//     ],
//     outcome: "You'll receive a clear, confidential compliance snapshot—so you know your position before the vendor does.",
//   },
//   {
//     number: 'Phase 2',
//     title: 'Remediation & Optimization Planning',
//     content: 'Next, we create a risk mitigation and optimization plan to correct shortfalls and strengthen your compliance foundation.',
//     details: [
//       'Develop action plans for true-up or reallocation of licenses',
//       'Identify redundant or unused software to eliminate waste',
//       'Align your records and entitlement data with vendor expectations',
//       'Prepare internal documentation to support future audit responses',
//     ],
//     outcome: "This phase ensures you're in full control of your compliance narrative and financial exposure.",
//   },
//   {
//     number: 'Phase 3',
//     title: 'Data Validation & Audit Response Preparation',
//     content: 'This newly added phase focuses on validating your compliance data and building your audit response strategy before any engagement with the vendor.',
//     details: [
//       'Verify that all technical data, entitlement summaries, and user reports are 100% accurate',
//       'Prepare response templates and documentation sets tailored to vendor requirements',
//       'Coach internal teams on communication protocols and escalation handling',
//       'Create a defensible audit package ready for submission',
//     ],
//     outcome: 'The objective is to present accurate, controlled, and strategic data—nothing more, nothing less.',
//   },
//   {
//     number: 'Phase 4',
//     title: 'Representation & Negotiation Advisory',
//     content: 'Once your position is solid, our team leads all communications and negotiations with the vendor or auditor.',
//     details: [
//       'Handle all interactions and correspondence on your behalf',
//       "Review and challenge the auditor's findings and calculations",
//       "Defend against inflated claims or incorrect interpretations",
//       'Negotiate final settlements based on verified compliance data',
//     ],
//     outcome: "You maintain control, transparency, and confidence while we safeguard your organization's financial and legal interests.",
//   },
// ];

// /* REUSABLE MOBILE + DESKTOP TIMELINE CARD */
// const TimelinePhaseCard: React.FC<{ phase: Phase; index: number }> = ({ phase, index }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 80 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.8, delay: index * 0.15 }}
//       className="relative max-w-4xl mx-auto"
//     >
//       {/* Floating Number Badge - Always Visible */}
//       <div className="absolute -left-4 md:left-1/2 md:-translate-x-1/2 -top-8 z-10">
//         <motion.div
//           whileHover={{ scale: 1.2 }}
//           className="relative flex items-center justify-center"
//         >
//           <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 shadow-2xl shadow-orange-500/60 border-4 border-black flex items-center justify-center">
//             <span className="text-2xl font-black text-white">{index + 1}</span>
//           </div>
//           <div className="absolute inset-0 rounded-full bg-orange-500/40 blur-xl animate-pulse" />
//         </motion.div>
//       </div>

//       {/* Vertical Timeline Line - Hidden on mobile */}
//       {index < phases.length - 1 && (
//         <div className="hidden md:block absolute left-1/2 w-px h-full bg-gradient-to-b from-amber-400/50 to-transparent -translate-x-1/2 top-20" />
//       )}

//       {/* Main Card */}
//       <div className="md:ml-0 ml-12 md:mx-auto bg-gradient-to-br from-zinc-900/90 via-black/95 to-zinc-900/90 backdrop-blur-xl rounded-2xl border border-amber-500/30 shadow-2xl overflow-hidden">
//         <div className="p-8 md:p-10">
//           {/* Phase Tag + Title */}
//           <div className="flex items-center gap-3 mb-4">
//             <div className="px-4 py-1.5 rounded-full bg-orange-600/20 border border-orange-500/60">
//               <span className="text-sm font-bold text-amber-300 tracking-widest">{phase.number}</span>
//             </div>
//           </div>
//           <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">{phase.title}</h3>
//           <p className="text-gray-100 text-lg leading-relaxed mb-8">{phase.content}</p>

//           {/* Details List */}
//           <div className="space-y-4 mb-8">
//             {phase.details.map((detail, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={isInView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 0.4 + i * 0.1 }}
//                 className="flex items-start gap-4"
//               >
//                 <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                 </svg>
//                 <span className="text-gray-100 leading-relaxed">{detail}</span>
//               </motion.div>
//             ))}
//           </div>

//           {/* Outcome Box */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.8 }}
//             className="p-6 rounded-xl bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-500/60 backdrop-blur-sm"
//           >
//             <p className="flex items-start gap-3 text-amber-300 font-semibold text-lg">
//               <svg className="w-7 h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <span className="text-white">{phase.outcome}</span>
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const AuditDefensePage = () => {
//   return (
//     <>
//       <Header />
//       <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
//         {/* HERO SECTION */}
//         <section className="relative min-h-screen flex flex-col justify-center px-6 py-24">
//           <div className="absolute inset-0 z-0 pointer-events-none" style={{
//             backgroundImage: `radial-gradient(circle at 50% 50%, rgba(194, 65, 12, 0.18) 0%, rgba(194, 65, 12, 0.1) 25%, rgba(194, 65, 12, 0.04) 35%, transparent 50%)`,
//             backgroundSize: '100% 100%',
//           }} />
//           <div className="absolute top-32 sm:top-40 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/5 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" />
//           <div className="absolute bottom-32 sm:bottom-40 right-1/4 w-64 sm:w-[28rem] h-64 sm:h-[28rem] bg-amber-600/5 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

//           <div className="relative z-10 max-w-5xl mx-auto text-center space-y-7">
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm">
//               <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
//               <span className="text-sm font-semibold text-orange-300 tracking-widest">AUDIT DEFENSE</span>
//             </motion.div>

//             <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//               <span className="block text-white">Received an Audit</span>
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-amber-300 to-orange-400">Notification?</span>
//               <span className="block text-white mt-3">Here's What You Do</span>
//             </motion.h1>

//             <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-xl text-gray-200 max-w-4xl mx-auto">
//               If you've just received a software audit, <strong className="text-amber-300">don't panic</strong> — but <strong className="text-amber-300">don't respond right away</strong> either.
//             </motion.p>

//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex justify-center pt-2">
//               <a href="/contact" className="group inline-flex items-center gap-3 px-9 py-4 font-bold rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-black shadow-lg transition-all duration-300 hover:from-amber-400 hover:to-orange-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/60">
//                 <span>Get Expert Help Now</span>
//                 <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </a>
//             </motion.div>
//           </div>
//         </section>

//         {/* First Steps */}
//         <section className="py-20 px-6 bg-stone-950">
//           <div className="max-w-7xl mx-auto">
//             <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-amber-400">
//               Here's what to do first
//             </motion.h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {initialSteps.map((card, i) => (
//                 <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }} className="group p-8 rounded-xl bg-zinc-900/70 border border-amber-500/20 backdrop-blur-md hover:border-amber-500/50 transition-all">
//                   <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/30 to-amber-600/30 border border-orange-500/50 flex items-center justify-center mb-6">
//                     <span className="text-2xl font-bold text-orange-300">{card.icon}</span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300">{card.title}</h3>
//                   <p className="text-gray-300">{card.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* 4-Phase Fortress Pillars */}
//         <section className="py-24 px-6 bg-gradient-to-b from-stone-950 to-black">
//           <div className="max-w-7xl mx-auto text-center">
//             <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-20 bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-amber-400">
//               Our 4-Phase Defense Fortress
//             </motion.h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
//               {phases.map((phase, i) => (
//                 <motion.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="group flex flex-col items-center">
//                   <div className="relative w-20 sm:w-24 lg:w-28 h-52 sm:h-60 lg:h-64 flex flex-col justify-between">
//                     <div className="relative flex-1 w-full bg-gradient-to-b from-zinc-800 via-zinc-900 to-black rounded-t-md shadow-2xl border-x border-t border-amber-700/50 overflow-hidden">
//                       <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 via-transparent to-transparent opacity-50" />
//                       <div className="absolute inset-y-0 left-1/2 w-px bg-amber-600/30 transform -translate-x-1/2" />
//                       <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
//                         <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-300 via-orange-200 to-amber-400 drop-shadow-2xl">
//                           {i + 1}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="h-3 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 border-t border-amber-400/70" />
//                     <div className="h-5 -mx-2 bg-gradient-to-t from-black to-zinc-900 border-x-2 border-b-2 border-amber-700/60 rounded-b-md shadow-lg" />
//                     <div className="absolute -inset-x-6 -top-6 h-20 bg-amber-500/10 blur-3xl rounded-full opacity-60 animate-pulse" />
//                   </div>
//                   <div className="mt-5 text-center px-1">
//                     <h3 className="text-xs sm:text-sm lg:text-base font-bold text-gray-200 group-hover:text-amber-300 transition-colors leading-tight">
//                       {phase.title}
//                     </h3>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* TIMELINE - NOW PERFECT ON MOBILE */}
//         <section className="py-32 px-6 bg-black">
//           <div className="max-w-5xl mx-auto">
//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-amber-400"
//             >
//               Phase-by-Phase Breakdown
//             </motion.h2>

//             <div className="space-y-32">
//               {phases.map((phase, i) => (
//                 <TimelinePhaseCard key={i} phase={phase} index={i} />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="py-24 px-6 bg-gradient-to-t from-black to-stone-950">
//           <div className="max-w-4xl mx-auto text-center">
//             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
//               <h2 className="text-4xl md:text-5xl font-bold mb-6">
//                 <span className="block text-white">Ready to protect</span>
//                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-400">your organization?</span>
//               </h2>
//               <p className="text-lg text-gray-400 mb-10">Let our experts handle the complexity while you focus on your business</p>
//               <motion.a
//                 href="/contact"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-xl shadow-xl hover:shadow-orange-500/50 transition-all"
//               >
//                 Get Your Free Consultation
//                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </motion.a>
//             </motion.div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default AuditDefensePage;