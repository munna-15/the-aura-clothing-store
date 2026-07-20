import { useContext } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

import { ProductContext } from "../../context/ProductContextProvider";



const CheckoutSummary = ({
  buttonText = "Place Order",
  onButtonClick,
}) => {


  const {
    allProducts,
    cartItems,
    getTotalCartAmount,
    getShippingCost,
    getVatAmount,
    getFinalTotal,
  } = useContext(ProductContext);



  const subtotal = getTotalCartAmount();
  const shipping = getShippingCost();
  const vat = getVatAmount();
  const total = getFinalTotal();




  const items = Object.values(cartItems)

    .map((cartItem)=>{

      const product = allProducts.find(
        item => item._id === cartItem.itemId
      );


      return {
        ...product,
        quantity: cartItem.quantity,
        size: cartItem.size,
        color: cartItem.color,
      };


    })

    .filter(Boolean);







  return (


    <motion.aside

      initial={{
        opacity:0,
        x:20,
      }}

      animate={{
        opacity:1,
        x:0,
      }}

      transition={{
        duration:.4,
      }}


      className="
        rounded-3xl

        border
        border-neutral-200/70

        bg-white

        p-4


        shadow-[0_20px_50px_rgba(0,0,0,.06)]


        sm:p-5
      "
    >





      {/* HEADER */}


      <div
        className="
          mb-4
        "
      >

        <p
          className="
            text-[9px]

            uppercase

            tracking-[0.35em]

            text-neutral-400
          "
        >
          Order Review
        </p>



        <h2
          className="
            mt-1.5

            font-['Playfair_Display']

            text-xl

            font-medium


            sm:text-2xl
          "
        >
          Your Order
        </h2>


      </div>








      {/* PRODUCTS */}


      <div

        className="
          max-h-72

          space-y-3

          overflow-y-auto

          pr-1
        "
      >



        {
          items.map((item,index)=>(


            <div

              key={index}

              className="
                flex

                items-center

                gap-3

                rounded-2xl

                bg-neutral-50

                p-2.5


                sm:bg-transparent
                sm:p-0
              "
            >





              {/* IMAGE */}


              <div

                className="
                  h-14

                  w-14

                  shrink-0

                  overflow-hidden

                  rounded-xl

                  bg-neutral-100


                  sm:h-16
                  sm:w-16
                "
              >

                <img

                  src={item.image}

                  alt={item.name}

                  className="
                    h-full

                    w-full

                    object-contain
                  "
                />


              </div>







              {/* DETAILS */}


              <div
                className="
                  min-w-0

                  flex-1
                "
              >


                <h3

                  className="
                    truncate

                    text-xs

                    font-medium


                    sm:text-sm
                  "
                >

                  {item.name}

                </h3>




                <p

                  className="
                    mt-1

                    text-[11px]

                    text-neutral-500
                  "
                >

                  {item.size} · {item.color}

                </p>



                <p

                  className="
                    mt-0.5

                    text-[11px]

                    text-neutral-500
                  "
                >

                  Qty: {item.quantity}

                </p>


              </div>






              {/* PRICE */}


              <p

                className="
                  text-xs

                  font-medium

                  whitespace-nowrap


                  sm:text-sm
                "
              >

                ৳{item.price * item.quantity}

              </p>




            </div>


          ))
        }



      </div>
    




      {/* PRICE SUMMARY */}


      <div

        className="
          my-4

          space-y-2.5

          border-t

          border-neutral-200

          pt-4


          sm:my-5
          sm:space-y-3
          sm:pt-5
        "
      >


        <SummaryRow
          title="Subtotal"
          value={`৳${subtotal}`}
        />


        <SummaryRow
          title="Shipping"
          value={
            shipping === 0
              ? "FREE"
              : `৳${shipping}`
          }
        />


        <SummaryRow
          title="VAT (5%)"
          value={`৳${vat}`}
        />


      </div>









      {/* TOTAL */}



      <div

        className="
          mb-4

          flex

          items-center

          justify-between

          border-t

          border-neutral-200

          pt-4


          sm:mb-5
        "
      >


        <span

          className="
            text-sm

            font-medium
          "
        >

          Total

        </span>




        <span

          className="
            text-lg

            font-semibold


            sm:text-xl
          "
        >

          ৳{total}

        </span>



      </div>









      {/* BUTTON */}



      <button

        onClick={onButtonClick}


        className="
          h-11

          w-full

          rounded-full

          bg-black

          text-[10px]

          font-medium

          uppercase

          tracking-[0.3em]

          text-white


          transition

          duration-300

          hover:bg-neutral-800


          sm:h-12
        "
      >

        {buttonText}


      </button>









      {/* TRUST BOX */}



      <div

        className="
          mt-3

          flex

          items-center

          gap-2

          rounded-xl

          bg-neutral-50

          p-3
        "
      >


        <ShieldCheck
          size={15}
          className="shrink-0"
        />



        <p

          className="
            text-[11px]

            text-neutral-600


            sm:text-xs
          "
        >

          Secure & protected checkout

        </p>


      </div>





    </motion.aside>


  );

};









const SummaryRow = ({
  title,
  value,
}) => (


  <div

    className="
      flex

      items-center

      justify-between

      text-sm
    "
  >



    <span

      className="
        text-neutral-500
      "
    >

      {title}

    </span>





    <span

      className="
        font-medium
      "
    >

      {value}

    </span>



  </div>


);




export default CheckoutSummary;