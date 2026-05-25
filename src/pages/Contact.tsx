import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Check } from "lucide-react";
import Header from "@/components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("SAM Inquiry:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
    <Header/>

    <div className="min-h-screen bg-black">
      {/* Main Contact Section */}
      <section className="relative z-10 min-h-screen bg-black text-white overflow-hidden flex flex-col pt-24 md:pt-28">
        {/* Animated backdrop – clipped */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20 animate-pulse" />
        </div>

        {/* Top glow */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/15 to-transparent pointer-events-none" />

        {/* Main Content */}
        <div className="flex-1 relative max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          {/* Hero Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70">
              Optimize Your Software Estate
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Get expert guidance on licensing compliance, cost reduction, and asset visibility.  
              <span className="block mt-2 text-primary font-medium">We respond in under 24 hours.</span>
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* FORM CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="relative p-8 md:p-10 bg-white/6 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl transition-all duration-300"
            >
              <div onSubmit={handleSubmit} className="relative space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  {["name", "email"].map((f) => (
                    <FloatingLabelInput
                      key={f}
                      name={f}
                      label={f === "name" ? "Full Name *" : "Work Email *"}
                      type={f === "email" ? "email" : "text"}
                      placeholder={f === "name" ? "Jane Doe" : "jane@company.com"}
                      value={formData[f as keyof typeof formData]}
                      onChange={handleChange}
                      required
                    />
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {["company", "role"].map((f) => (
                    <FloatingLabelInput
                      key={f}
                      name={f}
                      label={f === "company" ? "Company" : "Role"}
                      placeholder={
                        f === "company" ? "Acme Corp" : "IT Director, Procurement Lead"
                      }
                      value={formData[f as keyof typeof formData]}
                      onChange={handleChange}
                    />
                  ))}
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-white/90">
                    What's your biggest SAM challenge?
                  </label>
                  <textarea
                    name="message"
                    placeholder="e.g., Audit risk, overspending on SaaS, shadow IT, renewal tracking..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/40 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary transition-all duration-300 px-4 py-3"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitted}
                  className="group relative w-full h-16 overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/90 text-black font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-primary/30 hover:scale-[1.01] flex items-center justify-center gap-3 disabled:opacity-90"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </motion.div>

            {/* TEXT BLOCK */}
            <div className="flex flex-col justify-center space-y-10">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[10vw] md:text-[7.5vw] lg:text-[6.5vw] font-black leading-[0.88] tracking-tighter text-primary"
              >
                Let's Fix Your SAM
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4 text-lg text-white/85"
              >
                <p>We help enterprises:</p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Reduce license overspend by 20–30%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Eliminate audit penalties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Centralize SaaS & on-prem visibility</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="space-y-3"
              >
                <p className="text-white/90">
                  Prefer email? Write to us at:
                </p>
                <a
                  href="mailto:contact@sriska.com"
                  className="text-primary text-xl font-bold hover:underline transition"
                >
                  contact@sriska.com
                </a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-sm text-white/50"
              >
                Software Asset Management • Simplified. Audited. Optimized.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Tight Footer – no extra space */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1 }}
          className="relative mt-16 pt-6 pb-8 border-t border-white/10 text-center text-xs text-white/40"
        >
          © {new Date().getFullYear()} sriska. All rights reserved.
        </motion.footer>
      </section>
    </div>
    </>
  );
};

/* Floating Label Input – Premium */
type FloatingLabelInputProps = {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
};

const FloatingLabelInput = ({
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: FloatingLabelInputProps) => {
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        type={type}
        placeholder=" "
        value={value}
        onChange={onChange}
        required={required}
        className="peer w-full h-14 bg-white/5 border border-white/20 rounded-2xl px-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary transition-all duration-300"
      />
      <label
        htmlFor={name}
        className={`absolute left-4 top-4 text-white/60 pointer-events-none transition-all duration-300 origin-left ${
          hasValue
            ? "-translate-y-7 scale-75 text-primary font-medium"
            : "translate-y-0 scale-100"
        } peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-primary peer-focus:font-medium peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100`}
      >
        {label}
      </label>
    </div>
  );
};

export default Contact;