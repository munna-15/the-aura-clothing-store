import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

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

const ContactForm = () => {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-52 top-10 hidden h-105 w-105 rounded-full bg-neutral-100 blur-3xl lg:block" />

      <div className="pointer-events-none absolute -right-52 bottom-0 hidden h-105 w-105 rounded-full bg-neutral-100 blur-3xl xl:block" />

      <div className="relative z-10 mx-auto w-[94%] max-w-[1580px] py-14 sm:py-18 lg:py-24">

        {/* Heading */}

        <motion.div
          {...fadeUp()}
          className="mx-auto max-w-3xl text-center"
        >

          <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-neutral-400 sm:text-[11px]">
            Get In Touch
          </p>

          <h2 className="mt-5 font-['Playfair_Display'] text-4xl font-semibold leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-7xl">
            We'd Love To
            <br />
            Hear From You
          </h2>

          <div className="mx-auto mt-7 h-px w-20 bg-neutral-300" />

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">
            Whether you're looking for styling advice, have questions
            about an order or want to discuss collaborations,
            our team is always delighted to assist you.
          </p>

        </motion.div>

        {/* Floating Form */}

        <motion.form
          {...fadeUp(.12)}
          className="
          relative
          mx-auto
          mt-12
          max-w-4xl
          overflow-hidden
          rounded-[28px]
          border
          border-neutral-200/70
          bg-white/75
          p-5
          shadow-[0_30px_80px_rgba(0,0,0,.07)]
          backdrop-blur-2xl
          sm:mt-14
          sm:rounded-4xl
          sm:p-8
          lg:rounded-[36px]
          lg:p-10
          "
        >

          {/* Glass Reflection */}

          <div className="absolute inset-0 bg-linear-to-br from-white/35 via-transparent to-transparent" />

          <div className="relative">

            {/* Small Label */}

            <div className="mb-8 flex items-center justify-between">

              <div>

                <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400">
                  Contact Form
                </p>

                <h3 className="mt-2 font-['Playfair_Display'] text-2xl font-medium">
                  Start A Conversation
                </h3>

              </div>

              <div className="hidden rounded-full border border-neutral-200 bg-white/80 px-5 py-2 lg:block">

                <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">
                  Response Within 24 Hours
                </p>

              </div>

            </div>

            {/* Name + Email */}

            <div className="grid gap-4 sm:grid-cols-2">

              <div>

                <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
                  h-13
                  w-full
                  rounded-2xl
                  border
                  border-neutral-200
                  bg-white/70
                  px-5
                  text-sm
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-neutral-400
                  focus:border-black
                  focus:bg-white
                  focus:shadow-[0_0_0_4px_rgba(0,0,0,.03)]
                  "
                />

              </div>

              <div>

                <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                  h-13
                  w-full
                  rounded-2xl
                  border
                  border-neutral-200
                  bg-white/70
                  px-5
                  text-sm
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-neutral-400
                  focus:border-black
                  focus:bg-white
                  focus:shadow-[0_0_0_4px_rgba(0,0,0,.03)]
                  "
                />

              </div>

            </div>

            {/* Subject */}

            <div className="mt-5">

              <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                Subject
              </label>

              <input
                type="text"
                placeholder="How can we help you?"
                className="
                h-13
                w-full
                rounded-2xl
                border
                border-neutral-200
                bg-white/70
                px-5
                text-sm
                outline-none
                transition-all
                duration-300
                placeholder:text-neutral-400
                focus:border-black
                focus:bg-white
                focus:shadow-[0_0_0_4px_rgba(0,0,0,.03)]
                "
              />

            </div>
                {/* Message */}

            <div className="mt-5">

              <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                Message
              </label>

              <textarea
                rows={7}
                placeholder="Tell us about your inquiry..."
                className="
                min-h-45
                w-full
                resize-none
                rounded-2xl
                border
                border-neutral-200
                bg-white/70
                p-5
                text-sm
                leading-7
                outline-none
                transition-all
                duration-300
                placeholder:text-neutral-400
                focus:border-black
                focus:bg-white
                focus:shadow-[0_0_0_4px_rgba(0,0,0,.03)]
                "
              />

            </div>

            {/* Divider */}

            <div className="my-8 h-px bg-neutral-200" />

            {/* Bottom */}

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              {/* Trust */}

              <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">

                  <ShieldCheck size={17} />

                </div>

                <div>

                  <p className="text-sm font-medium text-black">
                    Secure Contact
                  </p>

                  <p className="mt-0.5 text-xs text-neutral-500">
                    We'll reply within 24 hours.
                  </p>

                </div>

              </div>

              {/* Button */}

              <motion.button
                type="submit"
                whileHover={{
                  y: -2,
                  scale: 1.01,
                }}
                whileTap={{
                  scale: .98,
                }}
                className="
                group
                flex
                h-13
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-black
                px-8
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-white
                transition-all
                duration-300
                hover:bg-neutral-900
                hover:shadow-[0_20px_45px_rgba(0,0,0,.16)]
                sm:w-auto
                "
              >

                Send Message

                <ArrowRight
                  size={16}
                  className="transition duration-300 group-hover:translate-x-1"
                />

              </motion.button>

            </div>

            {/* Footer */}

            <p className="mt-8 text-center text-xs leading-6 text-neutral-400">
              By submitting this form you agree to our privacy policy.
              Your information will only be used to respond to your inquiry.
            </p>

          </div>

        </motion.form>

      </div>

    </section>
  );
};

export default ContactForm;