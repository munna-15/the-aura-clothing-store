import { useContext } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Wallet,
  Landmark,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { ProductContext } from "../../context/ProductContextProvider";



const CartSummary = ({
  buttonText = "Proceed to Checkout",
  onButtonClick,
}) => {


  const { getTotalCartAmount } = useContext(ProductContext);



  const subtotal = getTotalCartAmount();



  const shipping =
    subtotal > 3000
      ? 0
      : subtotal > 0
      ? 100
      : 0;



  const vat =
    subtotal > 0
      ? Math.round(subtotal * 0.05)
      : 0;



  const total =
    subtotal + shipping + vat;



  const progress =
    Math.min((subtotal / 3000) * 100,100);



  const paymentMethods = [
    CreditCard,
    Wallet,
    Landmark,
  ];





return (


<motion.aside

initial={{
 opacity:0,
 y:15
}}

animate={{
 opacity:1,
 y:0
}}

transition={{
 duration:.3
}}


className="
rounded-3xl

border
border-neutral-200/70

bg-white

p-4


shadow-[0_15px_40px_rgba(0,0,0,.05)]


sm:p-5

"


>




{/* HEADER */}


<div

className="
mb-4

sm:mb-5
"

>


<p

className="
text-[9px]

uppercase

tracking-[0.4em]

text-neutral-400
"

>

Checkout

</p>



<h2

className="
mt-1.5

font-['Playfair_Display']

text-xl

font-medium


sm:text-2xl
"

>

Order Summary

</h2>


</div>









{/* FREE DELIVERY */}



{
subtotal > 0 && subtotal < 3000 && (

<div

className="
mb-4

rounded-2xl

bg-neutral-50

p-3

"


>


<div

className="
mb-2

flex

items-center

justify-between
"

>


<div

className="
flex

items-center

gap-2
"

>

<Truck size={13}/>


<span
className="
text-[11px]

text-neutral-600
"
>

Free Delivery

</span>


</div>




<span

className="
text-[10px]

text-neutral-400
"
>

৳3000

</span>


</div>




<div

className="
h-1.5

overflow-hidden

rounded-full

bg-neutral-200
"

>


<motion.div

initial={{
width:0
}}

animate={{
width:`${progress}%`
}}

transition={{
duration:.6
}}

className="
h-full

rounded-full

bg-black
"

/>



</div>


</div>


)

}









{/* PRICE */}



<div

className="
space-y-2.5

sm:space-y-3
"

>


<SummaryRow
title="Subtotal"
value={`৳${subtotal}`}
/>



<SummaryRow
title="Shipping"
value={
shipping===0
? "FREE"
: `৳${shipping}`
}
/>



<SummaryRow
title="VAT (5%)"
value={`৳${vat}`}
/>



</div>









{/* TOTAL */}



<div

className="
my-4

flex

items-center

justify-between

border-t

border-neutral-200

pt-4


sm:my-5
"

>


<span

className="
text-sm

font-medium
"

>

Total

</span>



<span

className="
text-xl

font-semibold
"

>

৳{total}

</span>


</div>









{/* BUTTON */}



<motion.button

whileTap={{
scale:.98
}}

onClick={onButtonClick}


className="
h-11

w-full

rounded-full

bg-black

text-[10px]

font-medium

uppercase

tracking-[0.3em]

text-white

transition

hover:bg-neutral-800


sm:h-12
"

>

{buttonText}


</motion.button>









{/* PAYMENT */}



<div

className="
mt-4

sm:mt-5
"

>


<p

className="
mb-2

text-[9px]

uppercase

tracking-[0.3em]

text-neutral-400
"

>

Payment

</p>




<div

className="
grid

grid-cols-4

gap-2
"

>


{
paymentMethods.map((Icon,index)=>(


<div

key={index}

className="
flex

h-8

items-center

justify-center

rounded-lg

border

border-neutral-200

bg-neutral-50


sm:h-9
"

>

<Icon size={14}/>


</div>


))
}



<div

className="
flex

h-8

items-center

justify-center

rounded-lg

border

border-neutral-200

bg-neutral-50


sm:h-9
"

>


<img

src="https://upload.wikimedia.org/wikipedia/commons/f/f6/BKash_Logo.svg"

alt="bKash"

className="h-3.5"

/>


</div>


</div>



</div>









{/* SECURITY */}



<div

className="
mt-3

flex

items-center

gap-2

rounded-xl

bg-neutral-50

p-3
"

>


<ShieldCheck size={14}/>


<p

className="
text-[11px]

text-neutral-600


sm:text-xs
"

>

Secure Checkout

</p>


</div>





</motion.aside>


);

};








const SummaryRow = ({
title,
value,
}) => (

<div

className="
flex

items-center

justify-between

text-sm
"

>


<span

className="
text-neutral-500
"

>

{title}

</span>



<span

className="
font-medium
"

>

{value}

</span>



</div>


);



export default CartSummary;