import React from 'react';
import FadeIn from '../components/FadeIn';

interface Job {
  number: string;
  role: string;
  companies: string;
  description: string;
}

const jobs: Job[] = [
  {
    number: '01',
    role: 'Data Analyst Intern',
    companies: 'Bluestock Fintech',
    description: 'Cleaned, preprocessed, and analyzed complex financial data. Engineered predictive analytics dashboards and extracted actionable business intelligence.',
  },
  {
    number: '02',
    role: 'Python & AI/ML Intern',
    companies: 'iBase Electrosoft & Codec Technologies',
    description: 'Developed machine learning models (Random Forest, Decision Trees) and implemented SMOTE for handling imbalanced datasets. Built functional AI prototypes.',
  },
  {
    number: '03',
    role: 'Full Stack & Web Dev Intern',
    companies: 'YHills, TRAILLX, The Skybrisk, & Unified Mentor',
    description: 'Architected robust APIs and created frontend layouts using the MERN stack. Ensured standard databases, high responsiveness, and cross-platform layouts.',
  },
  {
    number: '04',
    role: 'IoT & Wearable Electronics Intern',
    companies: 'STBIF & Pantech Solutions',
    description: 'Designed embedded firmware and integrated sensor arrays for remote health monitors, smart wearables, and automated telemetry systems.',
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="
        bg-white
        rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        px-5 sm:px-8 md:px-10
        py-20 sm:py-24 md:py-32
      "
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center text-[#0c0c0c] mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      {/* Experience list */}
      <div className="max-w-5xl mx-auto">
        {jobs.map((job, i) => (
          <FadeIn key={job.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderTop:
                  i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
              }}
            >
              {/* Number */}
              <span
                className="font-black text-[#0c0c0c] leading-none flex-shrink-0 select-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {job.number}
              </span>

              {/* Role + Companies & Description */}
              <div className="flex flex-col justify-center gap-1 sm:gap-2 pt-2">
                <span
                  className="font-medium uppercase text-[#0c0c0c] leading-tight"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {job.role}
                </span>
                <span className="text-[#0c0c0c]/80 font-bold uppercase tracking-wider text-xs md:text-sm">
                  {job.companies}
                </span>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0c0c0c] mt-2"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.7,
                  }}
                >
                  {job.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
