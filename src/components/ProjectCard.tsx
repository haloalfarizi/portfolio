import { motion } from 'framer-motion';

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  year?: string;
  category?: string;
  client?: string;
  image?: string;
  metrics?: ProjectMetric[];
}

interface Props {
  project: ProjectItem;
  index?: number;
  aspectRatioClass?: string;
  className?: string;
}

export default function ProjectCard({
  project,
  index = 0,
  aspectRatioClass = "aspect-[16/10]",
  className = "",
}: Props) {
  const CardWrapper = project.link ? 'a' : 'div';
  const wrapperProps = project.link
    ? {
        href: project.link,
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex flex-col w-full ${className}`}
    >
      <CardWrapper
        {...wrapperProps}
        className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9452D]"
      >
        {/* Media Frame with Top-Right Arrow Indicator */}
        <div
          className={`w-full ${aspectRatioClass} bg-[#ECECF0] rounded-none sm:rounded-sm relative overflow-hidden flex items-center justify-center`}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#E5E5EB] text-[#0C0C0C]/40 font-mono text-sm uppercase">
              {project.title}
            </div>
          )}

          {/* Top-Right Red Corner Arrow Accent (from reference image) */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 pointer-events-none">
            <span className="text-[#F9452D] text-base sm:text-lg font-bold inline-block transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </div>
        </div>

        {/* Textual Metadata Below Image */}
        <div className="pt-4 sm:pt-5">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0C0C0C] tracking-tight leading-snug group-hover:text-[#F9452D] transition-colors duration-200">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#0C0C0C]/65 leading-relaxed mt-1 mb-3.5 max-w-lg">
            {project.description}
          </p>

          {/* Tag Pills */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-0.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono tracking-wider uppercase font-medium text-[#0C0C0C]/75 border border-[#0C0C0C]/20 bg-transparent transition-colors group-hover:border-[#0C0C0C]/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </CardWrapper>
    </motion.div>
  );
}
