import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import toast from "react-hot-toast";

import { ProductContext } from "../../context/ProductContextProvider";


const ProductCard = ({ product }) => {

  const {
    addToCart,
    wishlistItems,
    toggleWishlist,
  } = useContext(ProductContext);


  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");



  const {
    _id,
    name,
    image,
    images,
    price,
    category,
    rating,
    reviews,
    colors,
    sizes,
    stock,
    isNew,
  } = product;



  const hoverImage = images?.[1] || image;



  const isWishlisted = wishlistItems.includes(_id);



  const currentStock =
    typeof stock === "object"
      ? stock[selectedSize] || 0
      : stock || 0;



  const handleAddToCart = () => {


    if (!selectedColor || !selectedSize) {

      toast.error("Please select color and size");

      return;

    }


    if (currentStock <= 0) {

      toast.error("Product is out of stock");

      return;

    }


    addToCart(
      _id,
      selectedColor,
      selectedSize
    );


    toast.success("Added to cart");


  };





  return (

    <article className="group mx-auto w-full max-w-55 sm:max-w-none">


      {/* IMAGE */}


      <div className="relative overflow-hidden rounded-2xl bg-neutral-100">


        <Link
          to={`/product/${_id}`}
          className="relative block aspect-4/5 overflow-hidden sm:aspect-3/4"
        >


          <img
            src={image}
            alt={name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />


          <img
            src={hoverImage}
            alt={name}
            loading="lazy"
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100"
          />


          {
            isNew && (

              <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white">
                New
              </span>

            )
          }



        </Link>



        {/* WISHLIST */}


        <button
          onClick={() => toggleWishlist(_id)}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition hover:bg-black hover:text-white"
        >

          <Heart
            size={17}
            fill={isWishlisted ? "currentColor" : "none"}
            className={isWishlisted ? "text-red-500" : ""}
          />

        </button>


      </div>





      {/* INFO */}


      <div className="pt-4">


        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
          {category}
        </p>


        <Link
          to={`/product/${_id}`}
          className="mt-2 block text-sm font-medium tracking-tight text-black sm:text-base"
        >
          {name}
        </Link>




        <div className="mt-2 flex items-center gap-2">


          <Star
            size={14}
            fill="currentColor"
            className="text-yellow-500"
          />


          <span className="text-sm">
            {rating || 0}
          </span>


          <span className="text-xs text-neutral-400">
            ({reviews || 0})
          </span>


        </div>




        <div className="mt-3 flex items-center justify-between">


          <p className="text-lg font-semibold">
            ৳ {price.toLocaleString()}
          </p>



          <span
            className={`text-xs ${
              currentStock > 0
                ? "text-green-600"
                : "text-red-500"
            }`}
          >

            {
              currentStock > 0
                ? "In Stock"
                : "Out"
            }

          </span>


        </div>





        {/* OPTIONS */}


        {
          colors?.length > 0 && (

            <div className="mt-4 flex gap-2">

              {
                colors.map((color)=>(

                  <button
                    key={color}
                    onClick={()=>setSelectedColor(color)}
                    className={`h-5 w-5 rounded-full border ${
                      selectedColor === color
                        ? "ring-2 ring-black"
                        : ""
                    }`}
                    style={{
                      backgroundColor: color
                    }}
                  />

                ))
              }


            </div>

          )
        }




        {
          sizes?.length > 0 && (

            <div className="mt-3 flex gap-2">


              {
                sizes.map((size)=>(

                  <button
                    key={size}
                    onClick={()=>setSelectedSize(size)}
                    className={`rounded border px-2 py-1 text-xs ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : ""
                    }`}
                  >

                    {size}

                  </button>

                ))
              }


            </div>

          )
        }





        <button
          onClick={handleAddToCart}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-black py-3 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-neutral-800"
        >

          <ShoppingBag size={15}/>

          Add Cart

        </button>



      </div>


    </article>

  );

};


export default ProductCard;