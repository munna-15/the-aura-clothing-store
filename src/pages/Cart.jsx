import { useContext } from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { ProductContext } from "../context/ProductContextProvider";

import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";


const Cart = () => {


  const {
    allProducts,
    cartItems,
    getCartCount,
  } = useContext(ProductContext);



  const navigate = useNavigate();



  const cartEntries = Object.entries(cartItems);


  const isEmpty = cartEntries.length === 0;



  return (

    <main className="min-h-screen bg-neutral-50 pt-10 sm:pt-16">


      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-12 lg:py-12">



        {/* HEADER */}


        <header className="flex flex-col gap-4 border-b border-neutral-200 pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-6">


          <div>


            <motion.p
              initial={{opacity:0,y:10}}
              animate={{opacity:1,y:0}}
              transition={{duration:.3}}
              className="text-[10px] uppercase tracking-[0.45em] text-neutral-400"
            >

              Your Selection

            </motion.p>



            <motion.h1
              initial={{opacity:0,y:15}}
              animate={{opacity:1,y:0}}
              transition={{duration:.4}}
              className="mt-2 font-['Playfair_Display'] text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
            >

              Shopping Bag

            </motion.h1>



          </div>






          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:.2}}
            className="w-fit rounded-full border border-neutral-200 bg-white px-3 py-2 text-[10px] uppercase tracking-[0.25em] text-neutral-500 sm:px-4"
          >

            {getCartCount()} Item{getCartCount() !== 1 && "s"}

          </motion.div>



        </header>







        {
          isEmpty ? (

            <EmptyCart navigate={navigate}/>

          ) : (



            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px] lg:gap-10">


              {/* ITEMS */}


              <div className="space-y-4">


                {
                  cartEntries.map(([cartKey,cartItem]) => {


                    const product = allProducts.find(
                      item => item._id === cartItem.itemId
                    );



                    if(!product) return null;



                    return (

                      <CartItem
                        key={cartKey}
                        cartKey={cartKey}
                        item={product}
                        cartItem={cartItem}
                      />

                    );

                  })
                }



              </div>









              {/* SUMMARY */}


              <aside className="h-fit lg:sticky lg:top-24">


                <CartSummary
                  buttonText="Proceed To Checkout"
                  onButtonClick={() => navigate("/checkout")}
                />


              </aside>




            </div>



          )
        }



      </section>


    </main>

  );

};







const EmptyCart = ({
  navigate,
}) => {


  return (

    <motion.div
      initial={{opacity:0,scale:.95}}
      animate={{opacity:1,scale:1}}
      className="flex min-h-[50vh] flex-col items-center justify-center gap-5 text-center"
    >



      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm">

        <ShoppingBag size={30} className="text-neutral-400"/>

      </div>





      <div>


        <h2 className="font-['Playfair_Display'] text-xl text-black sm:text-2xl">

          Your bag is empty

        </h2>



        <p className="mt-2 text-sm text-neutral-500">

          Discover timeless pieces from our collection.

        </p>


      </div>







      <button
        onClick={() => navigate("/collection")}
        className="rounded-full bg-black px-7 py-3 text-[10px] uppercase tracking-[0.3em] text-white transition hover:bg-neutral-800"
      >

        Explore Collection

      </button>



    </motion.div>

  );

};



export default Cart;