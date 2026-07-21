import { motion } from "framer-motion";
import { CheckCircle, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { ProductContext } from "../context/ProductContextProvider";


const OrderSuccess = () => {
  const navigate = useNavigate();

  const { orders } = useContext(ProductContext);

  const latestOrder = orders?.[0];


  return (
    <main className="flex min-h-dvh items-center justify-center bg-neutral-50 px-4 py-10">

      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-sm rounded-3xl border border-neutral-200 bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:max-w-md sm:p-8"
      >

        {/* Success Icon */}

        <div className="flex justify-center">

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.25 }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white"
          >
            <CheckCircle size={28} />
          </motion.div>

        </div>


        {/* Heading */}

        <div className="mt-5 text-center">

          <h1 className="font-['Playfair_Display'] text-2xl font-semibold text-black sm:text-3xl">
            Order Confirmed
          </h1>

          <p className="mt-2 text-sm leading-6 text-neutral-500">
            Thank you for shopping with{" "}
            <span className="font-medium text-black">
              THE AURA
            </span>
            . Your order has been placed successfully.
          </p>

        </div>



        {/* Order Details */}

        {latestOrder && (

          <div className="mt-6 space-y-3 rounded-2xl bg-neutral-50 p-4">

            <InfoRow
              label="Order ID"
              value={latestOrder.id}
            />

            <InfoRow
              label="Amount"
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

        )}



        {/* Delivery */}

        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-neutral-200 p-3">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100">
            <Package size={16} />
          </div>


          <div>

            <p className="text-sm font-medium text-black">
              Estimated Delivery
            </p>

            <p className="mt-0.5 text-xs text-neutral-500">
              3-5 business days
            </p>

          </div>

        </div>




        {/* Actions */}

        <div className="mt-6 space-y-3">

          <button
            onClick={() => navigate("/orders")}
            className="flex w-full items-center justify-center rounded-full bg-black py-3 text-[11px] font-medium uppercase tracking-[0.25em] text-white transition hover:bg-neutral-800"
          >
            View Orders
          </button>


          <button
            onClick={() => navigate("/collection")}
            className="flex w-full items-center justify-center rounded-full border border-neutral-200 py-3 text-[11px] font-medium uppercase tracking-[0.25em] text-black transition hover:bg-neutral-100"
          >
            Continue Shopping
          </button>

        </div>


      </motion.section>

    </main>
  );
};



const InfoRow = ({
  label,
  value,
}) => (
  <div className="flex items-center justify-between gap-4">

    <span className="text-xs text-neutral-500">
      {label}
    </span>

    <span className="max-w-40 truncate text-xs font-medium capitalize text-black">
      {value}
    </span>

  </div>
);


export default OrderSuccess;