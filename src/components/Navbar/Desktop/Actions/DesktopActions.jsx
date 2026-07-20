import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import ActionSlot from "./ActionSlot";
import SearchSlot from "./SearchSlot";
import DesktopActionLink from "./DesktopActionLink";
import UserDropdown from "../Dropdown/UserDropdown";


const DesktopActions = ({
  user,
  cartCount,
  onOpenCart,
  onLogout,

  showSearch,
  searchInput,
  setSearchInput,

  onSearch,
  onSearchToggle,
  onCloseSearch,
  searchResults,
}) => {


  return (

    <motion.div

      animate={{
        x: showSearch ? -20 : 0,
      }}

      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}

      className="
        flex
        items-center
        gap-7
      "

    >


      {/* Search */}

      <ActionSlot>

        <SearchSlot

          showSearch={showSearch}

          searchInput={searchInput}

          setSearchInput={setSearchInput}

          onSearch={onSearch}

          onSearchToggle={onSearchToggle}

          onCloseSearch={onCloseSearch}
          searchResults={searchResults}

        />

      </ActionSlot>




      {/* Bag */}

      <ActionSlot>

        <DesktopActionLink

          count={cartCount}

          onClick={onOpenCart}

        >

          Bag

        </DesktopActionLink>

      </ActionSlot>




      {/* Account */}

      <ActionSlot>


        {user ? (

          <UserDropdown

            user={user}

            onLogout={onLogout}

          />

        ) : (

          <Link

            to="/login"

            className="
              text-[12px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-neutral-600
              transition
              duration-300
              hover:text-black
            "

          >

            Account

          </Link>

        )}


      </ActionSlot>



    </motion.div>

  );

};


export default DesktopActions;