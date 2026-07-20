import { Clock3, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

const RecentSearches = ({
  searches = [],
  onSelect,
  onClear,
}) => {

  if (!searches.length) return null;

  return (

    <section className="space-y-5">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <Clock3
            size={14}
            className="text-neutral-400"
          />

          <p
            className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.32em]
            text-neutral-400
            "
          >
            Recent Searches
          </p>

        </div>

        <button
          type="button"
          onClick={onClear}
          className="
          flex
          items-center
          gap-1.5

          text-[10px]
          font-medium
          uppercase
          tracking-[0.25em]

          text-neutral-400

          transition-all
          duration-300

          hover:text-black
          "
        >

          <Trash2 size={13} />

          Clear

        </button>

      </div>



      {/* Search Chips */}

      <div className="flex flex-wrap gap-2">

        {searches.map((item) => (

          <motion.button

            key={item}

            type="button"

            whileHover={{
              y: -2,
            }}

            whileTap={{
              scale: 0.96,
            }}

            transition={{
              duration: 0.2,
            }}

            onClick={() => onSelect(item)}

            className="
            group

            flex
            items-center
            gap-2

            max-w-full

            rounded-full

            border
            border-neutral-200

            bg-white

            px-4
            py-2

            text-xs
            font-medium

            text-neutral-700

            shadow-sm

            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:border-black
            hover:bg-black
            hover:text-white
            hover:shadow-md
            "

          >

            <Clock3
              size={11}
              className="
              shrink-0
              text-neutral-400
              transition-colors
              duration-300
              group-hover:text-white
              "
            />

            <span className="truncate">
              {item}
            </span>

          </motion.button>

        ))}

      </div>

    </section>

  );

};

export default RecentSearches;