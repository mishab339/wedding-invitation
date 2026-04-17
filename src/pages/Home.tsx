import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Reception from '../components/Reception';
import RSVPForm from '../components/RSVPForm';
import Footer from '../components/Footer';
import MusicPlayer from '../components/MusicPlayer';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Gallery />
        <Reception />
        <RSVPForm onRevealInvitation={() => navigate('/invitation')} />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default Home;
