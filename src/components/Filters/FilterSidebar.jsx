import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContextProvider'

const FilterSidebar = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
  } = useContext(ProductContext);

  const sizes = ["S", "M", "L", "XL"];
  const colors = ["Black", "White", "Blue", "Gray", "Brown", "Red"];
  return (
    <aside className='w-90 bg-white rounded-xl shadow-md p-6 h-fit sticky top-32 self-start'>
      <h2 className='text-2xl font-bold mb-6'>
        Filters
      </h2>
      <div className='mb-8'>
        <h3 className='font-semibold mb-3'>Category</h3>
        <div className='space-y-2'>
          <button
            onClick={() => setSelectedCategory("All")}
            className={`block w-full text-left px-3 py-2 rounded-lg ${selectedCategory === "All"
                ? "bg-black text-white"
                : "hover:bg-gray-100"
              }`}
          >
            All Products
          </button>
          <button
            onClick={() => setSelectedCategory("shirt")}
            className={`block w-full text-left px-3 py-2 rounded-lg ${selectedCategory === "shirt"
                ? "bg-black text-white"
                : "hover:bg-gray-100"
              }`}
          >
            Shirts
          </button>
          <button
            onClick={() => setSelectedCategory("hoodie")}
            className={`block w-full text-left px-3 py-2 rounded-lg ${selectedCategory === "hoodie"
                ? "bg-black text-white"
                : "hover:bg-gray-100"
              }`}
          >
            Hoodies
          </button>
        </div>
      </div>
      <div className='mb-8'>
        <h3 className='font font-semibold mb-3'>
          Size
        </h3>
        <div className='flex gap-2 flex-wrap'>
          {sizes.map((size) => (
            <button
              key={size}
              onClick={()=> setSelectedSize(size)}
              className={`w-11 h-11 rounded-lg border ${
                selectedSize === size
                ? "bg-black text-white"
                : "hover:border-black"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

      </div>
      <div className='mb-8'>
        <h3 className='font font-semibold mb-3'>
          COlor
        </h3>
        <div className='flex gap-2 flex-wrap'>
          {colors.map((color) => (
            <button
              key={color}
              onClick={()=> setSelectedColor(color)}
              className={`w-15 h-11 rounded-lg border-2 border-gray-300 ${
                selectedColor === color
                ? "bg-black text-white border-none "
                : "hover:border-gray-300 hover:border "
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          setSelectedCategory("All")
          setSelectedSize("")
          setSelectedColor("")
        }}
        className='w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600'
      >
        Reset Filters
      </button>
    </aside>
  )
}

export default FilterSidebar