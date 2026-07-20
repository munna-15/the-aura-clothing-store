import { X } from "lucide-react";
import { motion } from "framer-motion";


const MobileHeader = ({ onClose, user }) => {

  const firstLetter =
    user?.displayName?.charAt(0) ||
    user?.name?.charAt(0);


  return (

    <div className="border-b border-neutral-200 px-7 pb-6 pt-7">

      <motion.div
        initial={{ opacity:0, y:-15 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:.4 }}
        className="flex items-start justify-between"
      >


        {/* Brand */}

        <div>

          <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-400">
            Luxury Fashion
          </p>


          <h2 className="mt-2 font-['Playfair_Display'] text-3xl font-semibold tracking-wide text-black">
            THE AURA
          </h2>



          {firstLetter && (

            <div className="mt-4 flex items-center gap-2">

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-medium text-white">
                {firstLetter.toUpperCase()}
              </div>


              <span className="text-xs text-neutral-500">
                Member
              </span>

            </div>

          )}


        </div>




        {/* Close */}

        <motion.button

          whileHover={{
            rotate:90
          }}

          whileTap={{
            scale:.9
          }}

          onClick={onClose}

          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-black transition hover:bg-black hover:text-white"

        >

          <X size={18}/>

        </motion.button>


      </motion.div>


    </div>

  );

};


export default MobileHeader;