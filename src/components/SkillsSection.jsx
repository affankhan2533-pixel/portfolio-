import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { Globe, Paintbrush, Smartphone, Sparkles, Code } from "lucide-react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiFigma, 
  SiAdobexd, 
  SiGit,
  SiFramer 
} from "react-icons/si";

const skills = [
  { name: "React", level: 95, color: "bg-violet-500" },
  { name: "TypeScript", level: 90, color: "bg-pink-500" },
  { name: "Next.js", level: 88, color: "bg-orange-500" },
  { name: "Tailwind CSS", level: 92, color: "bg-violet-500" },
  { name: "Python/ML", level: 85, color: "bg-pink-500" },
  { name: "Node.js", level: 80, color: "bg-orange-500" },
];

const services = [
  {
    title: "Web Development",
    description: "Building responsive, performant websites and web applications using modern technologies.",
    icon: Globe,
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces that provide exceptional user experiences.",
    icon: Paintbrush,
  },
  {
    title: "Mobile-First Design",
    description: "Designing and developing mobile-responsive solutions that work seamlessly across devices.",
    icon: Smartphone,
  },
  {
    title: "AI/ML Solutions",
    description: "Developing intelligent solutions using machine learning and artificial intelligence.",
    icon: Sparkles,
  },
];

const tools = [
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Figma", icon: SiFigma, color: "text-purple-400" },
  { name: "Adobe XD", icon: SiAdobexd, color: "text-pink-500" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "VS Code", icon: Code, color: "text-blue-400" },
  { name: "Framer", icon: SiFramer, color: "text-pink-400" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-violet-500/10 blob" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-pink-500/10 blob-2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center text-3xl font-bold max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-violet-400  ">What I Do</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            My <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Skills</span> & Services
          </h2>
          <p className="text-muted-foreground text-lg">
            I combine technical expertise with creative design to deliver
            outstanding digital solutions.
          </p>
        </ScrollReveal>

        {/* Skills & Services Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills */}
          <ScrollReveal direction="left" className="space-y-8">
            <h3 className="font-display text-2xl font-semibold">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Services */}
          <div className="space-y-8">
            <ScrollReveal direction="right">
              <h3 className="font-display text-2xl font-semibold">Services I Offer</h3>
            </ScrollReveal>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="group p-6 bg-card rounded-2xl border border-border hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center mb-4">
                      <service.icon className="text-white" size={24} />
                    </div>
                    <h4 className="font-display font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Tools & Technologies */}
        <ScrollReveal delay={0.2} className="mt-20">
          <h3 className="font-display text-2xl font-semibold text-center mb-8">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2 p-4 bg-card rounded-2xl border border-border hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 min-w-[80px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <tool.icon className={`${tool.color} text-3xl`} />
                <span className="text-xs text-muted-foreground font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}




