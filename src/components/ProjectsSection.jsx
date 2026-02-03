import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const projects = [
  {
    title: "FIGMA",
    description: "Figma is UI/UX design",
    tags: ["React", "Node.js", "Stripe"],
    color: "from-primary to-coral-400",
    featured: true,
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization and user management.",
    tags: ["Next.js", "TypeScript", "Charts"],
    color: "from-secondary to-teal-300",
    featured: true,
  },
  {
    title: "Mobile Banking App",
    description: "Secure and intuitive mobile banking interface with modern UI patterns.",
    tags: ["React Native", "Figma", "UX"],
    color: "from-accent to-primary",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "Creative portfolio with smooth animations and immersive experience.",
    tags: ["React", "Framer Motion", "Tailwind"],
    color: "from-teal-400 to-secondary",
    featured: false,
  },
  {
    title: "Task Management",
    description: "Collaborative task management tool with drag-and-drop functionality.",
    tags: ["Vue.js", "Firebase", "UI/UX"],
    color: "from-coral-400 to-accent",
    featured: false,
  },
  {
    title: "Social Media App",
    description: "Feature-rich social platform with real-time messaging and stories.",
    tags: ["React", "GraphQL", "AWS"],
    color: "from-primary to-secondary",
    featured: false,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary text-3xl font-bold">My Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of my recent work that showcases my skills and passion
            for creating exceptional digital experiences.
          </p>
        </ScrollReveal>

        {/* Projects Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <motion.div
                className={`group relative bg-background rounded-3xl overflow-hidden border border-border hover:border-primary ${
                  project.featured ? "md:row-span-1" : ""
                }`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image/Preview */}
                <div className={`h-48 bg-gradient-to-br ${project.color} p-6 flex items-end`}>
                  <motion.div 
                    className="w-full h-32 bg-card/90 rounded-xl shadow-lg"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    <motion.a
                      href="#"
                      className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Button */}
        <ScrollReveal delay={0.3} className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}




