import { Mail, Phone, Download, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-medium text-primary tracking-widest uppercase mb-3 block">
              Contact
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 tracking-tight">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 border border-border/60 rounded-md hover-lift text-center">
              <div className="w-10 h-10 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-3">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-sm font-medium mb-1">Email</h3>
              <a
                href="mailto:permisonmark17@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors text-xs break-all"
              >
                permisonmark17@gmail.com
              </a>
            </div>

            <div className="p-5 border border-border/60 rounded-md hover-lift text-center">
              <div className="w-10 h-10 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-3">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-sm font-medium mb-1">Mobile</h3>
              <a
                href="tel:09660816499"
                className="text-muted-foreground hover:text-primary transition-colors text-xs"
              >
                +63 966 081 6499
              </a>
            </div>

            <div className="p-5 border border-border/60 rounded-md hover-lift text-center">
              <div className="w-10 h-10 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-sm font-medium mb-1">Location</h3>
              <p className="text-muted-foreground text-xs">Philippines</p>
            </div>

            {/* Resume Download */}
            <a
              href="/Resume_Permison_Mark_TJ.pdf"
              download
              className="p-5 border border-border/60 rounded-md hover-lift text-center hover:border-primary/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-3">
                <Download className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-sm font-medium mb-1">Resume</h3>
              <span className="text-muted-foreground text-xs">Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;