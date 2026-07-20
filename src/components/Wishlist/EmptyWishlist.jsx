import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyWishlist = () => {

  return (

    <motion.div

      initial={{ opacity: 0, y: 20 }}

      animate={{ opacity: 1, y: 0 }}

      transition={{ duration: .45 }}

      className="mx-auto flex w-full max-w-xl flex-col items-center justify-center px-6 py-10 text-center"

    >

      <div className="flex h-22 w-22 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm">

        <Heart

          size={34}

          strokeWidth={1.5}

          className="text-neutral-400"

        />

      </div>

      <p className="mt-7 text-[10px] uppercase tracking-[0.45em] text-neutral-400">

        YOUR COLLECTION

      </p>

      <h2 className="mt-3 font-['Playfair_Display'] text-3xl font-medium text-black sm:text-4xl">

        Your Wishlist is Empty

      </h2>

      <p className="mt-4 max-w-md text-sm leading-7 text-neutral-500">

        Save your favourite pieces and build your personal collection.
        They'll always be ready whenever inspiration strikes.

      </p>

      <Link

        to="/collection"

        className="mt-8 rounded-full bg-black px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.35em] text-white transition hover:bg-neutral-800"

      >

        Explore Collection

      </Link>

    </motion.div>

  );

};

export default EmptyWishlist;