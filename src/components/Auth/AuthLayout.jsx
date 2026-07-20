import { motion } from "framer-motion";
import { assets } from "../../assets/assets";


const AuthLayout = ({
  title,
  subtitle,
  children,
}) => {


  return (

    <main className="min-h-screen bg-[#fafafa]">


      <section className="grid min-h-screen lg:grid-cols-2">



        {/* LEFT IMAGE */}


        <div className="relative hidden overflow-hidden lg:block">


          <motion.img

            src={assets.login_1}

            alt="Luxury Fashion"

            initial={{
              scale:1.08,
            }}

            animate={{
              scale:1,
            }}

            transition={{
              duration:1.8,
              ease:"easeOut",
            }}

            className="
              h-screen
              w-full
              object-cover
            "

          />



          {/* Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-linear-to-r
              from-black/60
              via-black/30
              to-transparent
            "
          />





          {/* Editorial Text */}


          <motion.div

            initial={{
              opacity:0,
              x:-30,
            }}

            animate={{
              opacity:1,
              x:0,
            }}

            transition={{
              duration:.8,
              delay:.2,
            }}


            className="
              absolute
              left-0
              -bottom-10
              -translate-y-1/2
              max-w-xl
              p-14
              text-white
            "

          >



            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.55em]
                text-white/70
              "
            >
              Premium Fashion House
            </p>





            <h2
              className="
                mt-6
                font-['Playfair_Display']
                text-5xl
                font-semibold
                leading-[1.05]
                xl:text-6xl
              "
            >

              Dress
              <br/>
              Your Story.

            </h2>





            <p
              className="
                mt-6
                max-w-md
                text-sm
                leading-7
                text-white/75
              "
            >

              Timeless collections crafted with
              elegance, confidence and modern luxury.

            </p>



          </motion.div>



        </div>







        {/* RIGHT AUTH */}



        <div
          className="
            flex
            min-h-screen
            items-start
            justify-center
            overflow-y-auto
            px-5
            py-10
            sm:px-8
            lg:items-center
          "
        >



          <motion.div

            initial={{
              opacity:0,
              y:25,
            }}

            animate={{
              opacity:1,
              y:0,
            }}

            transition={{
              duration:.6,
            }}

            className="
              w-full
              max-w-md
            "

          >





            {/* Brand */}



            <div
              className="
                mb-10
                text-center
              "
            >


              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.55em]
                  text-neutral-400
                "
              >
                Luxury Clothing
              </p>




              <h1
                className="
                  mt-3
                  font-['Playfair_Display']
                  text-4xl
                  font-semibold
                  tracking-[0.25em]
                  text-neutral-900
                  sm:text-5xl
                "
              >

                THE AURA

              </h1>



              <div
                className="
                  mx-auto
                  mt-5
                  h-px
                  w-14
                  bg-neutral-300
                "
              />


            </div>








            {/* Heading */}



            <div className="mb-7">


              <h2
                className="
                  font-['Playfair_Display']
                  text-3xl
                  font-semibold
                  text-neutral-900
                  sm:text-4xl
                "
              >

                {title}

              </h2>




              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-neutral-500
                "
              >

                {subtitle}

              </p>



            </div>







            {/* Form Card */}



            <motion.div

              initial={{
                opacity:0,
                scale:.97,
              }}

              animate={{
                opacity:1,
                scale:1,
              }}

              transition={{
                duration:.5,
                delay:.2,
              }}


              className="
                rounded-[28px]
                border
                border-neutral-200
                bg-white/90
                p-5
                shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                backdrop-blur-xl
                sm:p-7
              "

            >

              {children}


            </motion.div>




          </motion.div>



        </div>



      </section>


    </main>

  );

};


export default AuthLayout;