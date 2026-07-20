import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import SearchProductCard from "./SearchProductCard";

const SearchResults = ({
  products = [],
  keyword = "",
}) => {

  if (!products.length) return null;

  const visibleProducts = products.slice(0, 4);

  return (

    <section className="space-y-4">

      {/* Header */}

      <div className="flex items-end justify-between">

        <p
          className="
          text-[10px]
          font-medium
          uppercase
          tracking-[0.35em]
          text-neutral-400
          "
        >
          Products
        </p>

        <span
          className="
          text-[11px]
          text-neutral-400
          "
        >
          {products.length} Results
        </span>

      </div>



      {/* Products */}

      <div className="space-y-1">

        {visibleProducts.map((product) => (

          <SearchProductCard
            key={product._id}
            product={product}
          />

        ))}

      </div>



      {/* View All */}

      {products.length > 4 && (

        <Link

          to={`/collection?search=${encodeURIComponent(keyword)}`}

          className="
          group
          flex
          items-center
          justify-center
          gap-2

          rounded-xl

          border
          border-neutral-200

          py-3

          text-[11px]
          font-medium
          uppercase
          tracking-[0.22em]

          text-neutral-600

          transition
          duration-300

          hover:border-black
          hover:bg-black
          hover:text-white
          "

        >

          View all results

          <ArrowRight

            size={14}

            className="
            transition-transform
            duration-300
            group-hover:translate-x-1
            "

          />

        </Link>

      )}

    </section>

  );

};

export default SearchResults;