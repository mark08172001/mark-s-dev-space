import { Building2, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: 'Business Application Developer',
    company: 'Forecasting and Planning Technologies, Inc.',
    type: 'Contractual',
    period: '2024',
    responsibilities: [
      'Developed and optimized web application modules',
      'Designed and implemented user interfaces',
      'Created SQL stored procedures and functions',
      'Participated in system integration, testing, and deployment',
    ],
  },
  {
    title: 'On-the-Job Trainee – QA/QC',
    company: 'Forecasting and Planning Technologies, Inc.',
    type: 'Internship',
    period: '2024',
    responsibilities: [
      'Performed Quality Assurance & Quality Control testing',
      'Prepared testing templates and documentation',
      'Assisted in software testing and bug reporting',
      'Experience with PC building, OS installation, troubleshooting, and networking',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-medium text-primary tracking-widest uppercase mb-3 block">
              Experience
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 tracking-tight">
              Work Experience
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Building real-world business applications and ensuring software quality
            </p>
            <div className="section-divider mt-6" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex gap-6 md:gap-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-6 w-2 h-2 rounded-full bg-primary -translate-x-[3px] mt-2 z-10" />

                  {/* Content */}
                  <div className="ml-6 md:ml-14 flex-1">
                    <div className="p-5 border border-border/60 rounded-md bg-card hover-lift">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-primary/5 text-primary text-xs">
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="text-base font-medium mb-1">{exp.title}</h3>

                      <div className="flex items-center gap-1.5 text-muted-foreground mb-4">
                        <Building2 className="w-3 h-3" />
                        <span className="text-xs">{exp.company}</span>
                      </div>

                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;