import { useContext } from "react";
import { motion } from "framer-motion";

import { ProductContext } from "../context/ProductContextProvider";

import WishlistItem from "../components/Wishlist/WishlistItem";
import EmptyWishlist from "../components/Wishlist/EmptyWishlist";

const Wishlist = () => {

  const {
    wishlistItems,
    allProducts,
  } = useContext(ProductContext);

  const wishlistProducts = allProducts.filter(
    (product) => wishlistItems.includes(product._id)
  );

  const isEmpty = wishlistProducts.length === 0;

  return (

    <main className="min-h-screen bg-linear-to-br from-white via-neutral-50 to-neutral-100">

      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-5 pt-20 pb-10 lg:px-10">

        {/* Header */}

        <motion.div

          initial={{ opacity: 0, y: 30 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: .6 }}

          className="flex flex-col gap-6 border-b border-black/10 pb-8 md:flex-row md:items-end md:justify-between"

        >

          <div>

            <p className="text-[10px] uppercase tracking-[0.45em] text-neutral-400">

              Curated Favorites

            </p>

            <h1 className="mt-4 text-4xl font-light tracking-tight sm:text-5xl md:text-6xl">

              My Wishlist

            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-neutral-500">

              A collection of pieces you love.
              Keep your favourite styles saved and ready whenever you want.

            </p>

          </div>

          <motion.div

            initial={{ opacity: 0, scale: .9 }}

            animate={{ opacity: 1, scale: 1 }}

            transition={{ delay: .25 }}

            className="flex w-fit items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3 shadow-sm"

          >

            <span className="h-2 w-2 rounded-full bg-black" />

            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">

              {wishlistProducts.length}
              {" "}
              Saved Item{wishlistProducts.length !== 1 && "s"}

            </span>

          </motion.div>

        </motion.div>

        {/* Content */}

        {isEmpty ? (

          <div className="flex flex-1 items-center justify-center py-10">

            <EmptyWishlist />

          </div>

        ) : (

          <motion.div

            initial="hidden"

            animate="visible"

            variants={{

              hidden: {
                opacity: 0,
              },

              visible: {

                opacity: 1,

                transition: {
                  staggerChildren: .08,
                },

              },

            }}

            className="mt-10 grid grid-cols-2 gap-8  md:grid-cols-3 lg:grid-cols-4 "

          >

            {

              wishlistProducts.map((product) => (

                <motion.div

                  key={product._id}

                  variants={{

                    hidden: {
                      opacity: 0,
                      y: 25,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },

                  }}

                  transition={{ duration: .35 }}

                >

                  <WishlistItem
                    product={product}
                  />

                </motion.div>

              ))

            }

          </motion.div>

        )}

      </section>

    </main>

  );

};

export default Wishlist;