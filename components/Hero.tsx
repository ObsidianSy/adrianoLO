import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[72vh] md:h-[80vh] flex flex-col items-center justify-end pb-10 sm:pb-12 md:pb-24 overflow-hidden">

      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* 
            IMAGEM DE FUNDO (HERO):
            Caminho absoluto para garantir carregamento
        */}
        <img
          src="/hero.png"
          alt="Adriano Rodrigo Background"
          className="absolute inset-0 w-full h-full object-cover object-[65%_20%] sm:object-[60%_18%] md:object-center"
        />

        {/* Gradient Overlay - Suave para não cobrir o rosto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#1a1510] opacity-95 pointer-events-none"></div>
      </div>

      {/* Text Content - Positioned at bottom */}
      <div className="relative z-10 text-left pl-0 pr-4 sm:px-6 md:px-4 flex flex-col items-start md:items-center gap-3 md:gap-5 -translate-y-1 md:translate-y-0 -ml-5 sm:-ml-0">
        <div className="w-full sm:w-auto flex flex-col items-start md:items-center">
          <div className="max-w-[220px] sm:max-w-[320px] md:max-w-none">
            <h1 className="text-white font-bold text-base sm:text-lg md:text-4xl tracking-[0.25em] uppercase drop-shadow-lg">
              Adriano Rodrigo
            </h1>
          </div>
          <h2 className="text-gray-300 text-[8px] sm:text-[9px] md:text-sm font-medium tracking-[0.3em] uppercase mt-2">
            Mentor de Posicionamento
          </h2>
          <p className="text-gray-400 text-[10px] sm:text-[11px] md:text-base font-light mt-3 md:mt-4 max-w-[240px] sm:max-w-sm md:max-w-lg leading-relaxed md:text-center">
            Você não precisa de mais velocidade.<br className="md:hidden" /> Precisa de direção.
          </p>
        </div>

        {/* Button */}
        <button className="bg-[#4b4a36] hover:bg-[#5c5b42] text-gray-200 text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] py-2 px-6 sm:py-3 sm:px-10 rounded-full border border-[#6b6a50] transition-all duration-300 shadow-2xl uppercase backdrop-blur-sm bg-opacity-90 self-start md:self-center mt-1 md:mt-3">
          Sobre Mim
        </button>
      </div>
    </section>
  );
};

export default Hero;