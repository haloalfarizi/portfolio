import { motion } from 'framer-motion';
import ProjectCard, { type ProjectItem } from './ProjectCard';
import { projectsData } from '../data/projects';

interface FeaturedProjectsProps {
  projects?: ProjectItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
}

export default function FeaturedProjects({
  projects = projectsData.filter((p) => p.featured),
  title,
  subtitle = "Selected workflow transformations across sales, operations, and internal systems.",
  badge = "OUR WORKS",
}: FeaturedProjectsProps) {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Editorial Header Matching User Reference */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Badge: OUR WORKS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <span className="px-3.5 py-1 text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#0C0C0C] bg-[#0C0C0C]/5 border border-[#0C0C0C]/15 rounded-md uppercase select-none">
              {badge}
            </span>
          </motion.div>

          {/* Main Editorial Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0C0C0C] tracking-tight leading-[1.08] mb-5"
          >
            {title ? (
              title
            ) : (
              <>
                Structured. Automated.
                <br />
                Delivered.
              </>
            )}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#0C0C0C]/70 leading-relaxed max-w-xl mx-auto font-sans"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Featured Projects Showcase List */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Bottom Navigation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 sm:mt-16 text-center"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-[#0C0C0C]/15 bg-white hover:bg-[#0C0C0C] text-[#0C0C0C] hover:text-white text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md group"
          >
            <span>Explore All Archive &amp; Projects</span>
            <span className="text-[#F9452D] group-hover:text-white transition-colors group-hover:translate-x-1 duration-300">
              &rarr;
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
