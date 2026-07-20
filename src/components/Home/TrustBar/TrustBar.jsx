import {
  Gem,
  ShieldCheck,
  RefreshCw,
  Truck,
} from "lucide-react";


const features = [
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    description: "Protected payment with trusted gateways.",
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description: "Crafted from carefully selected premium fabrics.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick nationwide shipping with reliable service.",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "Simple return policy with hassle-free support.",
  },
];



const TrustBar = () => {

  return (

    <section className="bg-white py-12 sm:py-16">


      <div className="mx-auto w-[94%] max-w-[1580px]">


        <div className="h-px bg-linear-to-r from-transparent via-neutral-200 to-transparent" />



        <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 sm:gap-6 sm:py-12 xl:grid-cols-4">


          {
            features.map(({ icon: Icon, title, description }) => (

              <div
                key={title}
                className="group flex items-start gap-4 rounded-2xl p-3 transition duration-300 hover:bg-neutral-50 sm:gap-5 sm:rounded-3xl sm:p-4"
              >



                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-black group-hover:shadow-md sm:h-14 sm:w-14">


                  <Icon
                    size={20}
                    strokeWidth={1.8}
                  />


                </div>




                <div>


                  <h3 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black sm:text-[11px]">
                    {title}
                  </h3>



                  <p className="mt-2 text-xs leading-5 text-neutral-500 sm:mt-3 sm:text-sm sm:leading-6">
                    {description}
                  </p>


                </div>



              </div>


            ))
          }



        </div>




        <div className="h-px bg-linear-to-r from-transparent via-neutral-200 to-transparent" />



      </div>


    </section>

  );

};


export default TrustBar;