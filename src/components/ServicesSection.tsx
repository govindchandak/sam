/* src/components/ServicesSection.tsx */
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  Service data – unchanged                                          */
/* ------------------------------------------------------------------ */
const services = [
  {
    title: "Audit Defense",
    subtitle: "Worried about an upcoming software audit or want to be audit ready?",
    description:
      "We help you take control before vendors do. Our audit defense services protect your business from unnecessary risks and penalties.",
    image: "/services-images/audit.png",
    buttonText: "Explore Audit Defense",
    features: [
      "Identify compliance gaps before auditors do",
      "Validate and prepare data for accuracy",
      "Negotiate effectively with publishers",
      "Minimize financial exposure and disruption",
    ],
    tagline: "Stay confident. Stay compliant.",
    route: "/services/audit-defense",
  },
  {
    title: "Software Managed Services",
    subtitle: "Is managing software compliance taking too much time?",
    description:
      "Let us handle it for you. Our managed services give you ongoing control and visibility across your entire software estate.",
    image: "/services-images/managed.png",
    buttonText: "Explore Managed Services",
    features: [
      "Continuous license and entitlement tracking",
      "Automated compliance monitoring",
      "Proactive renewals and vendor management",
      "Expert support to align software use with business goals",
    ],
    tagline: "You focus on your business — we'll manage the rest.",
    route: "/services/managed-services",
  },
  {
    title: "Software License Optimization",
    subtitle: "Are you paying for software you don't fully use?",
    description:
      "Most organizations do. We help you optimize licenses, usage, and renewals to unlock hidden savings.",
    image: "/services-images/optimization.png",
    buttonText: "Explore Optimization",
    features: [
      "Analyze actual usage vs. entitlements",
      "Reclaim and reassign underused licenses",
      "Reduce unnecessary costs and compliance risks",
      "Unlock measurable cost savings without productivity loss",
    ],
    tagline: "Spend less, achieve more — through smarter license management.",
    route: "/services/license-optimization",
  },
];

/* ------------------------------------------------------------------ */
/*  ServicesSection component                                         */
/* ------------------------------------------------------------------ */
const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* -------------------------------------------------------------- */
  /*  Mobile detection                                            */
  /* -------------------------------------------------------------- */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* -------------------------------------------------------------- */
  /*  Golden particles + top-left light (unchanged)                */
  /* -------------------------------------------------------------- */
  useEffect(() => {
    if (isMobile || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const particles: {
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
    }[] = [];

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.4 + 0.8,
        speedY: Math.random() * 0.5 + 0.15,
        opacity: Math.random() * 0.16 + 0.06,
      });
    }

    let id: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${p.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(255, 215, 0, 0.7)";
        ctx.fill();

        p.y -= p.speedY;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
      });
      id = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
    };
  }, [isMobile]);

  /* -------------------------------------------------------------- */
  /*  GSAP ScrollTrigger – Smooth transitions without jerks       */
  /* -------------------------------------------------------------- */
  useEffect(() => {
    if (isMobile) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.set(contentRefs.current, { opacity: 0, x: -60 });
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=350%",
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
        },
      });

      // Header fade out + first service appears
      tl.to(headerRef.current, { opacity: 0, y: -40, duration: 1.2, ease: "power2.inOut" })
        .to(
          imageRef.current,
          {
            left: "73%",
            top: "47%",
            scale: 1,
            width: "38vw",
            height: "68vh",
            duration: 2.5,
            ease: "power2.inOut",
            onStart: () => setCurrentIndex(0),
            onReverseComplete: () => setCurrentIndex(0),
          },
          "-=0.6"
        )
        .to(
          contentRefs.current[0],
          { opacity: 1, x: 0, duration: 2, ease: "power2.inOut" },
          "-=1.5"
        );

      tl.to({}, { duration: 2 });

      // Transition to second service
      tl.to(contentRefs.current[0], { opacity: 0, x: -60, duration: 1.8, ease: "power2.inOut" })
        .to(
          imageRef.current,
          {
            opacity: 0,
            scale: 0.96,
            duration: 1,
            ease: "power2.inOut",
            onStart: () => {
              // Change image halfway through the fade for smoother transition
              setTimeout(() => setCurrentIndex(1), 200);
            },
            onReverseComplete: () => {
              setTimeout(() => setCurrentIndex(0), 200);
            },
          },
          "<"
        )
        .to(imageRef.current, { opacity: 1, scale: 1, duration: 1, ease: "power2.inOut" })
        .to(
          contentRefs.current[1],
          { opacity: 1, x: 0, duration: 2, ease: "power2.inOut" },
          "-=1.2"
        );

      tl.to({}, { duration: 2 });

      // Transition to third service
      tl.to(contentRefs.current[1], { opacity: 0, x: -60, duration: 1.8, ease: "power2.inOut" })
        .to(
          imageRef.current,
          {
            opacity: 0,
            scale: 0.96,
            duration: 1,
            ease: "power2.inOut",
            onStart: () => {
              setTimeout(() => setCurrentIndex(2), 200);
            },
            onReverseComplete: () => {
              setTimeout(() => setCurrentIndex(1), 200);
            },
          },
          "<"
        )
        .to(imageRef.current, { opacity: 1, scale: 1, duration: 1, ease: "power2.inOut" })
        .to(
          contentRefs.current[2],
          { opacity: 1, x: 0, duration: 2, ease: "power2.inOut" },
          "-=1.2"
        );

      tl.to({}, { duration: 2 });
    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  /* -------------------------------------------------------------- */
  /*  Mobile layout – polished & clean                            */
  /* -------------------------------------------------------------- */
  if (isMobile) {
    return (
      <section className="w-full bg-[#0a0e1a] py-16 px-4 font-inter" style={{ zIndex: 10 }}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium text-white tracking-tight">Our Services</h2>
          <p className="mt-2 text-sm text-gray-400">Explore our solutions</p>
        </div>

        <div className="space-y-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#111827]/80 to-[#0a0e1a] backdrop-blur-sm rounded-2xl border border-white/10 p-6"
            >
              <div className="mb-5 h-48 bg-[#0d1520] rounded-xl flex items-center justify-center overflow-hidden">
                <img src={s.image} alt={s.title} className="h-full w-auto object-contain p-6" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-1">{s.title}</h3>
              <p className="text-xs text-amber-300 italic mb-3">{s.subtitle}</p>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">{s.description}</p>

              <ul className="space-y-2 mb-5">
                {s.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                    <span className="text-amber-400 mt-0.5">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm font-medium text-amber-300 italic mb-5">{s.tagline}</p>

              <Link
                to={s.route}
                className="block w-full text-center py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-400 text-gray-900 font-medium rounded-full shadow-lg hover:shadow-amber-400/30 transition-all duration-300"
              >
                {s.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  }

  /* -------------------------------------------------------------- */
  /*  Desktop layout – clean, professional, cheerful              */
  /* -------------------------------------------------------------- */
  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-[#0a0e1a] overflow-hidden font-inter"
      style={{ zIndex: 10 }}
    >
      {/* ==== Golden particles ==== */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: "screen" }}
      />

      {/* ==== Top-left golden light ==== */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle at 0% 0%, rgba(255, 215, 0, 0.18) 0%, transparent 70%)",
            transform: "translate(-30%, -30%)",
          }}
        />
      </div>

      {/* ==== Golden nebulae ==== */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-3xl"
          style={{
            top: "5%",
            left: "-15%",
            background:
              "radial-gradient(circle, rgba(255, 193, 0, 0.14) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute w-[900px] h-[900px] rounded-full blur-3xl"
          style={{
            bottom: "-25%",
            right: "-20%",
            background:
              "radial-gradient(circle, rgba(255, 223, 0, 0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(255, 215, 0, 0.10) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* ==== Subtle gradient & stars ==== */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20" />
      <div className="absolute inset-0 opacity-30">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      {/* ==== Header ==== */}
      <div
        ref={headerRef}
        className="absolute top-[15%] left-1/2 -translate-x-1/2 text-center z-20"
      >
        <h2 className="text-6xl xl:text-7xl font-medium text-white tracking-tight">
          Our Services
        </h2>
        <p className="mt-3 text-sm text-gray-400 tracking-wide">Explore our solutions</p>
      </div>

      {/* ==== Image - FIXED POSITION ==== */}
      <div
        ref={imageRef}
        className="absolute w-[35vw] h-[50vh] z-10"
        style={{ 
          left: "50%",
          top: "47%",
          transform: "translate(-50%, -50%) scale(0.7)",
          willChange: "transform, left, top, width, height" 
        }}
      >
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-[#0d1520] flex items-center justify-center p-2">
          <img
            src={services[currentIndex].image}
            alt={services[currentIndex].title}
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 rounded-3xl border border-white/20" />
        </div>
      </div>

      {/* ==== Content ==== */}
      <div className="absolute left-[6%] top-[20%] -translate-y-1/2 w-[44%] z-20">
        {services.map((s, i) => (
          <div
            key={i}
            ref={(el) => (contentRefs.current[i] = el)}
            className="absolute w-full"
            style={{ pointerEvents: currentIndex === i ? "auto" : "none" }}
          >
            <div className="space-y-5 max-w-xl">
              <h3 className="text-5xl xl:text-6xl font-semibold text-white leading-tight">
                {s.title}
              </h3>
              <p className="text-base text-amber-300 italic">{s.subtitle}</p>
              <p className="text-base text-gray-300 leading-relaxed">{s.description}</p>

              <ul className="space-y-3">
                {s.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-amber-400 mt-1">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <p className="text-base font-medium text-amber-300 italic">{s.tagline}</p>

              <Link
                to={s.route}
                className="group inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 text-gray-900 font-medium rounded-full shadow-lg hover:shadow-amber-400/40 transition-all duration-300 hover:gap-4"
              >
                {s.buttonText}
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ==== Progress dots ==== */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {services.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === currentIndex ? "w-12 bg-amber-400" : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;