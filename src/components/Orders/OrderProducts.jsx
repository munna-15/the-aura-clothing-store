import { Package } from "lucide-react";
import { Link } from "react-router-dom";

const OrderProducts = ({ products }) => {

  return (

    <section
      className="
      rounded-3xl
      border
      border-neutral-200
      bg-white
      p-4
      shadow-sm
      sm:p-6
      lg:p-8
      "
    >

      {/* Header */}

      <div
        className="
        mb-6
        flex
        items-center
        gap-3
        "
      >

        <div
          className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-2xl
          bg-neutral-100
          "
        >

          <Package
            size={19}
            className="text-neutral-600"
          />

        </div>

        <div>

          <p
            className="
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-neutral-400
            "
          >
            Order Items
          </p>

          <h2
            className="
            mt-1
            text-xl
            font-light
            tracking-wide
            sm:text-2xl
            "
          >
            Ordered Products
          </h2>

        </div>

      </div>





      <div className="space-y-4">

        {

          products.map((product,index)=>(

            <article

              key={`${product._id}-${product.size}-${product.color}-${index}`}

              className="
              flex
              gap-4
              rounded-2xl
              border
              border-neutral-100
              bg-neutral-50/60
              p-4
              transition
              hover:border-neutral-300
              hover:shadow-sm
              "

            >



              {/* IMAGE */}

              <Link
                to={`/product/${product._id}`}
                className="
                shrink-0
                overflow-hidden
                rounded-2xl
                "
              >

                <img

                  src={product.image}

                  alt={product.name}

                  className="
                  h-24
                  w-20
                  rounded-2xl
                  object-cover
                  transition
                  duration-300
                  hover:scale-105
                  sm:h-28
                  sm:w-24
                  "

                />

              </Link>






              {/* CONTENT */}

              <div
                className="
                flex
                min-w-0
                flex-1
                flex-col
                justify-between
                "
              >


                <div>

                  <Link
                    to={`/product/${product._id}`}
                  >

                    <h3
                      className="
                      truncate
                      text-lg
                      font-medium
                      tracking-wide
                      transition
                      hover:text-neutral-600
                      sm:text-xl
                      "
                    >

                      {product.name}

                    </h3>

                  </Link>


                  <p
                    className="
                    mt-1
                    text-sm
                    text-neutral-500
                    "
                  >

                    Luxury Collection

                  </p>

                </div>







                <div
                  className="
                  mt-4
                  grid
                  grid-cols-2
                  gap-3
                  sm:grid-cols-4
                  "
                >


                  <Info
                    label="Size"
                    value={product.size}
                  />


                  <Info
                    label="Color"
                    value={product.color}
                    badge
                  />


                  <Info
                    label="Qty"
                    value={product.quantity}
                    badge
                  />


                  <Info
                    label="Price"
                    value={`৳${product.price.toLocaleString()}`}
                    price
                  />


                </div>



              </div>



            </article>

          ))

        }

      </div>

    </section>

  );

};









const Info = ({
  label,
  value,
  price,
  badge,
}) => (

  <div
    className="
    rounded-xl
    bg-white
    p-3
    "
  >

    <p
      className="
      text-[10px]
      uppercase
      tracking-[0.25em]
      text-neutral-400
      "
    >

      {label}

    </p>





    {

      badge ? (

        <span
          className="
          mt-2
          inline-flex
          rounded-full
          bg-neutral-100
          px-2.5
          py-1
          text-xs
          font-medium
          "
        >

          {value}

        </span>

      ) : (

        <p
          className={`mt-2 text-sm font-semibold ${
            price
              ? "text-black"
              : "text-neutral-800"
          }`}
        >

          {value}

        </p>

      )

    }

  </div>

);

export default OrderProducts;