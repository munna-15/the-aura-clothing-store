import { Star } from "lucide-react";
import { motion } from "framer-motion";


const ProductInfo = ({
  product,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  currentStock,
}) => {


  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 15,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.4,
      }}


      className="space-y-5"

    >






      {/* Category */}


      <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400">
        {product.category}
      </p>








      {/* Title + Rating */}


      <div>


        <h1 className="
          font-heading
          text-2xl
          font-light
          leading-tight
          text-neutral-900
          sm:text-3xl
          lg:text-4xl
        ">
          {product.name}
        </h1>




        <div className="mt-3 flex items-center gap-2">


          <div className="flex gap-0.5">

            {[...Array(5)].map((_, index) => (

              <Star
                key={index}
                size={14}
                fill="black"
                strokeWidth={1.5}
              />

            ))}

          </div>



          <span className="text-xs text-neutral-400">
            {product.rating || 4.8} ({product.reviews || 120})
          </span>


        </div>


      </div>








      {/* Price */}


      <div className="
        flex
        items-center
        justify-between
        rounded-2xl
        bg-black
        px-5
        py-4
      ">


        <span className="
          text-[10px]
          uppercase
          tracking-[0.3em]
          text-neutral-400
        ">
          Price
        </span>


        <span className="
          text-2xl
          font-light
          text-white
        ">
          ৳ {product.price.toLocaleString()}
        </span>


      </div>








      {/* Description */}


      <p className="
        line-clamp-3
        text-sm
        leading-6
        text-neutral-500
      ">
        {product.description}
      </p>








      {/* Color Selection */}


      <div className="space-y-3">


        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
          Color
        </p>



        <div className="flex flex-wrap gap-2">


          {product.colors?.map((color) => (

            <button

              key={color}

              type="button"

              onClick={() => setSelectedColor(color)}

              className={`
                flex items-center gap-2 rounded-full px-4 py-2 text-xs transition
                ${
                  selectedColor === color
                    ? "bg-black text-white"
                    : "border border-neutral-200 hover:border-black"
                }
              `}

            >


              <span
                className="h-3 w-3 rounded-full border border-neutral-300"
                style={{
                  backgroundColor: color.toLowerCase(),
                }}
              />


              {color}


            </button>


          ))}


        </div>


      </div>








      {/* Size Selection */}


      <div className="space-y-3">


        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
          Size
        </p>



        <div className="flex gap-2">


          {product.sizes?.map((size) => (

            <button

              key={size}

              type="button"

              onClick={() => setSelectedSize(size)}

              className={`
                flex h-10 w-10 items-center justify-center rounded-full text-xs transition
                ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "border border-neutral-200 hover:border-black"
                }
              `}

            >

              {size}

            </button>


          ))}


        </div>


      </div>








      {/* Stock Status */}


      <div className="flex items-center gap-2 text-xs">


        <span
          className={`
            h-2 w-2 rounded-full
            ${currentStock > 0 ? "bg-green-500" : "bg-red-500"}
          `}
        />


        <span className="text-neutral-500">

          {
            currentStock > 0
              ? `${currentStock} pieces available`
              : "Out of stock"
          }

        </span>


      </div>





    </motion.div>

  );

};


export default ProductInfo;