import { Menu, ShoppingBag, X } from "lucide-react";
import { motion } from "framer-motion";

const MobileTopbar = ({
  cartCount,
  isOpen,
  onToggleMenu,
  onOpenCart,
}) => {

  return (
    <motion.header
      initial={{ y:-30, opacity:0 }}
      animate={{ y:0, opacity:1 }}
      transition={{ duration:.45, ease:"easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl lg:hidden"
    >

      <div className="flex h-17 items-center justify-between px-6">


        {/* Menu */}

        <button
          onClick={onToggleMenu}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center text-black transition active:scale-90"
        >

          <motion.div
            animate={{
              rotate:isOpen ? 90 : 0
            }}
            transition={{
              duration:.25
            }}
          >

            {isOpen ? (
              <X size={23} strokeWidth={1.8}/>
            ) : (
              <Menu size={23} strokeWidth={1.8}/>
            )}

          </motion.div>

        </button>



        {/* Brand */}

        <div className="text-center">

          <h1 className="font-['Playfair_Display'] text-lg font-semibold tracking-[0.35em] text-black">
            THE AURA
          </h1>

          <p className="mt-1 text-[8px] uppercase tracking-[0.55em] text-neutral-400">
            Modern Luxury
          </p>

        </div>



        {/* Cart */}

        <button
          onClick={onOpenCart}
          aria-label="Shopping bag"
          className="relative flex h-10 w-10 items-center justify-center text-black transition active:scale-90"
        >

          <ShoppingBag
            size={21}
            strokeWidth={1.8}
          />


          {cartCount > 0 && (

            <span className="absolute -right-1 -top-1 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-black px-1 text-[8px] font-medium text-white">

              {cartCount > 99 ? "99+" : cartCount}

            </span>

          )}


        </button>


      </div>

    </motion.header>
  );
};

export default MobileTopbar;