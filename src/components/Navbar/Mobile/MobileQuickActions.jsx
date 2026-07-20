import {
  Heart,
  ShoppingBag,
  User,
  Package,
  LogOut,
  ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const MobileQuickActions = ({
  user,
  wishlistCount = 0,
  cartCount = 0,
  onClose,
  onOpenCart,
  onLogout,
}) => {


  const itemClass = "group flex items-center justify-between border-b border-neutral-100 py-3.5 text-sm text-neutral-700 transition hover:text-black";


  return (

    <motion.div

      initial={{ opacity:0, y:15 }}

      animate={{ opacity:1, y:0 }}

      transition={{ delay:.3 }}

      className="border-t border-neutral-200 px-6 py-6"

    >


      {/* Shopping */}

      <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-neutral-400">
        Shopping
      </p>



      <div>


        <Link

          to="/wishlist"

          onClick={onClose}

          className={itemClass}

        >

          <div className="flex items-center gap-3">

            <Heart size={17}/>

            <span>
              Wishlist
            </span>

          </div>


          <div className="flex items-center gap-2">

            <span className="text-xs text-neutral-400">
              {wishlistCount}
            </span>

            <ChevronRight size={15}/>

          </div>


        </Link>





        <button

          onClick={()=>{
            onOpenCart();
            onClose();
          }}

          className={`${itemClass} w-full`}

        >

          <div className="flex items-center gap-3">

            <ShoppingBag size={17}/>

            <span>
              Shopping Bag
            </span>

          </div>


          <div className="flex items-center gap-2">

            <span className="text-xs text-neutral-400">
              {cartCount}
            </span>

            <ChevronRight size={15}/>

          </div>


        </button>


      </div>





      {/* Account */}

      {user && (

        <div className="mt-7">


          <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-neutral-400">
            Account
          </p>



          <Link

            to="/profile"

            onClick={onClose}

            className={itemClass}

          >

            <div className="flex items-center gap-3">

              <User size={17}/>

              <span>
                Profile
              </span>

            </div>


            <ChevronRight size={15}/>


          </Link>





          <Link

            to="/orders"

            onClick={onClose}

            className={itemClass}

          >

            <div className="flex items-center gap-3">

              <Package size={17}/>

              <span>
                Orders
              </span>

            </div>


            <ChevronRight size={15}/>


          </Link>





          <button

            onClick={()=>{
              onLogout();
              onClose();
            }}

            className="group flex w-full items-center justify-between py-3.5 text-sm text-red-500 transition hover:text-red-600"

          >

            <div className="flex items-center gap-3">

              <LogOut size={17}/>

              <span>
                Logout
              </span>

            </div>


            <ChevronRight size={15}/>


          </button>


        </div>

      )}





      {!user && (

        <Link

          to="/login"

          onClick={onClose}

          className="mt-6 flex items-center justify-center rounded-full bg-black py-3 text-sm font-medium text-white"

        >

          Login

        </Link>

      )}



    </motion.div>

  );

};


export default MobileQuickActions;