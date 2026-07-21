import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


const MobileMenu = ({navLinks,onClose}) => {


  return (

    <div className="px-7 pt-6 pb-8">


      <p className="mb-6 text-[10px] uppercase tracking-[0.45em] text-neutral-400">
        Menu
      </p>


      <div className="border-t border-neutral-200">


        {navLinks.map((item,index)=>(


          <motion.div
            key={item.id}
            initial={{opacity:0,x:15}}
            animate={{opacity:1,x:0}}
            transition={{delay:index*.05}}
          >


            <NavLink
              to={item.path}
              onClick={onClose}
              className={({isActive})=>`flex items-center justify-between border-b border-neutral-100 py-5 text-sm uppercase tracking-[.18em] transition ${isActive?"text-black":"text-neutral-500 hover:text-black"}`}
            >


              <span>
                {item.label}
              </span>


              <span className="text-[10px] text-neutral-300">
                {String(index+1).padStart(2,"0")}
              </span>


            </NavLink>


          </motion.div>


        ))}


      </div>


    </div>

  );

};


export default MobileMenu;