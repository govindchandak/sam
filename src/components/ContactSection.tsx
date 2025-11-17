import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("SAM Inquiry:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <footer className="relative bg-black text-white" style={{ zIndex: 10 }}>
      {/* Minimal top glow */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py160 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/90">Name *</label>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl focus-visible:ring-primary/60 focus-visible:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/90">Email *</label>
                <Input
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl focus-visible:ring-primary/60 focus-visible:border-primary"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/90">Company</label>
                <Input
                  name="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl focus-visible:ring-primary/60"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/90">Role</label>
                <Input
                  name="role"
                  placeholder="IT Manager, CFO, etc."
                  value={formData.role}
                  onChange={handleChange}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl focus-visible:ring-primary/60"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/90">How can we help?</label>
              <Textarea
                name="message"
                placeholder="Tell us about your software licensing, compliance, or cost challenges..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 rounded-xl resize-none focus-visible:ring-primary/60 focus-visible:border-primary"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-14 bg-white text-black hover:bg-white/90 font-bold text-lg rounded-xl shadow-lg hover:shadow-primary/20 transition-all"
            >
              Send Message
            </Button>
          </form>

          {/* Text */}
          <div className="flex flex-col justify-center space-y-5">
            <h2 className="text-[11vw] md:text-[8vw] lg:text-[7vw] font-black leading-[0.9] tracking-tighter text-primary">
              Get in touch
            </h2>
            <div className="space-y-1 text-lg text-white/85">
              <p>Prefer email? Sounds good.</p>
              <p>
                I’m over at{" "}
                <a href="mailto:contact@aniva.com" className="text-primary font-bold hover:underline">
                  contact@aniva.com
                </a>
              </p>
            </div>
            <p className="text-sm text-white/50">Software Asset Management • Simplified.</p>
          </div>
        </div>

        {/* Tight footer */}
        <div className="mt-16 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Anup Tiwari. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;