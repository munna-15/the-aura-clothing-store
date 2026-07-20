import { useContext, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ProductContext } from "../../context/ProductContextProvider";

import ReviewContent from "./ReviewContent";
import ReviewImage from "./ReviewImage";
import ReviewNavigation from "./ReviewNavigation";


const AUTO_PLAY = 5000;


const CustomerReviews = () => {


  const { allProducts } = useContext(ProductContext);


  const reviews = useMemo(() => (
    allProducts.flatMap((product) =>
      (product.reviewsData || []).map((review) => ({
        ...review,
        productImage: product.image,
        productName: product.name,
      }))
    )
  ), [allProducts]);



  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);



  useEffect(() => {

    if (!reviews.length || isPaused) return;


    const interval = setInterval(() => {

      setCurrent((prev) => prev === reviews.length - 1 ? 0 : prev + 1);

    }, AUTO_PLAY);


    return () => clearInterval(interval);


  }, [reviews, isPaused]);



  if (!reviews.length) return null;


  const activeReview = reviews[current];



  return (

    <section className="overflow-hidden bg-white py-14 sm:py-18 lg:py-24">


      <div className="mx-auto w-[94%] max-w-[1580px]">


        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-14"
        >


          <p className="text-[10px] uppercase tracking-[0.45em] text-neutral-400 sm:text-[11px]">
            Customer Love
          </p>


          <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-semibold text-black sm:text-4xl md:text-5xl">
            Stories From Our Community
          </h2>


        </motion.div>




        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="overflow-hidden rounded-3xl bg-neutral-50 shadow-[0_25px_70px_rgba(0,0,0,.08)] sm:rounded-[40px]"
        >



          <div className="grid items-center lg:grid-cols-2">


            <AnimatePresence mode="wait">

              <motion.div
                key={activeReview.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.45 }}
              >

                <ReviewContent review={activeReview} />

              </motion.div>


            </AnimatePresence>





            <AnimatePresence mode="wait">

              <motion.div
                key={activeReview.productImage}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >

                <ReviewImage review={activeReview} />

              </motion.div>


            </AnimatePresence>


          </div>



          <ReviewNavigation
            total={reviews.length}
            current={current}
            setCurrent={setCurrent}
          />



        </div>


      </div>


    </section>

  );

};


export default CustomerReviews;