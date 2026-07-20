import { motion } from "framer-motion";


const ThumbnailList = ({
  images,
  selectedImage,
  setSelectedImage,
  productName,
}) => {


  return (

    <div
      className="
        flex
        w-full
        gap-3
        overflow-x-auto
        rounded-2xl
        border
        border-neutral-200
        bg-white
        p-2
        scrollbar-hide
        sm:gap-4
        lg:w-22
        lg:flex-col
        lg:overflow-visible
      "
    >



      {images.map((img, index) => {


        const active =
          selectedImage === img;




        return (


          <motion.button


            key={`${img}-${index}`}


            type="button"


            onClick={() => setSelectedImage(img)}



            initial={{
              opacity:0,
              scale:0.9,
            }}



            animate={{
              opacity:1,
              scale:active ? 1.05 : 1,
            }}



            whileHover={{
              scale:1.08,
            }}



            whileTap={{
              scale:0.96,
            }}



            transition={{
              duration:0.25,
            }}



            className={`
              relative
              h-16
              w-16
              shrink-0
              overflow-hidden
              rounded-xl
              bg-neutral-50
              transition-all
              sm:h-18
              sm:w-18
              lg:h-20
              lg:w-20

              ${
                active
                  ? "border border-black shadow-[0_8px_25px_rgba(0,0,0,0.12)]"
                  : "border border-neutral-200 hover:border-neutral-400"
              }
            `}

          >




            <motion.img


              src={img}


              alt={`${productName}-${index}`}


              loading="lazy"



              animate={{
                scale:active ? 1.08 : 1,
              }}



              transition={{
                duration:0.35,
              }}



              className="
                h-full
                w-full
                object-contain
                p-1.5
              "


            />







            {active && (


              <motion.span


                layoutId="active-thumbnail"


                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-xl
                  ring-2
                  ring-black/80
                  ring-offset-2
                "


              />


            )}




          </motion.button>


        );


      })}



    </div>

  );

};


export default ThumbnailList;