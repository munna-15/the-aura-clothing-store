import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Heart,
  LogOut,
  ShoppingBag,
  User,
} from "lucide-react";

import useAuth from "../../hooks/useAuth";

const UserDropdown = () => {

  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {

    logout();

    closeDropdown();

    navigate("/login", {
      replace: true,
    });

  };

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        closeDropdown();
      }

    };

    const handleEscape = (event) => {

      if (event.key === "Escape") {
        closeDropdown();
      }

    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );

    };

  }, []);

  return (

    <div
      ref={dropdownRef}
      className="relative"
    >

      {/* Trigger */}

      <button
        onClick={toggleDropdown}
        aria-label="User menu"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className="
          flex
          items-center
          gap-2
          rounded-full
          border
          border-neutral-200
          bg-white
          px-2.5
          py-2
          shadow-sm
          transition-all
          duration-200
          hover:border-neutral-300
          hover:shadow-md
        "
      >

        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-neutral-900
            text-sm
            font-semibold
            text-white
          "
        >
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <div className="hidden text-left lg:block">

          <p className="max-w-32 truncate text-sm font-medium text-neutral-900">
            {user?.name || "User"}
          </p>

        </div>

        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""
            }`}
        />

      </button>
      {/* Dropdown */}

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="
              absolute
              right-0
              z-50
              mt-3
              w-72
              max-w-[calc(100vw-24px)]
              overflow-hidden
              rounded-2xl
              border
              border-neutral-200
              bg-white
              shadow-[0_18px_50px_rgba(0,0,0,0.12)]
            "
          >

            {/* User */}

            <div className="border-b border-neutral-100 px-5 py-4">

              <div className="flex items-center gap-3">

                <div className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-neutral-900
                  text-sm
                  font-semibold
                  text-white
                ">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>

                <div className="min-w-0 flex-1">

                  <h3 className="truncate text-sm font-semibold text-neutral-900">
                    {user?.name}
                  </h3>

                  <p className="truncate text-xs text-neutral-500">
                    {user?.email}
                  </p>

                </div>

              </div>

            </div>

            {/* Navigation */}

            <nav className="py-2">

              <Link
                to="/profile"
                onClick={closeDropdown}
                className="
                  flex
                  items-center
                  gap-3
                  px-5
                  py-3
                  text-sm
                  text-neutral-700
                  transition-colors
                  hover:bg-neutral-50
                  hover:text-black
                "
              >
                <User size={18} />
                <span>My Profile</span>
              </Link>

              <Link
                to="/orders"
                onClick={closeDropdown}
                className="
                  flex
                  items-center
                  gap-3
                  px-5
                  py-3
                  text-sm
                  text-neutral-700
                  transition-colors
                  hover:bg-neutral-50
                  hover:text-black
                "
              >
                <ShoppingBag size={18} />
                <span>My Orders</span>
              </Link>

              <Link
                to="/wishlist"
                onClick={closeDropdown}
                className="
                  flex
                  items-center
                  gap-3
                  px-5
                  py-3
                  text-sm
                  text-neutral-700
                  transition-colors
                  hover:bg-neutral-50
                  hover:text-black
                "
              >
                <Heart size={18} />
                <span>Wishlist</span>
              </Link>

            </nav>

            {/* Logout */}

            <div className="border-t border-neutral-100 p-2">

              <button
                onClick={handleLogout}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-xl
                  px-3.5
                  py-3
                  text-sm
                  font-medium
                  text-red-600
                  transition-all
                  duration-200
                  hover:bg-red-50
                "
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>

  );

};

export default UserDropdown;