// import { Link } from "react-router-dom";
// import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaTwitter,
// } from "react-icons/fa";


// const Footer = () => {


//   const shopLinks = [
//     { label: "All Collection", path: "/collection" },
//     { label: "Men's Wear", path: "/men" },
//     { label: "Women's Wear", path: "/women" },
//     { label: "New Arrivals", path: "/collection" },
//   ];


//   const supportLinks = [
//     { label: "Contact Us", path: "/contact" },
//     { label: "Shipping & Delivery", path: "#" },
//     { label: "Returns Policy", path: "#" },
//     { label: "Privacy Policy", path: "#" },
//   ];


//   const socials = [
//     {
//       icon: <FaInstagram />,
//       link: "#",
//     },
//     {
//       icon: <FaFacebookF />,
//       link: "#",
//     },
//     {
//       icon: <FaTwitter />,
//       link: "#",
//     },
//   ];



//   return (

//     <footer className="bg-[#050505] text-white">


//       <div className="mx-auto w-[92%] max-w-[1580px] py-14 sm:py-20">


//         {/* Newsletter */}


//         <div className="
//           rounded-[30px]
//           border
//           border-white/10
//           bg-white/3
//           px-6
//           py-10
//           sm:px-12
//           sm:py-14
//         ">


//           <div className="
//             grid
//             gap-8
//             lg:grid-cols-[1fr_auto]
//             lg:items-center
//           ">


//             <div>


//               <p className="
//                 text-[10px]
//                 font-semibold
//                 uppercase
//                 tracking-[0.4em]
//                 text-white/40
//               ">
//                 Join The Aura
//               </p>


//               <h2 className="
//                 mt-4
//                 font-['Playfair_Display']
//                 text-3xl
//                 font-semibold
//                 sm:text-5xl
//               ">
//                 Stay Inspired With
//                 Exclusive Updates
//               </h2>


//               <p className="
//                 mt-4
//                 max-w-xl
//                 text-sm
//                 leading-7
//                 text-white/50
//               ">
//                 Get early access to new collections,
//                 special offers and luxury fashion updates.
//               </p>


//             </div>




//             <div className="
//               flex
//               w-full
//               flex-col
//               gap-3
//               sm:flex-row
//               lg:w-auto
//             ">


//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="
//                   h-14
//                   w-full
//                   rounded-full
//                   border
//                   border-white/10
//                   bg-white/5
//                   px-6
//                   text-sm
//                   text-white
//                   outline-none
//                   placeholder:text-white/40
//                   focus:border-white/30
//                   sm:w-72
//                 "
//               />


//               <button
//                 className="
//                   flex
//                   h-14
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-full
//                   bg-white
//                   px-7
//                   text-[11px]
//                   font-semibold
//                   uppercase
//                   tracking-[0.25em]
//                   text-black
//                   transition
//                   duration-300
//                   hover:bg-neutral-200
//                 "
//               >

//                 Subscribe

//                 <ArrowRight size={15}/>

//               </button>


//             </div>



//           </div>


//         </div>





//         {/* Main Footer */}



//         <div className="
//           mt-14
//           grid
//           grid-cols-1
//           gap-10
//           border-b
//           border-white/10
//           pb-12
//           sm:grid-cols-2
//           lg:grid-cols-4
//         ">



//           {/* Brand */}


//           <div>


//             <h2 className="
//               font-['Playfair_Display']
//               text-4xl
//               font-semibold
//             ">
//               The Aura
//             </h2>



//             <p className="
//               mt-5
//               text-sm
//               leading-7
//               text-white/50
//             ">
//               Redefining modern fashion through
//               timeless designs, premium fabrics
//               and refined craftsmanship.
//             </p>



//             <div className="mt-7 flex gap-3">


//               {socials.map((item,index)=>(

//                 <a
//                   key={index}
//                   href={item.link}
//                   className="
//                     flex
//                     h-10
//                     w-10
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     border-white/10
//                     bg-white/5
//                     text-white/60
//                     transition
//                     hover:-translate-y-1
//                     hover:bg-white
//                     hover:text-black
//                   "
//                 >
//                   {item.icon}
//                 </a>

//               ))}


//             </div>


//           </div>





//           {/* Shop */}


//           <FooterColumn
//             title="Shop"
//             links={shopLinks}
//           />





//           {/* Support */}


//           <FooterColumn
//             title="Support"
//             links={supportLinks}
//           />





//           {/* Contact */}


//           <div>


//             <h3 className="
//               text-[11px]
//               font-semibold
//               uppercase
//               tracking-[0.35em]
//             ">
//               Contact
//             </h3>


//             <div className="
//               mt-6
//               space-y-4
//               text-sm
//               text-white/50
//             ">


//               <p className="flex gap-3">
//                 <Mail size={16}/>
//                 support@theaura.com
//               </p>


//               <p className="flex gap-3">
//                 <Phone size={16}/>
//                 +880 1792960610
//               </p>


//               <p className="flex gap-3">
//                 <MapPin size={16}/>
//                 Dhaka, Bangladesh
//               </p>


//             </div>


//           </div>



//         </div>





//         {/* Bottom */}



//         <div className="
//           flex
//           flex-col
//           items-center
//           gap-3
//           pt-8
//           text-center
//           text-[11px]
//           text-white/40
//           md:flex-row
//           md:justify-between
//         ">


//           <p>
//             © {new Date().getFullYear()} The Aura. All rights reserved.
//           </p>


//           <p>
//             Designed with precision. Crafted for elegance.
//           </p>


//         </div>



//       </div>


//     </footer>

//   );

// };





// const FooterColumn = ({title,links}) => {


//   return (

//     <div>


//       <h3 className="
//         text-[11px]
//         font-semibold
//         uppercase
//         tracking-[0.35em]
//       ">
//         {title}
//       </h3>



//       <ul className="mt-6 space-y-4">


//         {links.map((item)=>(
          
//           <li key={item.label}>

//             <Link
//               to={item.path}
//               className="
//                 text-sm
//                 text-white/50
//                 transition
//                 duration-300
//                 hover:text-white
//               "
//             >
//               {item.label}
//             </Link>

//           </li>

//         ))}


//       </ul>


//     </div>

//   );

// };



// export default Footer;


import { Link } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";


const Footer = () => {


  const shopLinks = [
    { label: "All Collection", path: "/collection" },
    { label: "Men's Wear", path: "/men" },
    { label: "Women's Wear", path: "/women" },
    { label: "New Arrivals", path: "/collection" },
  ];


  const supportLinks = [
    "Contact Us",
    "Shipping & Delivery",
    "Returns Policy",
    "Privacy Policy",
  ];


  const socials = [
    <FaInstagram />,
    <FaFacebookF />,
    <FaTwitter />,
    <Mail />,
  ];



  return (

    <footer className="bg-black text-white">


      <div className="mx-auto w-[94%] max-w-[1580px] py-14 sm:py-20 lg:py-24">


        {/* Top */}

        <div className="grid gap-12 border-b border-white/10 pb-12 sm:gap-16 md:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_.8fr_1fr]">



          {/* Brand */}


          <div>

            <h2 className="font-['Playfair_Display'] text-4xl font-semibold sm:text-5xl">
              The Aura
            </h2>


            <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
              Redefining modern fashion through timeless designs,
              premium fabrics and effortless everyday luxury.
            </p>


            <div className="mt-7 flex gap-3">

              {
                socials.map((icon,index)=>(

                  <a
                    key={index}
                    href="#"
                    className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-white/60
                    transition
                    duration-300
                    hover:border-white
                    hover:bg-white
                    hover:text-black
                    "
                  >
                    {icon}
                  </a>

                ))
              }

            </div>


          </div>





          {/* Shop */}


          <div>

            <h3 className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/80">
              Shop
            </h3>


            <ul className="mt-6 space-y-4">

              {
                shopLinks.map((item)=>(

                  <li key={item.label}>

                    <Link
                      to={item.path}
                      className="text-sm text-white/50 transition hover:text-white"
                    >
                      {item.label}
                    </Link>

                  </li>

                ))
              }

            </ul>

          </div>






          {/* Support */}


          <div>

            <h3 className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/80">
              Support
            </h3>


            <ul className="mt-6 space-y-4">

              {
                supportLinks.map((item)=>(

                  <li
                    key={item}
                    className="text-sm text-white/50 transition hover:text-white"
                  >
                    {item}
                  </li>

                ))
              }

            </ul>


          </div>






          {/* Newsletter */}


          <div>


            <h3 className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/80">
              Stay Updated
            </h3>


            <p className="mt-6 text-sm leading-6 text-white/50">
              Subscribe for new collections,
              exclusive offers and updates.
            </p>



            <div className="mt-5 flex overflow-hidden rounded-full border border-white/20">


              <input
                type="email"
                placeholder="Email address"
                className="
                w-full
                bg-transparent
                px-5
                text-sm
                text-white
                outline-none
                placeholder:text-white/40
                "
              />


              <button
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                bg-white
                text-black
                transition
                hover:bg-neutral-200
                "
              >

                <ArrowRight size={17}/>

              </button>


            </div>


          </div>



        </div>





        {/* Bottom */}


        <div className="flex flex-col gap-3 pt-8 text-center text-[11px] tracking-wide text-white/40 sm:flex-row sm:justify-between">

          <p>
            © {new Date().getFullYear()} The Aura. All rights reserved.
          </p>


          <p>
            Crafted with timeless elegance.
          </p>


        </div>


      </div>


    </footer>

  );

};


export default Footer;