import { useState } from "react";
import { X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const QuickAddModal = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) => {


  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");



  if (!product) return null;



  const sizes = product.sizes || [];
  const colors = product.colors || [];



  const handleAdd = () => {

    if (!selectedSize || !selectedColor) return;


    onAddToCart(
      product._id,
      selectedSize,
      selectedColor
    );


    onClose();

  };




  return (

    <AnimatePresence>


      {
        isOpen && (


          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm p-5 md:items-center"
            onClick={onClose}
          >



            <motion.div
              initial={{y:50,opacity:0}}
              animate={{y:0,opacity:1}}
              exit={{y:50,opacity:0}}
              transition={{duration:.3}}
              onClick={(e)=>e.stopPropagation()}
              className="w-full max-w-md rounded-4xl border border-black/5 bg-white p-6 shadow-2xl"
            >



              {/* Header */}

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400">
                    Quick Add
                  </p>

                  <h2 className="mt-2 text-xl font-light">
                    {product.name}
                  </h2>

                </div>



                <button
                  onClick={onClose}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 transition hover:bg-black hover:text-white"
                >
                  <X size={18}/>
                </button>


              </div>






              {/* Image */}

              <img
                src={product.image}
                alt={product.name}
                className="mt-6 h-52 w-full rounded-3xl object-cover"
              />







              {/* Size */}

              <div className="mt-6">

                <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                  Select Size
                </p>


                <div className="mt-3 flex flex-wrap gap-3">

                  {
                    sizes.map((size)=>(
                      
                      <button
                        key={size}
                        onClick={()=>setSelectedSize(size)}
                        className={`rounded-full border px-5 py-2 text-sm transition ${
                          selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-neutral-200 hover:border-black"
                        }`}
                      >
                        {size}
                      </button>

                    ))
                  }


                </div>


              </div>







              {/* Color */}

              <div className="mt-6">


                <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                  Select Color
                </p>



                <div className="mt-3 flex flex-wrap gap-3">

                  {
                    colors.map((color)=>(

                      <button
                        key={color}
                        onClick={()=>setSelectedColor(color)}
                        className={`rounded-full border px-5 py-2 text-sm transition ${
                          selectedColor === color
                          ? "border-black bg-black text-white"
                          : "border-neutral-200 hover:border-black"
                        }`}
                      >
                        {color}
                      </button>

                    ))
                  }


                </div>


              </div>







              {/* Add Button */}


              <button
                disabled={!selectedSize || !selectedColor}
                onClick={handleAdd}
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-black py-4 text-xs font-medium uppercase tracking-[0.3em] text-white transition disabled:cursor-not-allowed disabled:bg-neutral-300 hover:bg-neutral-800"
              >

                <ShoppingBag size={17}/>

                Add To Bag

              </button>



            </motion.div>



          </motion.div>


        )
      }


    </AnimatePresence>

  );

};


export default QuickAddModal;