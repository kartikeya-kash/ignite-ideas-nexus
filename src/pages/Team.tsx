import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import Footer from '@/components/Footer';
import { Linkedin, Github, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: 'Arjun Sharma',
      role: 'President',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Final year MBA student passionate about fostering entrepreneurship culture.',
      linkedin: 'https://linkedin.com',
      email: 'arjun@nmims.edu',
      twitter: 'https://twitter.com'
    },
    {
      name: 'Priya Patel',
      role: 'Vice President',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b047?w=400&h=400&fit=crop&crop=face',
      bio: 'Tech enthusiast with experience in startup operations and strategy.',
      linkedin: 'https://linkedin.com',
      email: 'priya@nmims.edu',
      github: 'https://github.com'
    },
    {
      name: 'Rohit Kumar',
      role: 'Head of Events',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Event management expert who loves creating memorable experiences.',
      linkedin: 'https://linkedin.com',
      email: 'rohit@nmims.edu',
      twitter: 'https://twitter.com'
    },
    {
      name: 'Sneha Reddy',
      role: 'Head of Marketing',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Creative marketer specializing in digital campaigns and brand building.',
      linkedin: 'https://linkedin.com',
      email: 'sneha@nmims.edu',
      twitter: 'https://twitter.com'
    }
  ];

  const coreTeam = [
    {
      name: 'Vikash Singh',
      role: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      department: 'Computer Science',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    {
      name: 'Ananya Joshi',
      role: 'Content Head',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      department: 'Mass Communication',
      linkedin: 'https://linkedin.com',
      email: 'ananya@nmims.edu'
    },
    {
      name: 'Karthik Nair',
      role: 'Finance Head',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face',
      department: 'Finance',
      linkedin: 'https://linkedin.com',
      email: 'karthik@nmims.edu'
    },
    {
      name: 'Ishita Gupta',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      department: 'Business Administration',
      linkedin: 'https://linkedin.com',
      email: 'ishita@nmims.edu'
    },
    {
      name: 'Aditya Verma',
      role: 'Social Media Lead',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face',
      department: 'Marketing',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      name: 'Meera Iyer',
      role: 'Design Head',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
      department: 'Design',
      linkedin: 'https://linkedin.com',
      email: 'meera@nmims.edu'
    }
  ];

  const advisors = [
    {
      name: 'Dr. Rajesh Mehta',
      role: 'Faculty Advisor',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face',
      bio: 'Professor of Entrepreneurship with 15+ years in academia and consulting.',
      email: 'rajesh.mehta@nmims.edu'
    },
    {
      name: 'Prof. Sunita Khanna',
      role: 'Startup Mentor',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      bio: 'Former startup founder turned educator, specializing in business strategy.',
      email: 'sunita.khanna@nmims.edu'
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
                <span className="text-gradient-primary">Meet Our </span>
                <span className="text-gradient-accent">Amazing Team</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                The passionate individuals driving innovation and entrepreneurship at NMIMS Kharghar. 
                Together, we're building the future of student entrepreneurship.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient-primary">Leadership Team</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Experienced leaders guiding our mission and vision
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {leadership.map((member, index) => (
                  <div
                    key={index}
                    className="glass rounded-2xl p-6 hover-glow glow-blue group transition-all duration-300 text-center"
                  >
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-300"
                      />
                      <div className="absolute -inset-1 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-gradient-primary group-hover:text-gradient-accent transition-all duration-300">
                      {member.name}
                    </h3>
                    
                    <p className="text-accent font-semibold mb-3">{member.role}</p>
                    
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                    
                    <div className="flex justify-center space-x-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-secondary transition-colors duration-300 hover:scale-110 transform"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-110 transform"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient-accent">Core Team</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Dedicated members driving our day-to-day operations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreTeam.map((member, index) => (
                  <div
                    key={index}
                    className="glass rounded-2xl p-6 hover-glow glow-green group transition-all duration-300 text-center"
                  >
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-accent/20 group-hover:border-accent/50 transition-all duration-300"
                      />
                      <div className="absolute -inset-1 rounded-full bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 text-gradient-accent">
                      {member.name}
                    </h3>
                    
                    <p className="text-secondary font-semibold mb-2">{member.role}</p>
                    
                    <p className="text-muted-foreground text-sm mb-4">{member.department}</p>
                    
                    <div className="flex justify-center space-x-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-secondary transition-colors duration-300 hover:scale-110 transform"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-110 transform"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Advisors */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="text-secondary">Faculty Advisors</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Academic guidance and mentorship from experienced educators
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {advisors.map((advisor, index) => (
                  <div
                    key={index}
                    className="glass rounded-2xl p-8 hover-glow glow-violet group transition-all duration-300 text-center"
                  >
                    <div className="relative mb-6">
                      <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-28 h-28 rounded-full mx-auto object-cover border-2 border-secondary/20 group-hover:border-secondary/50 transition-all duration-300"
                      />
                      <div className="absolute -inset-1 rounded-full bg-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-secondary">
                      {advisor.name}
                    </h3>
                    
                    <p className="text-accent font-semibold mb-4">{advisor.role}</p>
                    
                    <p className="text-muted-foreground mb-6">{advisor.bio}</p>
                    
                    <div className="flex justify-center">
                      <a
                        href={`mailto:${advisor.email}`}
                        className="text-muted-foreground hover:text-secondary transition-colors duration-300 hover:scale-110 transform"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass rounded-3xl p-12 text-center hover-glow glow-blue">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">
                  Want to Join Our Team?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're always looking for passionate individuals who want to make a difference 
                  in the entrepreneurship community. Join us and be part of something amazing!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/join"
                    className="inline-flex items-center justify-center px-8 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-all duration-300 pulse-glow"
                  >
                    Join Our Team
                  </a>
                  <a
                    href="mailto:ecell@nmims.edu"
                    className="inline-flex items-center justify-center px-8 py-3 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                  >
                    Contact Us
                  </a>
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

export default Team;