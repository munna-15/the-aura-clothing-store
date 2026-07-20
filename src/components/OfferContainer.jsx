import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { assets } from "../assets/assets";


const OfferContainer = () => {


  const navigate = useNavigate();



  return (

    <section className="bg-white py-14 sm:py-18 lg:py-24">


      <div className="mx-auto w-[94%] max-w-[1580px]">


        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded-3xl sm:rounded-[40px]"
        >



          <motion.img
            src={assets.image_5}
            alt="The Aura Signature Collection"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 1 }}
            className="h-90 w-full object-cover sm:h-120 lg:h-130"
          />



          <div className="absolute inset-0 bg-black/45" />





          <div className="absolute inset-0 flex items-center px-5 sm:px-10 lg:px-16">


            <div className="max-w-xl text-white">


              <p className="text-[10px] uppercase tracking-[0.45em] text-white/70 sm:text-[11px]">
                Exclusive Collection
              </p>



              <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-semibold leading-tight sm:mt-6 sm:text-5xl lg:text-6xl">
                Signature Pieces
                <br />
                For Every Moment
              </h2>




              <p className="mt-4 max-w-md text-xs leading-6 text-white/75 sm:mt-6 sm:text-base sm:leading-relaxed">
                Discover timeless designs crafted with premium fabrics and modern elegance.
              </p>





              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/collection")}
                className="group mt-7 flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.25em] text-black sm:mt-10 sm:px-9 sm:py-4 sm:text-[12px]"
              >

                Explore Collection


                <ArrowRight
                  size={15}
                  className="transition duration-300 group-hover:translate-x-1"
                />


              </motion.button>



            </div>


          </div>






          <div className="absolute bottom-8 right-8 hidden rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-md md:block">


            <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">
              The Aura
            </p>


            <p className="mt-2 text-sm font-medium text-white">
              Premium Fashion Edition
            </p>


          </div>




        </motion.div>


      </div>


    </section>

  );

};


export default OfferContainer;