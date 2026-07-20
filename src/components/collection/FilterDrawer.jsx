import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useContext, useEffect } from "react";

import { ProductContext } from "../../context/ProductContextProvider";
import useCollection from "../../hooks/useCollection";
import useFilterOptions from "../../hooks/useFilterOption";


const FilterDrawer = ({ open, onClose }) => {


  const {
    allProducts,
    selectedSizes,
    selectedColors,
    toggleSizeFilter,
    toggleColorFilter,
    removeSizeFilter,
    removeColorFilter,
    priceRange,
    setPriceRange,
    inStockOnly,
    setInStockOnly,
    clearFilters,
  } = useContext(ProductContext);



  const {
    filteredProducts,
  } = useCollection();



  const {
    sizes,
    colors,
    priceRange: defaultPrice,
  } = useFilterOptions(allProducts);

  useEffect(() => {

    if (priceRange.max === null) {

      setPriceRange(defaultPrice);

    }

  }, [defaultPrice]);




  const activeFilters =
    selectedSizes.length +
    selectedColors.length +
    (inStockOnly ? 1 : 0) +
    (
      priceRange?.max !== defaultPrice.max
        ? 1
        : 0
    );





  return (

    <AnimatePresence>

      {
        open && (

          <>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            />



            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed right-0 top-0 z-50 h-full w-full max-w-sm overflow-y-auto bg-white p-6 shadow-2xl"
            >



              <div className="flex items-center justify-between border-b border-black/10 pb-5">


                <div>

                  <h2 className="flex items-center text-lg font-semibold">

                    Filters -


                    {
                      activeFilters > 0 && (

                        <span className="ml-2 px-2.5 py-px bg-black rounded-full text-[14px] text-white">

                          {activeFilters}

                        </span>

                      )
                    }

                  </h2>


                  <p className="mt-1 text-xs text-neutral-500">

                    {filteredProducts.length} products found

                  </p>


                </div>



                <button onClick={onClose}>

                  <X size={22} />

                </button>


              </div>





              {/* Active Chips */}


              {
                activeFilters > 0 && (

                  <div className="mt-6 flex flex-wrap gap-2">


                    {
                      selectedSizes.map((size) => (

                        <Chip
                          key={size}
                          label={size}
                          onRemove={() => removeSizeFilter(size)}
                        />

                      ))
                    }



                    {
                      selectedColors.map((color) => (

                        <Chip
                          key={color}
                          label={color}
                          onRemove={() => removeColorFilter(color)}
                        />

                      ))
                    }


                  </div>

                )
              }







              <FilterGroup title="Size">

                <div className="flex flex-wrap gap-2">

                  {
                    sizes.map((size) => (

                      <FilterButton
                        key={size}
                        active={selectedSizes.includes(size)}
                        onClick={() => toggleSizeFilter(size)}
                      >

                        {size}

                      </FilterButton>

                    ))
                  }

                </div>

              </FilterGroup>







              <FilterGroup title="Color">

                <div className="flex flex-wrap gap-2">

                  {
                    colors.map((color) => (

                      <FilterButton
                        key={color}
                        active={selectedColors.includes(color)}
                        onClick={() => toggleColorFilter(color)}
                      >

                        {color}

                      </FilterButton>

                    ))
                  }

                </div>

              </FilterGroup>







              <FilterGroup title="Price">

                <input
                  type="range"
                  min={defaultPrice.min}
                  max={defaultPrice.max}
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                  className="w-full"
                />


                <div className="mt-3 flex justify-between text-sm text-neutral-600">

                  <span>
                    Min ৳{priceRange.min}
                  </span>


                  <span>
                    Max ৳{priceRange.max}
                  </span>


                </div>


              </FilterGroup>







              <label className="mt-8 flex items-center gap-3 text-sm">


                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                />


                Only in stock


              </label>








              <div className="mt-10 flex gap-3">


                <button
                  onClick={clearFilters}
                  className="flex-1 rounded-full border border-black/10 py-3 text-xs uppercase tracking-widest transition hover:border-black"
                >

                  Clear

                </button>



                <button
                  onClick={onClose}
                  className="flex-1 rounded-full bg-black py-3 text-xs uppercase tracking-widest text-white"
                >

                  Apply

                </button>


              </div>



            </motion.aside>


          </>

        )

      }

    </AnimatePresence>

  );

};







const FilterGroup = ({ title, children }) => (

  <div className="mt-8">

    <h3 className="text-xs font-medium uppercase tracking-[0.25em]">
      {title}
    </h3>

    <div className="mt-4">
      {children}
    </div>

  </div>

);







const FilterButton = ({ active, onClick, children }) => (

  <button
    onClick={onClick}
    className={`rounded-full border px-4 py-2 text-xs transition ${active ? "border-black bg-black text-white" : "border-black/10 hover:border-black"}`}
  >

    {children}

  </button>

);







const Chip = ({ label, onRemove }) => (

  <button
    onClick={onRemove}
    className="flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs"
  >

    {label}

    <X size={12} />

  </button>

);



export default FilterDrawer;