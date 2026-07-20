import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { assets } from "../../../assets/assets";
import FeatureItem from "./FeatureItem";

const features = [
  {
    title: "Premium Fabric",
    description: "Carefully selected materials designed for comfort and durability.",
  },
  {
    title: "Timeless Design",
    description: "Modern silhouettes inspired by effortless elegance.",
  },
  {
    title: "Crafted Quality",
    description: "Every piece is created with exceptional attention to detail.",
  },
];

const BrandStory = () => {

  return (

    <section className="relative overflow-hidden bg-neutral-50 py-14 sm:py-18 lg:py-24">

      <div className="pointer-events-none absolute -left-40 top-16 hidden h-96 w-96 rounded-full bg-white blur-3xl lg:block" />

      <div className="pointer-events-none absolute -right-40 bottom-10 hidden h-96 w-96 rounded-full bg-white blur-3xl xl:block" />

      <div className="relative z-10 mx-auto grid w-[94%] max-w-[1580px] items-center gap-10 lg:grid-cols-[1fr_.95fr] lg:gap-16">

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[36px] "
        >

          <img
            src={assets.image_6}
            alt="The Aura Story"
            className="h-72 w-full transition duration-700 hover:scale-105 sm:h-107.5 lg:h-175 object-contain"
          />

        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="max-w-xl"
        >

          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-neutral-400 sm:text-[11px]">
            Our Philosophy
          </p>

          <h2 className="mt-4 font-['Playfair_Display'] text-2xl font-semibold leading-tight text-black sm:text-4xl lg:text-5xl">
            Designed For
            <br />
            Everyday Luxury
          </h2>

          <div className="mt-5 h-px w-16 bg-neutral-300 sm:mt-6 sm:w-20" />

          <p className="mt-6 text-sm leading-6 text-neutral-500 sm:mt-7 sm:text-base sm:leading-7">
            The Aura blends timeless elegance with contemporary fashion. Every collection is thoughtfully crafted to inspire confidence, effortless sophistication and everyday comfort.
          </p>

          <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-7">

            {features.map((item, index) => (

              <FeatureItem
                key={item.title}
                index={index}
                {...item}
              />

            ))}

          </div>

          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white transition duration-300 hover:-translate-y-1 hover:bg-neutral-900 sm:mt-10 sm:px-8 sm:py-4 sm:text-[11px]"
          >

            Discover Our Story

            <ArrowUpRight
              size={15}
              className="transition duration-300 group-hover:rotate-45"
            />

          </Link>

        </motion.div>

      </div>

    </section>

  );

};

export default BrandStory;