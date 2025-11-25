import React from 'react';
import NavigationCard from './NavigationCard';

const CardGrid: React.FC = () => {
  return (
    <section className="relative w-full flex-grow bg-[#1a1510] pb-20 -mt-10 z-20">

      {/* Background Texture */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <img
          src="/bg.jpg"
          alt="Map Texture"
          className="w-full h-full object-cover object-center transform scale-95 sm:scale-100"
        />
      </div>

      {/* Grid Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-12">
        <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-2xl mx-auto">

          {/* Card 1: Rota */}
          <NavigationCard
            imageSrc="/rota.jpg"
            title="Rota"
          />

          {/* Card 2: Agenda */}
          <NavigationCard
            imageSrc="/agenda.jpg"
            title="Agenda"
          />

          {/* Card 3: Palestra */}
          <NavigationCard
            imageSrc="/palestra.jpg"
            title="Palestra"
          />

          {/* Card 4: Mentoria */}
          <NavigationCard
            imageSrc="/mentoria.jpg"
            title="Mentoria"
          />        </div>
      </div>
    </section>
  );
};

export default CardGrid;