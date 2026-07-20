import { Search } from "lucide-react";

const SearchBar = ({
  showSearch,
  searchInput,
  setSearchInput,
  onSearch,
  onToggle,
  searchRef,
}) => {


  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onToggle}
        className="rounded-full p-2 transition-all duration-300 hover:bg-gray-100"
      >
        <Search size={21} />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${showSearch
          ? "w-64 opacity-100"
          : "w-0 opacity-0"
          }`}
      >
        <input
          ref={searchRef}
          type="text"
          value={searchInput}
          onChange={(e) =>
            setSearchInput(e.target.value)
          }
          onKeyDown={onSearch}
          placeholder="Search products..."
          className="w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-sm outline-none transition-all duration-300 focus:border-black"
        />
      </div>
    </div>
  );
};

export default SearchBar;