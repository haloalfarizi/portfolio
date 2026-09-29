import { motion, type Variants } from 'framer-motion';

export default function HeroMotion() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-8 sm:pb-12 px-6 sm:px-12 lg:px-16 text-white overflow-hidden"
    >
      {/* 100% Full-bleed Background Image with Cinematic Botanical Foliage */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/hero-bg.jpg"
          alt="Alfarizi Editorial Hero Background"
          className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.06]"
        />
      </div>

      {/* Cinematic Environmental Depth Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/95 via-black/35 to-black/55" />
      <div className="absolute inset-0 -z-10 bg-[#255031]/20 mix-blend-multiply" />
      <div className="absolute inset-0 -z-10 bg-radial from-transparent via-black/25 to-black/75 pointer-events-none" />

      {/* Mid-Left Statement & Explore Button (Aligned to the left like reference) */}
      <div className="max-w-xl sm:max-w-2xl my-auto py-8 sm:py-16 z-10">
        {/* Tag in brackets [ AL-FARIZI® ] */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-white/90 font-mono">
            [ <span className="text-[#F9452D]">AL-FARIZI®</span> ]
          </span>
        </motion.div>

        {/* Headline Statement */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-[3.25rem] font-bold text-white leading-[1.14] tracking-tight mb-8 drop-shadow-md"
        >
          We are a design studio shaping bold ideas into meaningful experiences.
        </motion.h1>

        {/* Explore Button (Exact match with reference image) */}
        <motion.div variants={itemVariants}>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="/projects"
            className="inline-flex items-center gap-3 pl-7 pr-2.5 py-2.5 rounded-full bg-white text-[#0C0C0C] font-bold text-sm sm:text-base shadow-2xl hover:bg-[#F8F8FF] transition-all group"
          >
            <span>Explore</span>
            <span className="w-7 h-7 rounded-full bg-[#0C0C0C] text-white flex items-center justify-center text-xs group-hover:bg-[#F9452D] group-hover:translate-x-0.5 transition-all">
              &rarr;
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* Middle Decorative Divider Row with Crosshairs & Asterisks */}
      <motion.div
        variants={itemVariants}
        className="w-full grid grid-cols-3 items-center text-white/60 text-xs font-mono py-5 border-t border-white/20 z-10"
      >
        {/* Left: Plus sign + subtext */}
        <div className="flex flex-col gap-1 items-start">
          <span className="text-white/90 font-light text-base leading-none">+</span>
          <span className="text-[10px] sm:text-[11px] tracking-widest text-white/80 uppercase font-mono">
            REVIVING CREATIVITY
          </span>
        </div>

        {/* Center: Asterisks spaced out */}
        <div className="flex justify-center items-center gap-8 text-white/70">
          <span className="text-base leading-none">*</span>
          <span className="text-base leading-none hidden sm:inline">*</span>
        </div>

        {/* Right: Plus sign aligned to right */}
        <div className="flex justify-end items-center">
          <span className="text-white/90 font-light text-base leading-none">+</span>
        </div>
      </motion.div>

      {/* Lower Section: Giant Typography "AL-FARIZI" + Bottom Right Badges */}
      <div className="relative pt-2 sm:pt-4 z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 w-full">
        {/* Giant Monolithic AL-FARIZI Title across bottom */}
        <motion.div
          variants={titleVariants}
          className="w-full overflow-hidden select-none pointer-events-none"
        >
          <span className="block text-[14vw] font-black tracking-tighter text-white leading-[0.78] uppercase truncate text-left">
            AL-FARIZI
          </span>
        </motion.div>

        {/* Bottom Right Floating Details */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-5 self-end md:self-auto shrink-0 pb-3"
        >
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white/85 whitespace-nowrap">
            [ SINCE 2019 ]
          </span>

          {/* Mini Floating Status Card */}
          <div className="hidden sm:inline-flex items-center gap-3 p-1.5 pr-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 text-xs text-white shadow-2xl">
            <img
              src="/images/hero-bg.jpg"
              alt="Thumbnail"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <div className="flex flex-col text-left">
              <span className="font-bold text-xs leading-tight">Alfarizi</span>
              <span className="text-[10px] text-[#7dd395] leading-tight flex items-center gap-1.5 font-mono pt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#52b772]"></span>
                Available
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
