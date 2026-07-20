import { motion } from "framer-motion";


const ReviewImage = ({ review }) => {

  return (

    <div className="relative flex min-h-100 items-center justify-center overflow-hidden px-5 py-10 sm:min-h-125 sm:px-8 sm:py-12 lg:min-h-155">


      <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-neutral-200/60 blur-3xl sm:h-72 sm:w-72" />

      <div className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-white blur-3xl sm:h-80 sm:w-80" />



      <div className="absolute inset-6 rounded-3xl border border-black/5 sm:inset-10 sm:rounded-[40px]" />




      <motion.img
        src={review.productImage}
        alt={review.productName}
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        className="relative z-10 h-85 w-full max-w-sm rounded-3xl object-cover shadow-[0_25px_70px_rgba(0,0,0,.15)] sm:h-105 sm:max-w-md sm:rounded-[36px] lg:h-130"
      />




      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-8 left-5 z-20 max-w-60 rounded-2xl border border-white/30 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-md sm:bottom-16 sm:left-10 sm:px-5 sm:py-4"
      >


        <p className="text-[9px] uppercase tracking-[0.35em] text-neutral-400 sm:text-[10px]">
          The Aura Quality
        </p>


        <h4 className="mt-2 text-xs font-semibold text-black sm:text-sm">
          Crafted For Everyday Luxury
        </h4>


      </motion.div>



    </div>

  );

};


export default ReviewImage;