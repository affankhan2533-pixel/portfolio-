import { Code2, Palette, Zap, Heart } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Crafting visually stunning interfaces",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Meeting deadlines without compromising quality",
  },
  {
    icon: Heart,
    title: "Passion Driven",
    description: "Loving what I do, every single day",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <ScrollReveal direction="left">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background shapes */}
              <div className="absolute inset-0 bg-muted rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 gradient-bg rounded-3xl transform -rotate-3 opacity-80" />
              
              {/* Main content card */}
              <div className="relative bg-card rounded-3xl p-8 shadow-card border border-border h-full flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center">
                      <Code2 className="text-primary-foreground" size={28} />
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                      <Palette className="text-secondary-foreground" size={28} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded-full w-full" />
                    <div className="h-3 bg-muted rounded-full w-4/5" />
                    <div className="h-3 bg-muted rounded-full w-3/5" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-xl p-4 text-center">
                      <p className="font-display text-2xl font-bold gradient-text">100+</p>
                      <p className="text-xs text-muted-foreground">Happy Clients</p>
                    </div>
                    <div className="bg-muted rounded-xl p-4 text-center">
                      <p className="font-display text-2xl font-bold text-secondary">50+</p>
                      <p className="text-xs text-muted-foreground">Projects Done</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div className="space-y-8">
            <ScrollReveal direction="right">  
              <div className="space-y-4">
                <span className="text-primary font-bold text-3xl">About Me</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold">
                  I'm <span className="gradient-text">AFFAN KHAN</span>, a
                  <span className="text-secondary"> BVoc & AIML Student</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm a passionate BVoc (Bachelor of Vocation) student specializing in 
                  <strong className="text-foreground"> Artificial Intelligence & Machine Learning (AIML)</strong>. 
                  I combine my technical skills in AI/ML with web development to create 
                  intelligent, user-centered digital experiences that leverage the power 
                  of modern technology.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My journey in AIML has equipped me with expertise in machine learning algorithms, 
                  neural networks, data analysis, and predictive modeling. I'm fascinated by how 
                  AI can transform industries and solve real-world problems—from natural language 
                  processing to computer vision and beyond.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a developer, I bridge the gap between AI innovation and practical applications, 
                  building smart web solutions that incorporate ML models, chatbots, and data-driven 
                  features. Every project is an opportunity to push the boundaries of what's possible 
                  with AI.
                </p>
              </div>
            </ScrollReveal>

            {/* Highlights Grid */}
            <StaggerContainer className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="group p-4 rounded-2xl border border-border bg-background hover:border-primary hover:shadow-soft transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <item.icon size={20} className="text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}




