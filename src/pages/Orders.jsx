import { useContext } from "react";
import { motion } from "framer-motion";

import { ProductContext } from "../context/ProductContextProvider";

import OrderCard from "../components/Orders/OrderCard";
import EmptyOrders from "../components/Orders/EmptyOrders";


const Orders = () => {


  const { orders } = useContext(ProductContext);



  return (

    <main className="min-h-screen bg-neutral-50 pt-16 pb-16 sm:pt-20 sm:pb-20">


      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">



        <motion.header
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{duration:.4}}
          className="mb-8 border-b border-neutral-200 pb-6 sm:mb-12 sm:pb-8"
        >


          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400">
            Account
          </p>




          <h1 className="mt-3 font-['Playfair_Display'] text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
            My Orders
          </h1>




          <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-500">
            Track, manage and review all your purchases.
          </p>



        </motion.header>






        {
          orders.length === 0 ? (

            <EmptyOrders />

          ) : (


            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:.4}}
              className="space-y-5 sm:space-y-8"
            >


              {
                orders.map((order,index)=>(


                  <motion.div

                    key={order.id}

                    initial={{opacity:0,y:20}}

                    animate={{opacity:1,y:0}}

                    transition={{
                      duration:.35,
                      delay:index*.08
                    }}

                  >

                    <OrderCard order={order}/>


                  </motion.div>


                ))
              }



            </motion.div>


          )
        }





      </section>


    </main>

  );

};


export default Orders;