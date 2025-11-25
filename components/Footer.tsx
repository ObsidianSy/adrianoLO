import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="relative w-full bg-black border-t border-[#4a4a35]/30 py-12 md:py-16 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Top section */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12 mb-8 md:mb-12">
                    {/* Brand */}
                    <div className="flex-1">
                        <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide mb-2">
                            Adriano Rodrigo
                        </h3>
                        <p className="text-gray-500 text-xs md:text-sm tracking-[0.2em] uppercase">
                            Mentor de Posicionamento
                        </p>
                        <p className="text-gray-600 text-sm mt-4 max-w-sm leading-relaxed">
                            Consciência que expande. Visão que direciona. Posicionamento que transforma.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
                        <div>
                            <h4 className="text-[#bfa76f] text-sm font-semibold mb-3 tracking-wide">
                                Navegação
                            </h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-500 hover:text-[#bfa76f] text-sm transition-colors">Sobre</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-[#bfa76f] text-sm transition-colors">Rota 360</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-[#bfa76f] text-sm transition-colors">Agenda</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-[#bfa76f] text-sm transition-colors">Contato</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[#bfa76f] text-sm font-semibold mb-3 tracking-wide">
                                Redes Sociais
                            </h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-500 hover:text-[#bfa76f] text-sm transition-colors">Instagram</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-[#bfa76f] text-sm transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-[#bfa76f] text-sm transition-colors">YouTube</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-[#4a4a35]/20 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs md:text-sm text-center sm:text-left">
                        © {new Date().getFullYear()} Adriano Rodrigo. Todos os direitos reservados.
                    </p>
                    <p className="text-gray-700 text-xs">
                        Desenvolvido com propósito e direção.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
