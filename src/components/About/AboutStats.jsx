import { motion } from "framer-motion";

const stats = [
  {
    number: "100%",
    title: "Premium Fabric",
  },
  {
    number: "500+",
    title: "Curated Styles",
  },
  {
    number: "10K+",
    title: "Happy Customers",
  },
  {
    number: "24/7",
    title: "Customer Support",
  },
];

const AboutStats = () => {
  return (
    <section className="bg-neutral-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-[92%] max-w-[1580px]">
        <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-transparent bg-white p-6 text-center transition-all duration-300 hover:border-neutral-200 hover:shadow-lg"
            >
              <h3 className="font-['Playfair_Display'] text-3xl font-semibold text-black sm:text-4xl lg:text-5xl">
                {item.number}
              </h3>

              <div className="mx-auto mt-4 h-px w-10 bg-neutral-200 transition-all duration-300 hover:w-16" />

              <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-400 sm:text-[11px]">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;