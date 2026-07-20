import { SearchX } from "lucide-react";
import { motion } from "framer-motion";


const EmptySearch = ({
  keyword,
}) => {


  return (

    <motion.div

      initial={{
        opacity:0,
        y:10,
      }}

      animate={{
        opacity:1,
        y:0,
      }}

      transition={{
        duration:.25,
      }}

      className="
      flex
      flex-col
      items-center
      justify-center
      py-12
      text-center
      "

    >


      <div

        className="
        mb-4
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-neutral-100
        "

      >

        <SearchX
          size={18}
          className="text-neutral-400"
        />

      </div>



      <p

        className="
        text-sm
        font-medium
        tracking-tight
        text-neutral-900
        "

      >

        No products found

      </p>



      <p

        className="
        mt-2
        max-w-xs
        text-xs
        leading-relaxed
        text-neutral-400
        "

      >

        We couldn't find anything for{" "}

        <span className="font-medium text-neutral-700">

          "{keyword}"

        </span>


      </p>



    </motion.div>

  );

};


export default EmptySearch;