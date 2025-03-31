import { motion } from "framer-motion";

const logos = [
  { name: "Teamleader", src: "/logos/teamleader.png" },
  { name: "Wyre", src: "/logos/wyre.png" },
  { name: "Coop-Apotheken", src: "/logos/coopapotheken.png" },
  { name: "Telenet", src: "/logos/telenet.png" },
  { name: "Oris", src: "/logos/oris.png" },
  { name: "VIVO", src: "/logos/vivo.svg" },
  { name: "CIB", src: "/logos/cib.png" },
];

const ScrollingBanner = () => {
  return (
    <div className="flex relative overflow-hidden
     before:absolute before:left-0 before:top-0 before:z-10 
     before:h-full before:w-10 before:bg-gradient-to-r before:from-zinc-100 
     before:to-transparent before:content-[''] after:absolute after:right-0 
     after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-zinc-100
     after:to-transparent after:content-['']">
      <motion.div
        className="flex flex-none gap-16 pr-16"
        initial={{ translateX: 0 }}
        animate={{ translateX: '-50%' }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.name}
            className="h-12 w-auto flex-none"
            style={{ filter: "grayscale(100%)", opacity: 0.5 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingBanner;