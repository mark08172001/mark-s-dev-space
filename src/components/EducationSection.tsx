import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
              Education
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Academic <span className="gradient-text">Background</span>
            </h2>
          </div>

          {/* Education Card */}
          <div className="glass-card p-8 hover-lift">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="text-xl text-primary font-medium mb-4">
                  Saint Louis University
                </p>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>2020 – 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Baguio City, Philippines</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Completed a comprehensive curriculum covering software development, web technologies, database management, networking, and IT project management. Gained hands-on experience through various projects and internship opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
