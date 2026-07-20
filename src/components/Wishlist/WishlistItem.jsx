import { useContext, useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

import { ProductContext } from "../../context/ProductContextProvider";
import QuickAddModal from "./QuickAddModal";


const WishlistItem = ({ product }) => {


  const {
    removeFromWishlist,
    addToCart,
  } = useContext(ProductContext);



  const [showQuickAdd,setShowQuickAdd] = useState(false);




return (


<>

<article

className="
group
w-full
"

>



{/* IMAGE */}


<div

className="
relative
overflow-hidden
rounded-2xl
bg-neutral-100

"

>


<Link to={`/product/${product._id}`}>



<div

className="
relative
aspect-4.5/5
overflow-hidden

"

>


<img

src={product.image}

alt={product.name}

loading="lazy"


className="
absolute
inset-0
h-full
w-full
object-cover

transition
duration-500

group-hover:scale-[1.03]

"

/>



</div>



</Link>





{/* REMOVE */}


<button


onClick={()=>removeFromWishlist(product._id)}


className="
absolute
right-3
top-3

flex
h-8
w-8

items-center
justify-center

rounded-full

bg-white/90

backdrop-blur

transition

hover:bg-black

hover:text-white

sm:h-9
sm:w-9

"


>


<Heart

size={16}

fill="currentColor"

/>


</button>



</div>








{/* CONTENT */}



<div

className="
pt-3
sm:pt-5

"


>



<p

className="
text-[10px]

uppercase

tracking-[0.3em]

text-neutral-400

"

>

THE AURA

</p>





<Link to={`/product/${product._id}`}>



<h2

className="

mt-1

line-clamp-2

min-h-10

text-sm

font-medium

tracking-tight

text-black

transition

hover:text-neutral-500

sm:min-h-12

sm:text-base

lg:text-lg


"

>


{product.name}


</h2>



</Link>







<div

className="


flex

items-center

justify-between

"


>



<span

className="
text-base
font-semibold

sm:text-lg

"

>

৳{product.price.toLocaleString()}

</span>




</div>








<button


onClick={()=>setShowQuickAdd(true)}


className="

mt-2

flex

h-10

w-full

items-center

justify-center

gap-4

rounded-full

bg-black

text-[10px]

font-medium

uppercase

tracking-[0.25em]

text-white


transition

duration-300

hover:bg-neutral-800


"

>



<ShoppingBag size={14}/>


<span className="hidden sm:inline">

Add To Bag

</span>


<span className="sm:hidden">

Add

</span>



</button>





</div>





</article>





{
showQuickAdd && (

<QuickAddModal

product={product}

onClose={()=>setShowQuickAdd(false)}

onAdd={addToCart}

/>


)

}



</>


);


};


export default WishlistItem;