import Hero from '../components/Hero';
import About from '../components/About';
import Location from '../components/Location';
import Registration from '../components/Registration';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Location />
      <Registration />
      <div className="mb-16"></div>
      <Footer />
    </div>
  );
}
