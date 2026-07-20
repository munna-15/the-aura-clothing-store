import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto w-[94%] max-w-[1580px] py-14 sm:py-18 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-black px-6 py-12 text-center sm:rounded-[40px] sm:px-12 sm:py-16 lg:px-16"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-neutral-400 sm:text-[11px]">
            Discover The Aura
          </p>

          <h2 className="mt-5 font-['Playfair_Display'] text-3xl font-semibold leading-tight text-white sm:mt-6 sm:text-5xl lg:text-6xl">
            Elevate Your
            <br />
            Everyday Style
          </h2>

          <div className="mx-auto mt-5 h-px w-16 bg-neutral-700 sm:mt-6 sm:w-20" />

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-neutral-400 sm:mt-6 sm:text-base sm:leading-7">
            Explore our latest collection crafted with premium fabrics,
            timeless designs and modern craftsmanship for everyday luxury.
          </p>

          <Link
            to="/collection"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-200 sm:mt-10 sm:px-9 sm:py-4 sm:text-[11px]"
          >
            Shop Collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;