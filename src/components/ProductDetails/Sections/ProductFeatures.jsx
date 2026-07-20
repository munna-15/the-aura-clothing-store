import {
  Truck,
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";


const features = [

  {
    icon: Sparkles,
    title:"Premium Quality",
    description:"Luxury fabric selected for comfort and durability.",
  },

  {
    icon: Truck,
    title:"Fast Delivery",
    description:"Quick and reliable delivery experience.",
  },

  {
    icon: RotateCcw,
    title:"Easy Returns",
    description:"Hassle free 7-day return policy.",
  },

  {
    icon: ShieldCheck,
    title:"Secure Payment",
    description:"Safe and protected checkout.",
  },

];



const ProductFeatures = () => {


  return (

    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">


      {features.map((feature,index)=>{


        const Icon = feature.icon;



        return (

          <motion.div

            key={feature.title}

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
              duration:.35,
              delay:index*.08
            }}

            className="flex items-start gap-4 rounded-2xl bg-white px-5 py-5"

          >



            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-black">


              <Icon size={18}/>


            </div>





            <div>


              <h4 className="text-sm font-medium tracking-wide text-black">

                {feature.title}

              </h4>



              <p className="mt-1 text-xs leading-5 text-neutral-500">

                {feature.description}

              </p>


            </div>



          </motion.div>

        );


      })}


    </section>

  );

};


export default ProductFeatures;