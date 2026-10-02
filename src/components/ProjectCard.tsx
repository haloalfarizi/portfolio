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
  variant?: 'showcase' | 'compact';
}

export default function ProjectCard({ project, index = 0, variant }: Props) {
  // If variant is explicitly showcase or if project has an image and variant isn't compact
  const isShowcase = variant === 'showcase' || (variant !== 'compact' && Boolean(project.image));

  if (isShowcase) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-white rounded-3xl sm:rounded-[2.5rem] border border-[#0C0C0C]/10 shadow-xl shadow-black/[0.03] overflow-hidden group hover:border-[#0C0C0C]/25 transition-all duration-500"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
          {/* Left Column: Product / Device / UI Mockup Render */}
          <div className="lg:col-span-6 xl:col-span-7 bg-[#EFEFF5] relative overflow-hidden flex items-center justify-center p-6 sm:p-10 lg:p-12">
            <div className="w-full h-full min-h-[300px] sm:min-h-[400px] relative rounded-2xl overflow-hidden shadow-lg border border-black/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Right Column: Case Study Content (Light Theme) */}
          <div className="lg:col-span-6 xl:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-white text-[#0C0C0C]">
            <div>
              {/* Year • Category */}
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#0C0C0C]/60 pb-5 border-b border-[#0C0C0C]/10">
                <span>
                  {project.year || '2026'} &bull; {project.category || 'CASE STUDY'}
                </span>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0C0C0C]/60 hover:text-[#0C0C0C] transition-colors p-1"
                    aria-label={`GitHub repo for ${project.title}`}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Brand Wordmark */}
              {project.client && (
                <div className="font-serif text-2xl font-bold tracking-wider text-[#0C0C0C] mt-6 mb-4 select-none">
                  {project.client}
                </div>
              )}

              {/* Case Study Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0C0C0C] tracking-tight leading-[1.2] mt-4 mb-4 group-hover:text-[#F9452D] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#0C0C0C]/70 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Action Button matching reference: View Case Study > */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0C0C0C] hover:bg-[#F9452D] text-white text-xs sm:text-sm font-semibold transition-all duration-300 w-fit shadow-md group/btn"
                >
                  <span>View Case Study</span>
                  <span className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1">&gt;</span>
                </a>
              )}
            </div>

            {/* Bottom Metrics Row matching reference */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 gap-6 pt-8 mt-8 border-t border-[#0C0C0C]/10">
                {project.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="flex flex-col">
                    <span className="text-3xl sm:text-4xl font-black text-[#0C0C0C] tracking-tight leading-none mb-1.5 font-sans">
                      {metric.value}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#0C0C0C]/60 leading-tight">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // Fallback compact card for non-showcase items (e.g. general grid on /projects page)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="light-card rounded-2xl p-6 flex flex-col justify-between h-full group relative overflow-hidden bg-white border border-[#0C0C0C]/10 shadow-sm"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0C0C0C] bg-[#0C0C0C]/5 px-2.5 py-1 rounded-full border border-[#0C0C0C]/10">
            {project.category || (project.featured ? 'Featured' : 'Project')}
          </span>
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#0C0C0C]/60 hover:text-[#0C0C0C] transition-colors p-1"
                aria-label={`GitHub repo for ${project.title}`}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-[#0C0C0C]/60 hover:text-[#F9452D] transition-colors p-1"
                aria-label={`Live demo for ${project.title}`}
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-[#0C0C0C] mb-2 group-hover:text-[#F9452D] transition-colors">
          {project.title}
        </h3>
        <p className="text-[#0C0C0C]/70 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 pt-4 border-t border-[#0C0C0C]/10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-[#0C0C0C]/5 text-[#0C0C0C] border border-[#0C0C0C]/10 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
