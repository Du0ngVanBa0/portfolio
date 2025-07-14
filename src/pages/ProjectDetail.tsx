import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import fashionShopImage from "@/assets/fashion-shop-project.jpg";

const ProjectDetail = () => {
  const { id } = useParams();

  // In a real app, you would fetch project data based on the ID
  const project = {
    title: "Fashion Shop Management System",
    category: "Full-Stack E-commerce Application",
    duration: "3 months",
    team: "Solo Project",
    status: "Completed",
    image: fashionShopImage,
    overview: `A comprehensive Fashion Shop Management System aimed at enhancing operational efficiency for small to medium-sized fashion stores. This system provides a complete solution for inventory management, customer relationship management, and sales processing with modern web technologies.`,
    
    technologies: [
      { name: "ReactJS", category: "Frontend" },
      { name: "Spring Boot", category: "Backend" },
      { name: "Spring Data JPA", category: "Backend" },
      { name: "JWT", category: "Security" },
      { name: "Bootstrap", category: "UI Framework" },
      { name: "HTML/CSS", category: "Frontend" },
      { name: "MySQL", category: "Database" }
    ],
    
    responsibilities: [
      "Developed the payment feature, allowing invoice creation, total price calculation (with discounts), and receipt printing",
      "Built the customer lookup modal to search and auto-fill customer details efficiently",
      "Implemented key components like product selection, QR code scanning, and real-time pricing updates",
      "Ensured secure transaction data updates and handled comprehensive input validation and error messages",
      "Designed responsive user interface components for optimal user experience across devices",
      "Integrated secure authentication system using JWT tokens for user management"
    ],
    
    features: [
      "Real-time inventory tracking and management",
      "Customer relationship management system",
      "Secure payment processing with multiple payment methods",
      "Comprehensive reporting and analytics dashboard",
      "QR code integration for quick product scanning",
      "Responsive design for mobile and desktop use"
    ],
    
    links: {
      frontend: "https://github.com/A122211-FinalModule/FE",
      backend: "https://github.com/A122211-FinalModule/BE"
    }
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Back Navigation */}
        <div className="mb-8 animate-fade-in">
          <Link to="/projects">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12 animate-slide-up">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
              {project.status}
            </span>
            <span className="text-accent font-semibold">
              {project.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">{project.title}</span>
          </h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Duration</div>
                <div className="font-semibold">{project.duration}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="h-5 w-5 text-secondary" />
              <div>
                <div className="text-sm text-muted-foreground">Team</div>
                <div className="font-semibold">{project.team}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Code className="h-5 w-5 text-accent" />
              <div>
                <div className="text-sm text-muted-foreground">Type</div>
                <div className="font-semibold">Full-Stack</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Image */}
            <div className="animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Project Overview */}
            <div className="animate-slide-up">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.overview}
              </p>
            </div>

            {/* Key Features */}
            <div className="animate-slide-up">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-card border border-border rounded-lg hover-lift"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* My Responsibilities */}
            <div className="animate-slide-up">
              <h2 className="text-2xl font-bold mb-6">My Key Responsibilities</h2>
              <div className="space-y-4">
                {project.responsibilities.map((responsibility, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg hover-lift"
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies Used */}
            <div className="bg-card border border-border rounded-2xl p-6 animate-slide-up">
              <h3 className="text-xl font-bold mb-6">Technologies Used</h3>
              <div className="space-y-4">
                {["Frontend", "Backend", "Database", "Security"].map((category) => (
                  <div key={category}>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies
                        .filter(tech => tech.category === category || 
                          (category === "Security" && tech.name === "JWT") ||
                          (category === "UI Framework" && tech.name === "Bootstrap") ||
                          (category === "Database" && tech.name === "MySQL"))
                        .map((tech) => (
                        <span 
                          key={tech.name}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Repository Links */}
            <div className="bg-card border border-border rounded-2xl p-6 animate-slide-up">
              <h3 className="text-xl font-bold mb-6">Code Repository</h3>
              <div className="space-y-4">
                <a 
                  href={project.links.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary hover-glow transition-smooth group"
                >
                  <div className="flex items-center space-x-3">
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                    <span className="font-medium">Frontend Code</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </a>
                
                <a 
                  href={project.links.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary hover-glow transition-smooth group"
                >
                  <div className="flex items-center space-x-3">
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                    <span className="font-medium">Backend Code</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </a>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-primary rounded-2xl p-6 text-center animate-slide-up">
              <h3 className="text-xl font-bold text-white mb-3">Interested in this project?</h3>
              <p className="text-white/80 mb-4">Let's discuss how we can work together</p>
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-white/90">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;