import { motion } from "framer-motion";
import { useContext, useMemo } from "react";

import { ProductContext } from "../../context/ProductContextProvider";


const CategoryTabs = () => {


  const {
    allProducts,
    selectedCategory,
    setSelectedCategory,
  } = useContext(ProductContext);



  const categories = useMemo(() => {


    const categoryMap = new Map();



    allProducts.forEach((product) => {


      const category =
        product.category
          ?.trim();



      if (!category) return;



      const normalized =
        category.toLowerCase();



      if (!categoryMap.has(normalized)) {


        categoryMap.set(normalized, {

          name: category,

          count: 1,

        });


      } else {


        categoryMap.set(normalized, {

          ...categoryMap.get(normalized),

          count:
            categoryMap.get(normalized).count + 1,

        });


      }


    });



    return [

      {
        name: "All",
        count: allProducts.length,
      },


      ...Array.from(categoryMap.values()),


    ];


  }, [allProducts]);




  return (


    <section className="border-b border-black/5 bg-white">


      <div
        className="
        mx-auto flex max-w-7xl
        gap-3 overflow-x-auto
        px-6 py-8
        scrollbar-hide
        lg:justify-center
        "
      >


        {categories.map((category) => {


          const active =
            selectedCategory === category.name;



          return (


            <button

              key={category.name}

              onClick={() =>
                setSelectedCategory(category.name)
              }


              className={`
              relative isolate
              shrink-0
              rounded-full
              px-6 py-3

              text-[11px]
              font-medium
              uppercase
              tracking-[0.22em]

              transition-all
              duration-300

              ${
                active
                ? "text-white"
                : "text-neutral-500 hover:bg-neutral-100 hover:text-black"
              }
              `}

            >



              {active && (

                <motion.span

                  layoutId="active-category"

                  transition={{
                    type:"spring",
                    stiffness:350,
                    damping:30
                  }}

                  className="
                  absolute inset-0
                  -z-10
                  rounded-full
                  bg-black
                  shadow-lg
                  "

                />

              )}




              <span
                className="
                flex items-center gap-2
                "
              >

                {category.name}



                <span

                  className={`
                  rounded-full
                  px-2 py-0.5

                  text-[10px]

                  ${
                    active
                    ? "bg-white/15 text-white"
                    : "bg-neutral-100 text-neutral-500"
                  }
                  `}

                >

                  {category.count}


                </span>


              </span>



            </button>


          );


        })}


      </div>


    </section>


  );


};


export default CategoryTabs;