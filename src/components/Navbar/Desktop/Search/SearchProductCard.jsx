import { Link } from "react-router-dom";


const SearchProductCard = ({
  product,
}) => {


  return (

    <Link

      to={`/product/${product._id}`}

      className="
      group
      flex
      items-center
      gap-3
      rounded-xl
      p-2
      transition
      duration-300
      hover:bg-neutral-50
      "

    >


      {/* Product Image */}

      <div

        className="
        h-12
        w-11
        shrink-0
        overflow-hidden
        rounded-lg
        bg-neutral-100
        "

      >

        <img

          src={product.image}

          alt={product.name}

          className="
          h-full
          w-full
          object-cover
          transition
          duration-500
          group-hover:scale-110
          "

        />

      </div>




      {/* Product Info */}

      <div

        className="
        flex
        min-w-0
        flex-1
        flex-col
        gap-1
        "

      >


        <h3

          className="
          truncate
          text-[13px]
          font-medium
          tracking-tight
          text-neutral-900
          "

        >

          {product.name.replaceAll("-", " ")}

        </h3>




        <div

          className="
          flex
          items-center
          justify-between
          "

        >


          <p

            className="
            text-[9px]
            uppercase
            tracking-[0.28em]
            text-neutral-400
            "

          >

            {product.category}

          </p>




          <span

            className="
            flex
            items-center
            gap-1
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-neutral-400
            transition
            duration-300
            group-hover:text-black
            "

          >

            View

            <span
              className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              "
            >
              →
            </span>


          </span>



        </div>


      </div>



    </Link>

  );

};


export default SearchProductCard;