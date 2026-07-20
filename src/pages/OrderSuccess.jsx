import { motion } from "framer-motion";
import {
  CheckCircle,
  Package,
  ShoppingBag,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { ProductContext } from "../context/ProductContextProvider";


const OrderSuccess = () => {

  const navigate = useNavigate();

  const { orders } = useContext(ProductContext);

  const latestOrder = orders[0];


  return (

    <main
      className="
        relative
        min-h-screen
        overflow-hidden

        flex
        items-start
        justify-center

        bg-linear-to-br
        from-white
        via-neutral-50
        to-neutral-100

        px-4
        pt-20
        pb-16


        sm:pt-16


        lg:items-center
        lg:pt-0
      "
    >


      {/* Background Blur */}

      <div
        className="
          pointer-events-none
          absolute

          -left-32
          top-20

          h-72
          w-72

          rounded-full

          bg-neutral-200/60

          blur-3xl
        "
      />


      <div
        className="
          pointer-events-none
          absolute

          -right-32
          bottom-20

          h-72
          w-72

          rounded-full

          bg-neutral-200/60

          blur-3xl
        "
      />



      <motion.section

        initial={{
          opacity:0,
          y:25,
        }}

        animate={{
          opacity:1,
          y:0,
        }}

        transition={{
          duration:.5,
        }}

        className="
          relative
          z-10

          w-full
          max-w-sm

          rounded-3xl

          border
          border-neutral-200/70

          bg-white/85

          backdrop-blur-2xl

          p-4


          sm:max-w-lg
          sm:p-10


          shadow-[0_25px_60px_rgba(0,0,0,.12)]
        "
      >



        {/* SUCCESS ICON */}


        <motion.div

          initial={{
            scale:0,
          }}

          animate={{
            scale:1,
          }}

          transition={{
            delay:.2,
            type:"spring",
          }}

          className="
            mx-auto

            flex

            h-14
            w-14

            items-center
            justify-center

            rounded-full

            bg-black

            text-white


            sm:h-20
            sm:w-20
          "
        >

          <CheckCircle
            size={30}
            className="sm:h-10.5 sm:w-10.5"
          />

        </motion.div>





        <h1
          className="
            mt-5

            text-2xl

            font-light

            tracking-tight

            text-black


            sm:mt-7
            sm:text-4xl
          "
        >
          Order Confirmed

        </h1>




        <p
          className="
            mt-3

            text-xs

            leading-6

            text-neutral-500


            sm:mt-4
            sm:text-sm
            sm:leading-7
          "
        >

          Thank you for shopping with

          <span className="font-medium text-black">
            {" "}THE AURA
          </span>

          .
          Your order has been successfully placed.

        </p>





        {
          latestOrder && (

            <div
              className="
                mt-3

                space-y-3

                rounded-2xl

                bg-neutral-50

                p-4


                sm:mt-8
                sm:rounded-3xl
                sm:p-5
              "
            >

              <InfoRow
                label="Order ID"
                value={latestOrder.id}
              />


              <InfoRow
                label="Total Amount"
                value={`৳${latestOrder.total}`}
              />


              <InfoRow
                label="Payment"
                value={latestOrder.paymentMethod}
              />


              <InfoRow
                label="Status"
                value={latestOrder.status}
              />


            </div>

          )
        }






        {/* DELIVERY */}


        <div
          className="
            mt-4

            flex
            items-center
            gap-3

            rounded-2xl

            border
            border-neutral-200

            bg-white

            p-3


            sm:mt-5
            sm:p-4
          "
        >


          <div
            className="
              flex

              h-9
              w-9

              items-center
              justify-center

              rounded-full

              bg-neutral-100
            "
          >

            <Package size={16}/>

          </div>




          <div>

            <p
              className="
                text-xs

                font-medium

                sm:text-sm
              "
            >
              Estimated Delivery
            </p>


            <p
              className="
                mt-1

                text-[11px]

                text-neutral-500
              "
            >
              3-5 business days
            </p>

          </div>


        </div>







        {/* BUTTONS */}



        <button

          onClick={() => navigate("/orders")}

          className="
            mt-6

            flex

            w-full

            items-center

            justify-center

            gap-2

            rounded-full

            bg-black

            py-3


            text-[10px]

            uppercase

            tracking-[3px]

            text-white

            transition

            hover:bg-neutral-800


            sm:mt-8
            sm:py-4
            sm:text-xs
          "
        >

          <Package size={15}/>

          View Orders


        </button>





        <button

          onClick={() => navigate("/")}

          className="
            mt-3

            flex

            w-full

            items-center

            justify-center

            gap-2

            rounded-full

            border

            border-neutral-300

            py-3


            text-[10px]

            uppercase

            tracking-[3px]

            transition

            hover:bg-neutral-100


            sm:py-4
            sm:text-xs
          "
        >

          <ShoppingBag size={15}/>

          Continue Shopping


        </button>



      </motion.section>


    </main>

  );
};






const InfoRow = ({
  label,
  value,
}) => (

  <div
    className="
      flex

      items-center

      justify-between

      gap-4
    "
  >

    <span
      className="
        text-xs

        text-neutral-500

        sm:text-sm
      "
    >
      {label}
    </span>



    <span
      className="
        max-w-40

        truncate

        text-xs

        font-medium

        capitalize

        sm:max-w-55
        sm:text-sm
      "
    >
      {value}
    </span>


  </div>

);



export default OrderSuccess;