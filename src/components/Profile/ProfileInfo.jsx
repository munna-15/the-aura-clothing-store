import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";

const ProfileInfo = () => {
  const { user } = useAuth();

  const profileData = [
    {
      icon: User,
      label: "Full Name",
      value: user?.name || "Not Added",
    },
    {
      icon: Mail,
      label: "Email Address",
      value: user?.email || "Not Added",
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: user?.phone || "Not Added",
    },
    {
      icon: MapPin,
      label: "Address",
      value: user?.address || "Not Added",
    },
    {
      icon: Calendar,
      label: "Member Since",
      value: "July 2026",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-[0_18px_45px_rgba(0,0,0,.05)] sm:p-6 lg:rounded-4xl lg:p-8"
    >
      {/* Header */}

      <div className="mb-6 flex items-end justify-between sm:mb-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400 sm:text-[11px]">
            Account
          </p>

          <h2 className="mt-2 font-['Playfair_Display'] text-2xl font-medium sm:text-3xl">
            Personal Information
          </h2>
        </div>
      </div>

      {/* Information */}

      <div className="space-y-3 sm:space-y-4">
        {profileData.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="
                group
                flex
                items-center
                justify-between
                gap-3
                rounded-2xl
                border
                border-neutral-200
                bg-white
                p-4
                transition-all
                duration-300
                hover:-translate-y-0.5
               
                hover:shadow-md
                sm:p-5
              "
            >
              <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
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
                    sm:h-12
                    sm:w-12
                  "
                >
                  <Icon size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                    {item.label}
                  </p>

                  <h3 className="mt-1 wrap-break-word text-sm font-medium text-black sm:text-base">
                    {item.value}
                  </h3>
                </div>
              </div>

              <ChevronRight
                size={18}
                className="hidden shrink-0 text-neutral-300 transition group-hover:translate-x-1 group-hover:text-black sm:block"
              />
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default ProfileInfo;