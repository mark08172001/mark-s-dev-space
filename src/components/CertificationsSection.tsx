import { Award, Cloud, Shield, Network, Code, Monitor } from 'lucide-react';

const certifications = [
  { title: 'Microsoft Azure AI Fundamentals', issuer: 'Microsoft', icon: Cloud },
  { title: 'Microsoft Cybersecurity Fundamentals', issuer: 'Microsoft', icon: Shield },
  { title: 'Networking & Server Setup', issuer: 'Professional Training', icon: Network },
  { title: 'CSS & Web Development', issuer: 'Professional Training', icon: Code },
  { title: 'Computer Systems & Network Maintenance', issuer: 'Professional Training', icon: Monitor },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-medium text-primary tracking-widest uppercase mb-3 block">
              Certifications
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 tracking-tight">
              Professional Credentials
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Continuous learning and professional development
            </p>
            <div className="section-divider mt-6" />
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-5 border border-border/60 rounded-md bg-card hover-lift group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0">
                    <cert.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
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