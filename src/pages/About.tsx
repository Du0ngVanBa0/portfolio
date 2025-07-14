import { Target, TrendingUp, Code, Database, Monitor, Settings } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Programming Languages",
      icon: Code,
      items: ["Java", "JavaScript", "HTML/CSS"],
      color: "text-primary"
    },
    {
      category: "Frameworks & Libraries",
      icon: Monitor,
      items: ["Spring Boot", "Spring MVC", "Spring Security", "ReactJS", "Bootstrap", "Thymeleaf"],
      color: "text-secondary"
    },
    {
      category: "Databases",
      icon: Database,
      items: ["MySQL", "SQLServer", "MongoDB"],
      color: "text-accent"
    },
    {
      category: "Tools & IDEs",
      icon: Settings,
      items: ["IntelliJ", "VS Code", "WebStorm", "Postman", "Git"],
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">About Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions and continuously learning new technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Goals */}
          <div className="space-y-8 animate-slide-up">
            <div className="bg-card border border-border rounded-2xl p-8 hover-lift">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-primary/10 mr-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Short-Term Goal</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Enhance my web development skills through hands-on experience, focusing on 
                front-end and back-end technologies. I aim to apply what I learn in real-world 
                projects and internships to build a strong foundation for my career.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover-lift">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-secondary/10 mr-4">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Long-Term Goal</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To perfect my programming skills and become a key contributor within my company 
                and team. I aspire to take on leadership roles and play an essential part in 
                the success of major projects.
              </p>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-8">My Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div 
                  key={skillGroup.category}
                  className="bg-card border border-border rounded-2xl p-6 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-muted mr-3`}>
                      <skillGroup.icon className={`h-5 w-5 ${skillGroup.color}`} />
                    </div>
                    <h4 className="text-lg font-semibold">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20 animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">My Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
              
              {/* Timeline items */}
              <div className="space-y-8">
                <div className="relative flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  <div className="ml-8 bg-card border border-border rounded-lg p-6 hover-lift">
                    <h4 className="text-lg font-semibold text-primary">2024 - Present</h4>
                    <h5 className="text-xl font-bold mb-2">Web Developer Journey</h5>
                    <p className="text-muted-foreground">
                      Focused on mastering full-stack development with modern technologies 
                      and building real-world applications.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-center">
                  <div className="w-4 h-4 bg-secondary rounded-full border-4 border-background z-10"></div>
                  <div className="ml-8 bg-card border border-border rounded-lg p-6 hover-lift">
                    <h4 className="text-lg font-semibold text-secondary">2023</h4>
                    <h5 className="text-xl font-bold mb-2">Fashion Shop Management System</h5>
                    <p className="text-muted-foreground">
                      Developed a comprehensive e-commerce management system using ReactJS 
                      and Spring Boot with advanced features.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;