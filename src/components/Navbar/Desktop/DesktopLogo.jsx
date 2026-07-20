import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DesktopLogo = () => {
  return (
    <Link to="/" className="group inline-block select-none">

      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="flex flex-col"
      >

        <motion.h1
          variants={{
            rest: {
              letterSpacing: ".18em",
              y: 0,
            },
            hover: {
              letterSpacing: ".24em",
              y: -1,
            },
          }}
          transition={{ duration: .35 }}
          className="font-['Playfair_Display'] text-[28px] font-semibold uppercase leading-none text-black"
        >
           THE AURA
        </motion.h1>

        <motion.span
          variants={{
            rest: {
              width: 0,
              opacity: .5,
            },
            hover: {
              width: "100%",
              opacity: 1,
            },
          }}
          transition={{ duration: .35 }}
          className="mt-3 h-px bg-black"
        />

        <motion.p
          variants={{
            rest: {
              opacity: .55,
              y: 2,
            },
            hover: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ duration: .3 }}
          className="mt-3 text-[9px] font-medium uppercase tracking-[0.42em] text-gray-500"
        >
          Modern Luxury Atelier
        </motion.p>

      </motion.div>

    </Link>
  );
};

export default DesktopLogo;