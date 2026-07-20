const DropdownHeader = ({ user }) => {

  const name =
    user?.displayName ||
    user?.name ||
    "Guest";


  const email =
    user?.email ||
    "guest@example.com";


  const avatar =
    name.charAt(0).toUpperCase();


  return (
    <div className="border-b border-black/5 px-6 py-7">

      <div className="flex flex-col items-center text-center">

        {/* Avatar */}

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-2xl font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-1">
          {avatar}
        </div>


        {/* Label */}

        <span className="mt-5 text-[10px] font-medium uppercase tracking-[0.35em] text-gray-400">
          Account
        </span>


        {/* Name */}

        <h3 className="mt-2 text-lg font-semibold tracking-wide text-black">
          {name}
        </h3>


        {/* Email */}

        <p className="mt-1 text-sm text-gray-500">
          {email}
        </p>


      </div>

    </div>
  );
};


export default DropdownHeader;