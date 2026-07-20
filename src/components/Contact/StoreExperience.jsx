import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
  Clock3,
} from "lucide-react";

import { assets } from "../../assets/assets";

const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 30,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.25,
  },
  transition: {
    duration: 0.7,
    delay,
    ease: "easeOut",
  },
});

const StoreExperience = () => {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Background */}

      <div className="pointer-events-none absolute -left-56 top-10 hidden h-105 w-105 rounded-full bg-neutral-100 blur-3xl lg:block" />

      <div className="pointer-events-none absolute -right-56 bottom-0 hidden h-105 w-105 rounded-full bg-neutral-100 blur-3xl xl:block" />

      <div className="relative z-10 mx-auto w-[94%] max-w-[1580px] py-14 sm:py-20 lg:py-24">

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">

          {/* ================= IMAGE ================= */}

          <motion.div
            {...fadeUp()}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >

            <div className="relative w-full max-w-sm sm:max-w-lg lg:max-w-2xl">

              {/* Decorative Ring */}

              <div className="absolute -right-10 -top-10 hidden h-40 w-40 rounded-full border border-neutral-200 lg:block" />

              {/* Main Image */}

              <motion.img
                src={assets.hero_1}
                alt="THE AURA Store"
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="
                  h-105
                  w-full
                  rounded-[30px]
                  object-cover
                  shadow-[0_35px_90px_rgba(0,0,0,.14)]
                  sm:h-140
                  sm:rounded-[36px]
                  lg:h-190
                "
              />

              {/* Light Overlay */}

              <div className="absolute inset-0 rounded-[30px] bg-linear-to-br from-white/20 via-transparent to-transparent sm:rounded-[36px]" />

              {/* Floating Glass Card */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                whileHover={{
                  y: -5,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
                className="
                  absolute
                  bottom-4
                  left-4
                  w-58.75
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/40
                  bg-white/80
                  p-4
                  shadow-[0_20px_60px_rgba(0,0,0,.12)]
                  backdrop-blur-2xl
                  sm:bottom-6
                  sm:left-6
                  sm:w-72.5
                  sm:p-5
                  lg:-left-10
                  lg:bottom-10
                  lg:w-85
                "
              >

                <div className="h-0.5 w-14 bg-black" />

                <p className="mt-4 text-[10px] uppercase tracking-[0.35em] text-neutral-400">
                  Visit Our Space
                </p>

                <h3 className="mt-2 font-['Playfair_Display'] text-xl md:text-2xl font-semibold leading-tight">
                  THE AURA
                  <br />
                  Flagship
                </h3>

                <p className="mt-4 text-sm leading-6 text-neutral-600 hidden md:block">
                  Discover timeless collections inside our premium flagship
                  experience.
                </p>

                <div className="mt-2 lg:mt-5 space-y-3 rounded-2xl border border-neutral-200 bg-white/70 p-3">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                      <MapPin size={16} />
                    </div>

                    <div>

                      <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-400">
                        Location
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        Dhaka, Bangladesh
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                      <Clock3 size={16} />
                    </div>

                    <div>

                      <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-400">
                        Hours
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        10:00 AM — 8:00 PM
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

            </div>

          </motion.div>
                    {/* ================= CONTENT ================= */}

          <motion.div
            {...fadeUp(0.15)}
            className="order-1 flex flex-col justify-center text-center lg:order-2 lg:text-left"
          >

            <p className="text-[10px] uppercase tracking-[0.42em] text-neutral-400">
              Visit Our Studio
            </p>

            <h2 className="mt-4 font-['Playfair_Display'] text-[2rem] font-light leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Experience
              <br />
              Fashion Beyond
              <br />
              Shopping
            </h2>

            <div className="mt-6 h-px w-16 bg-neutral-300 mx-auto lg:mx-0" />

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base lg:mx-0">
              Discover a calm and thoughtfully designed environment where
              timeless collections meet exceptional service. Every visit is
              intended to feel personal, relaxed and inspiring.
            </p>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base lg:mx-0">
              Explore our newest arrivals, receive personalized styling advice,
              and enjoy an elevated shopping experience created for modern
              minimalists.
            </p>

            {/* Features */}

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">

              {[
                "Private Styling",
                "Premium Quality",
                "Exclusive Collections",
                "Luxury Service",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    rounded-2xl
                    border
                    border-neutral-200
                    bg-white
                    px-4
                    py-3
                    text-center
                    text-[11px]
                    uppercase
                    tracking-[0.22em]
                    text-neutral-700
                    transition
                    duration-300
                    hover:border-black
                    hover:-translate-y-0.5
                  "
                >
                  {item}
                </div>

              ))}

            </div>

            {/* CTA */}

            <Link
              to="/collection"
              className="
                group
                mt-9
                inline-flex
                w-fit
                self-center
                items-center
                gap-3
                rounded-full
                bg-black
                px-7
                py-3.5
                text-[10px]
                uppercase
                tracking-[0.32em]
                text-white
                transition-all
                duration-300
                hover:bg-neutral-900
                hover:px-8
                lg:self-start
              "
            >

              Explore Collection

              <ArrowUpRight
                size={15}
                className="transition duration-300 group-hover:rotate-45"
              />

            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default StoreExperience;