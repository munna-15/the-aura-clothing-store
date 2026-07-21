import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";

import MainImage from "./MainImage";
import ThumbnailList from "./ThumbnailList";


const ProductGallery = ({
  product,
  selectedImage,
  setSelectedImage,
}) => {


  const galleryImages = useMemo(() => {

    if (product?.images?.length) {
      return product.images;
    }

    return product?.image ? [product.image] : [];

  }, [product]);



  useEffect(() => {

    if (galleryImages.length && !selectedImage) {
      setSelectedImage(galleryImages[0]);
    }

  }, [
    galleryImages,
    selectedImage,
    setSelectedImage,
  ]);



  if (!galleryImages.length) return null;



  const activeIndex = Math.max(
    0,
    galleryImages.indexOf(selectedImage)
  );



  return (

    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .25, ease: "easeOut" }}
      className="min-w-0 w-full"
    >


      <div className="flex min-w-0 flex-col gap-3
                     sm:gap-4 lg:flex-row lg:gap-5">


        {/* Mobile Bottom / Desktop Side Thumbnail */}

        <div className="order-2 min-w-0 max-w-full lg:order-1 lg:w-20 lg:shrink-0">

          <ThumbnailList
            images={galleryImages}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            productName={product?.name}
          />

        </div>



        {/* Main Image */}

        <div className="order-1 min-w-0 flex-1 lg:order-2">


          <MainImage
            image={selectedImage || galleryImages[0]}
            productName={product?.name}
            currentIndex={activeIndex}
            totalImages={galleryImages.length}
          />


        </div>


      </div>


    </motion.section>

  );

};


export default ProductGallery;