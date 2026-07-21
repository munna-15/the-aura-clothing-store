import { Heart,ShoppingBag,User,Package,LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const MobileQuickActions = ({
  user,
  wishlistCount=0,
  cartCount=0,
  onClose,
  onOpenCart,
  onLogout,
})=>{


const itemClass="flex items-center justify-between border-b border-neutral-100 py-4 text-sm text-neutral-600 transition hover:text-black";


return (

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:.25}}
className="max-h-[45vh] shrink-0 overflow-y-auto border-t border-neutral-200 bg-white px-7 pt-5 pb-[calc(env(safe-area-inset-bottom)+20px)]"
>


<Link to="/wishlist" onClick={onClose} className={itemClass}>

<div className="flex items-center gap-3">
<Heart size={16} strokeWidth={1.5}/>
<span>Wishlist</span>
</div>

<span className="text-xs text-neutral-400">{wishlistCount}</span>

</Link>



<button onClick={()=>{onOpenCart();onClose();}} className={`${itemClass} w-full`}>

<div className="flex items-center gap-3">
<ShoppingBag size={16} strokeWidth={1.5}/>
<span>Shopping Bag</span>
</div>

<span className="text-xs text-neutral-400">{cartCount}</span>

</button>




{user && (

<div className="mt-4">


<Link to="/profile" onClick={onClose} className={itemClass}>

<div className="flex items-center gap-3">
<User size={16} strokeWidth={1.5}/>
<span>Profile</span>
</div>

</Link>



<Link to="/orders" onClick={onClose} className={itemClass}>

<div className="flex items-center gap-3">
<Package size={16} strokeWidth={1.5}/>
<span>Orders</span>
</div>

</Link>



<button onClick={()=>{onLogout();onClose();}} className="flex w-full items-center gap-3 py-4 text-sm text-neutral-500 hover:text-red-500">

<LogOut size={16} strokeWidth={1.5}/>

<span>Logout</span>

</button>


</div>

)}




{!user && (

<Link to="/login" onClick={onClose} className="mt-5 flex items-center justify-center rounded-full bg-black py-3 text-sm uppercase tracking-[.18em] text-white">

Login

</Link>

)}



</motion.div>

);

};


export default MobileQuickActions;