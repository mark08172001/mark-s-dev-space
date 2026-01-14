import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-medium text-primary tracking-widest uppercase mb-3 block">
              Education
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 tracking-tight">
              Academic Background
            </h2>
            <div className="section-divider mt-6" />
          </div>

          {/* Education Card */}
          <div className="p-6 border border-border/60 rounded-md hover-lift">
            <div className="flex flex-col md:flex-row items-start gap-5">
              <div className="w-12 h-12 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-medium mb-1">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="text-primary text-sm mb-3">Saint Louis University</p>

                <div className="flex flex-wrap gap-3 mb-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    2020 – 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Baguio City, Philippines
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Completed a comprehensive curriculum covering software development, web technologies, database management, networking, and IT project management.
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