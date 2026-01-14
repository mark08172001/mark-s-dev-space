import { Code2, Briefcase, GraduationCap, Award } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '9+', label: 'Months Experience' },
  { icon: Code2, value: '2+', label: 'Personal Projects' },
  { icon: GraduationCap, value: 'BSIT', label: 'Degree Achieved' },
  { icon: Award, value: '5+', label: 'Certifications' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-medium text-primary tracking-widest uppercase mb-3 block">
              About Me
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 tracking-tight">
              Passionate Developer & Problem Solver
            </h2>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* About Content */}
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                I am a <span className="text-foreground">BS Information Technology</span> graduate and an Entry-Level Full Stack / Business Application Developer with hands-on experience in software development and quality assurance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                During my time at <span className="text-primary">Forecasting and Planning Technologies, Inc.</span>, I worked as both a Business Application Developer (Contractual) and On-the-Job Trainee in QA/QC, where I gained valuable experience in developing and testing real-world business applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in <span className="text-foreground">web development, system development, quality assurance, and technical support</span>. I am detail-oriented, adaptable, and passionate about creating elegant solutions to complex problems.
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-3 pt-6">
                <div className="p-4 border border-border/60 rounded-md">
                  <span className="text-muted-foreground text-xs tracking-wide uppercase">Location</span>
                  <p className="text-foreground text-sm mt-1">Philippines</p>
                </div>
                <div className="p-4 border border-border/60 rounded-md">
                  <span className="text-muted-foreground text-xs tracking-wide uppercase">Email</span>
                  <p className="text-foreground text-sm mt-1 break-all">permisonmark17@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 border border-border/60 rounded-md text-center hover-lift"
                >
                  <div className="w-10 h-10 mx-auto mb-4 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-2xl font-semibold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;