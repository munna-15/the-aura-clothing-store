import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const Craftsmanship = () => {
  return (
    <section className="bg-white py-14 sm:py-18 lg:py-24">
      <div className="mx-auto w-[94%] max-w-[1580px]">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <motion.img
              src={assets.image_5}
              alt="Craftsmanship"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
              className="h-100 w-full rounded-3xl object-cover shadow-[0_25px_70px_rgba(0,0,0,.12)] sm:h-130 sm:rounded-[40px] lg:h-175 lg:rounded-[45px]"
            />

            {/* Floating Label */}

            <div className="absolute bottom-4 left-4 rounded-2xl border border-black/5 bg-white/90 px-4 py-3 backdrop-blur-md sm:bottom-8 sm:left-8 sm:px-6 sm:py-5">
              <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-neutral-400 sm:text-[10px]">
                Crafted With Care
              </p>
            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-neutral-400 sm:text-[11px]">
              Craftsmanship
            </p>

            <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-semibold leading-tight text-black sm:mt-6 sm:text-5xl">
              Where Detail
              <br />
              Meets Design
            </h2>

            <div className="mt-5 h-px w-16 bg-neutral-300 mx-auto lg:mx-0 sm:mt-6 sm:w-20" />

            <p className="mt-5 text-sm leading-6 text-neutral-500 sm:mt-7 sm:text-base sm:leading-7">
              Every Aura piece begins with a vision. From selecting premium
              materials to perfecting every stitch, our process focuses on
              creating clothing that feels exceptional.
            </p>

            <p className="mt-4 text-sm leading-6 text-neutral-500 sm:mt-5 sm:text-base sm:leading-7">
              We combine traditional craftsmanship with contemporary
              silhouettes to deliver collections that represent confidence,
              elegance and lasting quality.
            </p>

            <div className="mt-8 flex justify-center lg:mt-10 lg:justify-start">
              <button className="rounded-full bg-black px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-900 sm:px-9 sm:py-4 sm:text-[11px]">
                Explore Collection
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;