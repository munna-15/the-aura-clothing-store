import { Search } from "lucide-react";
import { motion } from "framer-motion";


const MobileSearch = ({
  searchInput,
  setSearchInput,
  onSearch,
  onClose,
}) => {


  const handleKeyDown = (e) => {

    onSearch(e);

    if(e.key === "Enter"){
      onClose();
    }

  };


  return (

    <motion.div
      initial={{opacity:0,y:10}}
      animate={{opacity:1,y:0}}
      transition={{duration:.25,delay:.05}}
      className="px-7 pt-6"
    >


      <div className="group flex items-center border-b border-neutral-300 pb-3 transition focus-within:border-black">


        <Search
          size={17}
          strokeWidth={1.8}
          className="text-neutral-400 transition group-focus-within:text-black"
        />


        <input
          type="search"
          value={searchInput}
          onChange={(e)=>setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search collection..."
          autoComplete="off"
          inputMode="search"
          className="ml-3 w-full bg-transparent text-[16px] text-black outline-none placeholder:text-neutral-400"
        />


      </div>


    </motion.div>

  );

};


export default MobileSearch;