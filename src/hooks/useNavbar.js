import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ProductContext } from "../context/ProductContextProvider";
import useAuth from "./useAuth";
import { saveRecentSearch } from "../components/Navbar/Desktop/Search/searchData";


const useNavbar = () => {

  const navigate = useNavigate();

  const { user, logout } = useAuth();


  const {
    getCartCount,
    wishlistItems,
    setIsMiniCartOpen,
    setSearch,
    allProducts,
  } = useContext(ProductContext);



  const [showSearch, setShowSearch] = useState(false);

  const [searchInput, setSearchInput] = useState("");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  // Open / Close Search

  const handleSearchToggle = () => {
    setSearchInput("");
    setShowSearch((prev) => !prev);
  };

  const closeSearch = () => {
    setShowSearch(false);
  };




  // Search Submit

  const handleSearch = (e) => {

    if (e.key !== "Enter") return;


    const keyword = searchInput.trim();


    if (!keyword) return;


    saveRecentSearch(keyword);


    setSearch(keyword);


    navigate(
      `/collection?search=${encodeURIComponent(keyword)}`
    );

  };

  const filteredProducts = (allProducts || []).filter((product) => {

    const query = searchInput
      .toLowerCase()
      .trim();

    if (!query) return false;


    const searchableText = [

      product.name,

      product.category,

      product.description,

      ...(product.colors || []),

    ]
      .join(" ")
      .toLowerCase();


    return query
      .split(" ")
      .every(word =>
        searchableText.includes(word)
      );

  });


  const openMiniCart = () => {

    setIsMiniCartOpen(true);

  };



  const handleLogout = () => {

    logout();

    navigate("/login", {
      replace: true,
    });

  };







  return {

    user,


    searchInput,
    setSearchInput,


    showSearch,
    handleSearchToggle,
    handleSearch,



    cartCount: getCartCount(),

    wishlistCount: wishlistItems.length,


    openMiniCart,


    handleLogout,


    isMobileMenuOpen,
    setIsMobileMenuOpen,
    closeSearch,
    searchResults: filteredProducts,

  };

};


export default useNavbar;