import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, ShoppingBag } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { ProductContext } from "../../context/ProductContextProvider";


const MiniCart = () => {

  const navigate = useNavigate();


  const {
    isMiniCartOpen,
    setIsMiniCartOpen,
    cartItems,
    allProducts,
    getTotalCartAmount,
    getCartCount,
  } = useContext(ProductContext);



  const cartProducts = Object.entries(cartItems)
    .map(([cartKey,item]) => {

      const product = allProducts.find(
        product => product._id === item.itemId
      );


      if(!product) return null;


      return {
        cartKey,
        product,
        ...item,
      };


    })
    .filter(Boolean);




  const closeCart = () => {
    setIsMiniCartOpen(false);
  };




  const handleContinueShopping = () => {

    closeCart();

    setTimeout(() => {
      navigate("/collection");
    },300);

  };





  return (

    <AnimatePresence>


      {
        isMiniCartOpen && (

          <>


            {/* Overlay */}


            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
              onClick={closeCart}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            />







            {/* Drawer */}


            <motion.aside

              initial={{x:"100%"}}
              animate={{x:0}}
              exit={{x:"100%"}}
              transition={{duration:.35,ease:[0.22,1,0.36,1]}}

              className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-sm flex-col bg-white"

            >





              {/* HEADER */}


              <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">


                <div>

                  <h2 className="text-xs font-semibold uppercase tracking-[0.35em]">
                    Your Bag
                  </h2>


                  <p className="mt-1 text-[11px] tracking-widest text-neutral-400">
                    {getCartCount()} Items
                  </p>


                </div>





                <button
                  onClick={closeCart}
                  className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-neutral-100"
                >

                  <X size={17}/>

                </button>



              </div>









              {/* BODY */}



              <div className="flex-1 overflow-y-auto px-5 py-5">


                {
                  cartProducts.length === 0 ? (



                    <div className="flex h-full flex-col items-center justify-center text-center">


                      <ShoppingBag
                        size={42}
                        strokeWidth={1}
                        className="text-neutral-300"
                      />



                      <h3 className="mt-4 text-xs font-medium uppercase tracking-[0.25em]">
                        Empty Bag
                      </h3>



                      <p className="mt-2 max-w-xs text-sm leading-relaxed text-neutral-500">
                        Discover premium pieces from our collection.
                      </p>



                      <button
                        onClick={handleContinueShopping}
                        className="mt-6 rounded-full border border-black px-6 py-3 text-[10px] uppercase tracking-[0.25em] transition hover:bg-black hover:text-white"
                      >

                        Continue Shopping

                      </button>


                    </div>



                  ) : (



                    <div className="space-y-4">


                      {
                        cartProducts.map(({
                          cartKey,
                          product,
                          quantity,
                          size,
                          color,
                        }) => (



                          <motion.div

                            key={cartKey}

                            initial={{opacity:0,y:10}}

                            animate={{opacity:1,y:0}}

                            transition={{duration:.25}}

                            className="flex gap-3 border-b border-neutral-200 pb-4"

                          >





                            {/* IMAGE */}


                            <Link
                              to={`/product/${product._id}`}
                              onClick={closeCart}
                              className="h-20 w-16 shrink-0 overflow-hidden rounded-xl bg-neutral-100 sm:h-24 sm:w-20"
                            >

                              <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover transition duration-300 hover:scale-105"
                              />


                            </Link>









                            {/* INFO */}


                            <div className="flex flex-1 flex-col">


                              <h3 className="line-clamp-2 text-xs font-medium uppercase tracking-[0.12em]">
                                {product.name}
                              </h3>




                              <p className="mt-1 text-[11px] text-neutral-400">
                                {color} / {size}
                              </p>






                              <div className="mt-auto flex items-center justify-between pt-3">


                                <span className="text-[11px] text-neutral-400">
                                  Qty {quantity}
                                </span>



                                <span className="text-sm font-medium">
                                  ৳{product.price * quantity}
                                </span>


                              </div>




                            </div>




                          </motion.div>



                        ))
                      }



                    </div>



                  )
                }



              </div>









              {/* FOOTER */}



              {
                cartProducts.length > 0 && (


                  <div className="border-t border-neutral-200 px-5 py-4">


                    <div className="mb-4 flex items-center justify-between">

                      <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                        Subtotal
                      </span>


                      <span className="text-lg font-medium">
                        ৳{getTotalCartAmount()}
                      </span>


                    </div>







                    <div className="space-y-2">


                      <Link
                        to="/cart"
                        onClick={closeCart}
                        className="block rounded-full border border-black py-3 text-center text-[10px] uppercase tracking-[0.25em] transition hover:bg-black hover:text-white"
                      >

                        View Bag

                      </Link>





                      <Link
                        to="/checkout"
                        onClick={closeCart}
                        className="block rounded-full bg-black py-3 text-center text-[10px] uppercase tracking-[0.25em] text-white transition hover:bg-neutral-800"
                      >

                        Checkout

                      </Link>



                    </div>


                  </div>


                )
              }



            </motion.aside>



          </>

        )
      }


    </AnimatePresence>


  );

};


export default MiniCart;