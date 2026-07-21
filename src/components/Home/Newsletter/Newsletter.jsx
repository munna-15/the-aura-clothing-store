import { motion } from "framer-motion";


const Newsletter = () => {

  return (

    <section className="relative overflow-hidden bg-neutral-50 py-14 sm:py-20 lg:py-24">


      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-white blur-3xl sm:h-105 sm:w-105" />


      <div className="relative z-10 mx-auto w-[94%] max-w-[1580px]">


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >


          <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-neutral-400 sm:text-[11px]">
            Stay Connected
          </p>


          <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-semibold text-black sm:text-4xl lg:text-5xl">
            Join The Aura
          </h2>


          <div className="mx-auto mt-5 h-px w-16 bg-neutral-300 sm:mt-6 sm:w-20" />


          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-500 sm:mt-6 sm:text-base">
            Subscribe to receive exclusive collections, private offers and early access to our newest arrivals, crafted for modern luxury.
          </p>



          <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:mt-10 sm:flex-row">


            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full h-12 sm:h-14 rounded-full border border-gray-300  px-6 lg:text-md outline-none text-sm shadow"
            />


            <button
              type="submit"
              className="h-12! rounded-full bg-black px-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-white transition duration-300 hover:-translate-y-1 hover:bg-neutral-900 hover:shadow-xl sm:h-14! sm:px-10 sm:text-[11px]"
            >
              Subscribe
            </button>


          </form>



          <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-neutral-400 sm:mt-6 sm:text-[11px]">
            No spam • Exclusive drops • Unsubscribe anytime
          </p>


        </motion.div>


      </div>


    </section>

  );

};


export default Newsletter;