import { Target, TrendingUp, Code, Database, Monitor, Settings, GraduationCap, Award, Briefcase } from "lucide-react";

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

  const educationTimeline = [
    {
      date: "2021 - Present",
      title: "University of Technology and Education",
      description: "Pursuing a degree in Information Technology.",
      icon: GraduationCap,
      color: "text-blue-400"
    },
    {
      date: "Dec 2022 - Feb 2024",
      title: "CodeGym DaNang",
      description: "Completed an intensive Bootcamp for Java Web Full-Stack Development.",
      icon: Code,
      color: "text-green-400"
    }
  ];

  const certificationsTimeline = [
    {
      date: "Feb 2024",
      title: "Full-Stack Java Web Certificate",
      description: "Awarded by CodeGym for successfully completing the bootcamp program.",
      icon: Award,
      color: "text-purple-400"
    }
  ];

  const workExperienceTimeline = [
    {
      date: "Oct 2024 - Present",
      title: "Full Stack Web Intern",
      company: "BIZDI Joint Stock Company",
      description: "Contributing to the development of web applications, gaining hands-on experience with both front-end and back-end technologies in a professional environment.",
      icon: Briefcase,
      color: "text-teal-400"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">About Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions and continuously learning new technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
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

        <div className="mt-24 animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">Work Experience</h3>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-teal-500 to-blue-500"></div>
              <div className="space-y-12">
                {workExperienceTimeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="absolute left-0 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center z-10">
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                    </div>
                    <div className="ml-20 bg-gray-800 border border-gray-700 rounded-xl p-6 w-full transition-transform transform hover:-translate-y-1">
                      <h4 className={`text-md font-semibold ${item.color}`}>{item.date}</h4>
                      <h5 className="text-xl font-bold my-1 text-white">{item.title}</h5>
                      <h6 className="text-lg font-semibold text-gray-400 mb-2">{item.company}</h6>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">Education</h3>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-green-500"></div>
              <div className="space-y-12">
                {educationTimeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="absolute left-0 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center z-10">
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                    </div>
                    <div className="ml-20 bg-gray-800 border border-gray-700 rounded-xl p-6 w-full transition-transform transform hover:-translate-y-1">
                      <h4 className={`text-md font-semibold ${item.color}`}>{item.date}</h4>
                      <h5 className="text-xl font-bold my-1 text-white">{item.title}</h5>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">Certifications</h3>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 to-orange-500"></div>
              <div className="space-y-12">
                {certificationsTimeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="absolute left-0 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center z-10">
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                    </div>
                    <div className="ml-20 bg-gray-800 border border-gray-700 rounded-xl p-6 w-full transition-transform transform hover:-translate-y-1">
                      <h4 className={`text-md font-semibold ${item.color}`}>{item.date}</h4>
                      <h5 className="text-xl font-bold my-1 text-white">{item.title}</h5>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;