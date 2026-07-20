import { Camera, Pencil } from "lucide-react";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";

const ProfileHeader = ({ onEditProfile }) => {
  const { user } = useAuth();

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm"
    >
      {/* Cover */}

      <div className="relative h-36 sm:h-44 lg:h-52 overflow-hidden bg-linear-to-r from-black via-neutral-900 to-neutral-800">
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Content */}

      <div className="relative px-5 pb-6 sm:px-6 lg:px-10 lg:pb-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {/* Left */}

          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-end sm:text-left">
            {/* Avatar */}

            <div className="relative -mt-14 shrink-0 sm:-mt-16">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-linear-to-br from-black to-neutral-700 text-3xl font-bold text-white shadow-lg sm:h-28 sm:w-28 sm:text-4xl lg:h-32 lg:w-32">
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </div>

              <button
                className="
                  absolute
                  bottom-1
                  right-1
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white
                  bg-black
                  text-white
                  transition
                  hover:scale-105
                  sm:h-9
                  sm:w-9
                "
              >
                <Camera size={15} />
              </button>
            </div>

            {/* User Info */}

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400">
                My Account
              </p>

              <h1 className="mt-2 font-['Playfair_Display'] text-2xl font-medium sm:text-3xl lg:text-4xl">
                {user?.name || "Guest User"}
              </h1>

              <p className="mt-2 text-sm text-neutral-500 break-all">
                {user?.email}
              </p>

              <span className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-white">
                Active Member
              </span>
            </div>
          </div>

          {/* Button */}

          <button
            onClick={onEditProfile}
            className="
              flex
              h-11
              w-full
              items-center
              justify-center
              gap-2
              rounded-full
              bg-black
              px-6
              text-sm
              font-medium
              text-white
              transition
              hover:bg-neutral-800
              sm:w-auto
            "
          >
            <Pencil size={16} />

            Edit Profile
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default ProfileHeader;