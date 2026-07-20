import { Package, Heart, ShoppingBag, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContextProvider";

const ProfileStats = () => {
  const {
    orders,
    wishlistItems,
    recentlyViewed,
    getCartCount,
  } = useContext(ProductContext);

  const stats = [
    {
      title: "Orders",
      value: orders.length,
      icon: Package,
    },
    {
      title: "Wishlist",
      value: wishlistItems.length,
      icon: Heart,
    },
    {
      title: "Cart",
      value: getCartCount(),
      icon: ShoppingBag,
    },
    {
      title: "Recently Viewed",
      value: recentlyViewed.length,
      icon: Eye,
    },
  ];

  return (
    <section className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -5,
            }}
            className="
              group
              rounded-3xl
              border
              border-neutral-200
              bg-white
              p-4
              shadow-sm
              transition-all
              hover:border-black/10
              hover:shadow-xl
              sm:p-5
              lg:p-6
            "
          >
            <div className="flex items-start justify-between">
              <div className="min-w-0">
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-neutral-400
                    sm:text-[10px]
                  "
                >
                  {item.title}
                </p>

                <h2
                  className="
                    mt-2
                    text-2xl
                    font-semibold
                    text-black
                    sm:text-3xl
                  "
                >
                  {item.value}
                </h2>
              </div>

              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-neutral-200
                  bg-neutral-50
                  transition-all
                  group-hover:bg-black
                  group-hover:text-white
                  sm:h-14
                  sm:w-14
                "
              >
                <Icon size={22} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default ProfileStats;