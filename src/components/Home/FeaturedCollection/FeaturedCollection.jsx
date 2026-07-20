import { motion } from "framer-motion";

import CollectionCard from "./CollectionCard";
import collectionData from "./collectionData";


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};


const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};



const FeaturedCollection = () => {

  return (

    <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-24">


      <div className="pointer-events-none absolute -left-40 top-20 hidden h-95 w-95 rounded-full bg-neutral-100 blur-3xl lg:block" />

      <div className="pointer-events-none absolute -right-40 bottom-10 hidden h-105 w-105 rounded-full bg-neutral-100 blur-3xl lg:block" />


      <div className="relative z-10 mx-auto w-[94%] max-w-[1580px]">


        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 text-center sm:mb-14 lg:mb-18"
        >


          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-neutral-400 sm:text-[11px]">
            Featured Collections
          </p>


          <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-5xl">
            Curated For Your Style
          </h2>


          <div className="mx-auto mt-5 h-px w-16 bg-neutral-300 sm:mt-6 sm:w-20" />


          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-500 sm:mt-6 sm:text-base">
            Discover carefully curated collections designed with timeless elegance, refined craftsmanship and everyday sophistication.
          </p>


          <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-400 sm:mt-6 sm:text-[11px]">
            {collectionData.length} Signature Collections
          </p>


        </motion.div>



        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xl:gap-8"
        >

          {
            collectionData.map((item) => (

              <CollectionCard
                key={item.id}
                {...item}
              />

            ))
          }

        </motion.div>


      </div>


    </section>

  );

};


export default FeaturedCollection;