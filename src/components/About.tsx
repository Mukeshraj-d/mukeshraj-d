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
            <div className="space-y-6 animate-slide-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital solutions that make a difference. My journey started with a curiosity 
                for how things work, and has evolved into a love for crafting exceptional user experiences.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community. I believe 
                in writing clean, maintainable code and creating products that users love.
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
            
            <div className="relative">
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