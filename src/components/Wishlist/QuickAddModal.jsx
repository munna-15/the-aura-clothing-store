import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Minus,
  Plus,
  ShoppingBag,
  X,
} from "lucide-react";

const QuickAddModal = ({
  product,
  onClose,
  onAdd,
}) => {

  const availableSizes =
    typeof product.stock === "object"
      ? Object.keys(product.stock)
      : [];

  const colors = product.colors || [];

  const [size, setSize] = useState(
    availableSizes[0] || ""
  );

  const [color, setColor] = useState(
    colors[0] || ""
  );

  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {

    if (!size) return;

    const success = onAdd(
      product._id,
      size,
      color,
      quantity
    );

    if (success) onClose();

  };

  return (

    <AnimatePresence>

      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        exit={{ opacity: 0 }}

        onClick={onClose}

        className="fixed inset-0 z-999 flex items-center justify-center bg-black/45 px-4 py-6 backdrop-blur-sm"

      >

        <motion.div

          initial={{
            opacity: 0,
            scale: .94,
            y: 20,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}

          exit={{
            opacity: 0,
            scale: .94,
            y: 20,
          }}

          transition={{
            duration: .28,
          }}

          onClick={(e) => e.stopPropagation()}

          className="w-full max-w-sm overflow-hidden rounded-[30px] bg-white shadow-2xl"

        >

          {/* Header */}

          <div className="relative border-b border-neutral-200 p-4 sm:p-5">

            <button

              onClick={onClose}

              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 transition hover:bg-black hover:text-white"

            >

              <X size={16} />

            </button>

            <div className="flex gap-4">

              <img

                src={product.image}

                alt={product.name}

                className="h-20 w-16 rounded-2xl object-cover sm:h-24 sm:w-20"

              />

              <div className="flex flex-col justify-center pr-10">

                <p className="text-[9px] uppercase tracking-[0.35em] text-neutral-400">
                  THE AURA
                </p>

                <h2 className="mt-1 line-clamp-2 text-base font-medium sm:text-lg">
                  {product.name}
                </h2>

                <p className="mt-2 text-lg font-semibold sm:text-xl">
                  ৳{product.price}
                </p>

              </div>

            </div>

          </div>

          {/* Body */}

          <div className="space-y-5 p-4 sm:p-5">

            {availableSizes.length > 0 && (

              <div>

                <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                  Size
                </p>

                <div className="flex flex-wrap gap-2">

                  {availableSizes.map((item) => (

                    <button

                      key={item}

                      onClick={() => setSize(item)}

                      className={`min-w-10 rounded-full border px-3 py-2 text-xs font-medium transition ${
                        size === item
                          ? "border-black bg-black text-white"
                          : "border-neutral-200 hover:border-black"
                      }`}

                    >

                      {item}

                    </button>

                  ))}

                </div>

              </div>

            )}

            {colors.length > 0 && (

              <div>

                <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                  Color
                </p>

                <div className="flex flex-wrap gap-2">

                  {colors.map((item) => (

                    <button

                      key={item}

                      onClick={() => setColor(item)}

                      className={`rounded-full border px-3 py-2 text-xs font-medium transition ${
                        color === item
                          ? "border-black bg-black text-white"
                          : "border-neutral-200 hover:border-black"
                      }`}

                    >

                      {item}

                    </button>

                  ))}

                </div>

              </div>

            )}

            <div className="flex items-center justify-between">

              <p className="text-sm font-medium">
                Quantity
              </p>

              <div className="flex items-center rounded-full border border-neutral-200">

                <button

                  onClick={() =>
                    setQuantity((prev) =>
                      Math.max(1, prev - 1)
                    )
                  }

                  className="flex h-10 w-10 items-center justify-center transition hover:bg-neutral-100"

                >

                  <Minus size={15} />

                </button>

                <span className="w-10 text-center text-sm font-semibold">
                  {quantity}
                </span>

                <button

                  onClick={() =>
                    setQuantity((prev) => prev + 1)
                  }

                  className="flex h-10 w-10 items-center justify-center transition hover:bg-neutral-100"

                >

                  <Plus size={15} />

                </button>

              </div>

            </div>

          </div>

          {/* Footer */}

          <div className="border-t border-neutral-200 p-4 sm:p-5">

            <button

              onClick={handleAdd}

              className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-black text-[11px] font-medium uppercase tracking-[0.25em] text-white transition hover:bg-neutral-800"

            >

              <ShoppingBag size={16} />

              Add To Bag

            </button>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>

  );

};

export default QuickAddModal;