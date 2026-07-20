import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const BrandStory = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-50 py-16 sm:py-20 lg:py-28">
      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-32 top-16 hidden h-96 w-96 rounded-full bg-white blur-3xl lg:block" />

      <div className="pointer-events-none absolute -right-40 bottom-0 hidden h-112 w-md rounded-full bg-white blur-3xl xl:block" />

      <div className="relative z-10 mx-auto w-[94%] max-w-[1580px]">
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-neutral-400 sm:text-[11px]">
            Our Philosophy
          </p>

          <h2 className="mt-5 font-['Playfair_Display'] text-3xl font-semibold leading-tight text-black sm:text-5xl">
            Fashion That
            <br />
            Tells A Story
          </h2>

          <div className="mx-auto mt-6 h-px w-20 bg-neutral-300" />

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">
            Every collection reflects confidence, timeless elegance and
            exceptional craftsmanship designed to elevate everyday living.
          </p>
        </motion.div>

        {/* Content */}

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-18">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-4xl"
          >
            <motion.img
              src={assets.hero_image_4}
              alt="The Aura"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.7 }}
              className="h-96 w-full rounded-4xl object-cover shadow-[0_30px_80px_rgba(0,0,0,.12)] sm:h-136 lg:h-168"
            />

            {/* Floating Card */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="absolute bottom-5 left-5 rounded-2xl border border-white/40 bg-white/85 px-5 py-4 shadow-xl backdrop-blur-xl sm:bottom-8 sm:left-8 sm:px-6 sm:py-5"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-neutral-400 sm:text-[10px]">
                Since 2026
              </p>

              <h3 className="mt-2 font-['Playfair_Display'] text-lg font-semibold text-black">
                Crafted With Purpose
              </h3>
            </motion.div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl text-center lg:text-left"
          >
            <h3 className="font-['Playfair_Display'] text-3xl font-semibold leading-tight text-black sm:text-4xl">
              Quality Beyond
              <br />
              Every Detail
            </h3>

            <div className="mx-auto mt-6 h-px w-16 bg-neutral-300 lg:mx-0" />

            <p className="mt-6 text-sm leading-7 text-neutral-500 sm:text-base">
              At The Aura, we believe fashion should never be temporary.
              Every garment is crafted from premium materials, refined
              tailoring and timeless design that continues to inspire beyond
              seasonal trends.
            </p>

            <p className="mt-5 text-sm leading-7 text-neutral-500 sm:text-base">
              Our mission is to create clothing that feels luxurious, fits
              beautifully and becomes part of your everyday lifestyle with
              effortless sophistication.
            </p>

            {/* Stats */}

            <div className="mt-10 grid grid-cols-3 border-t border-neutral-200 pt-8">
              <div className="border-r border-neutral-200 text-center">
                <h4 className="font-['Playfair_Display'] text-2xl font-semibold text-black sm:text-3xl">
                  2026
                </h4>

                <p className="mt-2 text-[9px] uppercase tracking-[0.28em] text-neutral-400 sm:text-[10px]">
                  Founded
                </p>
              </div>

              <div className="border-r border-neutral-200 text-center">
                <h4 className="font-['Playfair_Display'] text-2xl font-semibold text-black sm:text-3xl">
                  50+
                </h4>

                <p className="mt-2 text-[9px] uppercase tracking-[0.28em] text-neutral-400 sm:text-[10px]">
                  Collections
                </p>
              </div>

              <div className="text-center">
                <h4 className="font-['Playfair_Display'] text-2xl font-semibold text-black sm:text-3xl">
                  10K+
                </h4>

                <p className="mt-2 text-[9px] uppercase tracking-[0.28em] text-neutral-400 sm:text-[10px]">
                  Customers
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;