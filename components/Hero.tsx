import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] md:h-[80vh] flex flex-col items-center justify-end pb-32 md:pb-24 overflow-hidden">
      
      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* 
            IMAGEM DE FUNDO (HERO):
            Caminho absoluto para garantir carregamento
        */}
        <img 
          src="/imagens/hero.png" 
          alt="Adriano Rodrigo Background" 
          className="w-full h-full object-cover object-top md:object-center"
        />
        
        {/* Gradient Overlay - Suave para não cobrir o rosto */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a1510] opacity-90"></div>
      </div>

      {/* Text Content - Positioned at bottom */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center gap-6">
        <div>
          <h1 className="text-white font-bold text-2xl md:text-4xl tracking-[0.25em] uppercase drop-shadow-lg">
            Adriano Rodrigo
          </h1>
          <h2 className="text-gray-300 text-xs md:text-sm font-medium tracking-[0.3em] uppercase mt-2">
            Mentor de Posicionamento
          </h2>
        </div>

        {/* Button */}
        <button className="bg-[#4b4a36] hover:bg-[#5c5b42] text-gray-200 text-xs font-semibold tracking-[0.25em] py-4 px-12 rounded-full border border-[#6b6a50] transition-all duration-300 shadow-2xl uppercase backdrop-blur-sm bg-opacity-90">
          Sobre Mim
        </button>
      </div>
    </section>
  );
};

export default Hero;