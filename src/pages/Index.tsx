import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.svg";

const services = [
  { id: "01", title: "Cabinetry", description: "Bespoke storage solutions crafted from premium hardwoods, prioritizing functional geometry." },
  { id: "02", title: "Timber Framing", description: "Structural skeletons defined by traditional joinery and monumental scale." },
  { id: "03", title: "Carpentry", description: "Precision finishing and structural woodcraft executed with surgical accuracy." },
  { id: "04", title: "Renovations", description: "Transforming existing volumes through thoughtful architectural intervention." },
  { id: "05", title: "Bathrooms", description: "Minimalist sanctuaries combining raw materials with refined utility." },
  { id: "06", title: "Kitchens", description: "Culinary hubs built for durability and visual silence." },
  { id: "07", title: "Trim", description: "The final detail. Precision lines that define the spatial boundaries." },
  { id: "08", title: "Decks", description: "Outdoor structures extending the architectural footprint into the landscape." },
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

export default function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-primary-foreground">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-8 flex justify-between items-center ${scrolled ? 'bg-surface/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent'}`}>
        <div className="flex items-center gap-3">
          <img src={logo} alt="Delaware Built" className="h-8 w-auto" />
        </div>
        
        <div className="hidden md:flex gap-12 text-[10px] font-bold tracking-widest uppercase">
          <a href="#" className="border-b border-on-surface pb-1">HOME</a>
          <a href="#services" className="text-outline hover:text-on-surface transition-colors">SERVICES</a>
          <a href="#works" className="text-outline hover:text-on-surface transition-colors">WORKS</a>
          <a href="#inquire" className="text-outline hover:text-on-surface transition-colors">INQUIRE</a>
        </div>

        <button className="text-[10px] font-bold tracking-widest uppercase hover:opacity-60 transition-opacity">
          PORTFOLIO
        </button>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ73hBXg9tthcSki1au0NV6NOVQu3iuCvdQLnqPZ9MIUyXfKfoxHexy3fLgqxufihuHloGayt1slXJMSqhCnDRzdb7xsy2aIQcBmOk2EzW7I0C21adnw_IHj0x-RhowJORLVa2OMqabvF2Z51ZQpDSSIdr6CZFnr8gcf7_5gBNt4q6TlKZmc22OAJHPH-nQwGZVavdCOmElfYM1iB4iAoZK48Nc_YMUX_EGssbBzyNDNyDQp4VuiIBD5RJdhO8SLxavOnKXYwyb_M" 
              alt="Architectural interior"
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="relative z-10 flex flex-col items-center gap-6">
            <motion.img
              src={logo}
              alt="Delaware Built"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-24 md:h-32 w-auto invert"
            />
            <motion.h1 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-primary-foreground text-[10vw] md:text-[8vw] font-[200] leading-none tracking-[0.15em] uppercase"
            >
              DELAWARE BUILT
            </motion.h1>
          </div>

          <div className="absolute bottom-12 left-6 md:left-12 z-10">
            <p className="text-primary-foreground/40 text-[10px] uppercase tracking-widest-xl font-semibold">Architectural Integrity</p>
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
              <div className="mt-8 h-px w-12 bg-on-surface"></div>
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
                  <span className="text-[10px] text-outline block mb-4 uppercase tracking-widest font-semibold">{service.id}</span>
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
            <h2 className="text-2xl font-[300] uppercase tracking-widest">SELECTED WORKS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:px-12">
            {works.map((work) => (
              <motion.div 
                key={work.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`${work.span} group cursor-crosshair`}
              >
                <div className="overflow-hidden bg-card">
                  <img 
                    src={work.image} 
                    alt={work.alt}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-6 flex justify-between items-baseline">
                  <h4 className="text-lg font-light uppercase tracking-tighter-xl">{work.title}</h4>
                  <span className="text-[10px] font-semibold text-outline uppercase tracking-widest">{work.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Inquire Section */}
        <section id="inquire" className="py-48 px-6 md:px-24 bg-surface">
          <div className="max-w-4xl mx-auto">
            <div className="mb-24 text-center">
              <h2 className="text-4xl md:text-5xl font-[200] uppercase tracking-[0.3em]">INQUIRE</h2>
              <p className="mt-8 text-outline font-light text-sm uppercase tracking-widest">A dialogue about craft begins here.</p>
            </div>
            
            <form className="space-y-16" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="relative group">
                  <label className="block text-[10px] font-semibold uppercase tracking-widest mb-2 group-focus-within:text-on-surface transition-colors">FULL NAME</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-on-surface transition-colors py-2 px-0 font-light placeholder:text-outline-variant/50"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-[10px] font-semibold uppercase tracking-widest mb-2 group-focus-within:text-on-surface transition-colors">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-on-surface transition-colors py-2 px-0 font-light placeholder:text-outline-variant/50"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <label className="block text-[10px] font-semibold uppercase tracking-widest mb-2 group-focus-within:text-on-surface transition-colors">PROJECT TYPE</label>
                <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-on-surface transition-colors py-2 px-0 font-light appearance-none">
                  <option>CABINETRY</option>
                  <option>TIMBER FRAMING</option>
                  <option>RENOVATION</option>
                  <option>NEW BUILD</option>
                </select>
              </div>
              
              <div className="relative group">
                <label className="block text-[10px] font-semibold uppercase tracking-widest mb-2 group-focus-within:text-on-surface transition-colors">MESSAGE</label>
                <textarea 
                  rows={4}
                  placeholder="Describe the scale and intent of your project..."
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-on-surface transition-colors py-2 px-0 font-light resize-none placeholder:text-outline-variant/50"
                />
              </div>
              
              <div className="flex justify-center pt-8">
                <button 
                  type="submit"
                  className="bg-primary text-primary-foreground px-16 py-5 text-[10px] font-bold uppercase tracking-widest-xl transition-all duration-300 hover:bg-primary/90"
                >
                  SEND ENQUIRY
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-16 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-semibold uppercase tracking-widest">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Delaware Built" className="h-6 w-auto" />
            <span className="text-outline font-normal">© 2024 DELAWARE BUILT</span>
          </div>
          
          <div className="flex gap-12">
            <a href="#" className="text-outline hover:text-on-surface transition-colors">INSTAGRAM</a>
            <a href="#" className="text-outline hover:text-on-surface transition-colors">LINKEDIN</a>
            <a href="#" className="text-outline hover:text-on-surface transition-colors">CONTACT</a>
          </div>
          
          <div className="text-outline">
            EST. 2012 / PRECISION BUILT
          </div>
        </div>
      </footer>
    </div>
  );
}
