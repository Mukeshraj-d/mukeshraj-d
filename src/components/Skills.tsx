import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 88 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 82 },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 78 },
        { name: "Python", level: 75 },
        { name: "SQL", level: 80 },
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
          
        </div>
      </div>
    </section>
  );
};

export default Skills;