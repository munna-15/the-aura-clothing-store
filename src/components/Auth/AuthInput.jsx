import React from "react";


const AuthInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
  error,
  required = false,
  disabled = false,
}) => {


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





      {/* Input Wrapper */}

      <div className="relative">


        {Icon && (

          <Icon
            size={17}
            strokeWidth={1.7}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 transition-colors"
          />

        )}



        <input

          id={name}

          type={type}

          name={name}

          value={value}

          onChange={onChange}

          placeholder={placeholder}

          disabled={disabled}

          required={required}

          autoComplete={name}


          className={`
            h-12 w-full rounded-xl border bg-white text-sm text-neutral-900 outline-none transition-all duration-300
            placeholder:text-neutral-400
            ${Icon ? "pl-11 pr-4" : "px-4"}
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


      </div>





      {/* Error Message */}

      {error && (

        <p className="text-xs text-red-500">
          {error}
        </p>

      )}



    </div>

  );

};


export default AuthInput;