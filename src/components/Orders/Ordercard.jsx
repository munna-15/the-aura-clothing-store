// import {
//   CalendarDays,
//   ArrowRight,
//   Package,
//   RotateCcw,
// } from "lucide-react";
// import { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import { ProductContext } from "../../context/ProductContextProvider";

// const OrderCard = ({ order }) => {
//   const navigate = useNavigate();

//   const { buyAgain } = useContext(ProductContext);

//   const products = order.products || [];

//   const totalQuantity = products.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   const handleBuyAgain = () => {
//     const success = buyAgain(order);

//     if (success) {
//       navigate("/cart");
//     }
//   };

//   const statusStyles = {
//     Delivered:
//       "border-green-200 bg-green-50 text-green-700",

//     Processing:
//       "border-yellow-200 bg-yellow-50 text-yellow-700",

//     Shipped:
//       "border-blue-200 bg-blue-50 text-blue-700",

//     Cancelled:
//       "border-red-200 bg-red-50 text-red-700",
//   };

//   const paymentLabel = {
//     cod: "Cash on Delivery",
//     bkash: "bKash",
//     card: "Card",
//     bank: "Bank Transfer",
//   };

//   return (
//     <article
//       className="
//       rounded-3xl
//       border
//       border-neutral-200
//       bg-white
//       p-4
//       shadow-sm
//       transition-all
//       duration-300
//       hover:-translate-y-1
//       hover:shadow-lg
//       sm:p-6
//       "
//     >
//       <div className="flex flex-col gap-6">
//         {/* Header */}

//         <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
//           {/* Images */}

//           <div className="flex gap-3">
//             {products.slice(0, 2).map((product, index) => (
//               <div
//                 key={`${product._id}-${index}`}
//                 className="
//                 group
//                 h-20
//                 w-20
//                 overflow-hidden
//                 rounded-2xl
//                 border
//                 border-neutral-100
//                 bg-neutral-100
//                 sm:h-24
//                 sm:w-24
//                 "
//               >
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="
//                   h-full
//                   w-full
//                   object-cover
//                   transition
//                   duration-300
//                   group-hover:scale-105
//                   "
//                 />
//               </div>
//             ))}

//             {products.length > 2 && (
//               <div
//                 className="
//                 flex
//                 h-20
//                 w-20
//                 items-center
//                 justify-center
//                 rounded-2xl
//                 border
//                 border-neutral-100
//                 bg-neutral-100
//                 text-sm
//                 font-medium
//                 text-neutral-500
//                 sm:h-24
//                 sm:w-24
//                 "
//               >
//                 +{products.length - 2}
//               </div>
//             )}
//           </div>

//           {/* Status */}

//           <span
//             className={`
//             inline-flex
//             w-fit
//             rounded-full
//             border
//             px-4
//             py-1.5
//             text-[10px]
//             font-medium
//             uppercase
//             tracking-[0.25em]
//             ${
//               statusStyles[order.status] ||
//               "border-neutral-200 bg-neutral-100 text-neutral-600"
//             }
//             `}
//           >
//             {order.status}
//           </span>
//         </div>

//         {/* Title */}

//         <div>
//           <h2 className="font-['Playfair_Display'] text-2xl font-light tracking-wide">
//             {products[0]?.name}

//             {products.length > 1 &&
//               ` + ${products.length - 1} more`}
//           </h2>

//           <div className="mt-3 flex items-center gap-2 text-sm text-neutral-500">
//             <Package size={15} />

//             <span>Order ID: {order.id}</span>
//           </div>
//         </div>

//         {/* Info */}

//         <div
//           className="
//           grid
//           grid-cols-2
//           gap-5
//           border-y
//           border-neutral-200
//           py-5
//           sm:grid-cols-4
//           "
//         >
//           <Info
//             label="Items"
//             value={totalQuantity}
//           />

//           <Info
//             label="Payment"
//             value={
//               paymentLabel[order.paymentMethod] ||
//               "Unknown"
//             }
//           />

//           <Info
//             label="Total"
//             value={`৳${order.total?.toLocaleString()}`}
//           />

//           <Info
//             label="Date"
//             value={order.date}
//           />
//         </div>

//         {/* Footer */}

//         <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//           <div className="flex items-center gap-2 text-sm text-neutral-500">
//             <CalendarDays size={15} />

//             <span>Ordered on {order.date}</span>
//           </div>

//           <div className="flex flex-wrap gap-3">
//             <button
//               onClick={handleBuyAgain}
//               className="
//               flex
//               h-11
//               items-center
//               gap-2
//               rounded-full
//               border
//               border-neutral-200
//               px-5
//               text-[10px]
//               font-medium
//               uppercase
//               tracking-[0.25em]
//               transition
//               hover:border-black
//               hover:bg-neutral-50
//               "
//             >
//               <RotateCcw size={15} />

//               Buy Again
//             </button>

//             <Link
//               to={`/orders/${order.id}`}
//               className="
//               flex
//               h-11
//               items-center
//               gap-2
//               rounded-full
//               bg-black
//               px-5
//               text-[10px]
//               font-medium
//               uppercase
//               tracking-[0.25em]
//               text-white
//               transition
//               hover:bg-neutral-800
//               "
//             >
//               Details

//               <ArrowRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// const Info = ({
//   label,
//   value,
// }) => (
//   <div>
//     <p
//       className="
//       text-[10px]
//       uppercase
//       tracking-[0.25em]
//       text-neutral-400
//       "
//     >
//       {label}
//     </p>

//     <p
//       className="
//       mt-2
//       truncate
//       text-sm
//       font-medium
//       text-neutral-800
//       "
//     >
//       {value}
//     </p>
//   </div>
// );

// export default OrderCard;


import {
  CalendarDays,
  ArrowRight,
  Package,
  RotateCcw,
} from "lucide-react";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ProductContext } from "../../context/ProductContextProvider";



const OrderCard = ({ order }) => {


  const navigate = useNavigate();


  const { buyAgain } = useContext(ProductContext);



  const products = order.products || [];



  const totalQuantity = products.reduce(
    (total,item)=> total + item.quantity,
    0
  );




  const handleBuyAgain = () => {

    const success = buyAgain(order);

    if(success){
      navigate("/cart");
    }

  };





  const statusStyles = {

    Delivered:
      "border-green-200 bg-green-50 text-green-700",

    Processing:
      "border-yellow-200 bg-yellow-50 text-yellow-700",

    Shipped:
      "border-blue-200 bg-blue-50 text-blue-700",

    Cancelled:
      "border-red-200 bg-red-50 text-red-700",

  };





  const paymentLabel = {

    cod:"Cash on Delivery",

    bkash:"bKash",

    card:"Card",

    bank:"Bank Transfer",

  };





return (


<article

className="
rounded-3xl

border
border-neutral-200

bg-white

p-3


shadow-[0_15px_40px_rgba(0,0,0,.05)]

transition

duration-300


hover:-translate-y-1

hover:shadow-lg


sm:p-6
"

>


<div

className="
space-y-4
"

>





{/* HEADER */}



<div

className="
flex

items-center

justify-between

gap-3


"

>


<div

className="
flex

gap-2.5

"

>


{
products.slice(0,2).map((product,index)=>(


<div

key={`${product._id}-${index}`}

className="
h-14

w-14

overflow-hidden

rounded-xl

border

border-neutral-100

bg-neutral-100


sm:h-24

sm:w-24

"

>

<img

src={product.image}

alt={product.name}

className="
h-full

w-full

object-cover

transition

duration-300

hover:scale-105
"

/>


</div>


))
}



{
products.length > 2 && (

<div

className="
flex

h-14

w-14

items-center

justify-center

rounded-xl

bg-neutral-100

text-xs

font-medium

text-neutral-500


sm:h-24

sm:w-24

"

>

+{products.length-2}


</div>

)

}



</div>







<span

className={`
inline-flex

rounded-full

border

px-3

py-1

text-[9px]

font-medium

uppercase

tracking-[0.22em]


${
statusStyles[order.status] ||
"border-neutral-200 bg-neutral-100 text-neutral-600"
}

`}

>

{order.status}

</span>



</div>






{/* TITLE */}



<div>


<h2

className="
font-['Playfair_Display']

text-xl

font-light

tracking-wide


sm:text-2xl

"

>

{products[0]?.name}


{
products.length > 1 &&
` + ${products.length-1} more`
}


</h2>




<div

className="
mt-2

flex

items-center

gap-2

text-xs

text-neutral-500

sm:text-sm

"

>

<Package size={14}/>


<span>
Order ID: {order.id}
</span>


</div>



</div>




{/* INFO SECTION */}



<div

className="
grid

grid-cols-2

gap-3

border-y

border-neutral-200

py-3


sm:grid-cols-4

sm:gap-5

sm:py-5

"

>


<Info

label="Items"

value={totalQuantity}

/>



<Info

label="Payment"

value={
paymentLabel[order.paymentMethod] || "Unknown"
}

/>



<Info

label="Total"

value={`৳${order.total?.toLocaleString()}`}

/>



<Info

label="Date"

value={order.date}

/>



</div>








{/* FOOTER */}



<div

className="
flex

flex-col

gap-3


sm:flex-row

sm:items-center

sm:justify-between

"

>





<div

className="
flex

items-center

gap-2

text-xs

text-neutral-500


sm:text-sm

"

>


<CalendarDays size={14}/>


<span>
Ordered on {order.date}
</span>


</div>








<div

className="
flex

gap-2

"

>


<button

onClick={handleBuyAgain}

className="
flex

h-10

flex-1

items-center

justify-center

gap-2

rounded-full

border

border-neutral-200

px-4

text-[9px]

font-medium

uppercase

tracking-[0.25em]

transition

hover:border-black

hover:bg-neutral-50


sm:h-11

sm:flex-none

sm:px-5

sm:text-[10px]

"

>


<RotateCcw size={14}/>


Buy Again


</button>







<Link

to={`/orders/${order.id}`}

className="
flex

h-10

flex-1

items-center

justify-center

gap-2

rounded-full

bg-black

px-4

text-[9px]

font-medium

uppercase

tracking-[0.25em]

text-white

transition

hover:bg-neutral-800


sm:h-11

sm:flex-none

sm:px-5

sm:text-[10px]

"

>


Details


<ArrowRight size={14}/>


</Link>



</div>




</div>





</div>


</article>


);

};









const Info = ({
label,
value,
}) => (


<div>


<p

className="
text-[9px]

uppercase

tracking-[0.25em]

text-neutral-400


sm:text-[10px]

"

>

{label}


</p>



<p

className="
mt-1

truncate

text-xs

font-medium

text-neutral-800


sm:mt-2

sm:text-sm

"

>

{value}


</p>


</div>


);





export default OrderCard;