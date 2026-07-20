import { motion } from "framer-motion";

import useCollection from "../../hooks/useCollection";

import ProductCard from "../Products/ProductCard";
import ProductSkeleton from "../Products/ProductSkeleton";


const ProductGrid = () => {


  const {
    filteredProducts,
    loading,
  } = useCollection();




  return (

    <section className="bg-white">

      <div className="mx-auto w-[94%] max-w-[1580px] py-12 sm:py-14 lg:py-20">


        {
          loading ? (


            <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-12 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">


              {
                Array.from({
                  length:8
                }).map((_,index)=>(


                  <motion.div

                    key={index}

                    initial={{
                      opacity:0
                    }}

                    animate={{
                      opacity:1
                    }}

                    transition={{
                      delay:index * 0.05
                    }}

                  >

                    <ProductSkeleton />

                  </motion.div>


                ))
              }


            </div>


          ) : filteredProducts.length ? (


            <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-12 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">


              {
                filteredProducts.map((product)=>(


                  <motion.div

                    key={product._id}

                    initial={{
                      opacity:0,
                      y:20
                    }}

                    animate={{
                      opacity:1,
                      y:0
                    }}

                    transition={{
                      duration:0.35
                    }}

                  >

                    <ProductCard
                      product={product}
                    />


                  </motion.div>


                ))
              }


            </div>


          ) : (


            <motion.div

              initial={{
                opacity:0,
                y:20
              }}

              animate={{
                opacity:1,
                y:0
              }}

              className="flex min-h-105 flex-col items-center justify-center rounded-3xl bg-neutral-50 px-6 text-center"

            >


              <p className="text-[11px] uppercase tracking-[0.45em] text-neutral-400">

                No Products

              </p>



              <h2 className="mt-5 font-['Playfair_Display'] text-3xl font-semibold text-black">

                Nothing Found

              </h2>



              <p className="mt-4 max-w-md text-sm leading-7 text-neutral-500">

                We couldn't find products matching your search. Try another category or keyword.

              </p>



            </motion.div>


          )
        }


      </div>


    </section>

  );

};


export default ProductGrid;