import { motion } from "framer-motion";

const DesktopActionLink = ({
  children,
  onClick,
  count,
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group
        relative

        flex
        h-full
        items-center
        justify-center
        gap-2

        py-2

        ${className}
      `}
    >
      {/* Label */}

      <span
        className="
        relative
        z-10

        text-[13px]
        font-medium
        uppercase
        tracking-[0.28em]

        text-neutral-500

        transition-colors
        duration-300

        group-hover:text-black
        "
      >
        <motion.span
          whileHover={{ y: -1 }}
          transition={{ duration: 0.2 }}
          className="block"
        >
          {children}
        </motion.span>
      </span>

      {/* Underline */}

      <span
        className="
        absolute
        bottom-0
        left-1/2

        h-px
        w-0

        -translate-x-1/2

        bg-black

        transition-all
        duration-300
        ease-out

        group-hover:w-full
        "
      />

      {/* Counter */}

      {count !== undefined && (
        <span
          className="
          relative
          z-10

          flex
          h-5
          min-w-5
          items-center
          justify-center

          rounded-full

          bg-black

          px-1.5

          text-[10px]
          font-medium
          tracking-normal
          text-white
          "
        >
          {String(count).padStart(2, "0")}
        </span>
      )}
    </button>
  );
};

export default DesktopActionLink;