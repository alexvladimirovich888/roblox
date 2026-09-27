import React from 'react';

interface BloxfunLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showIcon?: boolean;
  className?: string;
}

export const BloxfunLogo: React.FC<BloxfunLogoProps> = ({
  size = 'md',
  showIcon = true,
  className = '',
}) => {
  const sizeClasses = {
    sm: {
      text: 'text-lg tracking-tight',
      iconSize: 18,
      gap: 'gap-2',
      box: 'w-4 h-4',
    },
    md: {
      text: 'text-2xl tracking-tighter',
      iconSize: 24,
      gap: 'gap-2.5',
      box: 'w-6 h-6',
    },
    lg: {
      text: 'text-3xl sm:text-4xl md:text-5xl tracking-tight',
      iconSize: 36,
      gap: 'gap-3',
      box: 'w-8 h-8 sm:w-9 sm:h-9',
    },
    xl: {
      text: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter',
      iconSize: 52,
      gap: 'gap-3 sm:gap-4',
      box: 'w-10 h-10 sm:w-14 sm:h-14',
    },
  }[size];

  return (
    <div
      className={`inline-flex items-center font-black select-none ${sizeClasses.gap} ${className}`}
      style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
    >
      {showIcon && (
        <div className="relative flex items-center justify-center shrink-0">
          {/* Custom tilted block emblem inspired by voxel geometry */}
          <div
            className={`${sizeClasses.box} relative bg-[#8B5CF6] rounded-[3px] border-2 border-white/90 shadow-[0_2px_10px_rgba(139,92,246,0.5)] transform -rotate-12 transition-transform duration-200 group-hover:rotate-0 flex items-center justify-center`}
          >
            {/* Cutout center block */}
            <div className="w-[38%] h-[38%] bg-[#08080C] rounded-[1px] transform rotate-12" />
          </div>
        </div>
      )}

      {/* Main Wordmark */}
      <span className={`font-black uppercase flex items-center ${sizeClasses.text} leading-none`}>
        <span className="text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)]">BLOX</span>
        <span className="text-[#8B5CF6] ml-[0.1em] drop-shadow-[0_2px_16px_rgba(139,92,246,0.4)]">FUN</span>
      </span>
    </div>
  );
};
