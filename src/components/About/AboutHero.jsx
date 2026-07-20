



// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// import { assets } from "../../assets/assets";

// const fadeUp = (delay = 0) => ({
//   initial: {
//     opacity: 0,
//     y: 30,
//   },
//   whileInView: {
//     opacity: 1,
//     y: 0,
//   },
//   viewport: {
//     once: true,
//     amount: 0.25,
//   },
//   transition: {
//     duration: 0.7,
//     delay,
//     ease: "easeOut",
//   },
// });

// const stats = [
//   {
//     value: "2026",
//     label: "Founded",
//   },
//   {
//     value: "100%",
//     label: "Premium Fabric",
//   },
//   {
//     value: "10K+",
//     label: "Happy Customers",
//   },
// ];

// const AboutHero = () => {
//   return (
//     <section className="relative overflow-hidden bg-white">

//       {/* Background Glow */}

//       <div className="pointer-events-none absolute -left-44 top-20 hidden h-105 w-105 rounded-full bg-neutral-100 blur-3xl lg:block" />

//       <div className="pointer-events-none absolute -right-44 bottom-0 hidden h-105 w-105 rounded-full bg-neutral-100 blur-3xl xl:block" />

//       <div className="relative z-10 mx-auto w-[94%] max-w-[1580px] py-14 sm:py-18 lg:py-24">

//         <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">

//           {/* ================= LEFT CONTENT ================= */}

//           <div className="order-2 text-center lg:order-1 lg:text-left">

//             <motion.p
//               {...fadeUp()}
//               className="text-[10px] font-semibold uppercase tracking-[0.45em] text-neutral-400 sm:text-[11px]"
//             >
//               Our Story
//             </motion.p>

//             <motion.h1
//               {...fadeUp(.08)}
//               className="mt-5 font-['Playfair_Display'] text-4xl font-semibold leading-[1.02] tracking-tight text-black sm:text-5xl lg:text-[74px]"
//             >
//               Crafted For
//               <br />
//               Timeless Living
//             </motion.h1>

//             <motion.p
//               {...fadeUp(.16)}
//               className="mx-auto mt-7 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base lg:mx-0 lg:max-w-2xl"
//             >
//               The Aura exists to redefine modern luxury through timeless
//               silhouettes, exceptional craftsmanship and premium fabrics.
//               Every collection is thoughtfully designed to inspire confidence,
//               effortless elegance and everyday sophistication.
//             </motion.p>

//             {/* CTA */}

//             <motion.div
//               {...fadeUp(.24)}
//               className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
//             >
//               <Link
//                 to="/collection"
//                 className="group inline-flex items-center justify-center gap-3 rounded-full bg-black px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-900 hover:shadow-[0_18px_45px_rgba(0,0,0,.18)]"
//               >
//                 Shop Collection

//                 <ArrowRight
//                   size={16}
//                   className="transition duration-300 group-hover:translate-x-1"
//                 />
//               </Link>

//               <Link
//                 to="/contact"
//                 className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-black transition-all duration-300 hover:border-black hover:bg-neutral-50"
//               >
//                 Contact Us
//               </Link>
//             </motion.div>

//             {/* Stats */}

//             <motion.div
//               {...fadeUp(.32)}
//               className="mt-12 grid grid-cols-3 gap-3 border-t border-neutral-200 pt-8 sm:gap-5"
//             >
//               {stats.map((item) => (
//                 <div
//                   key={item.label}
//                   className="rounded-3xl border border-neutral-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5"
//                 >
//                   <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-black sm:text-3xl">
//                     {item.value}
//                   </h3>

//                   <p className="mt-2 text-[9px] uppercase tracking-[0.28em] text-neutral-400 sm:text-[10px]">
//                     {item.label}
//                   </p>
//                 </div>
//               ))}
//             </motion.div>

//           </div>

//           {/* ================= RIGHT IMAGE ================= */}
//           {/* Image */}

//           <motion.div
//             {...fadeUp(0.1)}
//             className="order-1 flex justify-center lg:order-2 lg:justify-end"
//           >
//             <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl">

//               {/* Decorative Circle */}

//               <div className="absolute -right-10 -top-10 hidden h-40 w-40 rounded-full border border-neutral-200 lg:block" />

//               {/* Main Image */}

//               <motion.img
//                 src={assets.image_7}
//                 alt="The Aura"
//                 whileHover={{
//                   scale: 1.03,
//                 }}
//                 transition={{
//                   duration: 1,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="
//         h-110
//         w-full
//         rounded-[28px]
//         object-cover
//         shadow-[0_30px_80px_rgba(0,0,0,.14)]
//         sm:h-140
//         sm:rounded-[34px]
//         lg:h-180
//       "
//               />

//               {/* Floating Card */}

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 30,
//                   scale: 0.96,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                   scale: 1,
//                 }}
//                 whileHover={{
//                   y: -5,
//                   scale: 1.015,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.3,
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 120,
//                   damping: 18,
//                 }}
//                 className="
//         group
//         absolute
//         bottom-4
//         left-4
//         w-60
//         overflow-hidden
//         rounded-3xl
//         border
//         border-white/40
//         bg-white/80
//         p-5
//         backdrop-blur-2xl
//         shadow-[0_18px_55px_rgba(0,0,0,.12)]
//         transition-shadow
//         duration-500
//         hover:shadow-[0_30px_80px_rgba(0,0,0,.18)]
//         sm:bottom-6
//         sm:left-6
//         sm:w-72
//         sm:p-6
//         lg:-left-10
//         lg:bottom-10
//         lg:w-[320px]
//       "
//               >

//                 {/* Glass Reflection */}

//                 <div className="absolute inset-0 bg-linear-to-br from-white/30 via-transparent to-transparent" />

//                 {/* Accent Line */}

//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: 56 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     delay: 0.7,
//                     duration: 0.7,
//                   }}
//                   className="relative h-0.5 bg-black"
//                 />

//                 <p className="relative mt-4 text-[10px] font-medium uppercase tracking-[0.35em] text-neutral-400">
//                   Since 2026
//                 </p>

//                 <h3 className="relative mt-3 font-['Playfair_Display'] text-2xl font-semibold leading-tight text-black">
//                   Crafted
//                   <br />
//                   With Purpose
//                 </h3>

//                 <motion.div
//                   initial={{ width: 50 }}
//                   whileHover={{ width: 80 }}
//                   transition={{
//                     duration: 0.4,
//                   }}
//                   className="mt-4 h-px bg-neutral-300"
//                 />

//                 <p className="relative mt-4 text-sm leading-6 text-neutral-600">
//                   Every piece reflects timeless elegance, premium craftsmanship and
//                   refined tailoring designed for modern luxury.
//                 </p>

//                 <div className="relative mt-6 flex items-center gap-4 rounded-2xl border border-neutral-200/60 bg-white/70 p-3 backdrop-blur-md">

//                   {/* Thumbnail */}

//                   <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl">

//                     <img
//                       src={assets.image_4}
//                       alt="Collection"
//                       className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
//                     />

//                   </div>

//                   {/* Content */}

//                   <div className="flex-1">

//                     <p className="text-[9px] uppercase tracking-[0.28em] text-neutral-400">
//                       Featured Look
//                     </p>

//                     <h4 className="mt-1 font-medium text-black">
//                       Autumn Collection
//                     </h4>

//                     <p className="mt-1 text-xs text-neutral-500">
//                       Minimal • Premium • Timeless
//                     </p>

//                   </div>

//                   {/* Small Dot */}

//                   <div className="h-2.5 w-2.5 rounded-full bg-black" />

//                 </div>

//               </motion.div>

//               {/* Editorial Badge */}

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   scale: 0.9,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   scale: 1,
//                 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   delay: 0.6,
//                 }}
//                 whileHover={{
//                   scale: 1.05,
//                 }}
//                 className="
//         absolute
//         right-4
//         top-4
//         rounded-full
//         border
//         border-white/20
//         bg-black/75
//         px-5
//         py-2
//         backdrop-blur-xl
//         sm:right-6
//         sm:top-6
//       "
//               >
//                 <p className="text-[9px] uppercase tracking-[0.32em] text-white">
//                   Editorial
//                 </p>
//               </motion.div>

//             </div>
//           </motion.div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default AboutHero;


import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { assets } from "../../assets/assets";


const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 30,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.25,
  },

  transition: {
    duration: 0.7,
    delay,
    ease: "easeOut",
  },
});


const stats = [
  {
    value: "2026",
    label: "Founded",
  },
  {
    value: "100%",
    label: "Premium Fabric",
  },
  {
    value: "10K+",
    label: "Happy Customers",
  },
];



const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">


      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-44
          top-20
          hidden
          h-105
          w-105
          rounded-full
          bg-neutral-100
          blur-3xl
          lg:block
        "
      />


      <div
        className="
          pointer-events-none
          absolute
          -right-44
          bottom-0
          hidden
          h-105
          w-105
          rounded-full
          bg-neutral-100
          blur-3xl
          xl:block
        "
      />



      <div
        className="
          relative
          z-10
          mx-auto
          w-[94%]
          max-w-[1580px]
          py-12
          sm:py-16
          lg:py-24
        "
      >


        {/* MAIN RESPONSIVE LAYOUT */}

        <div
          className="
            flex
            flex-col
            gap-10

            lg:flex-row
            lg:items-center
            lg:gap-20
          "
        >


          {/* ================= IMAGE SECTION ================= */}

          <motion.div
            {...fadeUp(0.1)}
            className="
              order-1

              flex
              justify-center

              lg:order-2
              lg:w-[55%]
              lg:justify-end
            "
          >


            <div
              className="
                relative
                w-full
                max-w-sm

                sm:max-w-md

                lg:max-w-xl
              "
            >


              {/* Decorative Circle */}

              <div
                className="
                  absolute
                  -right-10
                  -top-10
                  hidden
                  h-40
                  w-40
                  rounded-full
                  border
                  border-neutral-200
                  lg:block
                "
              />



              {/* Main Image */}

              <motion.img
                src={assets.image_7}
                alt="The Aura"

                whileHover={{
                  scale:1.03,
                }}

                transition={{
                  duration:1,
                  ease:[0.22,1,0.36,1],
                }}

                className="
                  h-105
                  w-full
                  rounded-[28px]
                  object-cover

                  shadow-[0_30px_80px_rgba(0,0,0,.14)]

                  sm:h-130

                  lg:h-180
                  lg:rounded-[34px]
                "
              />
                  
              {/* Floating Card */}

              <motion.div

                initial={{
                  opacity:0,
                  y:30,
                  scale:0.96,
                }}

                whileInView={{
                  opacity:1,
                  y:0,
                  scale:1,
                }}

                whileHover={{
                  y:-5,
                  scale:1.02,
                }}

                viewport={{
                  once:true,
                  amount:0.3,
                }}

                transition={{
                  type:"spring",
                  stiffness:120,
                  damping:18,
                }}

                className="
                   group
  absolute

  bottom-3
  left-3
  right-3

  w-auto

  overflow-hidden
  rounded-2xl

  border
  border-white/40

  bg-white/80

  p-3

  backdrop-blur-2xl

  shadow-[0_18px_55px_rgba(0,0,0,.12)]


  sm:left-5
  sm:right-auto
  sm:w-70
  sm:rounded-3xl
  sm:p-5


  lg:-left-10
  lg:bottom-10
  lg:w-[320px]
                "
              >


                {/* Glass Reflection */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-linear-to-br
                    from-white/30
                    via-transparent
                    to-transparent
                  "
                />



                {/* Accent Line */}

                <motion.div

                  initial={{
                    width:0,
                  }}

                  whileInView={{
                    width:56,
                  }}

                  viewport={{
                    once:true,
                  }}

                  transition={{
                    delay:.7,
                    duration:.7,
                  }}

                  className="
                    relative
                    h-0.5
                    bg-black
                  "
                />



                <p
                  className="
                    relative
                    mt-4

                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.35em]
                    text-neutral-400
                  "
                >
                  Since 2026
                </p>



                <h3
                  className="
                    relative
                    mt-3

                    font-['Playfair_Display']
                    text-lg
                    md:xl
                    lg:2xl
                    font-semibold
                    leading-tight
                    text-black
                  "
                >
                  Crafted
                  <br/>
                  With Purpose

                </h3>



                <div
                  className="
                    mt-2
                    h-px
                    bg-neutral-300
                  "
                />



                <p
                  className="
                    relative
                   mt-3

                    hidden

                   text-[12px]
                   lg:text-[14px]
                  leading-6
               text-neutral-600

                  sm:block
                  "
                >
                  Every piece reflects timeless elegance,
                  premium craftsmanship and refined tailoring
                  designed for modern luxury.

                </p>




                {/* Featured Look */}

                <div
                  className="
                    relative
                    hidden

                   

                    mt-3
                    lg:mt-6

                    lg:flex
                    items-center
                    gap-4

                    rounded-2xl

                    border
                    border-neutral-200/60

                    bg-white/70

                    p-3

                    backdrop-blur-md
                  "
                >



                  {/* Thumbnail */}

                  <div
                    className="
                      h-14
                      w-14

                      shrink-0

                      overflow-hidden

                      rounded-xl
                    "
                  >

                    <img
                      src={assets.image_4}
                      alt="Collection"

                      className="
                        h-full
                        w-full
                        object-cover

                        transition
                        duration-700

                        group-hover:scale-110
                      "
                    />

                  </div>




                  {/* Content */}

                  <div className="flex-1">


                    <p
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.28em]
                        text-neutral-400
                      "
                    >
                      Featured Look
                    </p>



                    <h4
                      className="
                        mt-1
                        font-medium
                        text-black
                      "
                    >
                      Autumn Collection
                    </h4>



                    <p
                      className="
                        mt-1
                        text-xs
                        text-neutral-500
                      "
                    >
                      Minimal • Premium • Timeless
                    </p>


                  </div>



                  {/* Dot */}

                  <div
                    className="
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-black
                    "
                  />

                </div>


              </motion.div>




              {/* Editorial Badge */}


              <motion.div

                initial={{
                  opacity:0,
                  scale:.9,
                }}

                whileInView={{
                  opacity:1,
                  scale:1,
                }}

                viewport={{
                  once:true,
                }}

                transition={{
                  delay:.6,
                }}

                whileHover={{
                  scale:1.05,
                }}

                className="
                  absolute

                  right-5
                  top-5

                  rounded-full

                  bg-black/75

                  px-5
                  py-2

                  backdrop-blur-xl
                "
              >

                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.32em]
                    text-white
                  "
                >
                  Editorial
                </p>


              </motion.div>



            </div>


          </motion.div>
          
          {/* ================= TEXT SECTION ================= */}


          <div
            className="
              order-2

              text-center

              lg:order-1
              lg:w-[45%]
              lg:text-left
            "
          >


            <motion.p
              {...fadeUp()}
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.45em]
                text-neutral-400

                sm:text-[11px]
              "
            >
              Our Story
            </motion.p>




            <motion.h1
              {...fadeUp(.08)}
              className="
                mt-5

                font-['Playfair_Display']

                text-4xl
                font-semibold
                leading-[1.02]

                tracking-tight
                text-black


                sm:text-5xl

                lg:text-[74px]
              "
            >

              Crafted For
              <br />
              Timeless Living

            </motion.h1>




            <motion.p
              {...fadeUp(.16)}
              className="
                mx-auto

                mt-7

                max-w-xl

                text-sm

                leading-7

                text-neutral-500


                sm:text-base


                lg:mx-0
                lg:max-w-2xl
              "
            >

              The Aura exists to redefine modern luxury through timeless
              silhouettes, exceptional craftsmanship and premium fabrics.
              Every collection is thoughtfully designed to inspire confidence,
              effortless elegance and everyday sophistication.

            </motion.p>





            {/* CTA */}


            <motion.div
              {...fadeUp(.24)}

              className="
                mt-10

                flex
                flex-col
                gap-4


                sm:flex-row
                sm:justify-center


                lg:justify-start
              "
            >



              <Link
                to="/collection"

                className="
                  group

                  inline-flex

                  items-center

                  justify-center

                  gap-3

                  rounded-full

                  bg-black

                  px-8

                  py-4

                  text-[11px]

                  font-semibold

                  uppercase

                  tracking-[0.28em]

                  text-white

                  transition-all

                  duration-300

                  hover:-translate-y-1

                  hover:bg-neutral-900

                  hover:shadow-[0_18px_45px_rgba(0,0,0,.18)]
                "
              >

                Shop Collection


                <ArrowRight
                  size={16}

                  className="
                    transition

                    duration-300

                    group-hover:translate-x-1
                  "
                />


              </Link>





              <Link
                to="/contact"

                className="
                  inline-flex

                  items-center

                  justify-center

                  rounded-full

                  border

                  border-neutral-300

                  px-8

                  py-4

                  text-[11px]

                  font-semibold

                  uppercase

                  tracking-[0.28em]

                  text-black

                  transition-all

                  duration-300

                  hover:border-black

                  hover:bg-neutral-50
                "
              >

                Contact Us

              </Link>



            </motion.div>





            {/* Stats */}



            <motion.div
              {...fadeUp(.32)}

              className="
                mt-12

                grid

                grid-cols-3

                gap-3

                border-t

                border-neutral-200

                pt-8


                sm:gap-5
              "
            >


              {stats.map((item)=>(

                <div

                  key={item.label}

                  className="
                    rounded-3xl

                    border

                    border-neutral-200

                    bg-white

                    p-4


                    transition-all

                    duration-300

                    hover:-translate-y-1

                    hover:shadow-lg


                    sm:p-5
                  "
                >



                  <h3
                    className="
                      font-['Playfair_Display']

                      text-2xl

                      font-semibold

                      text-black


                      sm:text-3xl
                    "
                  >

                    {item.value}

                  </h3>



                  <p

                    className="
                      mt-2

                      text-[9px]

                      uppercase

                      tracking-[0.28em]

                      text-neutral-400


                      sm:text-[10px]
                    "
                  >

                    {item.label}

                  </p>



                </div>

              ))}



            </motion.div>




          </div>



        </div>


      </div>


    </section>

  );

};


export default AboutHero;
