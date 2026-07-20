import { motion } from "framer-motion";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -left-40 top-24 hidden h-80 w-80 rounded-full bg-neutral-100 blur-3xl lg:block"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: .8 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -right-40 bottom-0 hidden h-80 w-80 rounded-full bg-neutral-100 blur-3xl xl:block"
      />

      <div className="relative z-10 mx-auto grid w-[94%] max-w-[1580px] items-center gap-10 py-10 sm:gap-14 sm:py-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:py-24">

        <div className="min-w-0 order-2 lg:order-1">
          <HeroContent />
        </div>

        <div className="min-w-0 order-1 lg:order-2">
          <HeroImage />
        </div>

      </div>

    </section>
  );
};

export default HeroSection;