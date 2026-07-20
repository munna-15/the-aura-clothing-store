import React from "react";


const AuthButton = ({
  children,
  type = "submit",
  loading = false,
  disabled = false,
}) => {


  return (

    <button

      type={type}

      disabled={disabled || loading}

      className="
        group
        relative
        flex
        h-12
        w-full
        items-center
        justify-center
        overflow-hidden
        rounded-xl
        bg-neutral-900
        px-6
        text-sm
        font-medium
        tracking-[0.08em]
        text-white
        transition-all
        duration-300
        hover:bg-black
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)]
        active:scale-[0.98]
        disabled:cursor-not-allowed
        disabled:bg-neutral-400
        disabled:shadow-none
      "

    >


      {/* Shine Effect */}


      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-linear-to-r
          from-transparent
          via-white/20
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
      />





      {loading ? (

        <span className="relative flex items-center gap-3">

          <span
            className="
              h-4
              w-4
              animate-spin
              rounded-full
              border-2
              border-white/30
              border-t-white
            "
          />


          <span>
            Please wait...
          </span>


        </span>


      ) : (

        <span className="relative">
          {children}
        </span>

      )}



    </button>

  );

};


export default AuthButton;