import { motion } from "framer-motion";
import {
  Sparkles,
  Scissors,
  Gem,
} from "lucide-react";

const Philosophy = () => {
  const values = [
    {
      icon: Gem,
      title: "Premium Quality",
      description:
        "Every piece is crafted using carefully selected fabrics with attention to comfort and durability.",
    },
    {
      icon: Scissors,
      title: "Refined Craftsmanship",
      description:
        "Our designs combine modern techniques with timeless details for a sophisticated look.",
    },
    {
      icon: Sparkles,
      title: "Timeless Style",
      description:
        "Created beyond trends, our collections are designed to remain elegant for years.",
    },
  ];

  return (
    <section className="bg-neutral-50 py-14 sm:py-18 lg:py-24">
      <div className="mx-auto w-[94%] max-w-[1580px]">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-neutral-400 sm:text-[11px]">
            Our Values
          </p>

          <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-semibold leading-tight text-black sm:mt-5 sm:text-5xl">
            The Philosophy
            <br />
            Behind The Aura
          </h2>

          <div className="mx-auto mt-5 h-px w-16 bg-neutral-300 sm:mt-6 sm:w-20" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-neutral-500 sm:mt-6 sm:text-base sm:leading-7">
            We focus on creating fashion that represents confidence,
            quality, and individuality.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:border-black/10 hover:shadow-xl sm:p-7 lg:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 transition duration-300 group-hover:bg-black group-hover:text-white">
                  <Icon
                    size={22}
                    className="transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 font-['Playfair_Display'] text-xl font-semibold text-black sm:text-2xl">
                  {item.title}
                </h3>

                <div className="mt-4 h-px w-12 bg-neutral-200 transition-all duration-300 group-hover:w-20 group-hover:bg-black" />

                <p className="mt-4 text-sm leading-6 text-neutral-500 sm:leading-7">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;