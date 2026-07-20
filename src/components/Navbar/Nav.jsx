import DesktopNav from "./Desktop/DesktopNav";
import MobileTopbar from "./Mobile/MobileTopbar";
import MobileNav from "./Mobile/MobileNav";

import navLinks from "./navLinks";
import useNavbar from "../../hooks/useNavbar";

const Navbar = () => {

  const {
    user,
    searchInput,
    setSearchInput,
    handleSearch,
    showSearch,
    handleSearchToggle,
    closeSearch,
    cartCount,
    wishlistCount,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    openMiniCart,
    handleLogout,
    searchResults,
  } = useNavbar();


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };


  const sharedProps = {
    navLinks,
    user,
    searchInput,
    setSearchInput,
    onSearch: handleSearch,
    showSearch,
    onSearchToggle: handleSearchToggle,
    onCloseSearch: closeSearch,
    searchResults,
    cartCount,
    wishlistCount,
    onOpenCart: openMiniCart,
    onLogout: handleLogout,
  };


  return (
    <header className="relative z-50">

      <DesktopNav {...sharedProps} />


      <MobileTopbar
        cartCount={cartCount}
        isOpen={isMobileMenuOpen}
        onToggleMenu={toggleMobileMenu}
        onOpenCart={openMiniCart}
      />


      <MobileNav
        {...sharedProps}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

    </header>
  );
};

export default Navbar;