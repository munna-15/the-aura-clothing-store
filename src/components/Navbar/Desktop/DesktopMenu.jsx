import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const DesktopMenu = ({ navLinks }) => {
  return (
    <nav className="flex items-center gap-12 xl:gap-14">

      {navLinks.map((item) => (

        <NavLink
          key={item.id}
          to={item.path}
          className="group relative py-2"
        >
          {({ isActive }) => (

            <>
              <motion.span
                whileHover={{ y: -1 }}
                transition={{ duration: .2 }}
                className={`relative z-10 text-[13px] font-medium uppercase tracking-[0.28em] transition-colors duration-300 ${
                  isActive
                    ? "text-black"
                    : "text-neutral-500 group-hover:text-black"
                }`}
              >
                {item.label}
              </motion.span>

              <span
                className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-black transition-all duration-300 ease-out ${
                  isActive
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />

            </>

          )}
        </NavLink>

      ))}

    </nav>
  );
};

export default DesktopMenu;