import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.svg";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import ContactForm from "@/components/ContactForm";

const services = [
  { id: "01", title: "Cabinetry", description: "Custom built-ins, kitchens, vanities, and architectural millwork." },
  { id: "02", title: "Timber Framing", description: "Sheds, barn frames, pergolas, and other timber work." },
  { id: "03", title: "Finish Carpentry", description: "Trim, molding, doors, and windows." },
  { id: "04", title: "Kitchen & Bath Remodels", description: "Full renovations, honest timelines, one point of contact." },
  { id: "05", title: "Decks", description: "Outdoor structures built to handle the weather." },
  { id: "06", title: "Built-ins", description: "Shelving, window seats, mud rooms, and storage designed around your space." },
  { id: "07", title: "Trim & Millwork", description: "Baseboards, casings, wainscoting, crown, and custom millwork." },
  { id: "08", title: "General Remodeling", description: "Framing, drywall, flooring, tiling, painting, minor electrical and plumbing." },
];

const works = [
  {
    title: "REHOBOTH RESIDENCE",
    year: "2023",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChZCPkBFI3uQRUakAn2cte7z02A_nCwA9D7b7u4FK1U7zePun3rJM7HojGgy8iwx39PzbNfY6i9g93UUAu_e95g2y7lwPadCieaS0OmcGoyEh0V76qwfLqlKYWdrAy_VNaClGoaTbTZTEqzmhu5kgXQCr9c_wbyXXBm7oL8qBmmMgOi9BXPxY9bl0nFhqofyb4VkGwtAzw87L-j_Y0snFSA2wE02N32as_61dnfaZbpfn79HYhlynWacq8d-iTmDXShciMZhLmTvI",
    alt: "Monochromatic modern home exterior with sharp cantilevered roof lines",
    span: "md:col-span-8"
  },
  {
    title: "KITCHEN NO. 42",
    year: "2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsPYobPmOkHjesHZYUyT1ROowuGr3Z-pfGIwfOGCsdTayG3FUbZfW2FTVaOl8VMEVXyG3DLGKEeESvHDhH8DJ_NWBiSaT6ktpBd-j8SENA45iQI4sUKkbj4js2aECaupjYOfyXcAIePBV8g8FOKRwkxLWv9XhGPy9jovn0MBZFEYOpSi8ik2h4SWgEPHJcIb8qtuSuiQsSql_NmiJ-k1ZyiJNJAixQbC1_QTA6v4_1toMlynviGLialboQZmK79NFYHeZBdwW0CO0",
    alt: "Minimalist white kitchen with custom dark oak cabinetry",
    span: "md:col-span-4 mt-24"
  },
  {
    title: "THE ANNEX JOINERY",
    year: "2022",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCURSoa9sn25udxQ1Vk9JL1m_oRifOkISjhCKhHkNO08-mM3VS2uccYC9AdSNx4nIBwzSfmBwtby7ALA0j_nPhIyIGMALAcqoLMftydKBnMDLWwps84DgHN7WKjwYckD0-O_8ORTu_aQsoqtvQcFDXyjXBxBuuWG4nOZwsVKqRhIm4n5qSBJOuHmRs0LlgkHwLudZdWDaCBXTJ8NfrXUqDpDDCW-WecSymdyXLfp7QMJNygVl67-fNDPGtRXy_dqcQMx6wsuGW26yE",
    alt: "Close up of structural timber joinery",
    span: "md:col-span-4"
  },
  {
    title: "LEWES EXTERIORS",
    year: "2023",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGsuL1413C8TQxlkAJ5VHJ45qoKVQ0-IC1AFX5cx483FU88CuMhs_2yOXpW3kILYQfbwOShrw5lrgs66ql3_DINQeZjrM42oVFuPOhwZlqWGdnVFjWc7w4jm6kJigaGZ0GKsYLpGdTbClDn1rtHOLgqKkdo8xrZGKX1gvPW5cGP0cWWdiKIMMBF1qclDqWMfUTRQ4yBrBWclZS_k-U-AqyyYV5RhIXDufndGKti8EcCS5j0CCDEsEP4PiKFqkCAPxrM-BdHVFGqMQ",
    alt: "Custom cedar deck with geometric levels",
    span: "md:col-span-8 md:-mt-12"
  }
];

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface selection:bg-green-accent selection:text-green-accent-foreground">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 flex justify-between items-center ${scrolled ? 'bg-surface/95 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="flex items-center gap-3">
          <img src={logo} alt="Delaware Built" className="h-20 md:h-24 w-auto" />
        </div>
        
        <div className="hidden md:flex gap-10 text-xs font-bold tracking-widest uppercase text-on-surface">
          <a href="#" className="border-b border-green-accent pb-1 text-green-accent">HOME</a>
          <a href="#services" className="hover:text-green-accent transition-colors">SERVICES</a>
          <a href="#works" className="hover:text-green-accent transition-colors">WORKS</a>
          <a href="#about" className="hover:text-green-accent transition-colors">ABOUT</a>
          <a href="#contact" className="hover:text-green-accent transition-colors">CONTACT</a>
        </div>

        <a href="#contact" className="text-xs font-bold tracking-widest uppercase bg-green-accent text-green-accent-foreground px-5 py-2.5 hover:opacity-90 transition-opacity">
          GET A QUOTE
        </a>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-surface">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8"
            >
              <div className="h-1 w-16 bg-green-accent" />
              <h1 className="text-4xl md:text-6xl font-[200] leading-tight tracking-tight uppercase">
                Delaware Built.
              </h1>
              <p className="text-green-accent text-base md:text-lg font-light uppercase tracking-widest">Built with Care.</p>
              <p className="text-outline text-xs font-light leading-relaxed max-w-lg uppercase tracking-[0.2em]">
                Custom Cabinetry · Timber Framing · Finish Carpentry · Decks · Built-Ins · Kitchen &amp; Bath Remodels · Trim &amp; Millwork · Pergolas · And More
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="#contact" className="bg-green-accent text-green-accent-foreground px-8 py-4 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                  Start Your Project
                </a>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hidden md:block"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChZCPkBFI3uQRUakAn2cte7z02A_nCwA9D7b7u4FK1U7zePun3rJM7HojGgy8iwx39PzbNfY6i9g93UUAu_e95g2y7lwPadCieaS0OmcGoyEh0V76qwfLqlKYWdrAy_VNaClGoaTbTZTEqzmhu5kgXQCr9c_wbyXXBm7oL8qBmmMgOi9BXPxY9bl0nFhqofyb4VkGwtAzw87L-j_Y0snFSA2wE02N32as_61dnfaZbpfn79HYhlynWacq8d-iTmDXShciMZhLmTvI"
                  alt="Modern home built by Delaware Built"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-accent text-green-accent-foreground p-6">
                <p className="text-xs font-bold uppercase tracking-widest">Est. 2012</p>
                <p className="text-[10px] uppercase tracking-widest mt-1 opacity-80">Precision Built</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-6 md:px-24 bg-surface">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-[300] uppercase tracking-widest"
              >
                SERVICES
              </motion.h2>
              <div className="mt-8 h-1 w-12 bg-green-accent"></div>
            </div>
            
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-12">
              {services.map((service, idx) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <span className="text-[10px] text-green-accent block mb-4 uppercase tracking-widest font-semibold">{service.id}</span>
                  <h3 className="text-xl font-light uppercase tracking-tighter-xl mb-4">{service.title}</h3>
                  <p className="text-outline font-light leading-relaxed max-w-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Works Section */}
        <section id="works" className="bg-secondary py-32 px-6 md:px-0 overflow-hidden">
          <div className="md:px-24 mb-16">
            <h2 className="text-2xl font-[300] uppercase tracking-widest">WORK</h2>
            <div className="mt-4 h-1 w-12 bg-green-accent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:px-12">
            {works.map((work) => (
              <motion.div 
                key={work.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`${work.span} group cursor-pointer`}
              >
                <div className="overflow-hidden bg-card">
                  <img 
                    src={work.image} 
                    alt={work.alt}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-6 flex justify-between items-baseline">
                  <h4 className="text-lg font-light uppercase tracking-tighter-xl">{work.title}</h4>
                  <span className="text-[10px] font-semibold text-green-accent uppercase tracking-widest">{work.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 md:px-24 bg-surface">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl font-[300] uppercase tracking-widest mb-4">THE BUILDER</h2>
                <div className="h-1 w-12 bg-green-accent mb-10"></div>
                <p className="text-outline font-light leading-relaxed text-sm md:text-base">
                  I started building when I was 18 on a farm, when my boss handed me a tape measure and a speed square and put me to work on a barn. Since then, I've worked in carpentry, cabinetry, and timber framing, and spent some time away as a software engineer—but I've always found my way back. What's kept me in it is a kind of curiosity: how people build, how traditions develop, and what makes something work. I spend a lot of time reading, looking, and trying to understand it. There's always more to learn, and that's a big part of what I like about the work.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-5"
            >
              <div className="aspect-[4/5] bg-card overflow-hidden flex items-center justify-center">
                <p className="text-outline text-xs uppercase tracking-widest">Your photo here</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-48 px-6 md:px-24 bg-surface">
          <div className="max-w-4xl mx-auto">
            <div className="mb-24 text-center">
              <h2 className="text-4xl md:text-5xl font-[200] uppercase tracking-[0.3em]">GET IN TOUCH</h2>
              <p className="mt-8 text-outline font-light text-sm uppercase tracking-widest">Tell us about your project. We'd love to hear from you.</p>
              <div className="mt-6 h-1 w-12 bg-green-accent mx-auto"></div>
            </div>
            
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary py-16 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Delaware Built" className="h-8 w-auto invert brightness-200" />
            <span className="opacity-60 font-normal">© 2024 DELAWARE BUILT</span>
          </div>
          
        </div>
      </footer>
    </div>
  );
}
