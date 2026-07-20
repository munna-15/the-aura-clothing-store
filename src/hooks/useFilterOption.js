import { useMemo } from "react";


const useFilterOptions = (products = []) => {


  const options = useMemo(() => {


    const sizeSet = new Set();

    const colorSet = new Set();


    let minPrice = Infinity;

    let maxPrice = 0;




    products.forEach((product) => {



      /*
        Sizes
      */

      if (Array.isArray(product.sizes)) {


        product.sizes.forEach((size)=>{

          if(size){

            sizeSet.add(
              size.trim()
            );

          }

        });


      }




      /*
        Colors
      */

      if (Array.isArray(product.colors)) {


        product.colors.forEach((color)=>{


          if(color){

            colorSet.add(
              color.trim()
            );

          }


        });


      }





      /*
        Price Range
      */


      if(typeof product.price === "number"){


        minPrice =
          Math.min(
            minPrice,
            product.price
          );


        maxPrice =
          Math.max(
            maxPrice,
            product.price
          );


      }




    });





    return {


      sizes:
        Array.from(sizeSet)
        .sort(),



      colors:
        Array.from(colorSet)
        .sort(),



      priceRange: {


        min:
          minPrice === Infinity
          ? 0
          : minPrice,



        max:
          maxPrice,

      },


    };



  }, [products]);





  return options;


};


export default useFilterOptions;