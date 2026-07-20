import {
  CheckCircle,
  Package,
  CreditCard,
  Truck,
  Home,
} from "lucide-react";

const OrderTimeline = ({ status }) => {

  const steps = [
    {
      title: "Order Placed",
      description: "We've received your order successfully.",
      icon: Package,
    },
    {
      title: "Payment Confirmed",
      description: "Your payment has been verified.",
      icon: CreditCard,
    },
    {
      title: "Shipped",
      description: "Your package has left our warehouse.",
      icon: Truck,
    },
    {
      title: "Out For Delivery",
      description: "Your order is on its way to you.",
      icon: Truck,
    },
    {
      title: "Delivered",
      description: "Package delivered successfully.",
      icon: Home,
    },
  ];



  const statusMap = {
    Processing: 2,
    Shipped: 3,
    "Out For Delivery": 4,
    Delivered: 5,
    Cancelled: 0,
  };



  const currentStep =
    statusMap[status] ?? 1;



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

      <div className="mb-8">

        <p
          className="
          text-[10px]
          uppercase
          tracking-[0.35em]
          text-neutral-400
          "
        >

          Tracking

        </p>

        <h2
          className="
          mt-2
          text-xl
          font-light
          tracking-wide
          sm:text-2xl
          "
        >

          Order Timeline

        </h2>

      </div>








      <div className="space-y-6">

        {steps.map((step, index) => {

          const Icon = step.icon;

          const completed =
            index + 1 < currentStep;

          const current =
            index + 1 === currentStep;

          return (

            <div
              key={step.title}
              className="relative flex gap-4"
            >

              {/* Line */}

              {index !== steps.length - 1 && (

                <div
                  className={`
                  absolute
                  left-4.75
                  top-10
                  h-[calc(100%+12px)]
                  w-px
                  ${
                    completed || current
                      ? "bg-black"
                      : "bg-neutral-200"
                  }
                  `}
                />

              )}






              {/* Icon */}

              <div
                className={`
                relative
                z-10
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                transition

                ${
                  completed
                    ? "bg-black text-white"
                    : current
                    ? "border-2 border-black bg-white text-black"
                    : "bg-neutral-100 text-neutral-400"
                }
                `}
              >

                {completed ? (
                  <CheckCircle size={18} />
                ) : (
                  <Icon size={18} />
                )}

              </div>








              {/* Content */}

              <div className="flex-1 pb-3">

                <div className="flex flex-wrap items-center gap-2">

                  <h3
                    className={`
                    text-sm
                    font-medium

                    ${
                      completed || current
                        ? "text-black"
                        : "text-neutral-400"
                    }
                    `}
                  >

                    {step.title}

                  </h3>





                  {current && (

                    <span
                      className="
                      rounded-full
                      bg-black
                      px-2.5
                      py-1
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.15em]
                      text-white
                      "
                    >

                      Current

                    </span>

                  )}

                </div>






                <p
                  className="
                  mt-1
                  max-w-md
                  text-sm
                  leading-6
                  text-neutral-500
                  "
                >

                  {step.description}

                </p>

              </div>

            </div>

          );

        })}

      </div>

    </section>

  );

};

export default OrderTimeline;