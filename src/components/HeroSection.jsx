import { ArrowDown, Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@/assets/profile.jpeg";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen gradient-hero relative overflow-hidden flex items-center"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-violet-800/20 blob animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-800/20 blob-2 animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Available for freelance work
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">AFFAN KHAN</span>
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-2">
                  <span className="text-pink-400">BVoc</span> <span className="text-muted-foreground">&</span> <span className="text-violet-400">AIML Student</span>
                </span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
               Affan Khan | BVoc AIML @ Nexcore Alliance
Driven by a deep passion for AI & Machine Learning.
Crafting smart, scalable solutions with modern web technologies.
Let’s build the future—one innovation at a time 🚀
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button className="bg-gradient-to-r from-violet-300 to-pink-200 hover:from-violet-700 hover:to-pink-600 text-white border-0">
                View My Work
              </Button>
              <Button variant="hero-outline">
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="text-sm text-muted-foreground">Follow me:</span>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "#https://github.com/affankhan2533-pixel/bright-canvas-portfolio" },
                  { icon: Linkedin, href: "#https://www.linkedin.com/feed/" },
                  { icon: Instagram, href: "#https://www.instagram.com/officialaffan___/" },
                  { icon: MessageCircle, href: "https://wa.me/+919876543210" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-soft transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full gradient-bg opacity-20 blur-2xl scale-110" />
              
              {/* Profile container */}
              <div 
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full p-1"
                style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899, #f97316)" }}
              >
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Affan Khan - Web Developer & UI/UX Designer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-card rounded-2xl px-4 py-2 shadow-card border border-border"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="font-display font-bold text-lg">5+</p>
                <p className="text-xs text-muted-foreground">Years Exp</p>
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-card rounded-2xl px-4 py-2 shadow-card border border-border"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <p className="font-display font-bold text-lg">50+</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs text-muted-foreground">Scroll Down</span>
          <ArrowDown size={20} className="text-primary" />
        </motion.div>
      </div>
    </section>
  );
}




