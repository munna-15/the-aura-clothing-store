import { Search, X } from "lucide-react";


const DesktopSearch = ({
  searchInput,
  setSearchInput,
  onSearch,
  onClose,
}) => {


  const handleClose = () => {

    if (searchInput.trim()) {

      setSearchInput("");

      return;

    }


    onClose();

  };



  const handleKeyDown = (e) => {


    if (e.key === "Enter") {

      onSearch(e);

    }



    if (e.key === "Escape") {

      handleClose();

    }

  };



  return (

    <div
      className="
        relative
        flex
        h-full
        w-full
        items-center
      "
    >


      {/* Search Icon */}

      <Search
        size={15}
        strokeWidth={1.8}
        className="
          pointer-events-none
          absolute
          left-4
          text-neutral-400
        "
      />



      {/* Input */}

      <input

        autoFocus

        type="text"

        value={searchInput}

        onChange={(e) =>
          setSearchInput(e.target.value)
        }

        onKeyDown={handleKeyDown}

        placeholder="Search collection..."

        className="
          h-full
          w-full
          rounded-full
          border
          border-neutral-200
          bg-white
          pl-10
          pr-10
          text-[12px]
          font-medium
          tracking-[0.12em]
          text-neutral-900
          outline-none
          transition-all
          duration-300
          placeholder:text-neutral-400
          focus:border-black
        "

      />



      {/* Close */}

      <button

        type="button"

        onClick={handleClose}

        className="
          absolute
          right-3
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          text-neutral-400
          transition
          duration-300
          hover:bg-neutral-100
          hover:text-black
        "

      >

        <X size={13}/>

      </button>


    </div>

  );

};


export default DesktopSearch;