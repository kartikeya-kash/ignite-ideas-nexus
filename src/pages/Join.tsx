import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { UserPlus, Heart, Target, Users, Lightbulb, Award } from 'lucide-react';

const Join = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Skill Development',
      description: 'Enhance your leadership, communication, and entrepreneurial skills through hands-on experience.',
      color: 'glow-blue'
    },
    {
      icon: Users,
      title: 'Network Building',
      description: 'Connect with like-minded individuals, mentors, and industry professionals.',
      color: 'glow-green'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Exposure',
      description: 'Be at the forefront of startup culture and emerging technologies.',
      color: 'glow-violet'
    },
    {
      icon: Award,
      title: 'Recognition & Certificates',
      description: 'Gain valuable certifications and recognition for your contributions.',
      color: 'glow-blue'
    }
  ];

  const openPositions = [
    {
      title: 'Marketing Coordinator',
      department: 'Marketing',
      type: 'Core Team',
      description: 'Help create compelling campaigns and manage our social media presence.',
      requirements: ['Creative mindset', 'Social media experience', 'Communication skills']
    },
    {
      title: 'Event Management Associate',
      department: 'Events',
      type: 'Core Team',
      description: 'Assist in planning and executing workshops, seminars, and competitions.',
      requirements: ['Organizational skills', 'Team player', 'Event planning interest']
    },
    {
      title: 'Technical Developer',
      department: 'Technology',
      type: 'Core Team',
      description: 'Develop and maintain our digital platforms and technical solutions.',
      requirements: ['Programming skills', 'Web development', 'Problem-solving mindset']
    },
    {
      title: 'Content Writer',
      department: 'Content',
      type: 'Core Team',
      description: 'Create engaging content for blogs, social media, and marketing materials.',
      requirements: ['Writing skills', 'Research abilities', 'SEO knowledge (plus)']
    },
    {
      title: 'Business Development Intern',
      department: 'Strategy',
      type: 'Internship',
      description: 'Support partnership development and strategic initiatives.',
      requirements: ['Business acumen', 'Communication skills', 'Analytical thinking']
    },
    {
      title: 'Design Volunteer',
      department: 'Design',
      type: 'Volunteer',
      description: 'Create visual content, presentations, and marketing materials.',
      requirements: ['Design skills', 'Creative tools proficiency', 'Portfolio']
    }
  ];

  const testimonials = [
    {
      name: 'Arjun Sharma',
      role: 'Current President',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      quote: 'Joining E-Cell was the best decision of my college life. It transformed me from a student to a leader and opened doors I never imagined.'
    },
    {
      name: 'Priya Patel',
      role: 'Vice President',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b047?w=100&h=100&fit=crop&crop=face',
      quote: 'The network and skills I gained through E-Cell have been invaluable. I learned to think like an entrepreneur and act like a leader.'
    },
    {
      name: 'Sneha Reddy',
      role: 'Marketing Head',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      quote: 'E-Cell gave me the platform to explore my creative side while contributing to something meaningful. The experience has been incredible.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient-primary">Join Our </span>
                <span className="text-gradient-accent">Mission</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Be part of NMIMS E-Cell and help shape the future of entrepreneurship. 
                Join a community of innovators, leaders, and changemakers.
              </p>
              <div className="flex items-center justify-center gap-2 text-accent">
                <Heart className="h-5 w-5" />
                <span className="text-sm font-medium">Make a difference. Build your future.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient-primary">Why Join E-Cell?</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Discover the benefits of being part of our entrepreneurial community
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`glass rounded-2xl p-6 hover-glow ${benefit.color} group transition-all duration-300 text-center`}
                  >
                    <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-12 w-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gradient-primary">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient-accent">Open Positions</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Find the perfect role to start your journey with us
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {openPositions.map((position, index) => (
                  <div
                    key={index}
                    className="glass rounded-2xl p-6 hover-glow glow-green group transition-all duration-300"
                  >
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold px-3 py-1 rounded-full bg-accent/20 text-accent">
                          {position.type}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {position.department}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gradient-accent group-hover:text-gradient-primary transition-all duration-300">
                      {position.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">{position.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary mb-2">Requirements:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-accent rounded-full"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-gradient-accent hover:scale-105 transition-all duration-300">
                      Apply Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="text-secondary">What Our Members Say</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Hear from current team members about their E-Cell experience
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="glass rounded-2xl p-6 hover-glow glow-violet group transition-all duration-300 text-center"
                  >
                    <div className="relative mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-secondary/20 group-hover:border-secondary/50 transition-all duration-300"
                      />
                    </div>
                    
                    <blockquote className="text-muted-foreground mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <h4 className="text-lg font-bold text-secondary">{testimonial.name}</h4>
                    <p className="text-sm text-accent">{testimonial.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass rounded-3xl p-8 lg:p-12 hover-glow glow-blue">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">
                    Ready to Join Us?
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Fill out the form below and take the first step towards an amazing journey
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Full Name *
                      </label>
                      <Input 
                        placeholder="Enter your full name"
                        className="bg-muted/20 border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Email Address *
                      </label>
                      <Input 
                        type="email"
                        placeholder="your.email@nmims.edu"
                        className="bg-muted/20 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Phone Number *
                      </label>
                      <Input 
                        placeholder="+91 98765 43210"
                        className="bg-muted/20 border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Course & Year *
                      </label>
                      <Input 
                        placeholder="e.g., MBA 2nd Year"
                        className="bg-muted/20 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Position of Interest *
                    </label>
                    <select className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground">
                      <option value="">Select a position</option>
                      <option value="marketing">Marketing Coordinator</option>
                      <option value="events">Event Management Associate</option>
                      <option value="tech">Technical Developer</option>
                      <option value="content">Content Writer</option>
                      <option value="business">Business Development Intern</option>
                      <option value="design">Design Volunteer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Why do you want to join E-Cell? *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your motivation and what you hope to achieve..."
                      rows={4}
                      className="bg-muted/20 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Relevant Experience/Skills
                    </label>
                    <Textarea 
                      placeholder="Share any relevant experience, skills, or projects..."
                      rows={3}
                      className="bg-muted/20 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <div className="text-center pt-6">
                    <Button 
                      type="submit"
                      size="lg"
                      className="bg-gradient-primary hover:scale-105 transition-all duration-300 pulse-glow px-12"
                    >
                      <UserPlus className="mr-2 h-5 w-5" />
                      Submit Application
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      We'll review your application and get back to you within 5-7 business days
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Join;