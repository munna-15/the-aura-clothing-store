import LookbookHeader from "./LookbookHeader";
import LookbookImage from "./LookbookImage";
import LookbookCard from "./LookbookSideCard";
import lookbookData from "./lookbookData";
import { assets } from "../../assets/assets";

const Lookbook = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      {/* Background Blur */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-neutral-100/80 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <LookbookHeader />

        <div className="mt-12 space-y-6 lg:mt-16 lg:space-y-8">
          {/* Hero Image */}
          <LookbookImage image={assets.image_4} />

          {/* Bottom Cards */}
          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {lookbookData.map((item) => (
              <LookbookCard
                key={item.id}
                badge={item.badge}
                title={item.title}
                description={item.description}
                button={item.button}
                path={item.path}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lookbook;