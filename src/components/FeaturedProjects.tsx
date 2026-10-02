import { motion } from 'framer-motion';
import ProjectCard, { type ProjectItem } from './ProjectCard';
import { projectsData } from '../data/projects';

interface FeaturedProjectsProps {
  projects?: ProjectItem[];
}

export default function FeaturedProjects({
  projects = projectsData.filter((p) => p.featured),
}: FeaturedProjectsProps) {
  // Take up to 5 featured projects for the signature asymmetric editorial layout
  const [card1, card2, card3, card4, card5] = projects;

  return (
    <section className="w-full py-24 sm:py-32 relative">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header Matching Reference */}
        <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-28">
          {/* Top Badge: ¬ SELECTED WORK */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] text-[#0C0C0C]/80 uppercase mb-4 select-none"
          >
            <span className="text-[#F9452D] font-mono text-sm leading-none font-extrabold">
              &not;
            </span>
            <span>SELECTED WORK</span>
          </motion.div>

          {/* Main Title: Proven results, stunning designs */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-[#0C0C0C] tracking-tight leading-[1.08] mb-5 sm:mb-6"
          >
            Proven results,
            <br />
            stunning designs
          </motion.h2>

          {/* 2K26 Sub-label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl font-black text-[#0C0C0C] tracking-wider font-sans select-none"
          >
            2K26
          </motion.div>
        </div>

        {/* 5 Asymmetric Cards Layout */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-36">
          {/* Row 1: 2 Cards (Asymmetric 7 / 5 Grid) */}
          {(card1 || card2) && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
              {card1 && (
                <div className="lg:col-span-7 w-full">
                  <ProjectCard
                    project={card1}
                    index={0}
                    aspectRatioClass="aspect-[16/10]"
                  />
                </div>
              )}
              {card2 && (
                <div className="lg:col-span-5 w-full">
                  <ProjectCard
                    project={card2}
                    index={1}
                    aspectRatioClass="aspect-[16/10] sm:aspect-[4/3]"
                  />
                </div>
              )}
            </div>
          )}

          {/* Row 2: Centered Heroic Card */}
          {card3 && (
            <div className="w-full flex justify-center">
              <div className="w-full max-w-4xl lg:max-w-4xl">
                <ProjectCard
                  project={card3}
                  index={2}
                  aspectRatioClass="aspect-[16/10]"
                />
              </div>
            </div>
          )}

          {/* Row 3: 2 Cards (Asymmetric 7 / 5 Grid) */}
          {(card4 || card5) && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
              {card4 && (
                <div className="lg:col-span-7 w-full">
                  <ProjectCard
                    project={card4}
                    index={3}
                    aspectRatioClass="aspect-[16/10]"
                  />
                </div>
              )}
              {card5 && (
                <div className="lg:col-span-5 w-full">
                  <ProjectCard
                    project={card5}
                    index={4}
                    aspectRatioClass="aspect-[16/10] sm:aspect-[4/3]"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Right CTA: → All cases (17) matching reference */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 sm:mt-28 flex justify-end"
        >
          <a
            href="/projects"
            className="group inline-flex items-center gap-2.5 text-xl sm:text-2xl font-bold text-[#0C0C0C] hover:text-[#F9452D] transition-colors"
          >
            <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:translate-x-1.5">
              &rarr;
            </span>
            <span>All cases</span>
            <sup className="text-xs font-mono font-semibold text-[#F9452D] ml-0.5">
              (17)
            </sup>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
