import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LookbookCard = ({
  badge,
  title,
  description,
  button,
  path,
  image,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-neutral-200
        bg-white
        p-4
        shadow-[0_10px_35px_rgba(0,0,0,.05)]
        transition-all
        duration-500
        hover:border-black/10
        hover:shadow-[0_18px_45px_rgba(0,0,0,.08)]
        sm:p-5
      "
    >
      <div className="flex items-center gap-4">
        {/* Thumbnail */}

        <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-2xl bg-neutral-100 sm:h-28 sm:w-24">
          <img
            src={image}
            alt={title}
            className="
              h-full
              w-full
              object-cover
              transition
              duration-700
              group-hover:scale-105
            "
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
        </div>

        {/* Content */}

        <div className="flex flex-1 flex-col">
          <p className="text-[9px] uppercase tracking-[0.35em] text-neutral-400">
            {badge}
          </p>

          <h3 className="mt-2 font-['Playfair_Display'] text-xl font-semibold leading-tight text-black">
            {title}
          </h3>

          <div className="mt-3 h-px w-8 bg-neutral-300 transition-all duration-300 group-hover:w-14 group-hover:bg-black" />

          <p className="mt-3 line-clamp-2 text-[13px] leading-6 text-neutral-500">
            {description}
          </p>

          <Link
            to={path}
            className="
              group/link
              mt-5
              inline-flex
              items-center
              gap-2
              text-[10px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-black
            "
          >
            {button}

            <ArrowRight
              size={14}
              className="transition group-hover/link:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Background Number */}

      <span
        className="
          pointer-events-none
          absolute
          -bottom-2
          right-3
          font-['Playfair_Display']
          text-5xl
          font-semibold
          text-black/3
        "
      >
        {badge === "Limited Edition" ? "01" : "02"}
      </span>
    </motion.article>
  );
};

export default LookbookCard;