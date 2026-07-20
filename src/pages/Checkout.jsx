import { motion } from "framer-motion";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import ShippingForm from "../components/Checkout/ShippingForm";
import PaymentMethod from "../components/Checkout/PaymentMethod";
import CheckoutSummary from "../components/Checkout/CheckoutSummary";


import { ProductContext } from "../context/ProductContextProvider";


const Checkout = () => {

  const navigate = useNavigate();

  const { validateShipping, createOrder } = useContext(ProductContext);


  const handlePlaceOrder = () => {

    const isValid = validateShipping();

    if (!isValid) return;

    createOrder();

    navigate("/order-success");

  };


  return (

    <main className="min-h-screen bg-neutral-50 pt-16 pb-16 sm:pt-20 sm:pb-20">


      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">


        {/* HEADER */}

        <motion.header
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .4 }}
          className="mb-8 sm:mb-10"
        >

          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400">
            Secure Checkout
          </p>


          <h1 className="mt-2 font-['Playfair_Display'] text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Checkout
          </h1>

        </motion.header>





        <div className="grid gap-6 lg:grid-cols-[1fr_380px] lg:gap-10">



          {/* LEFT */}


          <div className="space-y-5 sm:space-y-6">


            <CheckoutCard>

              <ShippingForm />

            </CheckoutCard>



            <CheckoutCard>

              <PaymentMethod />

            </CheckoutCard>


          </div>






          {/* RIGHT */}


          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .4 }}
            className="h-fit lg:sticky lg:top-24"
          >

            <CheckoutSummary
              buttonText="Place Order"
              onButtonClick={handlePlaceOrder}
            />



          </motion.aside>



        </div>



      </section>



    </main>

  );

};





const CheckoutCard = ({ children }) => (

  <div className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-6">

    {children}

  </div>

);



export default Checkout;