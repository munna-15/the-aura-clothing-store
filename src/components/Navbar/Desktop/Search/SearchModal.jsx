import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SearchResults from "./SearchResults";
import RecentSearches from "./RecentSearches";

import {
  getRecentSearches,
  clearRecentSearches,
} from "./searchData";

const SearchModal = ({
  open,
  products = [],
  setSearchInput,
  onClose,
}) => {

  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {

    if (!open) return;

    setRecentSearches(
      getRecentSearches()
    );

  }, [open]);



  const handleSelectRecent = (keyword) => {

    setSearchInput(keyword);

  };



  const handleClearRecent = () => {

    clearRecentSearches();

    setRecentSearches([]);

    onClose?.();

  };



  // Nothing to show
  if (
    !open ||
    (
      !products.length &&
      !recentSearches.length
    )
  ) {
    return null;
  }



  return (

    <AnimatePresence>

      <motion.div

        initial={{
          opacity: 0,
          y: 12,
          scale: 0.98,
        }}

        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}

        exit={{
          opacity: 0,
          y: 12,
          scale: 0.98,
        }}

        transition={{
          duration: 0.22,
          ease: [0.22, 1, 0.36, 1],
        }}

        className="
        absolute
        left-0
        top-[calc(100%+14px)]
        z-50

        w-92.5

        overflow-hidden

        rounded-3xl

        border
        border-neutral-200/70

        bg-white/95

        backdrop-blur-2xl

        shadow-[0_20px_70px_rgba(0,0,0,.08)]
        "

      >

        <div

          className="
          max-h-107.5

          overflow-y-auto

          px-4
          py-4

          scrollbar-none
          [-ms-overflow-style:none]
          [&::-webkit-scrollbar]:hidden
          "

        >

          {products.length > 0 ? (

            <SearchResults
              products={products}
            />

          ) : (

            <RecentSearches
              searches={recentSearches}
              onSelect={handleSelectRecent}
              onClear={handleClearRecent}
            />

          )}

        </div>

      </motion.div>

    </AnimatePresence>

  );

};

export default SearchModal;