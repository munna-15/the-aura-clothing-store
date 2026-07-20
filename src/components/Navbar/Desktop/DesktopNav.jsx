


import { motion } from "framer-motion";

import DesktopLogo from "./DesktopLogo";
import DesktopMenu from "./DesktopMenu";
import DesktopActions from "./Actions/DesktopActions";

const DesktopNav = ({
  navLinks,
  user,
  cartCount,
  wishlistCount,
  onOpenCart,
  onLogout,
  onCloseSearch,
  searchInput,
  setSearchInput,
  onSearch,
  showSearch,
  onSearchToggle,
  searchResults,
  
}) => {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 hidden w-full border-b border-neutral-200/70 bg-white/80 backdrop-blur-2xl supports-backdrop-filter:bg-white/65 lg:block"
    >
      <div className="mx-auto flex h-20 w-[96%] max-w-[1800px] items-center">

        <div className="flex w-55 shrink-0 items-center">
          <DesktopLogo />
        </div>

        <div className="flex flex-1 items-center justify-center px-12">
          <DesktopMenu navLinks={navLinks} />
        </div>

        <div className="flex shrink-0 items-center justify-end">
          <DesktopActions
            user={user}
            cartCount={cartCount}
            wishlistCount={wishlistCount}
            onOpenCart={onOpenCart}
            onLogout={onLogout}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            onSearch={onSearch}
            showSearch={showSearch}
            onSearchToggle={onSearchToggle}
            onCloseSearch={onCloseSearch}
            searchResults={searchResults}
          />
        </div>

      </div>
    </motion.header>
  );
};

export default DesktopNav;