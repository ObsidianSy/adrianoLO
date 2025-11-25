import React from 'react';

const Purpose: React.FC = () => {
    return (
        <section className="relative w-full bg-[#2a2724] py-16 sm:py-20 md:py-32 px-4 sm:px-6 overflow-hidden">
            {/* Textura de fundo sutil */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#35312d] via-[#2a2724] to-[#1f1d1b] opacity-60"></div>
            
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12 sm:mb-16 md:mb-20">
                    <h2 className="text-[#c9a87c] text-2xl sm:text-3xl md:text-4xl font-light mb-4 tracking-wide">
                        PROPÓSITO, MISSÃO E VISÃO
                    </h2>
                    <div className="w-20 h-[2px] bg-[#8b7355]"></div>
                </div>

                {/* Grid de 3 colunas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {/* Propósito */}
                    <div className="group">
                        <div className="mb-4">
                            <h3 className="text-[#8b7355] text-sm tracking-[0.2em] font-semibold uppercase mb-3">
                                Propósito
                            </h3>
                            <div className="w-12 h-[1px] bg-[#8b7355]/50"></div>
                        </div>
                        <p className="text-[#a39382] text-sm sm:text-base leading-relaxed font-light">
                            Guiar pessoas a enxergarem com lucidez quem são, onde estão e para onde realmente precisam ir, para que tomem decisões com consciência, direção e verdade.
                        </p>
                    </div>

                    {/* Missão */}
                    <div className="group">
                        <div className="mb-4">
                            <h3 className="text-[#8b7355] text-sm tracking-[0.2em] font-semibold uppercase mb-3">
                                Missão
                            </h3>
                            <div className="w-12 h-[1px] bg-[#8b7355]/50"></div>
                        </div>
                        <p className="text-[#a39382] text-sm sm:text-base leading-relaxed font-light">
                            Conduzir indivíduos e empresas a um estado elevado de percepção, clareza e responsabilidade, usando o método Rota 360 para revelar pontos cegos e ajustar direção.
                        </p>
                    </div>

                    {/* Visão */}
                    <div className="group">
                        <div className="mb-4">
                            <h3 className="text-[#8b7355] text-sm tracking-[0.2em] font-semibold uppercase mb-3">
                                Visão
                            </h3>
                            <div className="w-12 h-[1px] bg-[#8b7355]/50"></div>
                        </div>
                        <p className="text-[#a39382] text-sm sm:text-base leading-relaxed font-light">
                            Ser uma referência nacional em consciência, visão e direção. Inspirar um movimento de pessoas que vivem com intencionalidade, coerência e clareza de rota.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Purpose;
