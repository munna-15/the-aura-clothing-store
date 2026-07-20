import { useMemo } from "react";


const useFilterProducts = (
  products = [],
  category = "All",
  search = "",
  selectedSizes = [],
  selectedColors = [],
  priceRange = {
    min: 0,
    max: 10000,
  },
  inStockOnly = false
) => {


  const filteredProducts = useMemo(() => {


    let result = [...products];



    // Category Filter

    if (category !== "All") {


      if (category === "New Collection") {


        result = result.filter(
          (product) =>
            product.newCollection
        );


      } else {


        result = result.filter(
          (product) =>
            product.category
              ?.trim()
              .toLowerCase() ===
            category
              .trim()
              .toLowerCase()
        );


      }


    }





    // Search Filter

    if (search.trim()) {


      const keywords =
        search
          .trim()
          .toLowerCase()
          .split(" ");



      result = result.filter((product) => {


        const searchableText = [

          product.name,

          product.category,

          product.description,

          ...(product.colors || []),

          ...(product.sizes || []),


        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();



        return keywords.every(
          (word) =>
            searchableText.includes(word)
        );


      });


    }





    // Size Filter

    if (selectedSizes.length) {


      result = result.filter(
        (product) =>

          product.sizes?.some(
            (size) =>
              selectedSizes.includes(size)
          )

      );


    }





    // Color Filter

    if (selectedColors.length) {


      result = result.filter(
        (product) =>

          product.colors?.some(
            (color) =>
              selectedColors.includes(color)
          )

      );


    }





    // Price Filter

    result = result.filter((product) =>

      product.price >= priceRange.min &&

      (
        priceRange.max === null ||
        product.price <= priceRange.max
      )

    );




    // Stock Filter

    if (inStockOnly) {


      result = result.filter(
        (product) => {


          if (typeof product.stock === "object") {


            return Object.values(
              product.stock
            )
              .some(
                (qty) => qty > 0
              );


          }


          return product.stock > 0;


        }

      );


    }





    return result;


  }, [
    products,
    category,
    search,
    selectedSizes,
    selectedColors,
    priceRange,
    inStockOnly
  ]);




  return filteredProducts;


};


export default useFilterProducts;