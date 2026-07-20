import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LookbookHeader = () => {
  const navigate = useNavigate();

  return (
    <motion.header
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-3xl text-center"
    >
      {/* Label */}

      <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-neutral-400 sm:text-[11px]">
        The Aura Lookbook
      </p>

      {/* Heading */}

      <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-semibold leading-[1.05] tracking-tight text-black sm:mt-5 sm:text-5xl lg:text-6xl">
        Timeless
        <br />
        Expression
      </h2>

      {/* Description */}

      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-500 sm:mt-6 sm:text-[15px]">
        Explore our editorial campaign featuring timeless silhouettes,
        premium craftsmanship and refined essentials designed for modern
        luxury.
      </p>

      {/* CTA */}

      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onClick={() => navigate("/collection")}
        className="
          group
          mt-7
          inline-flex
          items-center
          gap-3
          rounded-full
          bg-black
          px-6
          py-3
          text-[10px]
          font-medium
          uppercase
          tracking-[0.28em]
          text-white
          transition-all
          duration-300
          hover:bg-neutral-900
          hover:shadow-[0_18px_40px_rgba(0,0,0,.15)]
          sm:mt-8
          sm:px-7
          sm:py-3.5
          sm:text-[11px]
        "
      >
        Discover Collection

        <ArrowRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </motion.button>
    </motion.header>
  );
};

export default LookbookHeader;