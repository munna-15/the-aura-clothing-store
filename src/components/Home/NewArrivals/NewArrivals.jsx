import { motion } from "framer-motion";
import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "../../../context/ProductContextProvider";
import ProductCard from "../../Products/ProductCard";

const NewArrivals = () => {

  const { allProducts } = useContext(ProductContext);

  const latestProducts = useMemo(
    () => allProducts.slice(0, 8),
    [allProducts]
  );

  return (

    <section className="relative overflow-hidden bg-neutral-50 py-18 sm:py-20 lg:py-24">

      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-35 top-20 hidden h-95 w-95 rounded-full bg-white blur-3xl lg:block" />

      <div className="pointer-events-none absolute -right-40 bottom-0 hidden h-105 w-105 rounded-full bg-white blur-3xl lg:block" />

      <div className="relative z-10 mx-auto w-[92%] max-w-[1580px]">

        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .3 }}
          transition={{ duration: .55 }}
          className="mb-14 text-center lg:mb-18"
        >

          <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-neutral-400">

            Latest Drop

          </p>

          <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-semibold text-black sm:text-4xl lg:text-5xl">

            New Arrivals

          </h2>

          <div className="mx-auto mt-6 h-px w-20 bg-neutral-300" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">

            Discover our newest arrivals crafted with premium fabrics,
            refined tailoring and timeless silhouettes designed for
            effortless everyday luxury.

          </p>

          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-400">

            {latestProducts.length} Curated Pieces

          </p>

        </motion.div>

        {/* Products */}

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:gap-7 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">

          {latestProducts.map((product, index) => (

            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .2 }}
              transition={{
                duration: .45,
                delay: index * .06,
                ease: "easeOut",
              }}
            >

              <ProductCard
                product={product}
                variant="arrival"
                showWishlist={false}
                showQuickView={true}
                showCategory={false}
                showBadge={false}
                showPrice={false}
              />

            </motion.div>

          ))}

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .25 }}
          className="mt-14 flex flex-col items-center gap-5 lg:mt-16"
        >

          <Link
            to="/collection"
            className="rounded-full border border-neutral-300 bg-white px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg sm:px-10 sm:py-4"
          >

            Explore Collection

          </Link>

          <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-400">

            Crafted For Everyday Luxury

          </p>

        </motion.div>

      </div>

    </section>

  );

};

export default NewArrivals;