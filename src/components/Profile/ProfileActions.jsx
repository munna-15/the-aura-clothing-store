import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User,
  Lock,
  ShoppingBag,
  Heart,
  LogOut,
  ChevronRight,
} from "lucide-react";

import useAuth from "../../hooks/useAuth";

const ProfileActions = ({ onEditProfile }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const actions = [
    {
      icon: User,
      title: "Edit Profile",
      description: "Update your personal information",
      onClick: onEditProfile,
    },
    {
      icon: Lock,
      title: "Change Password",
      description: "Keep your account secure",
      to: "/change-password",
    },
    {
      icon: ShoppingBag,
      title: "My Orders",
      description: "Track your purchase history",
      to: "/orders",
    },
    {
      icon: Heart,
      title: "Wishlist",
      description: "Your saved products",
      to: "/wishlist",
    },
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="rounded-4xl border border-neutral-200 bg-white/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,.06)] backdrop-blur-xl sm:p-6 lg:p-8"
    >
      {/* Header */}

      <div className="mb-8">
        <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400">
          Dashboard
        </p>

        <h2 className="mt-2 font-['Playfair_Display'] text-2xl font-medium text-black lg:text-3xl">
          Quick Actions
        </h2>

        <p className="mt-2 text-sm text-neutral-500">
          Manage your account and shopping activity.
        </p>
      </div>

      {/* Actions */}

      <div className="space-y-4">
        {actions.map((action, index) => {
          const Icon = action.icon;

          const content = (
            <>
              <div className="flex min-w-0 items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-neutral-200
                    bg-neutral-50
                    transition
                    duration-300
                    group-hover:border-black
                    group-hover:bg-black
                    group-hover:text-white
                  "
                >
                  <Icon size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-black sm:text-base">
                    {action.title}
                  </h3>

                  <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
                    {action.description}
                  </p>
                </div>
              </div>

              <ChevronRight
                size={18}
                className="shrink-0 text-neutral-300 transition duration-300 group-hover:translate-x-1 group-hover:text-black"
              />
            </>
          );

          return (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.08,
              }}
            >
              {action.onClick ? (
                <button
                  onClick={action.onClick}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-neutral-200
                    bg-white
                    p-4
                    text-left
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-black
                    hover:shadow-lg
                    lg:p-5
                  "
                >
                  {content}
                </button>
              ) : (
                <Link
                  to={action.to}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-neutral-200
                    bg-white
                    p-4
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-black
                    hover:shadow-lg
                    lg:p-5
                  "
                >
                  {content}
                </Link>
              )}
            </motion.div>
          );
        })}

        {/* Logout */}

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleLogout}
          className="
            group
            mt-6
            flex
            w-full
            items-center
            justify-between
            rounded-2xl
            border
            border-red-200
            bg-red-50
            p-4
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-red-500
            hover:bg-red-500
            hover:text-white
            lg:p-5
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-white
                text-red-500
                transition
                duration-300
                group-hover:bg-white/20
                group-hover:text-white
              "
            >
              <LogOut size={20} />
            </div>

            <div className="text-left">
              <h3 className="text-sm font-semibold sm:text-base">
                Logout
              </h3>

              <p className="mt-1 text-xs opacity-70 sm:text-sm">
                Sign out from your account
              </p>
            </div>
          </div>

          <ChevronRight
            size={18}
            className="shrink-0 transition duration-300 group-hover:translate-x-1"
          />
        </motion.button>
      </div>
    </motion.aside>
  );
};

export default ProfileActions;