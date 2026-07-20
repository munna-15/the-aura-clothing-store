import { motion } from "framer-motion";

const FeatureItem = ({
  index,
  title,
  description,
}) => {

  const number = String(index + 1).padStart(2, "0");

  return (

    <motion.div

      whileHover={{ x: 6 }}

      transition={{ duration: .3 }}

      className="group flex gap-4 rounded-2xl border border-transparent p-4 transition duration-300 hover:border-neutral-200 hover:bg-white hover:shadow-sm sm:gap-5 sm:rounded-3xl sm:p-5"

    >

      {/* Number */}

      <div className="shrink-0">

        <span

          className="
          font-['Playfair_Display']
          text-2xl
          font-semibold
          leading-none
          text-neutral-200
          transition
          duration-300
          group-hover:text-black
          sm:text-3xl
          "

        >

          {number}

        </span>

      </div>

      {/* Content */}

      <div className="flex-1">

        <h3

          className="
          font-['Playfair_Display']
          text-lg
          font-semibold
          text-black
          sm:text-xl
          "

        >

          {title}

        </h3>

        <div className="mt-2 h-px w-10 bg-neutral-200 transition duration-300 group-hover:w-16 group-hover:bg-black sm:mt-3 sm:w-12 sm:group-hover:w-20" />

        <p

          className="
          mt-3
          text-sm
          leading-6
          text-neutral-500
          sm:mt-4
          sm:leading-7
          "

        >

          {description}

        </p>

      </div>

    </motion.div>

  );

};

export default FeatureItem;