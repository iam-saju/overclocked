import Hero from '../components/Hero';
import About from '../components/About';
import Registration from '../components/Registration';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-yellow-300 to-red-400 text-gray-800">
      <Navigation />
      <Hero />
      <About />
      <Registration />
      <div className="mb-16"></div>
      <Footer />
    </div>
  );
}
