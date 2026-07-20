import { motion } from "framer-motion";

const LookbookImage = ({ image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,.08)]"
    >
      {/* Image */}

      <div className="aspect-4/3 sm:aspect-video lg:aspect-16/8 overflow-hidden">
        <img
          src={image}
          alt="The Aura Lookbook"
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl sm:left-6 sm:top-6"
      >
        <p className="text-[9px] uppercase tracking-[0.35em] text-white sm:text-[10px]">
          Campaign 2026
        </p>
      </motion.div>

      {/* Content */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45 }}
        className="
          absolute
          bottom-4
          left-4
          max-w-65
          rounded-2xl
          border
          border-white/15
          bg-white/10
          p-4
          backdrop-blur-xl
          sm:bottom-6
          sm:left-6
          sm:max-w-[320px]
          sm:p-6
        "
      >
        <p className="text-[9px] uppercase tracking-[0.35em] text-white/70 sm:text-[10px]">
          Editorial Pick
        </p>

        <h3 className="mt-2 font-['Playfair_Display'] text-xl font-semibold text-white sm:text-3xl">
          Modern Luxury
        </h3>

        <p className="mt-3 text-xs leading-6 text-white/75 sm:text-sm">
          Crafted with premium fabrics, timeless silhouettes and refined
          details for effortless everyday elegance.
        </p>
      </motion.div>

      {/* Number */}

      <div className="absolute bottom-5 right-6 hidden lg:block">
        <span className="font-['Playfair_Display'] text-6xl font-semibold text-white/15">
          01
        </span>
      </div>
    </motion.div>
  );
};

export default LookbookImage;