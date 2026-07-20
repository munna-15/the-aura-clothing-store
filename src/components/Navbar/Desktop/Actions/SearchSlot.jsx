import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import DesktopActionLink from "./DesktopActionLink";
import DesktopSearch from "./DesktopSearch";
import SearchModal from "../Search/SearchModal";


const SearchSlot = ({
  showSearch,
  searchInput,
  setSearchInput,
  onSearch,
  onSearchToggle,
  onCloseSearch,
  searchResults = [],
}) => {


  const searchRef = useRef(null);



  // Close outside click
  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {

        if (showSearch) {
          onCloseSearch();
        }

      }

    };


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };


  }, [
    showSearch,
    onCloseSearch,
  ]);




  const showDropdown =
    showSearch &&
    searchInput.trim().length > 0 &&
    searchResults.length > 0;



  return (

    <motion.div

      ref={searchRef}

      animate={{
        width: showSearch ? 340 : 88,
      }}

      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}

      className="
      relative
      flex
      h-11
      shrink-0
      items-center
      "

    >


      <AnimatePresence
        mode="wait"
        initial={false}
      >


        {showSearch ? (


          <motion.div

            key="search-input"

            initial={{
              opacity: 0,
              x: 20,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            exit={{
              opacity: 0,
              x: 20,
            }}

            transition={{
              duration: 0.25,
            }}

            className="
            flex
            h-full
            w-full
            items-center
            "

          >


            <DesktopSearch

              searchInput={searchInput}

              setSearchInput={setSearchInput}

              onSearch={onSearch}

              onClose={onCloseSearch}

            />


          </motion.div>



        ) : (


          <motion.div

            key="search-button"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            className="
            flex
            h-full
            w-full
            items-center
            "

          >


            <DesktopActionLink

              onClick={onSearchToggle}

            >

              Search

            </DesktopActionLink>


          </motion.div>


        )}


      </AnimatePresence>




      {/* Suggestion Dropdown */}

      <SearchModal
        open={showSearch}
        products={searchResults}
        setSearchInput={setSearchInput}
        onClose={onCloseSearch}
      />


    </motion.div>

  );

};


export default SearchSlot;