import React from 'react';

const RotaMethod: React.FC = () => {
    const pillars = [
        { name: 'Consciência', desc: 'Conduzir o indivíduo à lucidez sobre si, suas escolhas e seus limites.' },
        { name: 'Visão', desc: 'Treinar olhar, ampliar percepção e revelar o que não é visto.' },
        { name: 'Direção', desc: 'Ajustar rota com propósito, responsabilidade e clareza.' },
        { name: 'Identidade', desc: 'Reconectar a pessoa à sua verdade e coerência interna.' },
        { name: 'Expansão', desc: 'Transformar pequenos ajustes em crescimento sustentável.' }
    ];

    return (
        <section className="relative w-full bg-[#32302d] py-16 sm:py-20 md:py-32 px-4 sm:px-6">
            {/* Textura de fundo */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#3a3834] via-[#32302d] to-[#2a2724] opacity-50"></div>
            
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12 sm:mb-16 md:mb-20">
                    <h2 className="text-[#c9a87c] text-3xl sm:text-4xl md:text-5xl font-light mb-4 tracking-wide">
                        ROTA <span className="text-[#d4b896]">360</span>
                    </h2>
                    <div className="w-20 h-[2px] bg-[#8b7355] mb-6"></div>
                    <p className="text-[#a39382] text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed font-light">
                        Um processo de leitura completa da vida em 360°: mental, emocional, espiritual e prático. 
                        Não é um giro para voltar ao mesmo lugar — é uma análise total que revela pontos cegos, desalinhamentos e novas possibilidades de rota.
                    </p>
                </div>

                {/* Pilares em grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 sm:mb-16">
                    {pillars.map((pillar, idx) => (
                        <div
                            key={idx}
                            className="bg-[#3d3a36]/40 backdrop-blur-sm border border-[#6b5d4f]/20 rounded-lg p-6 md:p-8 hover:border-[#8b7355]/40 transition-all duration-300"
                        >
                            <h3 className="text-[#c9a87c] text-base sm:text-lg md:text-xl font-medium mb-3 tracking-wide">
                                {pillar.name}
                            </h3>
                            <p className="text-[#9b8f82] text-sm sm:text-base leading-relaxed font-light">
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Promessa */}
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-[#b5a99c] text-base sm:text-lg md:text-xl leading-relaxed font-light">
                        <span className="text-[#c9a87c] font-medium">Promessa:</span> Entregar clareza profunda, direção prática e posicionamento intencional que geram mudança real — dentro e fora.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RotaMethod;
