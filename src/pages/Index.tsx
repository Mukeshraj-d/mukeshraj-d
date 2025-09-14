import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

const About = lazy(() => import("@/components/About"));
const Projects = lazy(() => import("@/components/Projects"));
const Skills = lazy(() => import("@/components/Skills"));
const Contact = lazy(() => import("@/components/Contact"));

const SectionSkeleton = () => (
  <div className="py-20 animate-pulse">
    <div className="container mx-auto px-6">
      <div className="h-12 bg-muted rounded w-1/3 mx-auto mb-8"></div>
      <div className="space-y-4 max-w-2xl mx-auto">
        <div className="h-4 bg-muted rounded w-full"></div>
        <div className="h-4 bg-muted rounded w-5/6"></div>
        <div className="h-4 bg-muted rounded w-4/6"></div>
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
      
      {/* Footer */}
      <footer className="bg-secondary/50 py-8 border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              © 2024 Mukeshraj. Built with React, TypeScript & Tailwind CSS.
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
