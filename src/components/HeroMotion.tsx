import { motion, type Variants } from 'framer-motion';

export default function HeroMotion() {
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
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-3xl mx-auto text-center"
    >
      {/* Availability Badge balanced with #255031 */}
      <motion.div
        variants={itemVariants}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#255031]/25 bg-[#255031]/10 text-[#255031] text-xs font-semibold tracking-wide mb-6"
      >
        <span className="w-2 h-2 rounded-full bg-[#255031] animate-pulse"></span>
        Available for new projects & opportunities
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0C0C0C] mb-6 leading-tight"
      >
        Hi, I'm{' '}
        <span className="relative inline-block text-[#0C0C0C]">
          Alfarizi
          <span className="inline-block text-[#F9452D]">.</span>
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg sm:text-xl text-[#0C0C0C]/75 leading-relaxed mb-8 max-w-2xl mx-auto"
      >
        Fullstack Software Engineer & UI/UX enthusiast building sleek, accessible, and high-performance digital experiences.
      </motion.p>

      {/* Action Buttons */}
      <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-4">
        {/* Primary CTA with #F9452D */}
        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          href="/projects"
          className="px-6 py-3.5 rounded-xl bg-[#F9452D] hover:bg-[#E23821] text-white font-medium shadow-lg shadow-[#F9452D]/20 transition-all flex items-center gap-2 group"
        >
          <span>View Selected Projects</span>
          <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </motion.a>

        {/* Structural secondary button with #0C0C0C */}
        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          href="/contact"
          className="px-6 py-3.5 rounded-xl bg-[#0C0C0C] hover:bg-[#1F1F1F] text-[#F8F8FF] font-medium shadow-md transition-all flex items-center gap-2 group"
        >
          <span>Get in Touch</span>
          <span className="text-[#F9452D] transition-transform group-hover:translate-x-1">&rarr;</span>
        </motion.a>
      </motion.div>

      {/* Tech stack badges */}
      <motion.div
        variants={itemVariants}
        className="mt-14 pt-8 border-t border-[#0C0C0C]/10 flex flex-wrap justify-center items-center gap-3 text-xs text-[#0C0C0C]/70"
      >
        <span className="text-[#0C0C0C] font-bold uppercase tracking-wider text-[11px] mr-2">Core Tech:</span>
        <span className="px-3 py-1.5 rounded-lg bg-white border border-[#0C0C0C]/10 font-mono shadow-xs text-[#0C0C0C]">TypeScript</span>
        <span className="px-3 py-1.5 rounded-lg bg-white border border-[#0C0C0C]/10 font-mono shadow-xs text-[#0C0C0C]">React & Astro</span>
        <span className="px-3 py-1.5 rounded-lg bg-white border border-[#0C0C0C]/10 font-mono shadow-xs text-[#0C0C0C]">Node.js</span>
        <span className="px-3 py-1.5 rounded-lg bg-white border border-[#0C0C0C]/10 font-mono shadow-xs text-[#0C0C0C]">Tailwind CSS</span>
      </motion.div>
    </motion.div>
  );
}
