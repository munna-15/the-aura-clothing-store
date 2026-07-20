import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";


const ArrivalCard = ({ product, index }) => {

  return (

    <motion.article

      initial={{
        opacity: 0,
        y: 30,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}

      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}

      whileHover={{
        y: -6,
      }}

      className="group w-full"
    >



      {/* Image Wrapper */}

      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">

        <Link to={`/product/${product._id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="aspect-3/4 w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>     

      </div>





      {/* Product Info */}

      <div className="mt-4 px-1">


        <Link to={`/product/${product._id}`}>

          <h3 className="
            truncate
            text-sm
            font-medium
            tracking-wide
            text-black
            transition
            hover:text-neutral-500
          ">

            {product.name}

          </h3>

        </Link>





        <div className="mt-2 flex items-center justify-between">


          <p className="
            text-sm
            font-light
            tracking-wide
            text-neutral-600
          ">

            ৳{product.price}

          </p>



          <span className="
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-green-600
          ">

            New

          </span>


        </div>


      </div>



    </motion.article>

  );

};


export default ArrivalCard;