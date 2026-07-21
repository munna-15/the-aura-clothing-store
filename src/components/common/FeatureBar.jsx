import { Check } from "lucide-react";

const features = [
  "Free Shipping",
  "Easy Returns",
  "Secure Checkout",
  "24/7 Support",
];

const FeatureBar = () => {
  return (
    <section className="border-y border-black/5 bg-white">

      <div className="mx-auto flex w-[92%] max-w-350 flex-wrap items-center justify-center gap-x-10 gap-y-5 py-6 lg:justify-between">

        {features.map((feature) => (

          <div
            key={feature}
            className="flex items-center gap-3"
          >

            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black">

              <Check
                size={13}
                strokeWidth={2}
                className="text-white"
              />

            </div>


            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-700">
              {feature}
            </span>


          </div>

        ))}

      </div>

    </section>
  );
};

export default FeatureBar;