import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import ChallengeDomains from './components/ChallengeDomains';
import Schedule from './components/Schedule';
import Registration from './components/Registration';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />
      <Hero />
      <About />
      <ChallengeDomains />
      <Schedule />
      <Registration />
      <Leaderboard />
      <Footer />
    </div>
  );
}

export default App;
