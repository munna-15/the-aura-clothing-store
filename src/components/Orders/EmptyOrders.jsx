import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyOrders = () => {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        border
        border-gray-200
        shadow-sm
        p-10
        flex
        flex-col
        items-center
        justify-center
        text-center
        min-h-100
      "
    >

      {/* Icon */}

      <div
        className="
          w-24
          h-24
          rounded-full
          bg-gray-100
          flex
          items-center
          justify-center
          mb-6
          animate-pulse
        "
      >
        <ShoppingBag
          size={45}
          className="text-gray-700"
        />
      </div>


      {/* Text */}

      <h2 className="text-3xl font-bold">
        No Orders Yet
      </h2>

      <p className="
        text-gray-500
        mt-3
        max-w-md
      ">
        You haven't placed any orders yet.
        Start shopping and your orders will appear here.
      </p>


      {/* Button */}

      <Link
        to="/collection"
        className="
          mt-8
          px-8
          py-4
          rounded-xl
          bg-black
          text-white
          font-semibold
          hover:bg-gray-800
          hover:scale-105
          transition-all
          duration-300
        "
      >
        Start Shopping
      </Link>


    </div>
  );
};

export default EmptyOrders;