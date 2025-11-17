import React from "react";
import ProjectCardHeading from "./ProjectCardHeading";

interface Project {
  title: string;
  subtitle: string;
  intro: string;
  description: string[];
  tags: string[];
  backgroundColor: string;
  textColor: string;
  image?: string;
  logo: string;
}

/* -------------------  DATA (unchanged) ------------------- */
const projects: Project[] = [
  {
    title: "Microsoft",
    subtitle: "Right-Sizing Microsoft 365 and Azure",
    intro: "We help you unlock savings across Microsoft 365 and hybrid cloud environments by optimizing user and server licensing.",
    description: [
      "Optimize M365 (E1, E3, E5) based on real user activity.",
      "Remove inactive or duplicate user licenses.",
      "Right-size Windows Server, SQL Server, and Azure usage.",
      "Simplify EA, CSP, and SPLA management.",
    ],
    tags: ["M365", "AZURE", "VISUAL STUDIO"],
    backgroundColor: "#F7D320",
    textColor: "text-black",
    image: "/section3/demo.png",
    logo: "/logos/microsoft-logo-box.png",
  },
  {
    title: "Adobe",
    subtitle: "Get More from Your Adobe Investment",
    intro: "We help you gain full control of your Adobe environment to ensure every license delivers value.",
    description: [
      "Identify and reclaim unused or duplicate Adobe users.",
      "Optimize Creative Cloud and Acrobat assignments.",
      "Centralize control via the Adobe Admin Console.",
      "Streamline renewals to prevent over-purchasing.",
    ],
    tags: ["VIP", "ETLA", "NAMED USERS"],
    backgroundColor: "hsla(359, 82%, 53%, 1.00)",
    textColor: "text-black",
    image: "/section3/demo.png",
    logo: "/logos/adobe-logo.png",
  },
  {
    title: "IBM",
    subtitle: "Optimize Your IBM Licensing",
    intro: "IBM licensing is complex across distributed, virtual, and Mainframe environments. We help you stay compliant and reduce costs through accurate tracking and optimization.",
    description: [
      "Manage sub-capacity licensing with compliant ILMT setup.",
      "Optimize PVU, VPC, and Mainframe MLC usage.",
      "Align Passport Advantage and SCRT data for accuracy.",
      "Support Cloud Pak and container license governance.",
    ],
    tags: ["SUB-CAPACITY", "CLOUD PARK", "MAINFRAME"],
    backgroundColor: "#2375bb",
    textColor: "text-white",
    image: "/section3/demo.png",
    logo: "/logos/ibm-logo2.jpg",
  },
  {
    title: "Oracle",
    subtitle: "Simplify, Save, and Scale Your Oracle",
    intro: "We bring clarity, control, and scalability to your Oracle database and application licensing—cutting costs and minimizing audit risk.",
    description: [
      "Optimize Database and Named User Plus (NUP) licensing.",
      "Identify idle or redundant instances.",
      "Support Oracle LMS audit defense.",
      "Align support renewals with actual usage.",
    ],
    tags: ["DATABASES", "JAVA SE", "MIDDLEWARE"],
    backgroundColor: "#b90000",
    textColor: "text-white",
    image: "/section3/demo.png",
    logo: "/logos/oracle-logo.png",
  },
];

/* -------------------  CARD ------------------- */
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const {
    title,
    subtitle,
    intro,
    description,
    tags,
    backgroundColor,
    textColor,
    image = "/logo.png",
    logo,
  } = project;

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor, zIndex: 10 }}
    >
      {/* Black side margins */}
      <div className="absolute inset-y-0 left-0 w-[6vw] md:w-[2vw] bg-black" />
      <div className="absolute inset-y-0 right-0 w-[6vw] md:w-[2vw] bg-black" />

      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10 pointer-events-none" />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none mix-blend-soft-light"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid md:grid-cols-[38%_62%] gap-6 lg:gap-10 items-center relative z-10 py-12">
        
        {/* LEFT – TEXT */}
        <div className={`space-y-5 ${textColor}`}>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
              <img src={logo} alt={`${title} logo`} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter">{title}</h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-current opacity-60" />
            <p className="text-lg md:text-xl font-semibold opacity-90">{subtitle}</p>
          </div>

          <p className="text-base md:text-lg leading-relaxed font-medium opacity-85 max-w-md">{intro}</p>

          <ul className="space-y-2.5">
            {description.map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current opacity-60 flex-shrink-0" />
                <span className="text-base md:text-lg leading-relaxed opacity-80 font-light">{t}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-widest border border-white/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT – IMAGE (NO bottom shadow on hover) */}
        <div className="relative h-full min-h-[420px] md:min-h-[460px] lg:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20 bg-white/10 backdrop-blur-sm group">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* REMOVED: blackish bottom gradient on hover */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/40 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/40 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </section>
  );
};

export const ProjectCardsList: React.FC = () => (
  <>
    <ProjectCardHeading />
    {projects.map((proj, idx) => (
      <ProjectCard key={idx} project={proj} />
    ))}
  </>
);

export default ProjectCard;