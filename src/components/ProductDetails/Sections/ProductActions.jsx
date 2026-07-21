import { Heart, Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";


const ProductActions = ({
  quantity,
  setQuantity,
  currentStock,
  handleAddToCart,
  isWishlisted,
  toggleWishlist,
  productId,
}) => {


  const increaseQuantity = () => {

    if (quantity >= currentStock) {
      toast.error("Maximum stock reached");
      return;
    }

    setQuantity((prev) => prev + 1);

  };



  const decreaseQuantity = () => {

    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }

  };



  return (

    <motion.div

      initial={{ opacity:0, y:10 }}

      animate={{ opacity:1, y:0 }}

      transition={{ duration:.25 }}

      className="space-y-5"

    >



      {/* Quantity */}

      <div className="flex items-center justify-between gap-4">


        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
          Quantity
        </span>



        <div className="flex items-center rounded-full border border-neutral-200 bg-white p-1">


          <button

            type="button"

            onClick={decreaseQuantity}

            className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-black"

          >

            <Minus size={14}/>

          </button>



          <span className="w-10 text-center text-sm font-medium">

            {String(quantity).padStart(2,"0")}

          </span>



          <button

            type="button"

            onClick={increaseQuantity}

            className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-black"

          >

            <Plus size={14}/>

          </button>


        </div>


      </div>




      {/* Buttons */}


      <div className="flex gap-3">


        <motion.button

          type="button"

          whileTap={{ scale:.97 }}

          whileHover={{ y:-1 }}

          disabled={currentStock === 0}

          onClick={handleAddToCart}

          className={`
            flex-1 rounded-full py-4 text-xs font-semibold uppercase tracking-[0.15em] transition sm:tracking-[0.25em]
            ${
              currentStock === 0
                ? "cursor-not-allowed bg-neutral-300 text-neutral-500"
                : "bg-black text-white hover:bg-neutral-800"
            }
          `}

        >

          {currentStock === 0 ? "Out Of Stock" : "Add To Bag"}


        </motion.button>




        <motion.button

          type="button"

          whileHover={{ scale:1.04 }}

          whileTap={{ scale:.95 }}

          onClick={() => toggleWishlist(productId)}

          className={`
            flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition
            ${
              isWishlisted
                ? "border-black bg-black text-white"
                : "border-neutral-200 bg-white hover:border-black"
            }
          `}

        >

          <Heart

            size={18}

            fill={isWishlisted ? "currentColor" : "none"}

          />


        </motion.button>


      </div>


    </motion.div>

  );

};


export default ProductActions;