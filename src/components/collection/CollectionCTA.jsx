import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const CollectionCTA = () => {

  return (

    <section className="bg-white">

      <div className="mx-auto w-[94%] max-w-[1580px] py-14 sm:py-20 lg:py-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-black px-6 py-12 text-center sm:rounded-[45px] sm:px-12 sm:py-16 lg:px-20"
        >


          <p className="text-[10px] uppercase tracking-[0.45em] text-neutral-400 sm:text-[11px]">
            The Aura Collection
          </p>


          <h2 className="mx-auto mt-5 max-w-4xl font-['Playfair_Display'] text-3xl font-semibold leading-tight text-white sm:mt-6 sm:text-5xl lg:text-6xl">
            Define Your Everyday Elegance
          </h2>


          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-400 sm:mt-6 sm:text-base">
            Discover premium pieces crafted with attention to detail, comfort, and timeless style.
          </p>


          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] text-black transition duration-300 hover:bg-neutral-200 sm:mt-10 sm:px-9 sm:py-4"
          >
            Contact Us
          </Link>


        </motion.div>

      </div>

    </section>

  );

};


export default CollectionCTA;