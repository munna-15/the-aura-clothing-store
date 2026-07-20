import React from "react";


const Divider = ({ text = "OR" }) => {


  return (

    <div className="flex items-center gap-4 py-2">


      <span className="h-px flex-1 bg-neutral-200" />


      <span
        className="
          shrink-0
          text-[10px]
          font-medium
          uppercase
          tracking-[0.45em]
          text-neutral-400
        "
      >

        {text}

      </span>



      <span className="h-px flex-1 bg-neutral-200" />


    </div>

  );

};


export default Divider;