import { ChevronLeft, ChevronRight } from "lucide-react";


const ReviewNavigation = ({
  total,
  current,
  setCurrent,
}) => {


  const handlePrev = () => {
    setCurrent((prev) => prev === 0 ? total - 1 : prev - 1);
  };


  const handleNext = () => {
    setCurrent((prev) => prev === total - 1 ? 0 : prev + 1);
  };


  return (

    <div className="flex flex-col items-center justify-between gap-5 border-t border-black/10 px-5 py-6 sm:flex-row sm:px-8 sm:py-8">


      <div className="flex items-center gap-3">


        <button
          onClick={handlePrev}
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white sm:h-12 sm:w-12"
        >

          <ChevronLeft
            size={18}
            className="transition duration-300 group-hover:-translate-x-0.5"
          />

        </button>




        <button
          onClick={handleNext}
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white sm:h-12 sm:w-12"
        >

          <ChevronRight
            size={18}
            className="transition duration-300 group-hover:translate-x-0.5"
          />

        </button>


      </div>





      <div className="flex items-center gap-2">

        {
          Array.from({ length: total }).map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${current === index ? "w-8 bg-black sm:w-10" : "w-2 bg-black/20 hover:bg-black/50"}`}
            />

          ))
        }

      </div>






      <p className="text-[10px] font-medium tracking-[0.35em] text-neutral-400 sm:text-xs">

        {String(current + 1).padStart(2, "0")}
        {" / "}
        {String(total).padStart(2, "0")}

      </p>



    </div>

  );

};


export default ReviewNavigation;