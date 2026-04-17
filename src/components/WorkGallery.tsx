import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import workCabinet from "@/assets/work-cabinet.jpg";
import workCabinetShop from "@/assets/work-cabinet-shop.jpeg";
import workKitchen from "@/assets/work-kitchen.jpg";
import workMantel from "@/assets/work-mantel.jpeg";
import workWindowSeat from "@/assets/work-window-seat.jpeg";
import workBookcase from "@/assets/work-bookcase.jpeg";
import workTimber1 from "@/assets/work-timber1.jpeg";
import workTimber2 from "@/assets/work-timber2.jpg";
import workDeck1 from "@/assets/work-deck1.jpeg";
import workDeck2 from "@/assets/work-deck2.jpeg";
import workPorchProgress from "@/assets/work-porch-progress.jpeg";
import workPorchDone from "@/assets/work-porch-done.jpeg";
import workBallistersInstalled from "@/assets/work-ballister-installed.jpeg";
import workBallisterPieces from "@/assets/work-ballister-pieces.jpeg";
import workDeckLanding from "@/assets/work-deck-landing.jpeg";
import workCedarFence from "@/assets/work-cedar-fence.jpeg";
import workWallCabinets1 from "@/assets/work-wall-cabinets1.jpeg";
import workWallCabinets2 from "@/assets/work-wall-cabinets2.jpeg";
import workRefinishedTable from "@/assets/work-refinished-table.jpg";

interface WorkImage {
  src: string;
  alt: string;
}

interface WorkProject {
  title: string;
  cover: string;
  coverAlt: string;
  images: WorkImage[];
}

const projects: WorkProject[] = [
  {
    title: "RIFT SAWN WHITE OAK CABINETRY",
    cover: workCabinet,
    coverAlt: "Custom rift sawn white oak cabinet",
    images: [
      { src: workCabinet, alt: "Custom rift sawn white oak cabinet" },
      { src: workCabinetShop, alt: "Cabinets being built and clamped in the shop" },
    ],
  },
  {
    title: "KITCHEN & MANTEL — TONY SANDKAMP WOODWORKS",
    cover: workKitchen,
    coverAlt: "White kitchen with island",
    images: [
      { src: workKitchen, alt: "White kitchen with island built with Tony Sandkamp Woodworks" },
      { src: workMantel, alt: "Custom built fireplace mantel" },
    ],
  },
  {
    title: "WALL CABINETS — TONY SANDKAMP WOODWORKS",
    cover: workWallCabinets1,
    coverAlt: "Modern wall cabinets with walnut accent",
    images: [
      { src: workWallCabinets1, alt: "Modern wall cabinets with walnut accent frame" },
      { src: workWallCabinets2, alt: "Wall cabinets and kitchen area" },
    ],
  },
  {
    title: "BUILT-IN WINDOW SEAT",
    cover: workWindowSeat,
    coverAlt: "Custom built-in seating area for bay window",
    images: [
      { src: workWindowSeat, alt: "Custom built-in seating area for bay window" },
    ],
  },
  {
    title: "BUILT-IN BOOKCASE",
    cover: workBookcase,
    coverAlt: "Custom built-in bookcase with LED lighting",
    images: [
      { src: workBookcase, alt: "Custom built-in bookcase with LED lighting and marble counter" },
    ],
  },
  {
    title: "TIMBER FRAME — HUGH LOFTING TIMBER FRAMING",
    cover: workTimber1,
    coverAlt: "Timber frame structure",
    images: [
      { src: workTimber1, alt: "Timber frame structure built with Hugh Lofting Timber Framing" },
      { src: workTimber2, alt: "Timber frame joinery detail" },
    ],
  },
  {
    title: "DECK",
    cover: workDeck1,
    coverAlt: "Custom deck with composite decking",
    images: [
      { src: workDeck1, alt: "Custom deck with composite decking" },
      { src: workDeck2, alt: "Deck from side angle" },
    ],
  },
  {
    title: "PORCH — ED AQUILINO",
    cover: workPorchDone,
    coverAlt: "Finished porch with railing",
    images: [
      { src: workPorchDone, alt: "Finished porch with white railing and columns" },
      { src: workPorchProgress, alt: "Porch decking in progress" },
    ],
  },
  {
    title: "BALLISTER REPLACEMENT",
    cover: workBallistersInstalled,
    coverAlt: "Turned wood ballisters on staircase",
    images: [
      { src: workBallistersInstalled, alt: "Turned wood ballisters installed on staircase" },
      { src: workBallisterPieces, alt: "Custom turned ballister pieces on workbench" },
    ],
  },
  {
    title: "MAHOGANY DECK LANDING",
    cover: workDeckLanding,
    coverAlt: "Custom mahogany deck landing",
    images: [
      { src: workDeckLanding, alt: "Custom mahogany deck landing at front door" },
    ],
  },
  {
    title: "CEDAR FENCE",
    cover: workCedarFence,
    coverAlt: "Custom cedar fence",
    images: [
      { src: workCedarFence, alt: "Custom cedar fence installation" },
    ],
  },
  {
    title: "REFINISHED DINING TABLE",
    cover: workRefinishedTable,
    coverAlt: "Refinished cherry dining table",
    images: [
      { src: workRefinishedTable, alt: "Refinished cherry dining table with inlay detail" },
    ],
  },
];

export default function WorkGallery() {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const open = (idx: number) => {
    setOpenProject(idx);
    setCurrentImage(0);
  };

  const close = () => setOpenProject(null);

  const next = () => {
    if (openProject === null) return;
    setCurrentImage((c) => (c + 1) % projects[openProject].images.length);
  };

  const prev = () => {
    if (openProject === null) return;
    const len = projects[openProject].images.length;
    setCurrentImage((c) => (c - 1 + len) % len);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:px-12">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group cursor-pointer"
            onClick={() => open(idx)}
          >
            <div className="overflow-hidden bg-card aspect-[4/3] relative">
              <img
                src={project.cover}
                alt={project.coverAlt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              {project.images.length > 1 && (
                <span className="absolute top-3 right-3 bg-surface/80 backdrop-blur-sm text-on-surface text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                  {project.images.length} Photos
                </span>
              )}
            </div>
            <h4 className="mt-4 text-xs font-light uppercase tracking-wider">{project.title}</h4>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            >
              <X size={28} />
            </button>

            <div
              className="relative max-w-4xl w-full mx-6 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-white/60 text-xs uppercase tracking-widest mb-6 font-light">
                {projects[openProject].title}
              </p>

              <div className="relative w-full flex items-center justify-center">
                {projects[openProject].images.length > 1 && (
                  <button
                    onClick={prev}
                    className="absolute left-0 md:-left-14 text-white/50 hover:text-white transition-colors z-10"
                  >
                    <ChevronLeft size={36} />
                  </button>
                )}

                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={projects[openProject].images[currentImage].src}
                    alt={projects[openProject].images[currentImage].alt}
                    className="max-h-[75vh] w-auto max-w-full object-contain"
                  />
                </AnimatePresence>

                {projects[openProject].images.length > 1 && (
                  <button
                    onClick={next}
                    className="absolute right-0 md:-right-14 text-white/50 hover:text-white transition-colors z-10"
                  >
                    <ChevronRight size={36} />
                  </button>
                )}
              </div>

              {projects[openProject].images.length > 1 && (
                <div className="flex gap-2 mt-6">
                  {projects[openProject].images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === currentImage ? "bg-green-accent" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
