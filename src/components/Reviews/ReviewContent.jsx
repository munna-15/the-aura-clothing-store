import { BadgeCheck, Star } from "lucide-react";


const ReviewContent = ({ review }) => {


  const initials = review.name
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();



  return (

    <div className="flex h-full flex-col justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-16">


      <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-neutral-400 sm:text-[11px]">
        Customer Experience
      </span>



      <div className="mt-6 flex items-center gap-1 sm:mt-8">

        {
          Array.from({ length: 5 }).map((_, index) => (

            <Star
              key={index}
              size={16}
              className="fill-black text-black"
            />

          ))
        }


        <span className="ml-2 text-sm text-neutral-500 sm:ml-3">
          4.9 / 5
        </span>


      </div>




      <h2 className="mt-6 max-w-xl font-['Playfair_Display'] text-2xl font-semibold leading-snug text-black sm:mt-8 sm:text-3xl lg:text-5xl">
        “{review.comment}”
      </h2>




      <div className="mt-8 flex items-center gap-4 sm:mt-10 sm:gap-5">


        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-sm font-semibold text-white sm:h-14 sm:w-14">
          {initials}
        </div>



        <div>


          <div className="flex items-center gap-2">


            <h3 className="text-sm font-semibold text-black sm:text-base">
              {review.name}
            </h3>



            {
              review.verified && (

                <BadgeCheck
                  size={17}
                  className="text-black"
                />

              )
            }


          </div>



          <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
            Verified Customer
          </p>


        </div>


      </div>





      <div className="mt-10 flex gap-8 border-t border-black/10 pt-6 sm:mt-12 sm:gap-10 sm:pt-8">


        <div>

          <h4 className="text-2xl font-semibold text-black sm:text-3xl">
            4.9
          </h4>

          <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-neutral-400 sm:text-[10px]">
            Rating
          </p>

        </div>




        <div>

          <h4 className="text-2xl font-semibold text-black sm:text-3xl">
            10K+
          </h4>


          <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-neutral-400 sm:text-[10px]">
            Customers
          </p>

        </div>



      </div>


    </div>

  );

};


export default ReviewContent;