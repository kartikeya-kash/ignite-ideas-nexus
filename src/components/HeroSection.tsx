import { ArrowDown, Rocket, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById('about-preview');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Tagline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient-primary">Fueling Ideas.</span>
              <br />
              <span className="text-gradient-accent">Building Entrepreneurs.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Official Entrepreneurship Cell of NMIMS, Kharghar - Where innovation meets opportunity and dreams transform into reality.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:scale-105 transition-all duration-300 pulse-glow group min-w-[160px]"
            >
              <Link to="/join" className="flex items-center gap-2">
                <Users className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Join Us
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300 hover-glow glow-blue min-w-[160px]"
            >
              <Link to="/events" className="flex items-center gap-2">
                <Rocket className="h-5 w-5 group-hover:translate-y-[-2px] transition-transform" />
                Explore Events
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="glass rounded-2xl p-6 hover-glow glow-blue">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                50+
              </div>
              <div className="text-muted-foreground">Startups Mentored</div>
            </div>
            <div className="glass rounded-2xl p-6 hover-glow glow-green">
              <div className="text-3xl md:text-4xl font-bold text-gradient-accent mb-2">
                100+
              </div>
              <div className="text-muted-foreground">Events Hosted</div>
            </div>
            <div className="glass rounded-2xl p-6 hover-glow glow-violet">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                5000+
              </div>
              <div className="text-muted-foreground">People Reached</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-accent transition-colors duration-300 animate-bounce"
        aria-label="Scroll to content"
      >
        <ArrowDown className="h-8 w-8" />
      </button>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 opacity-30">
        <div className="w-20 h-20 rounded-full bg-gradient-primary blur-xl float" />
      </div>
      <div className="absolute top-1/3 right-16 opacity-30">
        <div className="w-16 h-16 rounded-full bg-gradient-accent blur-xl float" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 opacity-30">
        <div className="w-12 h-12 rounded-full bg-secondary blur-xl float" />
      </div>
    </section>
  );
};

export default HeroSection;