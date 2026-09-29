import { motion, type Variants } from 'framer-motion';

export default function HeroMotion() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden min-h-[620px] sm:min-h-[720px] lg:min-h-[780px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 text-white shadow-2xl border border-[#0C0C0C]/10"
    >
      {/* Background Image with Rich Botanical / Forest Green Atmosphere */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/hero-bg.jpg"
          alt="Alfarizi Editorial Hero Background"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
        />
      </div>

      {/* Atmospheric Overlays for Depth and Contrast */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/40 to-black/50" />
      <div className="absolute inset-0 -z-10 bg-[#255031]/15 mix-blend-multiply" />
      <div className="absolute inset-0 -z-10 bg-radial from-transparent via-black/20 to-black/60 pointer-events-none" />

      {/* Top Meta Details Row */}
      <motion.div variants={itemVariants} className="flex items-center justify-between text-xs tracking-widest uppercase font-mono text-white/80 z-10">
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#52b772] animate-pulse"></span>
          <span>JAKARTA, ID</span>
          <span className="text-white/40">•</span>
          <span className="hidden sm:inline text-white/60">UTC+7</span>
        </div>

        <div className="text-white/80 font-mono text-[11px] sm:text-xs tracking-wider">
          [ DESIGN & CODE ]
        </div>
      </motion.div>

      {/* Mid Section: Headline, Tag, and Explore Button (Aligned to the left like reference) */}
      <div className="my-auto py-8 sm:py-12 max-w-xl z-10">
        {/* Small Tag in Brackets [ AL-FARIZI® ] */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-wider text-white/90">
            [ <span className="text-[#F9452D] font-bold">AL-FARIZI®</span> ]
          </span>
        </motion.div>

        {/* Statement Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-[2.6rem] font-bold text-white leading-[1.2] tracking-tight mb-8 drop-shadow-sm"
        >
          We are a design studio shaping bold ideas into meaningful experiences.
        </motion.h1>

        {/* Explore Button (Exact match with reference image) */}
        <motion.div variants={itemVariants}>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/projects"
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white text-[#0C0C0C] font-semibold text-sm shadow-xl hover:bg-[#F8F8FF] transition-all group"
          >
            <span>Explore</span>
            <span className="w-5 h-5 rounded-full bg-[#0C0C0C] text-white flex items-center justify-center text-xs group-hover:bg-[#F9452D] transition-colors">
              &rarr;
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* Middle Decorative Divider Row with Crosshairs & Asterisks */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-3 items-center text-white/50 text-xs font-mono py-4 border-t border-white/10 z-10"
      >
        {/* Left: Plus sign + subtext */}
        <div className="flex flex-col gap-1 items-start">
          <span className="text-white/80 font-light text-sm leading-none">+</span>
          <span className="text-[10px] tracking-widest text-white/70 uppercase font-mono">
            REVIVING CREATIVITY
          </span>
        </div>

        {/* Center: Asterisks spaced out */}
        <div className="flex justify-center items-center gap-6 text-white/60">
          <span className="text-sm leading-none">*</span>
          <span className="text-sm leading-none hidden sm:inline">*</span>
        </div>

        {/* Right: Plus sign aligned to right */}
        <div className="flex justify-end items-center">
          <span className="text-white/80 font-light text-sm leading-none">+</span>
        </div>
      </motion.div>

      {/* Lower Section: Giant Typography "AL-FARIZI" + Bottom Right Badges */}
      <div className="relative pt-2 sm:pt-4 z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        {/* Giant Monolithic AL-FARIZI Title */}
        <motion.div
          variants={titleVariants}
          className="w-full overflow-hidden select-none"
        >
          <span className="block text-[3.8rem] sm:text-[6.5rem] md:text-[8.5rem] lg:text-[10.5rem] font-black tracking-tighter text-white leading-[0.82] uppercase truncate">
            AL-FARIZI
          </span>
        </motion.div>

        {/* Bottom Right Floating Details */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 self-end md:self-auto shrink-0 pb-2"
        >
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-white/80 whitespace-nowrap">
            [ SINCE 2021 ]
          </span>

          {/* Mini Floating Status Card */}
          <div className="hidden sm:inline-flex items-center gap-2.5 p-1.5 pr-3.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-xs text-white shadow-xl">
            <img
              src="/images/hero-bg.jpg"
              alt="Thumbnail"
              className="w-7 h-7 rounded-lg object-cover"
            />
            <div className="flex flex-col text-left">
              <span className="font-bold text-[11px] leading-tight">Alfarizi</span>
              <span className="text-[9px] text-[#7dd395] leading-tight flex items-center gap-1 font-mono">
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
