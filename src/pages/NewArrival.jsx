import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContextProvider'

const NewArrival = () => {
  const { allProducts, addToCart } = useContext(ProductContext)
  return (
    <div className='w-full flex justify-center mt-35 items-start' id='newarrival'>
      <div className='w-[95%]'>
        <h1 className='text-5xl font-semibold'>New Products-</h1>
        <div>
          <h2 className='text-center text-4xl mt-10 font-bold'>New Collections -</h2>
          <div className='flex mt-10 flex-wrap gap-10'>
            {allProducts.map((items, idx) => {
              return <div key={idx} className='bg-white/20 relative h-110 w-72 rounded-xl flex flex-col gap-1  shadow-xl '>
                <img src={items.image} alt="" className='h-65 w-72 rounded-xl object-cover rounded-b-none' />
                <div className='flex flex-col p-2 items-center'>
                  <p className='text-gray-900 font-semibold text-lg '>{items.name}</p>
                  <p className='text-sm w-full text-gray-500 font-semibold mt-2.5'>{items.description}</p>
                </div>
                  <div className='flex justify-between items-center p-3'>
                    <p className='text-xl font-semibold '>BDT- {items.price}</p>
                  <button
                    onClick={()=> addToCart(items._id)}
                    className='bg-gray-400 px-4 py-1.5 rounded cursor-pointer text-white font-semibold'>
                      Buy
                    </button>

                  </div>
              </div>
            })}
          </div>
          {/* <h2 className='text-center text-4xl mt-10 font-bold'>Hoodie Collections -</h2> */}
          {/* <div className='flex mt-10 flex-wrap gap-10'>

            {hoodie_list.map((items, idx) => {
              return <div key={idx} className='bg-white/20 relative h-100 w-65 rounded-xl flex flex-col gap-1  shadow-xl '>
                <img src={items.image} alt="" className='h-60 w-65 rounded-xl object-cover rounded-b-none' />
                <div className='flex flex-col p-2 items-center'>
                  <p className='text-gray-900 font-semibold text-lg '>{items.name}</p>
                  <p className='text-sm w-full text-gray-500 font-semibold mt-2.5'>{items.description}</p>
                  <p className='text-xl font-semibold mt-4'>BDT- {items.price}</p>
                </div>
              </div>
            })}
          </div> */}

        </div>

      </div>


    </div>
  )
}

export default NewArrival