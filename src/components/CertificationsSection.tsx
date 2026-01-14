import { Award, Cloud, Shield, Network, Code, Monitor } from 'lucide-react';

const certifications = [
  {
    title: 'Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft',
    icon: Cloud,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Microsoft Cybersecurity Fundamentals',
    issuer: 'Microsoft',
    icon: Shield,
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Networking & Server Setup',
    issuer: 'Professional Training',
    icon: Network,
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'CSS & Web Development',
    issuer: 'Professional Training',
    icon: Code,
    color: 'from-orange-500/20 to-amber-500/20',
  },
  {
    title: 'Computer Systems & Network Maintenance',
    issuer: 'Professional Training',
    icon: Monitor,
    color: 'from-rose-500/20 to-red-500/20',
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
              Certifications
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Professional <span className="gradient-text">Credentials</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Continuous learning and professional development
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="glass-card overflow-hidden hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Header */}
                <div className={`h-24 bg-gradient-to-br ${cert.color} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-xl bg-background/20 backdrop-blur-sm border border-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <cert.icon className="w-7 h-7 text-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
