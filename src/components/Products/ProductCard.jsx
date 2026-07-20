import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ArrowUpRight } from "lucide-react";

import { ProductContext } from "../../context/ProductContextProvider";


const ProductCard = ({
  product,
  showWishlist = true,
  showCategory = true,
  showQuickView = true,
  showBadge = true,
  showPrice = true,
}) => {


  const navigate = useNavigate();


  const { wishlistItems, toggleWishlist } = useContext(ProductContext);


  const { _id, name, image, images, price, category, isNew } = product;


  const hoverImage = images?.[1] || image;


  const isWishlisted = wishlistItems.includes(_id);



  const handleViewProduct = () => {
    navigate(`/product/${_id}`);
  };



  return (

    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group mx-auto w-full max-w-47.5 sm:max-w-none"
    >


      <div className="overflow-hidden rounded-2xl bg-neutral-100">


        <div
          onClick={handleViewProduct}
          className="relative aspect-4/5 cursor-pointer overflow-hidden sm:aspect-3/4"
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


          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />



          {
            showBadge && isNew && (

              <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white sm:left-4 sm:top-4">
                New
              </span>

            )
          }




          {
            showWishlist && (

              <button
                onClick={(e)=>{
                  e.stopPropagation();
                  toggleWishlist(_id);
                }}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur transition hover:bg-black hover:text-white sm:right-4 sm:top-4"
              >

                <Heart
                  size={17}
                  fill={isWishlisted ? "currentColor" : "none"}
                  className={isWishlisted ? "text-red-500" : ""}
                />

              </button>

            )
          }





          {
            showQuickView && (

              <button
                onClick={(e)=>{
                  e.stopPropagation();
                  handleViewProduct();
                }}
                className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] text-white opacity-0 transition duration-500 group-hover:opacity-100"
              >

                View

                <ArrowUpRight size={14}/>

              </button>

            )
          }



        </div>


      </div>




      <div className="pt-4 sm:pt-5">


        {
          showCategory && (

            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              {category}
            </p>

          )
        }



        <h3
          onClick={handleViewProduct}
          className="mt-2 cursor-pointer text-sm font-medium tracking-tight text-black sm:text-base lg:text-lg"
        >
          {name}
        </h3>




        {
          showPrice && (

            <p className="mt-2 text-base font-semibold sm:text-lg">
              ৳ {price.toLocaleString()}
            </p>

          )
        }


      </div>


    </motion.article>

  );

};


export default ProductCard;