import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";

import { ProductContext } from "../../context/ProductContextProvider";


const CartItem = ({
  item,
  cartItem,
  cartKey,
}) => {


  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    deleteCartItem,
    addToWishlist,
    removeFromWishlist,
    wishlistItems,
  } = useContext(ProductContext);



  const isFavorite =
    wishlistItems.includes(item._id);



  const availableStock =
    typeof item.stock === "object"
      ? item.stock[cartItem.size] || 0
      : item.stock;



  const subtotal =
    item.price * cartItem.quantity;



  const maxStock =
    cartItem.quantity >= availableStock;



  return (

    <motion.article

      initial={{
        opacity:0,
        y:15
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:.35
      }}


      className="
        rounded-3xl
        border
        border-neutral-200
        bg-white
        p-3
        shadow-sm

        sm:p-5
      "

    >


      <div className="
        flex
        gap-4
      ">


        {/* PRODUCT IMAGE */}


        <Link

          to={`/product/${item._id}`}

          className="
            relative
            aspect-3/4
            w-24
            shrink-0
            overflow-hidden
            rounded-2xl
            bg-neutral-100

            sm:w-32
            lg:w-36
          "

        >


          <img

            src={item.image}

            alt={item.name}

            loading="lazy"

            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition
              duration-500
              group-hover:scale-105
            "

          />


        </Link>







        {/* DETAILS */}



        <div className="
          flex
          min-w-0
          flex-1
          flex-col
        ">



          <div>


            <Link
              to={`/product/${item._id}`}
            >

              <h2 className="
                truncate
                text-sm
                font-medium

                sm:text-lg
              ">

                {item.name}

              </h2>


            </Link>




            <p className="
              mt-1
              text-lg
              font-light

              sm:text-xl
            ">

              ৳{item.price}

            </p>





            <div className="
              mt-3
              flex
              flex-wrap
              gap-2
            ">


              <span className="
                rounded-full
                border
                border-neutral-200
                px-3
                py-1
                text-[9px]
                uppercase
                tracking-widest
              ">

                {cartItem.size}

              </span>



              <span className="
                rounded-full
                border
                border-neutral-200
                px-3
                py-1
                text-[9px]
                uppercase
                tracking-widest
              ">

                {cartItem.color}

              </span>


            </div>


          </div>







          {/* QUANTITY + PRICE */}



          <div className="
            mt-auto
            flex
            items-center
            justify-between
            pt-4
          ">



            <div className="
              flex
              items-center
              rounded-full
              border
              border-neutral-200
              bg-neutral-50
            ">


              <button

                onClick={() =>
                  decreaseCartQuantity(cartKey)
                }

                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center

                  sm:h-9
                  sm:w-9
                "

              >

                <Minus size={14}/>


              </button>





              <span className="
                w-8
                text-center
                text-sm
                font-medium
              ">

                {cartItem.quantity}

              </span>





              <button

                disabled={maxStock}

                onClick={() =>
                  increaseCartQuantity(cartKey)
                }


                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center

                  disabled:text-neutral-300

                  sm:h-9
                  sm:w-9
                "

              >

                <Plus size={14}/>


              </button>


            </div>





            <p className="
              text-sm
              font-medium

              sm:text-lg
            ">

              ৳{subtotal}

            </p>


          </div>








          {/* ACTIONS */}


          <div className="
            mt-4
            flex
            items-center
            justify-between
          ">


            <button

              onClick={() =>
                isFavorite
                ?
                removeFromWishlist(item._id)
                :
                addToWishlist(item._id)
              }


              className="
                flex
                items-center
                gap-1
                text-xs
                text-neutral-500
              "

            >

              <Heart

                size={14}

                className={
                  isFavorite
                  ?
                  "fill-black text-black"
                  :
                  ""
                }

              />


              {
                isFavorite
                ?
                "Saved"
                :
                "Save"
              }


            </button>






            <button

              onClick={() =>
                deleteCartItem(cartKey)
              }

              className="
                flex
                items-center
                gap-1
                text-xs
                text-red-500
              "

            >

              <Trash2 size={14}/>

              Remove


            </button>



          </div>



        </div>



      </div>







      {/* STOCK */}


      <div className="
        mt-4
        border-t
        border-neutral-100
        pt-3
      ">


        <p className={`
          text-[10px]
          uppercase
          tracking-widest

          ${
            availableStock
            ?
            "text-green-600"
            :
            "text-red-500"
          }

        `}>

          {
            availableStock
            ?
            `${availableStock} pieces available`
            :
            "Out of stock"
          }

        </p>


      </div>



    </motion.article>

  );

};


export default CartItem;

//v2
// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Heart, Minus, Plus, Trash2 } from "lucide-react";

// import { ProductContext } from "../../context/ProductContextProvider";


// const CartItem = ({ item, cartItem, cartKey }) => {

//   const {
//     increaseCartQuantity,
//     decreaseCartQuantity,
//     deleteCartItem,
//     addToWishlist,
//     removeFromWishlist,
//     wishlistItems,
//   } = useContext(ProductContext);


//   const isFavorite = wishlistItems.includes(item._id);


//   const availableStock =
//     typeof item.stock === "object"
//       ? item.stock[cartItem.size] || 0
//       : item.stock;


//   const subtotal = item.price * cartItem.quantity;


//   const maxStock = cartItem.quantity >= availableStock;



//   return (

//     <motion.article
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//       className="rounded-3xl border border-neutral-200 bg-white p-3 shadow-sm transition hover:shadow-lg sm:p-5"
//     >


//       <div className="flex gap-3 sm:gap-5">


//         {/* IMAGE */}

//         <Link
//           to={`/product/${item._id}`}
//           className="group relative aspect-3/4 w-20 shrink-0 overflow-hidden rounded-2xl bg-neutral-100 sm:w-32"
//         >

//           <img
//             src={item.image}
//             alt={item.name}
//             loading="lazy"
//             className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
//           />

//         </Link>





//         {/* CONTENT */}


//         <div className="flex min-w-0 flex-1 flex-col">


//           <Link to={`/product/${item._id}`}>

//             <h2 className="truncate text-sm font-medium text-black sm:text-lg">
//               {item.name}
//             </h2>

//           </Link>



//           <p className="mt-1 text-base font-light sm:text-xl">
//             ৳{item.price}
//           </p>





//           {/* VARIANT */}

//           <div className="mt-3 flex flex-wrap gap-2">

//             <span className="rounded-full border border-neutral-200 px-2.5 py-1 text-[9px] uppercase tracking-widest">
//               {cartItem.size}
//             </span>


//             <span className="rounded-full border border-neutral-200 px-2.5 py-1 text-[9px] uppercase tracking-widest">
//               {cartItem.color}
//             </span>


//           </div>







//           {/* QUANTITY + PRICE */}


//           <div className="mt-auto flex items-center justify-between gap-3 pt-4">


//             <div className="flex items-center rounded-full border border-neutral-200 bg-neutral-50">


//               <button
//                 onClick={() => decreaseCartQuantity(cartKey)}
//                 className="flex h-8 w-8 items-center justify-center transition hover:bg-neutral-200 sm:h-9 sm:w-9"
//               >
//                 <Minus size={13}/>
//               </button>



//               <span className="w-7 text-center text-sm font-medium">
//                 {cartItem.quantity}
//               </span>




//               <button
//                 disabled={maxStock}
//                 onClick={() => increaseCartQuantity(cartKey)}
//                 className="flex h-8 w-8 items-center justify-center transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:text-neutral-300 sm:h-9 sm:w-9"
//               >
//                 <Plus size={13}/>
//               </button>


//             </div>





//             <p className="text-sm font-medium sm:text-lg">
//               ৳{subtotal}
//             </p>


//           </div>








//           {/* ACTIONS */}


//           <div className="mt-3 flex items-center justify-between">


//             <button
//               onClick={() =>
//                 isFavorite
//                   ? removeFromWishlist(item._id)
//                   : addToWishlist(item._id)
//               }
//               className="flex items-center gap-1.5 text-xs text-neutral-500 transition hover:text-black"
//             >

//               <Heart size={14} className={isFavorite ? "fill-black text-black" : ""}/>

//               {isFavorite ? "Saved" : "Save"}

//             </button>





//             <button
//               onClick={() => deleteCartItem(cartKey)}
//               className="flex items-center gap-1.5 text-xs text-red-500 transition hover:text-red-700"
//             >

//               <Trash2 size={14}/>

//               Remove

//             </button>



//           </div>



//         </div>



//       </div>








//       {/* STOCK */}

//       <div className="mt-3 flex justify-end">

//         <span className={`text-[10px] uppercase tracking-widest ${availableStock ? "text-green-600" : "text-red-500"}`}>
//           {availableStock ? `${availableStock} available` : "Out of stock"}
//         </span>


//       </div>



//     </motion.article>

//   );

// };


// export default CartItem;