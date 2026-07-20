import { ChevronDown } from "lucide-react";

const DesktopAccount = ({
  user,
  isOpen,
  onToggle,
}) => {

  const displayName =
    user?.displayName ||
    user?.name ||
    "User";


  const avatar =
    displayName.charAt(0).toUpperCase();


  return (
    <button
      type="button"
      onClick={onToggle}
      className="group flex items-center gap-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
    >

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-semibold uppercase text-white shadow-md transition-all duration-300 group-hover:shadow-lg">
        {avatar}
      </div>


      <div className="hidden max-w-30 text-left xl:block">

        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-gray-400">
          Account
        </p>


        <p className="mt-1 truncate text-sm font-medium text-black">
          {displayName}
        </p>

      </div>


      <ChevronDown
        size={16}
        className={`transition-all duration-300 ${
          isOpen
            ? "rotate-180 text-black"
            : "text-gray-400 group-hover:text-black"
        }`}
      />

    </button>
  );
};


export default DesktopAccount;