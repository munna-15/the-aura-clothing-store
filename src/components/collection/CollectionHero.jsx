import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const CollectionHero = () => {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-white">

      {/* Background */}

      <div className="absolute inset-0 bg-linear-to-b from-neutral-50 via-white to-white" />

      <div className="pointer-events-none absolute -left-28 top-0 h-72 w-72 rounded-full bg-neutral-100 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-neutral-100 blur-3xl" />



      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-20  pb-14 lg:grid-cols-[1fr_340px] lg:items-center lg:gap-20 lg:px-8 lg:pt-15 lg:pb-16">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .45 }}
          className="max-w-2xl"
        >

          <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-neutral-400">
            COLLECTION
          </p>


          <h1 className="mt-5 max-w-xl font-['Playfair_Display'] text-[2.7rem] font-semibold leading-[1.08] tracking-[-0.02em] text-black sm:text-[3.6rem] lg:text-[4.3rem]">

            Timeless Style,
            <br />
            Modern Luxury.

          </h1>


          <p className="mt-6 max-w-lg text-[15px] leading-7 text-neutral-500">

            Discover thoughtfully crafted essentials made with premium
            fabrics, refined tailoring and timeless silhouettes designed
            for effortless everyday elegance.

          </p>

        </motion.div>



        {/* Desktop Editorial Image */}

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .15, duration: .5 }}
          className="hidden justify-self-end lg:block"
        >

          <div className="rounded-[30px] border border-neutral-200 p-2 shadow-[0_25px_70px_rgba(0,0,0,.08)]">

            <div className="relative overflow-hidden rounded-3xl">

              <img
                src={assets.image_9}
                alt="Luxury Collection"
                className="h-105 w-[320px] object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Overlay */}

              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 via-black/15 to-transparent p-7">

                <p className="text-[10px] uppercase tracking-[0.35em] text-white/70">
                  New Season
                </p>

                <h3 className="mt-2 font-['Playfair_Display'] text-2xl font-semibold text-white">
                  Premium Essentials
                </h3>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default CollectionHero;