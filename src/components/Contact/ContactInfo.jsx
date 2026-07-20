import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 25,
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
    duration: 0.65,
    delay,
    ease: "easeOut",
  },
});

const information = [
  {
    icon: Mail,
    title: "Email Us",
    value: "munna@theaura.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+880 1792960610",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Dhaka, Bangladesh",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    value: "Mon – Sat • 10AM – 8PM",
  },
];

const ContactInfo = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-50 py-14 sm:py-18 lg:py-24">

      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-40 top-20 hidden h-96 w-96 rounded-full bg-white blur-3xl lg:block" />

      <div className="pointer-events-none absolute -right-40 bottom-0 hidden h-96 w-96 rounded-full bg-white blur-3xl xl:block" />

      <div className="relative z-10 mx-auto w-[94%] max-w-[1580px]">

        {/* Heading */}

        <motion.div
          {...fadeUp()}
          className="mx-auto max-w-2xl text-center"
        >

          <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-neutral-400 sm:text-[11px]">
            Contact Information
          </p>

          <h2 className="mt-5 font-['Playfair_Display'] text-3xl font-semibold leading-tight text-black sm:text-5xl">
            We're Always
            <br />
            Here To Help
          </h2>

          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-neutral-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            <span className="h-px w-10 bg-neutral-300" />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
            Whether you have a question about an order, our collections,
            or a partnership, we're always happy to assist.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">

          {information.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.article
                key={item.title}
                {...fadeUp(index * 0.08)}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-neutral-200
                  bg-white/80
                  p-5
                  text-center
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-neutral-300
                  hover:shadow-[0_18px_50px_rgba(0,0,0,.06)]
                  sm:p-6
                "
              >

                {/* Glow */}

                <div className="absolute inset-0 bg-linear-to-br from-white/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Icon */}

                <div
                  className="
                    relative
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-neutral-200
                    bg-neutral-50
                    transition-all
                    duration-500
                    group-hover:bg-black
                    group-hover:text-white
                    group-hover:scale-105
                  "
                >
                  <Icon size={22} strokeWidth={1.6} />
                </div>
                              {/* Title */}

                <h3
                  className="
                    relative
                    mt-5
                    font-['Playfair_Display']
                    text-lg
                    font-semibold
                    text-black
                    sm:text-xl
                  "
                >
                  {item.title}
                </h3>

                {/* Divider */}

                <div className="relative mx-auto mt-4 h-px w-10 bg-neutral-200 transition duration-500 group-hover:w-14 group-hover:bg-black" />

                {/* Value */}

                <p
                  className="
                    relative
                    mx-auto
                    mt-4
                    max-w-55
                    text-sm
                    leading-6
                    text-neutral-500
                    transition-colors
                    duration-300
                    group-hover:text-neutral-700
                  "
                >
                  {item.value}
                </p>

              </motion.article>

            );

          })}

        </div>

      </div>

    </section>

  );

};

export default ContactInfo;