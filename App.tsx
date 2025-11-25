import React from 'react';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';
import Purpose from './components/Purpose';
import RotaMethod from './components/RotaMethod';
import Values from './components/Values';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full flex flex-col bg-black relative overflow-x-hidden">
      {/* Full-width hero on mobile; constrained content lives below */}
      <Hero />

      {/* Main Content */}
      <div className="w-full md:max-w-4xl md:mx-auto bg-black md:shadow-2xl flex flex-col">
        <CardGrid />
      </div>

      {/* Full-width sections */}
      <Purpose />
      <RotaMethod />
      <Values />
      <Footer />
    </main>
  );
};

export default App;