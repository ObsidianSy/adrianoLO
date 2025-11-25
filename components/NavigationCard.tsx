import React from 'react';

interface NavigationCardProps {
  imageSrc: string;
  title: string;
}

const NavigationCard: React.FC<NavigationCardProps> = ({
  imageSrc,
  title
}) => {
  return (
    <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer border border-white/5 hover:border-[#bfa76f]/30 transition-all duration-300">

      {/* Card Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
        <h3 className="text-white text-lg md:text-2xl font-bold tracking-wide uppercase">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default NavigationCard;