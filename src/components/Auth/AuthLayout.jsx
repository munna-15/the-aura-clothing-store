import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const AuthLayout = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <main className="min-h-dvh bg-neutral-50">

      <section className="grid min-h-dvh lg:grid-cols-2">

        {/* ================= LEFT PANEL ================= */}

        <aside className="relative hidden overflow-hidden lg:block">

          <motion.img
            src={assets.login_1}
            alt="Luxury Fashion"
            draggable={false}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.6,
              ease: "easeOut",
            }}
            className="h-dvh w-full select-none object-cover"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/35 to-transparent" />

          {/* Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .7,
              delay: .2,
            }}
            className="
              absolute
              inset-x-0
              bottom-0
              p-14
              text-white
            "
          >

            <p
              className="
                text-xs
                uppercase
                tracking-[0.45em]
                text-white/70
              "
            >
              Premium Fashion House
            </p>

            <h2
              className="
                mt-6
                max-w-lg
                text-balance
                font-['Playfair_Display']
                text-5xl
                font-semibold
                leading-tight
                xl:text-6xl
              "
            >
              Dress
              <br />
              Your Story.
            </h2>

            <p
              className="
                mt-6
                max-w-md
                text-base
                leading-7
                text-white/75
              "
            >
              Timeless collections crafted with elegance,
              confidence and modern luxury.
            </p>

          </motion.div>

        </aside>

        {/* ================= RIGHT PANEL ================= */}

        <div
          className="
            flex
            min-h-dvh
            items-center
            justify-center
            px-5
            py-8
            sm:px-8
            lg:px-10
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .45,
            }}
            className="
              w-full
              max-w-md
            "
          >

            {/* Brand */}

            <div className="mb-10 text-center">

              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.45em]
                  text-neutral-400
                "
              >
                Luxury Clothing
              </p>

              <h1
                className="
                  mt-3
                  font-['Playfair_Display']
                  text-4xl
                  font-semibold
                  tracking-[0.15em]
                  text-neutral-900
                  sm:text-5xl
                "
              >
                THE AURA
              </h1>

              <div
                className="
                  mx-auto
                  mt-5
                  h-px
                  w-16
                  bg-neutral-300
                "
              />

            </div>

            {/* Heading */}

            <header className="mb-7">

              <h2
                className="
                  text-balance
                  font-['Playfair_Display']
                  text-3xl
                  font-semibold
                  text-neutral-900
                  sm:text-4xl
                "
              >
                {title}
              </h2>

              <p
                className="
                  mt-3
                  text-base
                  leading-7
                  text-neutral-500
                "
              >
                {subtitle}
              </p>

            </header>

            {/* Card */}

            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: .4,
                delay: .1,
              }}
              className="
                rounded-3xl
                border
                border-neutral-200
                bg-white/95
                p-6
                shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                backdrop-blur-xl
                sm:p-8
              "
            >

              {children}

            </motion.div>

          </motion.div>

        </div>

      </section>

    </main>
  );
};

export default AuthLayout;