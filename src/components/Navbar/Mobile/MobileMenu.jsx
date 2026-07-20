import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";


const MobileMenu = ({ navLinks, onClose }) => {

  return (

    <div className="px-6 pt-7">

      <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-neutral-400">
        Menu
      </p>


      <div className="border-t border-neutral-200">

        {navLinks.map((item, index) => (

          <motion.div
            key={item.id}
            initial={{ opacity:0, x:15 }}
            animate={{ opacity:1, x:0 }}
            transition={{ delay:index * .05 }}
          >

            <NavLink
              to={item.path}
              onClick={onClose}
              className={({isActive}) => 
                `group flex items-center justify-between border-b border-neutral-100 py-4 transition ${
                  isActive
                  ? "text-black"
                  : "text-neutral-600 hover:text-black"
                }`
              }
            >

              <div className="flex items-center gap-4">

                <span className="text-[10px] text-neutral-400">
                  {String(index + 1).padStart(2,"0")}
                </span>


                <span className="text-sm font-medium tracking-wide">
                  {item.label}
                </span>

              </div>


              <ArrowUpRight
                size={14}
                className="opacity-0 transition duration-300 group-hover:opacity-100"
              />

            </NavLink>


          </motion.div>

        ))}


      </div>


    </div>

  );

};


export default MobileMenu;