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
      <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        Available for new projects & opportunities
      </motion.div>

      <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
        Hi, I'm{' '}
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Alfarizi
        </span>
      </motion.h1>

      <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
        Fullstack Software Engineer & UI/UX enthusiast building sleek, accessible, and high-performance digital experiences.
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-4">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="/projects"
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-500/25 transition-colors"
        >
          View Selected Projects
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="/contact"
          className="px-6 py-3 rounded-xl glass hover:bg-white/10 text-gray-200 font-medium transition-colors"
        >
          Get in Touch &rarr;
        </motion.a>
      </motion.div>

      {/* Tech stack badges */}
      <motion.div variants={itemVariants} className="mt-14 pt-8 border-t border-gray-800/80 flex flex-wrap justify-center items-center gap-6 text-xs text-gray-400">
        <span className="text-gray-500 font-semibold uppercase tracking-wider">Core Tech:</span>
        <span className="px-3 py-1 rounded-md bg-gray-800/60 border border-gray-700/50">TypeScript</span>
        <span className="px-3 py-1 rounded-md bg-gray-800/60 border border-gray-700/50">React & Astro</span>
        <span className="px-3 py-1 rounded-md bg-gray-800/60 border border-gray-700/50">Node.js</span>
        <span className="px-3 py-1 rounded-md bg-gray-800/60 border border-gray-700/50">Tailwind CSS</span>
      </motion.div>
    </motion.div>
  );
}
