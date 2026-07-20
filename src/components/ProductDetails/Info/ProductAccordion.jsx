import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";


const ProductAccordion = ({ product }) => {


  const [active, setActive] = useState(0);



  const items = [

    {
      title:"Product Description",
      content:
        product.description ||
        "Designed with premium materials to deliver comfort, quality and timeless style.",
    },

    {
      title:"Materials & Care",
      content:
        "Premium fabric construction. Machine wash cold with similar colors. Avoid bleach. Iron on low heat.",
    },

    {
      title:"Shipping & Returns",
      content:
        "Fast delivery with secure packaging. Easy 7-day returns and exchanges available.",
    },

  ];




  return (

    <section className="divide-y divide-neutral-200 rounded-3xl bg-white px-5 sm:px-7">


      {items.map((item,index)=>{

        const open = active === index;


        return (

          <motion.div

            key={item.title}

            initial={{
              opacity:0,
              y:10
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:.35,
              delay:index*.05
            }}

          >



            <button

              onClick={()=>setActive(open ? -1 : index)}

              className="flex w-full items-center justify-between py-5 text-left"

            >


              <span className={`text-sm tracking-wide transition ${
                open
                ?
                "text-black font-medium"
                :
                "text-neutral-500"
              }`}>

                {item.title}

              </span>





              <motion.span

                animate={{
                  rotate:open ? 180 : 0
                }}

                transition={{
                  duration:.25
                }}

                className="text-neutral-400"

              >

                <ChevronDown size={18}/>

              </motion.span>



            </button>





            <AnimatePresence initial={false}>


              {open && (

                <motion.div

                  initial={{
                    height:0,
                    opacity:0
                  }}

                  animate={{
                    height:"auto",
                    opacity:1
                  }}

                  exit={{
                    height:0,
                    opacity:0
                  }}

                  transition={{
                    duration:.3
                  }}

                >


                  <p className="pb-5 pr-5 text-sm leading-7 text-neutral-500">

                    {item.content}

                  </p>


                </motion.div>

              )}


            </AnimatePresence>



          </motion.div>

        );

      })}


    </section>

  );

};


export default ProductAccordion;