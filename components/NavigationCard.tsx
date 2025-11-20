import React from 'react';

interface NavigationCardProps {
  imageSrc: string;
}

const NavigationCard: React.FC<NavigationCardProps> = ({ 
  imageSrc,
}) => {
  return (
    <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer border border-white/5">
      
      {/* Card Background Image */}
      <div className="absolute inset-0 w-full h-full">
         <img 
          src={imageSrc} 
          alt="Navigation Card" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default NavigationCard;