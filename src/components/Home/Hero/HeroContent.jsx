import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: .55, delay, ease: "easeOut" },
});

const stats = [
  { value: "100%", label: "Premium Fabric" },
  { value: "500+", label: "Curated Styles" },
  { value: "10K+", label: "Happy Customers" },
];

const HeroContent = () => {
  return (
    <div className="relative z-10 max-w-2xl text-center lg:text-left">

      <motion.p
        {...fadeUp()}
        className="text-[10px] font-semibold uppercase tracking-[0.4em] text-neutral-400 sm:text-[11px]"
      >
        The Aura Signature Edition
      </motion.p>

      <motion.h1
        {...fadeUp(.08)}
        className="mt-4 font-['Playfair_Display'] text-[2.2rem] font-semibold leading-[1.05] tracking-tight text-black sm:mt-6 sm:text-5xl lg:text-7xl"
      >
        Elevate Your
        <br />
        Everyday Elegance
      </motion.h1>

      <motion.p
        {...fadeUp(.16)}
        className="mx-auto mt-5 max-w-xl text-[14px] leading-7 text-neutral-500 sm:mt-7 sm:text-base lg:mx-0"
      >
        Discover refined collections crafted with premium fabrics, contemporary silhouettes and timeless details designed for modern everyday luxury.
      </motion.p>

      <motion.div
        {...fadeUp(.24)}
        className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row"
      >

        <Link
          to="/collection"
          className="group flex w-full items-center justify-center gap-2 rounded-full bg-black px-8 py-3.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white transition duration-300 hover:-translate-y-1 hover:bg-neutral-900 sm:w-auto sm:px-9 sm:py-4 sm:text-[11px]"
        >
          Shop Collection
          <ArrowRight size={15} className="transition duration-300 group-hover:translate-x-1" />
        </Link>

        <Link
          to="/collection"
          className="flex w-full items-center justify-center rounded-full border border-neutral-300 bg-white px-8 py-3.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-black transition duration-300 hover:border-black hover:bg-neutral-50 sm:w-auto sm:px-9 sm:py-4 sm:text-[11px]"
        >
          Discover More
        </Link>

      </motion.div>

      <motion.div
        {...fadeUp(.34)}
        className="mt-10 grid grid-cols-3 gap-2 border-t border-neutral-200 pt-6 sm:mt-14 sm:gap-6 sm:pt-8"
      >

        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl py-3 transition duration-300 hover:bg-neutral-50"
          >

            <h3 className="font-['Playfair_Display'] text-xl font-semibold text-black sm:text-3xl">
              {item.value}
            </h3>

            <p className="mt-2 text-[9px] uppercase tracking-[0.24em] text-neutral-400 sm:text-[10px]">
              {item.label}
            </p>

          </div>
        ))}

      </motion.div>

    </div>
  );
};

export default HeroContent;