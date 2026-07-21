import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import toast from "react-hot-toast";

import { ProductContext } from "../../context/ProductContextProvider";

import ProductGallery from "./Gallery/ProductGallery";
import ProductInfo from "./Info/ProductInfo";
import ProductActions from "./Sections/ProductActions";
import ProductFeatures from "./Sections/ProductFeatures";
import ProductAccordion from "./Info/ProductAccordion";
import RelatedProducts from "./Related/RelatedProducts";


const ProductDetails = () => {


  const { id } = useParams();


  const {
    allProducts,
    addToCart,
    wishlistItems,
    toggleWishlist,
  } = useContext(ProductContext);



  const product = allProducts.find(
    (item) => item._id === id
  );



  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);



  useEffect(() => {

    if (!product) return;


    setSelectedImage(
      product.images?.[0] || product.image || null
    );


    setSelectedColor(
      product.colors?.[0] || ""
    );


    setSelectedSize(
      product.sizes?.[0] || ""
    );


    setQuantity(1);


  }, [product]);




  if (!product) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-neutral-50">

        <h1 className="font-['Playfair_Display'] text-3xl font-medium text-neutral-900">
          Product Not Found
        </h1>

      </div>

    );

  }




  const currentStock =
    typeof product.stock === "object"
      ? product.stock[selectedSize] || 0
      : product.stock;




  const handleAddToCart = () => {


    if (!selectedColor || !selectedSize) {

      toast.error("Please select color and size");

      return;

    }


    addToCart(
      product._id,
      selectedSize,
      selectedColor,
      quantity
    );


  };





  return (

    <motion.main

      initial={{ opacity:0 }}

      animate={{ opacity:1 }}

      transition={{ duration:.25 }}

      className="min-h-screen overflow-x-hidden bg-neutral-50 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pt-12"

    >



      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">



        {/* Breadcrumb */}


        <div className="mb-6 flex items-center gap-2 overflow-hidden text-[10px] uppercase tracking-[0.3em] text-neutral-400 sm:mb-8">


          <span className="shrink-0">
            Home
          </span>


          <ChevronRight size={12}/>


          <span className="shrink-0">
            {product.category}
          </span>


          <ChevronRight size={12}/>


          <span className="truncate text-black">
            {product.name}
          </span>


        </div>





        {/* Main Product */}


        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_420px]">



          {/* Gallery */}


          <motion.div

            initial={{ opacity:0, x:-15 }}

            animate={{ opacity:1, x:0 }}

            transition={{ duration:.25 }}

            className="min-w-0 lg:sticky lg:top-28 lg:self-start"

          >


            <ProductGallery

              product={product}

              selectedImage={selectedImage}

              setSelectedImage={setSelectedImage}

            />


          </motion.div>






          {/* Info */}


          <motion.div

            initial={{ opacity:0, x:15 }}

            animate={{ opacity:1, x:0 }}

            transition={{ duration:.25 }}

            className="lg:sticky lg:top-28 lg:self-start"

          >


            <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:p-6">


              <ProductInfo

                product={product}

                selectedColor={selectedColor}

                setSelectedColor={setSelectedColor}

                selectedSize={selectedSize}

                setSelectedSize={setSelectedSize}

                currentStock={currentStock}

              />




              <div className="mt-6 border-t border-neutral-100 pt-6">


                <ProductActions

                  quantity={quantity}

                  setQuantity={setQuantity}

                  currentStock={currentStock}

                  handleAddToCart={handleAddToCart}

                  productId={product._id}

                  isWishlisted={wishlistItems?.includes(product._id)}

                  toggleWishlist={toggleWishlist}

                />


              </div>


            </div>


          </motion.div>



        </section>






        {/* Features */}


        <section className="mt-12 sm:mt-16">

          <ProductFeatures />

        </section>






        {/* Accordion */}


        <section className="mt-10 sm:mt-14">

          <ProductAccordion product={product} />

        </section>






        {/* Related */}


        <section className="mt-12 sm:mt-16">


          <RelatedProducts

            category={product.category}

            currentProductId={product._id}

          />


        </section>



      </div>



    </motion.main>

  );

};


export default ProductDetails;