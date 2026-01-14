import { Mail, Phone, Download, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 hover-lift text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:permisonmark17@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors text-xs break-all"
              >
                permisonmark17@gmail.com
              </a>
            </div>

            <div className="glass-card p-6 hover-lift text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Mobile</h3>
              <a
                href="tel:09660816499"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                +63 966 081 6499
              </a>
            </div>

            <div className="glass-card p-6 hover-lift text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">Philippines</p>
            </div>

            {/* Resume Download */}
            <a
              href="/Resume_Permison_Mark_TJ.pdf"
              download
              className="glass-card p-6 hover-lift text-center hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-primary group-hover:animate-bounce" />
              </div>
              <h3 className="font-semibold mb-2">Resume</h3>
              <span className="text-muted-foreground text-sm">Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
