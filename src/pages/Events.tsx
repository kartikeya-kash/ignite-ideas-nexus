import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, ExternalLink, Clock } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Startup Pitch Fest 2024',
      date: 'March 15, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'NMIMS Auditorium',
      description: 'Present your startup ideas to industry experts and win exciting prizes.',
      participants: '200+ Expected',
      type: 'Competition',
      status: 'upcoming',
      registrationLink: '#'
    },
    {
      title: 'AI in Entrepreneurship Workshop',
      date: 'March 22, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Innovation Lab',
      description: 'Learn how AI is transforming the startup ecosystem.',
      participants: '50 Seats',
      type: 'Workshop',
      status: 'upcoming',
      registrationLink: '#'
    },
    {
      title: 'Founder Talk Series: Fintech Revolution',
      date: 'March 28, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'Virtual Event',
      description: 'Insights from successful fintech entrepreneurs.',
      participants: '500+ Expected',
      type: 'Talk',
      status: 'upcoming',
      registrationLink: '#'
    }
  ];

  const pastEvents = [
    {
      title: 'Hackathon 2024: Smart Solutions',
      date: 'February 10-11, 2024',
      location: 'NMIMS Campus',
      description: '48-hour hackathon focused on developing smart city solutions.',
      participants: '150 Participants',
      type: 'Hackathon',
      status: 'completed'
    },
    {
      title: 'Women in Entrepreneurship Panel',
      date: 'January 25, 2024',
      location: 'Conference Hall',
      description: 'Celebrating women entrepreneurs and their success stories.',
      participants: '200 Attendees',
      type: 'Panel',
      status: 'completed'
    },
    {
      title: 'Business Model Canvas Workshop',
      date: 'January 15, 2024',
      location: 'Classroom 301',
      description: 'Hands-on workshop on creating effective business models.',
      participants: '80 Participants',
      type: 'Workshop',
      status: 'completed'
    }
  ];

  const initiatives = [
    {
      title: 'E-Cell Mentorship Program',
      description: 'One-on-one mentorship with industry experts for promising startups.',
      frequency: 'Ongoing',
      participants: '30+ Active Mentees'
    },
    {
      title: 'Innovation Challenges',
      description: 'Monthly challenges to solve real-world problems with innovative solutions.',
      frequency: 'Monthly',
      participants: '100+ Participants'
    },
    {
      title: 'Startup Incubation Program',
      description: 'Complete support for student startups from idea to launch.',
      frequency: 'Batch-wise',
      participants: '15+ Startups Incubated'
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'competition': return 'text-primary';
      case 'workshop': return 'text-accent';
      case 'talk': return 'text-secondary';
      case 'hackathon': return 'text-violet';
      case 'panel': return 'text-neon-green';
      default: return 'text-primary';
    }
  };

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
                <span className="text-gradient-primary">Events & </span>
                <span className="text-gradient-accent">Initiatives</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Join our exciting events, workshops, and programs designed to nurture your entrepreneurial journey 
                and connect you with like-minded innovators.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient-primary">Upcoming Events</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Don't miss these amazing opportunities to learn, network, and grow
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="glass rounded-2xl p-6 hover-glow glow-blue group transition-all duration-300"
                  >
                    <div className="mb-4">
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full bg-muted/20 ${getEventTypeColor(event.type)}`}>
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gradient-primary group-hover:text-gradient-accent transition-all duration-300">
                      {event.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {event.participants}
                      </div>
                    </div>
                    
                    <Button 
                      asChild 
                      className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300"
                    >
                      <a href={event.registrationLink} className="flex items-center gap-2">
                        Register Now
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient-accent">Past Events</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Relive the excitement of our successful events
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event, index) => (
                  <div
                    key={index}
                    className="glass rounded-2xl p-6 hover-glow glow-green group transition-all duration-300"
                  >
                    <div className="mb-4">
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full bg-muted/20 ${getEventTypeColor(event.type)}`}>
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gradient-accent">
                      {event.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {event.participants}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ongoing Initiatives */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="text-secondary">Ongoing Initiatives</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Year-round programs to support your entrepreneurial growth
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {initiatives.map((initiative, index) => (
                  <div
                    key={index}
                    className="glass rounded-2xl p-8 hover-glow glow-violet group transition-all duration-300 text-center"
                  >
                    <h3 className="text-xl font-bold mb-4 text-secondary group-hover:scale-105 transition-transform duration-300">
                      {initiative.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{initiative.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="text-accent font-semibold">{initiative.frequency}</div>
                      <div className="text-muted-foreground">{initiative.participants}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;