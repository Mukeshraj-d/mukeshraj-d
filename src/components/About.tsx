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
                Hello! I'm Mukeshraj, a passionate developer who loves creating digital experiences 
                that make a difference. My journey in technology started with curiosity and has 
                evolved into a dedication for crafting exceptional user-centered solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in modern web technologies and enjoy tackling complex problems with 
                elegant solutions. Whether it's frontend development, backend architecture, or 
                full-stack applications, I'm committed to delivering high-quality results.
              </p>
              
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Internship</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I completed my internship at <span className="font-semibold text-foreground">TEK PYRAMID</span> — a unit of Test Yantra Software Solutions Pvt. Ltd., where I gained valuable industry experience and developed practical skills in building web applications. This hands-on opportunity strengthened my understanding of real-world development workflows, collaborative coding practices, and delivering quality solutions within professional environments.
                </p>
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
