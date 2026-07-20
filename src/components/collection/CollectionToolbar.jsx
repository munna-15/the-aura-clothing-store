import { SlidersHorizontal } from "lucide-react";
import { useContext, useState } from "react";

import { ProductContext } from "../../context/ProductContextProvider";
import useCollection from "../../hooks/useCollection";

import FilterDrawer from "./FilterDrawer";


const CollectionToolbar = () => {


  const [isFilterOpen, setIsFilterOpen] = useState(false);


  const {
    sortBy,
    setSortBy,
    search,
    selectedCategory,
    selectedSizes,
    selectedColors,
    inStockOnly,
    priceRange,
  } = useContext(ProductContext);



  const { totalProducts } = useCollection();



  const activeFilterCount =
    selectedSizes.length +
    selectedColors.length +
    (inStockOnly ? 1 : 0) +
    (
      priceRange?.min > 0 ||
      priceRange?.max < 10000
        ? 1
        : 0
    );



  return (

    <section className="bg-white">

      <div className="mx-auto flex w-[92%] max-w-[1580px] flex-col gap-5 border-y border-black/5 py-6 lg:flex-row lg:items-center lg:justify-between">


        <div>

          <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-400">
            Collection
          </p>


          <h3 className="mt-2 text-lg font-medium text-black">

            {
              search.trim()
                ? `Showing ${totalProducts} results for "${search}"`
                : `${totalProducts} Premium Pieces`
            }

          </h3>


          <p className="mt-1 text-sm text-neutral-500">

            Category :

            <span className="ml-2 font-medium text-black">
              {selectedCategory}
            </span>

          </p>


        </div>





        <div className="flex flex-wrap items-center gap-3">


          <button
            type="button"
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-[11px] font-medium uppercase tracking-[0.28em] transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
          >

            <SlidersHorizontal size={15}/>

            Filter


            {
              activeFilterCount > 0 && (

                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1.5 text-[10px] text-white">

                  {activeFilterCount}

                </span>

              )
            }


          </button>






          <select
            value={sortBy}
            onChange={(e)=>setSortBy(e.target.value)}
            className="rounded-full border border-black/10 bg-white px-5 py-3 text-[11px] uppercase tracking-[0.22em] outline-none transition-all duration-300 hover:border-black"
          >

            <option value="default">
              Sort By
            </option>


            <option value="low">
              Price : Low to High
            </option>


            <option value="high">
              Price : High to Low
            </option>


            <option value="new">
              Newest
            </option>


          </select>



        </div>


      </div>





      <FilterDrawer
        open={isFilterOpen}
        onClose={()=>setIsFilterOpen(false)}
      />



    </section>

  );

};


export default CollectionToolbar;