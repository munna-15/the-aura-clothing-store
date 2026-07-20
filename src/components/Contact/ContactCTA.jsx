import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-neutral-100 blur-3xl" />

        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-neutral-100 blur-3xl" />

      </div>

      <div className="relative mx-auto w-[94%] max-w-[1580px]">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="
            relative
            overflow-hidden
            rounded-[34px]
            border
            border-neutral-200
            bg-black
            px-6
            py-12
            text-center
            shadow-[0_35px_80px_rgba(0,0,0,.18)]
            sm:px-10
            sm:py-16
            lg:px-18
            lg:py-20
          "
        >

          {/* Decorative */}

          <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full border border-white/10" />

          <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full border border-white/10" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.08),transparent_60%)]" />

          <div className="relative z-10">

            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, scale: .9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: .1 }}
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-white/15
                bg-white/5
                px-4
                py-2
                backdrop-blur-xl
              "
            >

              <span className="text-[10px] uppercase tracking-[0.42em] text-neutral-300">

                Exclusive Collection

              </span>

            </motion.div>

            {/* Heading */}

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .15 }}
              className="
                mx-auto
                mt-6
                max-w-4xl
                font-['Playfair_Display']
                text-3xl
                font-light
                leading-tight
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >

              Discover Your
              <br />
              Signature Style

            </motion.h2>
                {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .25 }}
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-neutral-300
                sm:text-base
              "
            >
              Explore thoughtfully crafted collections featuring premium
              fabrics, timeless silhouettes and elevated essentials designed
              for modern everyday luxury.
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .35 }}
              className="mt-8 sm:mt-10"
            >

              <Link
                to="/collection"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-7
                  py-3.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-black
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_40px_rgba(255,255,255,.18)]
                  sm:px-9
                  sm:py-4
                  sm:text-[11px]
                "
              >

                Explore Collection

                <ArrowRight
                  size={16}
                  className="transition duration-300 group-hover:translate-x-1.5"
                />

              </Link>

            </motion.div>

            {/* Divider */}

            <div className="mx-auto mt-10 h-px w-full max-w-sm bg-white/20 sm:mt-12" />

            {/* Trust */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: .45 }}
              className="
                mt-6
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-5
                gap-y-3
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-neutral-400
                sm:text-[11px]
              "
            >

              <span>Premium Quality</span>

              <span className="hidden sm:block text-neutral-600">•</span>

              <span>Free Shipping</span>

              <span className="hidden sm:block text-neutral-600">•</span>

              <span>Easy Returns</span>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default ContactCTA;