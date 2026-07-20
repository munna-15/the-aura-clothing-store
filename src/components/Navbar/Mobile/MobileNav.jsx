import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

import useClickOutside from "../../../hooks/useClickOutside";

import MobileOverlay from "./MobileOverlay";
import MobileHeader from "./MobileHeader";
import MobileSearch from "./MobileSearch";
import MobileMenu from "./MobileMenu";
import MobileQuickActions from "./MobileQuickActions";


const drawerVariants = {

  hidden:{
    x:"100%",
  },


  visible:{
    x:0,

    transition:{
      duration:.45,
      ease:[0.22,1,0.36,1],
    },
  },


  exit:{
    x:"100%",

    transition:{
      duration:.3,
    },
  },

};



const MobileNav = ({
  navLinks,
  user,
  isOpen,
  onClose,
  searchInput,
  setSearchInput,
  onSearch,
  wishlistCount,
  cartCount,
  onOpenCart,
  onLogout,
}) => {


  const drawerRef = useRef(null);



  useClickOutside(drawerRef,()=>{

    if(isOpen){
      onClose();
    }

  });



  useEffect(()=>{


    if(!isOpen) return;


    const handleEscape = (event)=>{

      if(event.key === "Escape"){
        onClose();
      }

    };


    document.body.style.overflow="hidden";


    window.addEventListener(
      "keydown",
      handleEscape
    );


    return ()=>{

      document.body.style.overflow="";

      window.removeEventListener(
        "keydown",
        handleEscape
      );

    };


  },[isOpen,onClose]);



  return (

    <>

      <MobileOverlay
        isOpen={isOpen}
        onClose={onClose}
      />



      <AnimatePresence>


        {
          isOpen && (

            <motion.aside

              ref={drawerRef}

              variants={drawerVariants}

              initial="hidden"

              animate="visible"

              exit="exit"


              className="
              fixed
              right-0
              top-0
              z-50
              flex
              h-screen
              w-[86%]
              max-w-sm
              flex-col
              overflow-hidden
              rounded-l-[42px]
              bg-white
              shadow-[0_30px_100px_rgba(0,0,0,.22)]
              lg:hidden
              "

            >



              {/* Luxury Glow */}

              <div className="
              absolute
              -right-32
              -top-20
              h-80
              w-80
              rounded-full
              bg-neutral-100
              blur-3xl
              " />



              <div className="
              absolute
              -bottom-32
              -left-20
              h-72
              w-72
              rounded-full
              bg-neutral-200/40
              blur-3xl
              " />





              <div className="
              relative
              z-10
              flex
              h-full
              flex-col
              ">



                <MobileHeader
                  user={user}
                  onClose={onClose}
                />



                <div className="
                flex-1
                overflow-hidden
                ">


                  <MobileSearch

                    searchInput={searchInput}

                    setSearchInput={setSearchInput}

                    onSearch={onSearch}

                    onClose={onClose}

                  />



                  <MobileMenu

                    navLinks={navLinks}

                    onClose={onClose}

                  />


                </div>




                <MobileQuickActions

                  user={user}

                  wishlistCount={wishlistCount}

                  cartCount={cartCount}

                  onClose={onClose}

                  onOpenCart={onOpenCart}

                  onLogout={onLogout}

                />



              </div>



            </motion.aside>


          )
        }


      </AnimatePresence>


    </>

  );

};


export default MobileNav;