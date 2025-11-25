import React from 'react';

const Values: React.FC = () => {
    const values = [
        { title: 'Verdade', desc: 'A transformação começa quando você para de se esconder de si mesmo.' },
        { title: 'Responsabilidade', desc: 'Crescimento não é sorte, é consequência das escolhas.' },
        { title: 'Clareza', desc: 'Direção nasce de percepção limpa, não de impulsos.' },
        { title: 'Propósito', desc: 'Cada decisão deve sustentar quem você escolheu ser.' },
        { title: 'Coerência', desc: 'A vida responde ao que você faz, não ao que você apenas deseja.' },
        { title: 'Consciência', desc: 'Nenhuma expansão é real quando não existe presença.' }
    ];

    return (
        <section className="relative w-full bg-[#2a2724] py-16 sm:py-20 md:py-32 px-4 sm:px-6">
            {/* Textura de fundo */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#35312d] via-[#2a2724] to-[#1f1d1b] opacity-60"></div>
            
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12 sm:mb-16 md:mb-20">
                    <h2 className="text-[#c9a87c] text-2xl sm:text-3xl md:text-4xl font-light mb-4 tracking-wide">
                        VALORES QUE GUIAM
                    </h2>
                    <div className="w-20 h-[2px] bg-[#8b7355] mb-4"></div>
                    <p className="text-[#a39382] text-sm sm:text-base max-w-2xl">
                        Princípios que sustentam cada decisão, cada movimento, cada direção.
                    </p>
                </div>

                {/* Grid de valores */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {values.map((value, idx) => (
                        <div
                            key={idx}
                            className="bg-[#3d3a36]/40 backdrop-blur-sm border border-[#6b5d4f]/20 rounded-lg p-6 md:p-8 hover:border-[#8b7355]/40 transition-all duration-300"
                        >
                            <h3 className="text-[#c9a87c] text-base sm:text-lg md:text-xl font-medium mb-3 tracking-wide">
                                {value.title}
                            </h3>
                            <p className="text-[#9b8f82] text-sm sm:text-base leading-relaxed font-light">
                                {value.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
