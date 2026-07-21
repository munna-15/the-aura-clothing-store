import { Link } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

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
    <footer className="bg-neutral-950 text-white">

      <div className="mx-auto w-[92%] max-w-375 py-16 sm:py-20 lg:py-24">

        {/* Top Section */}

        <div className="grid gap-12 border-b border-white/10 pb-14 sm:gap-16 md:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr_1fr]">


          {/* Brand */}

          <div>

            <p className="text-[10px] uppercase tracking-[0.5em] text-[#C8A96A]">
              Luxury Fashion House
            </p>


            <h2 className="mt-4 font-['Playfair_Display'] text-5xl font-semibold tracking-wide sm:text-6xl">
              The Aura
            </h2>


            <div className="mt-5 h-px w-16 bg-[#C8A96A]" />


            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              Redefining modern elegance with timeless silhouettes,
              premium fabrics and effortless luxury for everyday life.
            </p>



            <div className="mt-8 flex gap-3">

              {socials.map((icon, index) => (

                <a
                  key={index}
                  href="#"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition duration-300 hover:border-[#C8A96A] hover:bg-[#C8A96A] hover:text-black"
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {icon}
                  </span>
                </a>

              ))}

            </div>


          </div>





          {/* Shop */}

          <div>

            <h3 className="text-[10px] uppercase tracking-[0.45em] text-[#C8A96A]">
              Shop
            </h3>


            <ul className="mt-7 space-y-5">

              {shopLinks.map((item)=>(

                <li key={item.label}>

                  <Link
                    to={item.path}
                    className="group flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
                  >

                    <span>
                      {item.label}
                    </span>

                    <span className="h-px w-0 bg-[#C8A96A] transition-all duration-300 group-hover:w-5" />

                  </Link>

                </li>

              ))}

            </ul>

          </div>





          {/* Support */}

          <div>

            <h3 className="text-[10px] uppercase tracking-[0.45em] text-[#C8A96A]">
              Support
            </h3>


            <ul className="mt-7 space-y-5">

              {supportLinks.map((item)=>(

                <li
                  key={item}
                  className="cursor-pointer text-sm text-white/50 transition hover:text-white"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>






          {/* Newsletter */}

          <div>

            <h3 className="text-[10px] uppercase tracking-[0.45em] text-[#C8A96A]">
              Stay Connected
            </h3>


            <p className="mt-7 text-sm leading-7 text-white/50">
              Subscribe to receive exclusive collections,
              private offers and brand updates.
            </p>



            <div className="mt-6 flex overflow-hidden rounded-full border border-white/20 bg-white/5 transition focus-within:border-[#C8A96A]">


              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/30"
              />


              <button
                className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#C8A96A] text-black transition hover:bg-[#d8bb82]"
              >

                <ArrowRight size={17}/>

              </button>


            </div>


          </div>


        </div>






        {/* Bottom */}

        <div className="flex flex-col gap-4 pt-8 text-center text-[11px] uppercase tracking-[0.25em] text-white/30 sm:flex-row sm:justify-between sm:text-left">


          <p>
            © {new Date().getFullYear()} The Aura. All rights reserved.
          </p>


          <p className="text-[#C8A96A]/70">
            Crafted With Timeless Elegance
          </p>


        </div>


      </div>

    </footer>
  );
};

export default Footer;