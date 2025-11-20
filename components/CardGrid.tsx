import React from 'react';
import NavigationCard from './NavigationCard';

const CardGrid: React.FC = () => {
  return (
    <section className="relative w-full flex-grow bg-[#1a1510] pb-20 -mt-10 z-20">
      
      {/* Background Texture */}
      <div className="absolute inset-0 w-full h-full opacity-30 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/imagens/bg.jpg" 
          alt="Map Texture" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        {/* Sepia Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#3a2f20] to-[#261e14] opacity-90"></div>
      </div>

      {/* Grid Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-12">
        <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-2xl mx-auto">
          
          {/* Card 1: Rota */}
          <NavigationCard 
            imageSrc="/imagens/rota.jpg"
          />

          {/* Card 2: Agenda */}
          <NavigationCard 
            imageSrc="/imagens/agenda.jpg"
          />

          {/* Card 3: Palestra */}
          <NavigationCard 
            imageSrc="/imagens/palestra.jpg"
          />

          {/* Card 4: Mentoria */}
          <NavigationCard 
            imageSrc="/imagens/mentoria.jpg"
          />

        </div>
      </div>
    </section>
  );
};

export default CardGrid;