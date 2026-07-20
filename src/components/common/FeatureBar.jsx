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
      <div className="mx-auto flex w-[85%] max-w-[1580px] flex-wrap items-center justify-center gap-x-8 gap-y-5 py-6 lg:justify-between">

        {features.map((feature) => (
          <div
            key={feature}
            className="group flex items-center gap-3 transition-all duration-300"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-black group-hover:bg-black">
              <Check
                size={14}
                className="text-black transition-colors duration-300 group-hover:text-white"
              />
            </div>

            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-700 transition-colors duration-300 group-hover:text-black">
              {feature}
            </span>
          </div>
        ))}

      </div>
    </section>
  );
};

export default FeatureBar;