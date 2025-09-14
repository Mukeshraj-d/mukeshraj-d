import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 93 },
        { name: "Docker", level: 78 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 88 },
      ],
    },
  ];

  const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{skill.name}</span>
        <span className="text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out rounded-full"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="glass-card p-6 animate-fade-in hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {category.title}
                </h3>
                <CardContent className="space-y-4 p-0">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} skill={skill} />
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Additional Technologies */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8">Other Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "JavaScript", "HTML5", "CSS3", "SASS", "Redux", "Next.js",
                "Express.js", "GraphQL", "REST APIs", "Jest", "Cypress",
                "Firebase", "Supabase", "Vercel", "Netlify"
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;