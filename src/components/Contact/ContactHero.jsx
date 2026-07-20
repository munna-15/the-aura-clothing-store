import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: {
    duration: 0.7,
    delay,
    ease: "easeOut",
  },
});

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-44 top-14 hidden h-96 w-96 rounded-full bg-neutral-100 blur-3xl lg:block" />

      <div className="pointer-events-none absolute -right-44 bottom-0 hidden h-96 w-96 rounded-full bg-neutral-100 blur-3xl xl:block" />

      <div className="relative z-10 mx-auto flex w-[94%] max-w-[1580px] flex-col items-center py-16 text-center sm:py-20 lg:py-28">

        <motion.p
          {...fadeUp()}
          className="text-[10px] font-semibold uppercase tracking-[0.45em] text-neutral-400 sm:text-[11px]"
        >
          Contact Us
        </motion.p>

        <motion.h1
          {...fadeUp(0.08)}
          className="mt-5 font-['Playfair_Display'] text-[2.3rem] font-semibold leading-[1.02] tracking-tight text-black sm:text-5xl lg:text-[82px]"
        >
          Let's Create
          <br />
          Something Beautiful
        </motion.h1>

        <motion.div
          {...fadeUp(0.14)}
          className="mt-7 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-neutral-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-black" />
          <span className="h-px w-10 bg-neutral-300" />
        </motion.div>

        <motion.p
          {...fadeUp(0.18)}
          className="mx-auto mt-7 max-w-xl text-sm leading-7 text-neutral-500 sm:max-w-2xl sm:text-base"
        >
          Have a question about our collections, orders or partnerships?
          We'd love to hear from you. Every conversation matters, and our
          team is here to provide thoughtful guidance with the same attention
          to detail that defines every THE AURA collection.
        </motion.p>

      </div>

    </section>
  );
};

export default ContactHero;