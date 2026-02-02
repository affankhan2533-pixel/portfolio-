import { Github, Linkedin, Instagram, MessageCircle, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: MessageCircle, href: "https://wa.me/+919876543210", label: "WhatsApp" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-gradient-to-r hover:from-violet-500 hover:to-pink-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1 text-center">
            Made with <Heart size={14} className="text-pink-500 fill-pink-500" /> by AFFAN KHAN © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}




