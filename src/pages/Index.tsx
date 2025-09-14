import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-secondary/50 py-8 border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              © 2024 John Developer. Built with React, TypeScript & Tailwind CSS.
            </p>
            <p className="text-sm text-muted-foreground">
              Designed and developed with ❤️ for amazing projects.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
