import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import fashionShopImage from "@/assets/fashion-shop-project.jpg";
import eventBookingImage from "@/assets/event-booking-project.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Fashion Shop Management System",
      description: "A comprehensive system to enhance operational efficiency for fashion stores.",
      image: fashionShopImage,
      technologies: ["ReactJS", "Spring Boot", "MySQL", "JWT", "Bootstrap"],
      category: "Full-Stack Application",
      status: "Completed"
    },
    {
      id: 2,
      title: "Event Management & Booking System",
      description: "An online platform for event management and ticket booking with QR code integration.",
      image: eventBookingImage,
      technologies: ["ReactJS", "Spring Boot", "MySQL", "JWT", "Bootstrap", "VNP Payment"],
      category: "Full-Stack Application",
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">My Work & Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my portfolio of web applications and development projects
          </p>
        </div>

        <div className="flex justify-center mb-12 animate-slide-up">
          <div className="flex space-x-4 bg-card border border-border rounded-lg p-2">
            <button className="px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium transition-smooth">
              All Projects
            </button>
            <button className="px-6 py-2 rounded-md text-muted-foreground hover:text-foreground transition-smooth">
              Full-Stack
            </button>
            <button className="px-6 py-2 rounded-md text-muted-foreground hover:text-foreground transition-smooth">
              Frontend
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-card border border-border rounded-2xl overflow-hidden hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs text-accent font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Link to={`/projects/${project.id}`} className="flex-1">
                    <Button className="w-full gradient-primary text-primary-foreground hover-glow">
                      Learn More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-card border border-border rounded-2xl p-12 animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
          <p className="text-muted-foreground mb-6">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <Link to="/contact">
            <Button className="btn-hero">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;