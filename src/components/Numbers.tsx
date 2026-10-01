import { motion, type Variants } from 'framer-motion';

interface StatItem {
  number: string;
  title: string;
  description: string;
}

const stats: StatItem[] = [
  {
    number: "5+",
    title: "Websites launched",
    description: "High-performance digital experiences built from scratch to scale.",
  },
  {
    number: "100+",
    title: "Marketing designs",
    description: "High-impact visual assets crafted for conversion and campaigns.",
  },
  {
    number: "8+",
    title: "Brands shaped",
    description: "Distinctive identities and digital presence designed to stand out.",
  },
];

export default function Numbers() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full py-20 sm:py-28 border-b border-[#0C0C0C]/10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="w-full"
      >
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-start gap-12 sm:gap-16 lg:gap-24 mb-16 sm:mb-24">
          {/* Left: Let's talk link with #F9452D elbow arrow */}
          <motion.div variants={itemVariants} className="w-full md:w-48 lg:w-56 shrink-0 pt-1">
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#0C0C0C] hover:text-[#F9452D] transition-colors group cursor-pointer"
            >
              <span className="text-[#F9452D] text-xl font-bold transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5">
                &#8627;
              </span>
              <span>Let's talk</span>
            </a>
          </motion.div>

          {/* Right: Editorial Main Heading */}
          <motion.div variants={itemVariants} className="max-w-4xl lg:max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0C0C0C] tracking-tight leading-[1.2]">
              <span className="block sm:whitespace-nowrap">Our work speaks through numbers.</span>
              <span className="block sm:whitespace-nowrap">Here's what we've achieved so far.</span>
            </h2>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 pt-10 border-t border-[#0C0C0C]/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col justify-start"
            >
              <span className="text-6xl sm:text-7xl lg:text-8xl font-semibold text-[#0C0C0C] tracking-tighter leading-none mb-4 font-sans select-none">
                {stat.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0C0C0C] mb-2 tracking-tight">
                {stat.title}
              </h3>
              <p className="text-sm sm:text-base text-[#0C0C0C]/65 leading-relaxed max-w-xs">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
