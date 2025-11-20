import React from 'react';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full flex flex-col bg-black relative">
      {/* Main Content */}
      <div className="w-full max-w-md mx-auto md:max-w-4xl bg-black shadow-2xl min-h-screen flex flex-col">
        <Hero />
        <CardGrid />
      </div>
    </main>
  );
};

export default App;