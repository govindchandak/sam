import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import { ProjectCardsList } from "@/components/ProjectCard";
import ContactSection from "@/components/ContactSection";
import CompaniesSection from "@/components/CompaniesSection";

const Index = () => {
  return (
    <div className="relative overflow-y-hidden">
      <Header />

      {/* Fixed hero behind everything */}
      <HeroSection />

      {/* Scrolling content */}
      <div className="relative" style={{ marginTop: "100vh", zIndex:10 }}>
        <section id="services">
          <ServicesSection />
        </section>

        {/* ALL PROJECT CARDS – data lives inside ProjectCard */}
        <ProjectCardsList />
      </div>

      <CompaniesSection />

      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default Index;