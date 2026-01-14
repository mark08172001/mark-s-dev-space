import { Code2, Briefcase, GraduationCap, Award } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '9+', label: 'Months Experience' },
  { icon: Code2, value: '2+', label: 'Personal Projects' },
  { icon: GraduationCap, value: 'BSIT', label: 'Degree Achieved' },
  { icon: Award, value: '5+', label: 'Certifications' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Passionate Developer &{' '}
              <span className="gradient-text">Problem Solver</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a <span className="text-foreground font-medium">BS Information Technology</span> graduate and an Entry-Level Full Stack / Business Application Developer with hands-on experience in software development and quality assurance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                During my time at <span className="text-primary font-medium">Forecasting and Planning Technologies, Inc.</span>, I worked as both a Business Application Developer (Contractual) and On-the-Job Trainee in QA/QC, where I gained valuable experience in developing and testing real-world business applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in <span className="text-foreground font-medium">web development, system development, quality assurance, and technical support</span>. I am detail-oriented, adaptable, and passionate about creating elegant solutions to complex problems.
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass-card p-4">
                  <span className="text-muted-foreground text-sm">Location</span>
                  <p className="text-foreground font-medium">Philippines</p>
                </div>
                <div className="glass-card p-4">
                  <span className="text-muted-foreground text-sm">Email</span>
                  <p className="text-foreground font-medium text-sm">permisonmark17@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card p-6 text-center hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
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
