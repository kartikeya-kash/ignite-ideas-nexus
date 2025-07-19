import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import Footer from '@/components/Footer';
import { Target, Users, Lightbulb, Award, TrendingUp, Heart } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2018', title: 'E-Cell Founded', description: 'Established as the official entrepreneurship cell of NMIMS Kharghar' },
    { year: '2019', title: 'First Startup Incubated', description: 'Successfully mentored our first student startup to launch' },
    { year: '2020', title: 'Digital Transformation', description: 'Adapted to virtual events and expanded our digital presence' },
    { year: '2021', title: '50+ Events Milestone', description: 'Hosted over 50 entrepreneurship events and workshops' },
    { year: '2022', title: 'Industry Partnerships', description: 'Formed strategic partnerships with leading companies' },
    { year: '2023', title: 'Recognition & Awards', description: 'Recognized as the best E-Cell in the region' },
    { year: '2024', title: 'Innovation Hub', description: 'Launched our innovation hub and incubation program' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Vision-Driven',
      description: 'We believe in empowering students to think beyond conventional boundaries and create impactful solutions.',
      color: 'glow-blue'
    },
    {
      icon: Users,
      title: 'Community-Focused',
      description: 'Building a strong network of entrepreneurs, mentors, and industry experts for mutual growth.',
      color: 'glow-green'
    },
    {
      icon: Lightbulb,
      title: 'Innovation-Centric',
      description: 'Fostering a culture of creativity and breakthrough thinking in all our initiatives.',
      color: 'glow-violet'
    },
    {
      icon: Award,
      title: 'Excellence-Oriented',
      description: 'Maintaining high standards in everything we do, from events to mentorship programs.',
      color: 'glow-blue'
    },
    {
      icon: TrendingUp,
      title: 'Growth-Minded',
      description: 'Continuously evolving and adapting to new trends in entrepreneurship and technology.',
      color: 'glow-green'
    },
    {
      icon: Heart,
      title: 'Impact-Focused',
      description: 'Creating meaningful change in society through entrepreneurship and innovation.',
      color: 'glow-violet'
    },
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
                <span className="text-gradient-primary">About NMIMS E-Cell</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                We are more than just an entrepreneurship cell - we are a movement dedicated to 
                transforming innovative ideas into successful ventures and nurturing the next generation of business leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="glass rounded-3xl p-8 lg:p-12 hover-glow glow-blue">
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To create a vibrant ecosystem that empowers students to think like entrepreneurs, 
                  act like innovators, and succeed like visionaries. We bridge the gap between academic 
                  learning and real-world business challenges through mentorship, resources, and opportunities.
                </p>
              </div>
              
              <div className="glass rounded-3xl p-8 lg:p-12 hover-glow glow-green">
                <h2 className="text-3xl font-bold mb-6 text-gradient-accent">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the leading entrepreneurship cell that transforms NMIMS Kharghar into a breeding 
                  ground for successful startups and innovative solutions that make a positive impact on society 
                  and contribute to India's growing startup ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient-primary">Our Core Values</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  The principles that guide everything we do at NMIMS E-Cell
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className={`glass rounded-2xl p-6 hover-glow ${value.color} group transition-all duration-300`}
                  >
                    <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gradient-primary">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient-accent">Our Journey</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Key milestones in our entrepreneurship journey
                </p>
              </div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="glass rounded-2xl p-6 lg:p-8 hover-glow glow-blue group"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <div className="text-3xl font-bold text-gradient-primary group-hover:scale-110 transition-transform duration-300">
                        {milestone.year}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-gradient-accent">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center glass rounded-2xl p-8 hover-glow glow-blue">
                  <div className="text-4xl font-bold text-gradient-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Startups Mentored</div>
                </div>
                <div className="text-center glass rounded-2xl p-8 hover-glow glow-green">
                  <div className="text-4xl font-bold text-gradient-accent mb-2">100+</div>
                  <div className="text-muted-foreground">Events Hosted</div>
                </div>
                <div className="text-center glass rounded-2xl p-8 hover-glow glow-violet">
                  <div className="text-4xl font-bold text-secondary mb-2">5000+</div>
                  <div className="text-muted-foreground">People Reached</div>
                </div>
                <div className="text-center glass rounded-2xl p-8 hover-glow glow-blue">
                  <div className="text-4xl font-bold text-gradient-primary mb-2">25+</div>
                  <div className="text-muted-foreground">Industry Partners</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;