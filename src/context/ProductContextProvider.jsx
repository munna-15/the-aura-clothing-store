import React, { createContext, useEffect, useState } from 'react'
import { collection_list, hoodie_list, newCollection, shirt_list, allProducts } from '../assets/assets';
import toast from "react-hot-toast";
import { useCallback } from 'react';
import useAuth from '../hooks/useAuth';
import {
  loadUserData,
  saveUserData,
} from "../utils/storage";


export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {

  const [cartLoaded, setCartLoaded] = useState(false);

  const { user } = useAuth();


  const addToRecentlyViewed = useCallback((product) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter(
        (item) => item._id !== product._id
      );

      return [product, ...filtered].slice(0, 8);
    });
  }, []);

  const [cartItems, setCartItems] = useState({});

  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const [search, setSearch] = useState("")
  const [searchInput, setSearchInput] = useState("");
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [sortBy, setSortBy] = useState("default");
  //advance-
  const [selectedSizes, setSelectedSizes] = useState([]);

  const [selectedColors, setSelectedColors] = useState([]);

  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: null,
  });

  const [inStockOnly, setInStockOnly] = useState(false);

  //function-
  const toggleSizeFilter = (size) => {

    setSelectedSizes((prev) => {

      if (prev.includes(size)) {

        return prev.filter(
          item => item !== size
        );

      }


      return [
        ...prev,
        size
      ];

    });

  };

  const clearFilters = () => {

    setSelectedCategory("All");

    setSelectedSizes([]);

    setSelectedColors([]);

    setPriceRange({
      min: 0,
      max: 10000,
    });

    setInStockOnly(false);

    setSortBy("default");

  };

  const removeSizeFilter = (size) => {

    setSelectedSizes((prev) =>
      prev.filter(
        (item) => item !== size
      )
    );

  };



  const removeColorFilter = (color) => {

    setSelectedColors((prev) =>
      prev.filter(
        (item) => item !== color
      )
    );

  };



  const toggleColorFilter = (color) => {


    setSelectedColors((prev) => {


      if (prev.includes(color)) {


        return prev.filter(
          item => item !== color
        );


      }


      return [
        ...prev,
        color
      ];


    });


  };
  const [wishlistItems, setWishlistItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [orders, setOrders] = useState([]);

  const [shippingData, setShippingData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    zipCode: "",
  });

  const getAvailableStock = (product, size) => {
    return typeof product.stock === "object"
      ? product.stock[size] || 0
      : product.stock;
  };


  const addToCart = (itemId, size, color, quantity = 1) => {

    const product = allProducts.find(
      (item) => item._id === itemId
    );


    if (!product) return false;


    const availableStock = getAvailableStock(
      product,
      size
    );


    if (availableStock <= 0) {

      toast.error("Out of Stock");

      return false;
    }


    const cartKey = `${itemId}-${size}-${color}`;


    const currentQuantity =
      cartItems[cartKey]?.quantity || 0;



    const newQuantity =
      currentQuantity + quantity;



    if (newQuantity > availableStock) {


      if (currentQuantity >= availableStock) {

        toast.error("Out of Stock");

      } else {

        toast.error(
          `Only ${availableStock - currentQuantity} item(s) left in stock`
        );

      }


      return false;
    }



    setCartItems((prev) => ({

      ...prev,

      [cartKey]: {

        itemId,

        size,

        color,

        quantity: newQuantity,

      },

    }));


    toast.success("Added to cart");


    return true;

  };

  const increaseCartQuantity = (cartKey) => {

    const item = cartItems[cartKey];


    if (!item) return;


    addToCart(
      item.itemId,
      item.size,
      item.color,
      1
    );


  };

  const getShippingCost = () => {

    const subtotal =
      getTotalCartAmount();


    if (subtotal === 0)
      return 0;


    return subtotal > 3000
      ? 0
      : 100;

  };

  const getVatAmount = () => {

    const subtotal =
      getTotalCartAmount();


    return subtotal > 0
      ? Math.round(subtotal * 0.05)
      : 0;

  };

  const getFinalTotal = () => {

    const subtotal =
      getTotalCartAmount();


    return (
      subtotal +
      getShippingCost() +
      getVatAmount()
    );

  };

  const clearCart = () => {

    setCartItems({});

  };

  const decreaseCartQuantity = (cartKey) => {

    setCartItems((prev) => {

      const updatedCart = { ...prev };


      if (!updatedCart[cartKey]) {
        return prev;
      }


      if (updatedCart[cartKey].quantity > 1) {

        updatedCart[cartKey] = {
          ...updatedCart[cartKey],
          quantity:
            updatedCart[cartKey].quantity - 1
        };


      } else {

        delete updatedCart[cartKey];

      }


      return updatedCart;

    });

  };

  const [reviews, setReviews] = useState(() => {
    const storedReviews = localStorage.getItem("reviews");

    if (storedReviews) {
      return JSON.parse(storedReviews);
    }

    const initialReviews = {};

    allProducts.forEach((product) => {
      initialReviews[product._id] = product.reviewsData || [];
    });

    return initialReviews;
  });

  const addToWishlist = (itemId) => {

    if (!user) {
      toast.error("Please login first");
      return;
    }


    if (wishlistItems.includes(itemId)) {
      return;
    }


    setWishlistItems((prev) => [
      ...prev,
      itemId
    ]);


    toast.success("Added to wishlist");

  };

  const removeFromWishlist = (itemId) => {

    setWishlistItems((prev) =>
      prev.filter(
        (id) => id !== itemId
      )
    );


    toast.success("Removed from wishlist");

  };

  const toggleWishlist = (itemId) => {
    if (wishlistItems.includes(itemId)) {
      removeFromWishlist(itemId)
    } else {
      addToWishlist(itemId);
    }

  };

  const updateCartQuantity = (cartKey, quantity) => {
    setCartItems((prev) => {
      const updated = { ...prev };

      if (!updated[cartKey]) return prev;

      if (quantity <= 0) {
        delete updated[cartKey];
      } else {
        updated[cartKey].quantity = quantity;
      }

      return updated;
    });
  };

  const deleteCartItem = (cartKey) => {
    setCartItems((prev) => {
      const updated = { ...prev };

      delete updated[cartKey];

      return updated;
    });

    toast.success("Item removed");
  };



  useEffect(() => {
    if (!user || !cartLoaded) return;

    localStorage.setItem(
      `cart-${user.id}`,
      JSON.stringify(cartItems)
    );
  }, [cartItems, user, cartLoaded]);


  useEffect(() => {
    localStorage.setItem(
      "reviews",
      JSON.stringify(reviews)
    );
  }, [reviews]);


  useEffect(() => {
    if (!user) {
      setCartItems({});
      setCartLoaded(false);
      return;
    }

    const storedCart = localStorage.getItem(
      `cart-${user.id}`
    );

    setCartItems(
      storedCart ? JSON.parse(storedCart) : {}
    );

    setCartLoaded(true);
  }, [user]);

  //wishlistEffect
  useEffect(() => {
    if (!user) {
      setWishlistItems([]);
      return;
    }

    setWishlistItems(
      loadUserData("wishlist", user.id, [])
    );
  }, [user]);

  useEffect(() => {
    saveUserData(
      "wishlist",
      user?.id,
      wishlistItems
    );
  }, [wishlistItems, user]);

  //recentltviwedEffect

  useEffect(() => {

    if (!user) {
      setRecentlyViewed([]);
      return;
    }


    const storedRecentlyViewed =
      localStorage.getItem(
        `recentlyViewed-${user.id}`
      );


    setRecentlyViewed(
      storedRecentlyViewed
        ? JSON.parse(storedRecentlyViewed)
        : []
    );


  }, [user]);

  useEffect(() => {

    if (!user) return;


    localStorage.setItem(
      `recentlyViewed-${user.id}`,
      JSON.stringify(recentlyViewed)
    );


  }, [recentlyViewed, user]);

  //orderEffect
  useEffect(() => {

    if (!user) {
      setOrders([]);
      return;
    }


    const storedOrders = localStorage.getItem(
      `orders-${user.id}`
    );


    setOrders(
      storedOrders
        ? JSON.parse(storedOrders)
        : []
    );


  }, [user]);

  useEffect(() => {

    if (!user) return;


    localStorage.setItem(
      `orders-${user.id}`,
      JSON.stringify(orders)
    );


  }, [orders, user]);

  //shippingEffect
  useEffect(() => {
    if (!user) {
      setShippingData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        address: "",
        zipCode: "",
      });
      return;
    }

    const storedShipping = localStorage.getItem(
      `shipping-${user.id}`
    );

    setShippingData(
      storedShipping
        ? JSON.parse(storedShipping)
        : {
          fullName: user.name || "",
          email: user.email || "",
          phone: "",
          country: "",
          city: "",
          address: "",
          zipCode: "",
        }
    );
  }, [user]);

  useEffect(() => {
    if (!user) return;

    localStorage.setItem(
      `shipping-${user.id}`,
      JSON.stringify(shippingData)
    );
  }, [shippingData, user]);


  const addReview = (productId, review) => {
    setReviews((prev) => ({
      ...prev,
      [productId]: [
        review,
        ...(prev[productId] || []),
      ],
    }));

    toast.success("Review submitted successfully");
  };

  const getTotalCartAmount = () => {
    return Object.values(cartItems).reduce((total, cartItem) => {
      const product = allProducts.find(
        (item) => item._id === cartItem.itemId
      );

      if (!product) return total;

      return total + product.price * cartItem.quantity;
    }, 0);
  };

  const [error, setError] = useState({});

  const validateShipping = () => {
    let newError = {};

    if (!shippingData.fullName.trim()) {
      newError.fullName = "Full name is requred"
    }
    if (!shippingData.email.trim()) {
      newError.email = "Email is requred";
    }
    // else if (
    //   !/^[A-Z0-9._%+-]+@[A-Z]\.{2,}$+/i.test(shipingData.email)) {
    //   newError.email = "Invalid Email"
    // }
    if (!shippingData.phone.trim()) {
      newError.phone = "Phone number is requred"
    }
    if (!shippingData.country.trim()) {
      newError.country = "Country is requred"
    }
    if (!shippingData.city.trim()) {
      newError.city = "City is requred"
    }
    if (!shippingData.address.trim()) {
      newError.address = "Address is requred"
    }
    setError(newError);

    return Object.keys(newError).length === 0;
  }

  const createOrder = () => {

    if (!user) {
      toast.error("Please login first");
      return;
    }

    if (Object.keys(cartItems).length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    const orderedProducts = Object.values(cartItems).map(
      (cartItem) => {

        const product = allProducts.find(
          (item) => item._id === cartItem.itemId
        );

        return {
          ...product,
          quantity: cartItem.quantity,
          size: cartItem.size,
          color: cartItem.color,
        };
      }
    );

    const subtotal = getTotalCartAmount();

    const shipping = subtotal >= 3000 ? 0 : subtotal > 0 ? 100 : 0;

    const vat = Math.round(subtotal * 0.05);

    const total = subtotal + shipping + vat;

    const newOrder = {
      id: `ORD-${Date.now()}`,

      userId: user.id,

      products: orderedProducts,

      subtotal,
      shipping,
      vat,
      total,

      shippingData,

      status: "Processing",

      paymentMethod: paymentMethod,

      date: new Date().toLocaleDateString(),
    };

    setOrders((prev) => [
      newOrder,
      ...prev,
    ]);

    clearCart();

    toast.success("Order placed successfully");
  };

  const buyAgain = (order) => {

    order.products.forEach((product) => {

      addToCart(
        product._id,
        product.size,
        product.color,
        product.quantity
      );

    });

    return true;
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce(
      (total, item) => total + item.quantity,
      0
    );
  };





  const contextValue = {
    collection_list,
    shirt_list,
    hoodie_list,
    newCollection,
    cartItems,
    addToCart,
    getTotalCartAmount,
    allProducts,

    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,

    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    selectedSize,
    setSelectedSize,

    selectedColor,
    setSelectedColor,

    sortBy,
    setSortBy,

    shippingData,
    setShippingData,

    error,
    setError,
    validateShipping,

    getCartCount,

    searchInput,
    setSearchInput,

    recentlyViewed,
    addToRecentlyViewed,

    reviews,
    addReview,

    isMiniCartOpen,
    setIsMiniCartOpen,

    orders,
    createOrder,
    setOrders,

    buyAgain,
    deleteCartItem,
    updateCartQuantity,
    decreaseCartQuantity,
    increaseCartQuantity,
    clearCart,
    getShippingCost,
    getVatAmount,
    getFinalTotal,
    paymentMethod,
    setPaymentMethod,
    selectedSizes,
    setSelectedSizes,

    selectedColors,
    setSelectedColors,

    priceRange,
    setPriceRange,

    inStockOnly,
    setInStockOnly,

    toggleSizeFilter,
    toggleColorFilter,

    clearFilters,
    removeSizeFilter,
    removeColorFilter,
  }




  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider