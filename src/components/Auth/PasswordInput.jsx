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
  const inputId = `input-${name}`;
  const errorId = `${inputId}-error`;

  return (
    <div className="space-y-2.5">

      {/* Label */}

      <label
        htmlFor={inputId}
        className="
          flex
          items-center
          gap-1
          text-sm
          font-medium
          tracking-wide
          text-neutral-700
        "
      >
        {label}

        {required && (
          <span className="text-red-500">
            *
          </span>
        )}
      </label>

      {/* Input */}

      <div className="relative">

        {Icon && (
          <Icon
            size={18}
            strokeWidth={1.8}
            className="
              pointer-events-none
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-neutral-400
            "
          />
        )}

        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete={name}
          spellCheck={false}
          autoCapitalize="none"
          autoCorrect="off"
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={`
            h-14
            w-full
            rounded-2xl
            border
            bg-white
            text-[16px]
            text-neutral-900
            outline-none
            transition-all
            duration-200
            appearance-none

            placeholder:text-neutral-400

            ${
              Icon
                ? "pl-12 pr-4"
                : "px-4"
            }

            ${
              error
                ? `
                  border-red-400
                  focus:border-red-500
                  focus:ring-4
                  focus:ring-red-100
                `
                : `
                  border-neutral-200
                  hover:border-neutral-300
                  focus:border-black
                  focus:ring-4
                  focus:ring-black/5
                `
            }

            ${
              disabled
                ? `
                  cursor-not-allowed
                  bg-neutral-100
                  text-neutral-400
                `
                : ""
            }
          `}
        />

      </div>

      {/* Error */}

      {error && (
        <p
          id={errorId}
          className="
            text-sm
            text-red-500
          "
        >
          {error}
        </p>
      )}

    </div>
  );
};

export default AuthInput;