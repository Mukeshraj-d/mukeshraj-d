import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Photo Section */}
            <div className="order-2 lg:order-1 flex justify-center animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-dashed border-primary/30 glass-card group hover:scale-105 transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <svg 
                        className="w-10 h-10 text-primary" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Add Your Photo</h3>
                      <p className="text-sm text-muted-foreground">Upload your professional photo here</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6 animate-slide-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello! I'm Mukeshraj, a passionate developer who loves creating digital experiences 
                that make a difference. My journey in technology started with curiosity and has 
                evolved into a dedication for crafting exceptional user-centered solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in modern web technologies and enjoy tackling complex problems with 
                elegant solutions. Whether it's frontend development, backend architecture, or 
                full-stack applications, I'm committed to delivering high-quality results.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="order-3 lg:order-3 relative">
              <Card className="glass-card p-8 animate-fade-in">
                <h3 className="text-xl font-semibold mb-6 text-center">My Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium mb-1">User-Centered Design</h4>
                      <p className="text-sm text-muted-foreground">Every project starts with understanding user needs and creating intuitive experiences.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium mb-1">Clean Code</h4>
                      <p className="text-sm text-muted-foreground">I write maintainable, scalable code that stands the test of time.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium mb-1">Continuous Learning</h4>
                      <p className="text-sm text-muted-foreground">Technology evolves fast, and I stay updated with the latest trends and best practices.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;