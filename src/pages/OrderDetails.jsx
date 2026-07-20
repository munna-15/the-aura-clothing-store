import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { ProductContext } from "../context/ProductContextProvider";

import OrderProducts from "../components/Orders/OrderProducts";
import ShippingCard from "../components/Orders/ShippingCard";
import PaymentCard from "../components/Orders/PaymentCard";
import OrderSummary from "../components/Orders/OrderSummary";
import OrderTimeline from "../components/Orders/OrderTimeline";



const OrderDetails = () => {


  const { id } = useParams();


  const { orders } = useContext(ProductContext);



  const order = orders.find(
    (item) => item.id === id
  );





  if (!order) {

    return (

      <main
        className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-linear-to-br
        from-white
        via-gray-50
        to-neutral-100
        px-6
        "
      >


        <div
          className="
          max-w-md
          w-full
          rounded-3xl
          border
          border-neutral-200
          bg-white/70
          backdrop-blur-xl
          p-10
          text-center
          shadow-lg
          "
        >


          <h2
            className="
            text-3xl
            font-light
            tracking-tight
            "
          >
            Order Not Found
          </h2>



          <p
            className="
            mt-3
            text-neutral-500
            "
          >
            This order doesn't exist or has been removed.
          </p>




          <Link

            to="/orders"

            className="
            mt-8
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-black
            px-7
            py-3
            text-xs
            uppercase
            tracking-[0.25em]
            text-white
            transition
            hover:bg-neutral-800
            "

          >

            <ArrowLeft size={16} />

            Back Orders

          </Link>



        </div>



      </main>

    );

  }






  return (

    <main
      className="
      min-h-screen
      bg-linear-to-br
      from-white
      via-gray-50
      to-neutral-100
      py-20
      "
    >


      <section
        className="
        mx-auto
        max-w-7xl
        px-6
        lg:px-12
        "
      >




        {/* Header */}



        <div
          className="
          flex
          flex-col
          gap-5
          border-b
          border-neutral-200
          pb-8
          md:flex-row
          md:items-center
          md:justify-between
          "
        >



          <div>


            <Link

              to="/orders"

              className="
              inline-flex
              items-center
              gap-2
              text-sm
              text-neutral-500
              transition
              hover:text-black
              "

            >

              <ArrowLeft size={15} />

              Back to Orders

            </Link>




            <p
              className="
              mt-6
              text-xs
              uppercase
              tracking-[0.35em]
              text-neutral-400
              "
            >
              Order Details
            </p>




            <h1
              className="
              mt-3
              text-4xl
              md:text-5xl
              font-light
              tracking-tight
              "
            >
              {order.id}
            </h1>


          </div>






          <div
            className="
            rounded-full
            border
            border-yellow-200
            bg-yellow-50
            px-5
            py-2
            text-xs
            uppercase
            tracking-[0.25em]
            text-yellow-700
            "
          >

            {order.status}

          </div>




        </div>









        {/* Main Layout */}



        <div
          className="
          mt-10
          grid
          gap-10
          lg:grid-cols-[2fr_380px]
          "
        >






          {/* Left Section */}



          <div
            className="
            space-y-8
            "
          >


            <OrderProducts
              products={order.products}
            />



            <ShippingCard
              shippingData={order.shippingData}
            />



            <PaymentCard
              paymentMethod={order.paymentMethod}
            />



            <OrderTimeline
              status={order.status}
            />



          </div>









          {/* Right Summary */}



          <aside
            className="
            sticky
            top-28
            h-fit
            "
          >


            <OrderSummary
              order={order}
            />


          </aside>






        </div>





      </section>


    </main>

  );

};



export default OrderDetails;