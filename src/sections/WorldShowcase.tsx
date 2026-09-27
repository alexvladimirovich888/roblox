import React, { useState } from 'react';
import { WORLD_DISTRICTS } from '../utils/constants';
import { MapPin, Layers, Sparkles } from 'lucide-react';
import { playHoverBlip, playButtonClick } from '../utils/soundEffects';

export const WorldShowcase: React.FC = () => {
  const [activeDistrict, setActiveDistrict] = useState(WORLD_DISTRICTS[0]);

  return (
    <section id="world" className="py-24 relative bg-[#09090E] border-t border-[#1C1C29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#8B5CF6] mb-2">
            <Layers size={16} />
            <span>SERVER ENVIRONMENT & LAUNCH TERMINALS</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase"
            style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
          >
            THE BLOXFUN WORLD
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            An extreme high-altitude bird's-eye view of the massive BLOXFUN futuristic metropolis. Explore across sprawling districts, elevated highways, and illuminated towers to locate the physical launch stations marked with purple rings to deploy your token directly onto <span className="text-emerald-400 font-bold">pump.fun</span>.
          </p>
        </div>

        {/* Big Cinematic Showcase Viewport */}
        <div className="relative rounded-md overflow-hidden border-2 border-[#242436] bg-[#0E0E18] shadow-[0_12px_48px_rgba(0,0,0,0.85)] mb-10 group">
          <img
            src="/src/assets/images/bloxfun_massive_city_map_1790529484480.jpg"
            alt="Authentic extreme high-altitude Roblox gameplay screenshot of a massive futuristic metropolis with skyscrapers, bridges, and purple rings indicating launch stations"
            className="w-full h-auto object-cover max-h-[560px] aspect-video group-hover:scale-102 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />

          {/* Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090E] via-transparent to-black/25 pointer-events-none" />

          {/* Floating World Status Tag */}
          <div className="absolute top-4 left-4 p-2.5 bg-[#09090E]/90 backdrop-blur-md border border-[#27273C] rounded-sm text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
              <span>OVERHEAD SERVER MAP · IN-GAME VIEW</span>
            </div>
            <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
              High-Altitude Satellite Angle · Physical Launch Stations Marked with Purple Rings
            </div>
          </div>

          {/* Floating active district highlight callout */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:bottom-6 sm:max-w-md p-4 bg-[#09090E]/95 backdrop-blur-md border-2 border-[#8B5CF6]/50 rounded-sm text-left shadow-2xl">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono font-bold text-[#A78BFA] uppercase tracking-wider">
                ACTIVE SECTOR SPOTLIGHT
              </span>
              <span className="text-[10px] font-bold text-zinc-400 uppercase">
                {activeDistrict.type}
              </span>
            </div>
            <h4
              className="text-lg font-black text-white uppercase"
              style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
            >
              {activeDistrict.name}
            </h4>
            <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
              {activeDistrict.description}
            </p>
            <div className="mt-2.5 text-[11px] font-mono text-[#8B5CF6] font-bold flex items-center gap-1.5">
              <Sparkles size={12} />
              <span>{activeDistrict.stats}</span>
            </div>
          </div>
        </div>

        {/* District Selector Tabs / Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WORLD_DISTRICTS.map((district) => {
            const isSelected = activeDistrict.id === district.id;
            return (
              <button
                key={district.id}
                onClick={() => {
                  playButtonClick();
                  setActiveDistrict(district);
                }}
                onMouseEnter={playHoverBlip}
                className={`p-4 rounded-md border-2 text-left transition-all ${
                  isSelected
                    ? 'bg-[#151522] border-[#8B5CF6] shadow-[0_0_20px_rgba(139,92,246,0.25)]'
                    : 'bg-[#0E0E16] border-[#222232] hover:border-zinc-600'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold">
                    {district.type}
                  </span>
                  <MapPin
                    size={14}
                    className={isSelected ? 'text-[#8B5CF6]' : 'text-zinc-600'}
                  />
                </div>
                <div
                  className={`text-sm font-black uppercase tracking-wider ${
                    isSelected ? 'text-white' : 'text-zinc-300'
                  }`}
                  style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
                >
                  {district.name}
                </div>
                <div className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  {district.description}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
