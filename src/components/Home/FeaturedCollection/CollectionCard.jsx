import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const CollectionCard = ({ title, description, image, path }) => {

  return (

    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className="group"
    >

      <Link
        to={path}
        className="block overflow-hidden rounded-2xl bg-neutral-100 shadow-sm transition duration-500 group-hover:shadow-[0_20px_45px_rgba(0,0,0,.10)] sm:rounded-3xl lg:rounded-[34px]"
      >

        <div className="relative h-72 overflow-hidden sm:h-105 lg:h-140">

          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-6 lg:p-8">

            <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-white/70 sm:text-[11px]">
              Featured Collection
            </p>

            <h3 className="mt-2 font-['Playfair_Display'] text-xl font-semibold leading-tight sm:mt-3 sm:text-2xl md:text-3xl lg:text-4xl">
              {title}
            </h3>

            <p className="mt-3 max-w-sm text-xs leading-5 text-white/80 sm:mt-4 sm:text-sm sm:leading-7">
              {description}
            </p>

            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] backdrop-blur-xl transition duration-300 group-hover:bg-white group-hover:text-black sm:mt-7 sm:px-5 sm:py-3 sm:text-[11px]">

              Discover

              <ArrowUpRight
                size={15}
                className="transition duration-300 group-hover:rotate-45"
              />

            </span>

          </div>

        </div>

      </Link>

    </motion.article>

  );

};

export default CollectionCard;