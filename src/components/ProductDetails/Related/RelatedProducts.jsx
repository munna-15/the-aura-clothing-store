import { useContext, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { ProductContext } from "../../../context/ProductContextProvider";
import ProductCard from "../../Products/ProductCard";


const RelatedProducts = ({
  category,
  currentProductId,
}) => {


  const navigate = useNavigate();

  const { allProducts } = useContext(ProductContext);



  const products = useMemo(()=>{

    return allProducts
      .filter(
        item =>
          item.category === category &&
          item._id !== currentProductId
      )
      .slice(0,4);

  },[
    allProducts,
    category,
    currentProductId
  ]);




  if(!products.length) return null;




  return (


    <section className="mt-20 sm:mt-24">



      <motion.div

        initial={{
          opacity:0,
          y:15
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:.4
        }}

        className="mb-8 flex items-end justify-between gap-4"

      >



        <div>


          <p className="text-[10px] uppercase tracking-[0.45em] text-neutral-400">

            You May Like

          </p>



          <h2 className="mt-2 font-heading text-2xl sm:text-3xl">

            Related Pieces

          </h2>



        </div>





        <button

          onClick={()=>navigate("/collection")}

          className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-neutral-500 transition hover:text-black"

        >

          View All

          <ArrowRight
            size={14}
            className="transition group-hover:translate-x-1"
          />

        </button>




      </motion.div>







      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">


        {
          products.map((product)=>{


            return (

              <ProductCard

                key={product._id}

                product={product}

                compact

                showCategory={false}

                showBadge={false}

                showPrice={true}

              />

            );


          })
        }


      </div>



    </section>


  );

};


export default RelatedProducts;