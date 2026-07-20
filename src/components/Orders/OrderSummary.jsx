import {
  CreditCard,
  CheckCircle2,
} from "lucide-react";


const OrderSummary = ({ order }) => {


  return (

    <aside

      className="
        rounded-3xl

        border
        border-neutral-200/70

        bg-white

        p-4


        shadow-[0_15px_40px_rgba(0,0,0,.05)]


        sm:p-6

        lg:p-7
      "
    >




      {/* HEADER */}


      <div

        className="
          mb-5


          sm:mb-7
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

          Summary

        </p>




        <h2

          className="
            mt-1.5

            text-xl

            font-light

            tracking-wide


            sm:mt-2
            sm:text-2xl
          "
        >

          Order Summary

        </h2>



      </div>









      {/* PRICE */}



      <div

        className="
          space-y-3


          sm:space-y-4
        "
      >



        <SummaryRow

          label="Subtotal"

          value={`৳${order.subtotal?.toLocaleString()}`}

        />




        <SummaryRow

          label="Shipping"

          value={
            order.shipping === 0
              ? "FREE"
              : `৳${order.shipping?.toLocaleString()}`
          }

          highlight={
            order.shipping === 0
          }

        />




        <SummaryRow

          label="VAT (5%)"

          value={`৳${order.vat?.toLocaleString()}`}

        />



      </div>









      {/* TOTAL */}



      <div

        className="
          my-5

          border-t

          border-neutral-200

          pt-4


          sm:my-7
          sm:pt-6
        "
      >


        <div

          className="
            flex

            items-end

            justify-between

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
              text-2xl

              font-light

              tracking-tight


              sm:text-3xl
            "
          >

            ৳{order.total?.toLocaleString()}

          </span>



        </div>


      </div>









      {/* PAYMENT CARD */}



      <div

        className="
          rounded-2xl

          border

          border-neutral-200

          bg-neutral-50

          p-3


          sm:p-4
        "
      >





        <div

          className="
            flex

            items-center

            gap-3
          "
        >




          <div

            className="
              flex

              h-9

              w-9

              items-center

              justify-center

              rounded-xl

              bg-black

              text-white


              sm:h-10
              sm:w-10
            "
          >


            <CreditCard size={16}/>


          </div>






          <div

            className="
              flex-1
            "
          >


            <p

              className="
                text-[9px]

                uppercase

                tracking-[0.3em]

                text-neutral-400
              "
            >

              Payment Method

            </p>




            <p

              className="
                mt-1

                text-xs

                font-medium

                capitalize


                sm:text-sm
              "
            >

              {
                order.paymentMethod ||
                "Cash On Delivery"
              }


            </p>



          </div>



        </div>








        {/* CONFIRM */}



        <div

          className="
            mt-3

            flex

            items-center

            gap-2

            rounded-xl

            border

            border-green-200

            bg-green-50

            px-3

            py-2

            text-[11px]

            text-green-700


            sm:mt-4
            sm:text-xs
          "
        >


          <CheckCircle2 size={14}/>


          Payment confirmed


        </div>




      </div>




    </aside>

  );

};







const SummaryRow = ({
  label,
  value,
  highlight=false,
}) => (


  <div

    className="
      flex

      items-center

      justify-between

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

      className={`
        text-xs

        font-medium


        sm:text-sm


        ${
          highlight
          ? "text-green-600"
          : "text-black"
        }

      `}
    >

      {value}

    </span>



  </div>


);





export default OrderSummary;