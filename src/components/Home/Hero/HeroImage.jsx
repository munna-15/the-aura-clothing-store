import { motion } from "framer-motion";
import { assets } from "../../../assets/assets";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30, scale: 1.03 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const HeroImage = () => {
  return (
    <div className="relative flex justify-center lg:justify-end">

      {/* Background Glow */}

      <div className="pointer-events-none absolute right-0 top-10 hidden h-72 w-72 rounded-full bg-neutral-100 blur-3xl sm:block" />

      {/* Image */}

      <motion.div
        {...fadeUp()}
        whileHover={{ y: -8 }}
        className="relative z-10 overflow-hidden rounded-[26px] sm:rounded-4xl"
      >

        <motion.img
          src={assets.hero_1}
          alt="The Aura Collection"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: .7 }}
          className="h-80 w-56 rounded-[26px] object-cover shadow-[0_20px_50px_rgba(0,0,0,.14)] transition duration-500 hover:shadow-[0_35px_80px_rgba(0,0,0,.18)] sm:h-136 sm:w-[24rem] sm:rounded-4xl lg:h-176 lg:w-124"
        />

      </motion.div>

      {/* Floating Card */}

      <motion.div
        {...fadeUp(.35)}
        whileHover={{ y: -4 }}
        className="absolute bottom-3 left-2 z-20 max-w-44 rounded-2xl border border-white/40 bg-white/85 p-4 shadow-2xl backdrop-blur-xl sm:bottom-8 sm:left-0 sm:max-w-60 sm:rounded-3xl sm:p-6"
      >

        <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-neutral-400 sm:text-[10px]">

          New Arrival

        </p>

        <h3 className="mt-2 font-['Playfair_Display'] text-lg font-semibold text-black sm:mt-3 sm:text-xl">

          Signature Collection

        </h3>

        <p className="mt-2 text-xs leading-5 text-neutral-500 sm:text-sm sm:leading-6">

          Crafted with premium fabrics, refined tailoring and timeless elegance.

        </p>

        <div className="mt-4 flex items-center gap-2 sm:mt-5">

          <span className="h-2 w-2 rounded-full bg-emerald-500" />

          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400 sm:text-[11px]">

            Available Now

          </span>

        </div>

      </motion.div>

    </div>
  );
};

export default HeroImage;