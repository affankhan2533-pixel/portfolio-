import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "affankhan2533@gmail.com",
    href: "mailto:affankhan2533@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Mumbai, India",
    href: "#",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 blob" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 blob-2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-medium">Get in Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Let's create something amazing together.
            Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary group-hover:shadow-soft transition-all duration-300">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Decorative Card */}
            <div className="bg-card rounded-3xl p-6 border border-border">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center">
                  <Send className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-2">
                    Let's talk about your project
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    I'm always excited to work on new projects and collaborate
                    with amazing people. Drop me a message!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 border border-border shadow-card space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  required
                />
              </div>

              <Button type="submit" variant="hero" className="w-full">
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}




