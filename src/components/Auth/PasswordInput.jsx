import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";


const PasswordInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  disabled = false,
}) => {


  const [showPassword,setShowPassword] = useState(false);



  return (

    <div className="space-y-2">


      {/* Label */}

      <label
        htmlFor={name}
        className="flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-neutral-600"
      >

        {label}

        {required && (
          <span className="text-neutral-900">
            *
          </span>
        )}

      </label>





      {/* Input */}


      <div className="relative">


        <Lock

          size={17}

          strokeWidth={1.7}

          className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"

        />





        <input

          id={name}

          name={name}

          type={showPassword ? "text" : "password"}

          value={value}

          onChange={onChange}

          placeholder={placeholder}

          required={required}

          disabled={disabled}

          autoComplete={
            name === "confirmPassword"
              ? "new-password"
              : "current-password"
          }


          className={`
            h-12 w-full rounded-xl border bg-white text-sm text-neutral-900 outline-none transition-all duration-300
            pl-11 pr-12 placeholder:text-neutral-400
            ${
              error
              ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
              : "border-neutral-200 hover:border-neutral-300 focus:border-neutral-400 focus:ring-4 focus:ring-neutral-900/5"
            }
            ${
              disabled
              ? "cursor-not-allowed bg-neutral-100 text-neutral-400"
              : ""
            }
          `}

        />






        <button

          type="button"

          disabled={disabled}

          onClick={() =>
            setShowPassword((prev)=>!prev)
          }


          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-neutral-400
            transition
            hover:text-neutral-900
            disabled:cursor-not-allowed
          "

          aria-label={
            showPassword
              ? "Hide password"
              : "Show password"
          }

        >

          {showPassword ? (

            <EyeOff size={18} strokeWidth={1.7}/>

          ) : (

            <Eye size={18} strokeWidth={1.7}/>

          )}


        </button>


      </div>







      {error && (

        <p className="text-xs text-red-500">

          {error}

        </p>

      )}



    </div>

  );

};


export default PasswordInput;