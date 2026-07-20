import {
  MapPin,
  Phone,
  Mail,
  User,
} from "lucide-react";

const ShippingCard = ({ shippingData }) => {

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

          <MapPin
            size={19}
            className="text-neutral-700"
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

            Delivery

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

            Shipping Address

          </h2>

        </div>

      </div>







      <div
        className="
        grid
        gap-4
        lg:grid-cols-2
        "
      >



        {/* CUSTOMER */}


        <div
          className="
          rounded-2xl
          border
          border-neutral-100
          bg-neutral-50/60
          p-5
          "
        >


          <div
            className="
            mb-4
            flex
            items-center
            gap-3
            "
          >

            <div
              className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-white
              "
            >

              <User size={18} />

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Customer
              </p>

              <h3 className="mt-1 font-medium">
                {shippingData?.fullName}
              </h3>

            </div>

          </div>





          <div className="space-y-3 text-sm text-neutral-600">

            <div className="flex items-center gap-3">

              <Mail size={16} />

              <span className="break-all">

                {shippingData?.email}

              </span>

            </div>

            <div className="flex items-center gap-3">

              <Phone size={16} />

              <span>

                {shippingData?.phone}

              </span>

            </div>

          </div>

        </div>








        {/* ADDRESS */}


        <div
          className="
          rounded-2xl
          border
          border-neutral-100
          bg-neutral-50/60
          p-5
          "
        >

          <p
            className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-neutral-400
            "
          >

            Delivery Address

          </p>





          <p
            className="
            mt-4
            text-sm
            leading-7
            text-neutral-600
            "
          >

            {shippingData?.address}

            <br />

            {shippingData?.city},{" "}

            {shippingData?.country}

          </p>





          <div className="mt-5">

            <span
              className="
              inline-flex
              rounded-full
              bg-white
              px-4
              py-2
              text-xs
              font-medium
              text-neutral-600
              "
            >

              ZIP: {shippingData?.zipCode}

            </span>

          </div>

        </div>

      </div>

    </section>

  );

};

export default ShippingCard;