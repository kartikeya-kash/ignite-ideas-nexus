import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/HeroSection';
import AboutPreview from '@/components/AboutPreview';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
