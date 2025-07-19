import { Lightbulb, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section id="about-preview" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-primary">About NMIMS E-Cell</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We are the beating heart of entrepreneurship at NMIMS Kharghar, fostering innovation, 
              nurturing startups, and building the next generation of business leaders.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass rounded-2xl p-8 hover-glow glow-blue group">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gradient-primary">Innovation</h3>
              <p className="text-muted-foreground">
                Fostering creative thinking and breakthrough solutions to real-world problems through workshops, hackathons, and innovation challenges.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 hover-glow glow-green group">
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gradient-accent">Mentorship</h3>
              <p className="text-muted-foreground">
                Connecting aspiring entrepreneurs with industry experts, successful founders, and experienced mentors for guidance and growth.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 hover-glow glow-violet group">
              <div className="text-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-secondary">Execution</h3>
              <p className="text-muted-foreground">
                Providing practical support, resources, and platforms to help turn innovative ideas into successful ventures and businesses.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="glass rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient-primary">
              Our Mission
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              To create a vibrant ecosystem that empowers students to think like entrepreneurs, 
              act like innovators, and succeed like visionaries. We bridge the gap between academic 
              learning and real-world business challenges.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;