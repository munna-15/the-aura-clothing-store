import { AnimatePresence, motion } from "framer-motion";


const MobileOverlay = ({ isOpen, onClose }) => {

  return (

    <AnimatePresence>

      {isOpen && (

        <motion.div

          initial={{ opacity:0 }}

          animate={{ opacity:1 }}

          exit={{ opacity:0 }}

          transition={{ duration:.2 }}

          onClick={onClose}

          className="fixed inset-0 z-60 bg-black/30 backdrop-blur-sm lg:hidden"

        />

      )}

    </AnimatePresence>

  );

};


export default MobileOverlay;