import {
  CreditCard,
  CheckCircle2,
  Wallet,
  Landmark,
} from "lucide-react";

const paymentConfig = {
  cod: {
    title: "Cash on Delivery",
    icon: Wallet,
  },
  card: {
    title: "Credit / Debit Card",
    icon: CreditCard,
  },
  bank: {
    title: "Bank Transfer",
    icon: Landmark,
  },
  bkash: {
    title: "bKash",
    icon: Wallet,
  },
};

const PaymentCard = ({ paymentMethod }) => {

  const method =
    paymentConfig[paymentMethod] ||
    paymentConfig.cod;

  const Icon = method.icon;

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

          <CreditCard
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

            Payment

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

            Payment Method

          </h2>

        </div>

      </div>







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
          flex
          flex-col
          gap-5
          sm:flex-row
          sm:items-center
          sm:justify-between
          "
        >




          <div
            className="
            flex
            items-center
            gap-4
            "
          >

            <div
              className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-white
              "
            >

              <Icon size={20} />

            </div>

            <div>

              <p
                className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-neutral-400
                "
              >

                Selected Method

              </p>

              <h3
                className="
                mt-1
                text-lg
                font-medium
                "
              >

                {method.title}

              </h3>

              <p
                className="
                mt-1
                text-sm
                text-neutral-500
                "
              >

                Payment information verified

              </p>

            </div>

          </div>






          <div
            className="
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-full
            bg-green-50
            px-4
            py-2
            text-xs
            font-medium
            text-green-700
            "
          >

            <CheckCircle2 size={15} />

            Confirmed

          </div>

        </div>

      </div>

    </section>

  );

};

export default PaymentCard;