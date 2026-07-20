import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import DesktopAccount from "./DesktopAccount";
import DropdownHeader from "./DropdownHeader";
import DropdownMenu from "./DropdownMenu";


const UserDropdown = ({
  user,
  onLogout,
}) => {


  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);



  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };



  const closeDropdown = () => {
    setIsOpen(false);
  };





  useEffect(() => {

    const handleOutsideClick = (event) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        closeDropdown();
      }

    };


    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

    };


  }, []);





  useEffect(() => {

    const handleEscape = (event) => {

      if(event.key === "Escape"){
        closeDropdown();
      }

    };


    document.addEventListener(
      "keydown",
      handleEscape
    );


    return () => {

      document.removeEventListener(
        "keydown",
        handleEscape
      );

    };


  }, []);





  return (

    <div
      ref={dropdownRef}
      className="relative"
    >



      <DesktopAccount

        user={user}

        isOpen={isOpen}

        onToggle={toggleDropdown}

      />





      <AnimatePresence>


        {
          isOpen && (


            <motion.div

              initial={{
                opacity:0,
                y:12,
                scale:.96
              }}

              animate={{
                opacity:1,
                y:0,
                scale:1
              }}

              exit={{
                opacity:0,
                y:12,
                scale:.96
              }}

              transition={{
                duration:.25,
                ease:"easeOut"
              }}


              className="absolute right-0 mt-5 w-80 overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_25px_70px_rgba(0,0,0,.12)]"

            >



              {/* Arrow */}


              <div className="absolute -top-2 right-12 h-4 w-4 rotate-45 border-l border-t border-black/5 bg-white" />





              <DropdownHeader

                user={user}

              />





              <DropdownMenu

                onClose={closeDropdown}

                onLogout={onLogout}

              />



            </motion.div>


          )
        }


      </AnimatePresence>



    </div>

  );

};


export default UserDropdown;