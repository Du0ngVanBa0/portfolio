import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-developer.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const Home = () => {
  return (
    <div className="min-h-screen gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-lg text-muted-foreground font-medium">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="hero-text">Dương Văn Bảo</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">
                Full-Stack Developer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              A passionate developer building modern web applications with a focus on 
              user experience and clean code. Welcome to my portfolio.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <Button className="btn-hero group">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              
              <Button className="btn-secondary group">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-primary transition-smooth hover-glow"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-primary transition-smooth hover-glow"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:tidumong789@gmail.com"
                className="p-3 rounded-lg border border-border hover:border-primary transition-smooth hover-glow"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative animate-slide-up lg:animate-float">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 gradient-primary rounded-3xl opacity-20 blur-2xl"></div>
              
              {/* Main hero image */}
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={heroImage} 
                  alt="Developer workspace" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating profile photo */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-primary">
                <img 
                  src={profilePhoto} 
                  alt="Dương Văn Bảo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl bg-card border border-border hover-lift">
            <div className="text-3xl font-bold hero-text mb-2">1+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-card border border-border hover-lift">
            <div className="text-3xl font-bold hero-text mb-2">5+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-card border border-border hover-lift">
            <div className="text-3xl font-bold hero-text mb-2">10+</div>
            <div className="text-muted-foreground">Technologies</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;