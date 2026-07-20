import { useContext, useEffect, useMemo, useState } from "react";

import { ProductContext } from "../context/ProductContextProvider";
import useFilterProducts from "./useFilterProducts";


const useCollection = () => {


  const {
    allProducts,
    selectedCategory,
    sortBy,
    search,
    selectedSizes,
    selectedColors,
    priceRange,
    inStockOnly,
  } = useContext(ProductContext);



  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 600);


    return () => clearTimeout(timer);

  }, []);




  const filteredProducts = useFilterProducts(
    allProducts,
    selectedCategory,
    search,
    selectedSizes,
    selectedColors,
    priceRange,
    inStockOnly
  );




  const sortedProducts = useMemo(() => {

    const products = [...filteredProducts];


    switch(sortBy){


      case "low":

        products.sort(
          (a,b)=>a.price-b.price
        );

        break;



      case "high":

        products.sort(
          (a,b)=>b.price-a.price
        );

        break;



      case "new":

        products.sort(
          (a,b)=>
          Number(b.isNew)-Number(a.isNew)
        );

        break;



      case "featured":

        products.sort(
          (a,b)=>
          Number(b.featured)-Number(a.featured)
        );

        break;



      default:
        break;

    }


    return products;


  },[
    filteredProducts,
    sortBy
  ]);





  return {

    filteredProducts: sortedProducts,

    totalProducts: sortedProducts.length,

    loading,

    search,

    selectedCategory,

    sortBy,

  };


};


export default useCollection;