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
  const [showPassword, setShowPassword] = useState(false);

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

        <Lock
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

        <input
          id={inputId}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          spellCheck={false}
          autoCorrect="off"
          autoCapitalize="none"
          autoComplete={
            name === "confirmPassword"
              ? "new-password"
              : "current-password"
          }
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={`
            h-14
            w-full
            rounded-2xl
            border
            bg-white
            pl-12
            pr-14
            text-[16px]
            text-neutral-900
            placeholder:text-neutral-400
            outline-none
            appearance-none
            transition-all
            duration-200

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

        {/* Toggle */}

        <button
          type="button"
          disabled={disabled}
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={
            showPassword
              ? "Hide password"
              : "Show password"
          }
          aria-pressed={showPassword}
          className="
            absolute
            right-2
            top-1/2
            flex
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            text-neutral-400
            transition-all
            duration-200
            hover:bg-neutral-100
            hover:text-neutral-900
            focus:outline-none
            focus:ring-2
            focus:ring-black/10
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {showPassword ? (
            <EyeOff
              size={18}
              strokeWidth={1.8}
            />
          ) : (
            <Eye
              size={18}
              strokeWidth={1.8}
            />
          )}
        </button>

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

export default PasswordInput;