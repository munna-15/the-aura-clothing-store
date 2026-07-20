import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const MainImage = ({
  image,
  productName,
  currentIndex,
  totalImages,
}) => {


  const [zoom, setZoom] = useState({
    scale: 1,
    origin: "center",
  });





  const handleMove = (event) => {

    if (window.innerWidth < 768) return;


    const {
      left,
      top,
      width,
      height,
    } = event.currentTarget.getBoundingClientRect();



    const x =
      ((event.clientX - left) / width) * 100;


    const y =
      ((event.clientY - top) / height) * 100;



    setZoom({
      scale: 1.06,
      origin: `${x}% ${y}%`,
    });


  };






  const handleLeave = () => {

    setZoom({
      scale: 1,
      origin: "center",
    });

  };







  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}


      onMouseMove={handleMove}

      onMouseLeave={handleLeave}


      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-neutral-200
        bg-white
      "

    >





      {/* Product Image */}


      <div
        className="
          aspect-square
          w-full
          overflow-hidden
          sm:aspect-4/5
          lg:aspect-4/5
          lg:max-h-155
        "
      >



        <AnimatePresence mode="wait">


          <motion.img


            key={image}


            src={image}


            alt={productName}


            initial={{
              opacity: 0,
              scale: 1.02,
            }}


            animate={{
              opacity: 1,
              scale: zoom.scale,
            }}


            exit={{
              opacity: 0,
            }}


            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}


            style={{
              transformOrigin: zoom.origin,
            }}


            className="
              h-full
              w-full
              object-contain
              p-5
              transition-transform
              duration-500
              sm:p-8
              lg:p-10
            "


          />


        </AnimatePresence>



      </div>








      {/* Soft Hover Effect */}


      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-linear-to-t
          from-black/5
          via-transparent
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />








      {/* Image Counter */}


      {totalImages > 1 && (

        <motion.div

          initial={{
            opacity: 0,
            y: 10,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.2,
          }}


          className="
            absolute
            bottom-4
            right-4
            rounded-full
            border
            border-neutral-200
            bg-white/85
            px-3
            py-1.5
            text-[10px]
            font-medium
            tracking-[0.3em]
            text-neutral-500
            backdrop-blur-md
          "

        >

          {currentIndex + 1} / {totalImages}


        </motion.div>

      )}



    </motion.div>

  );

};


export default MainImage;