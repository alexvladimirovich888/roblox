import React from 'react';
import { BloxfunLogo } from '../components/BloxfunLogo';
import { Sparkles, Compass, ShieldCheck, ChevronRight } from 'lucide-react';
import { playButtonClick, playHoverBlip } from '../utils/soundEffects';

interface HeroProps {
  onPlayClick: () => void;
  onHowToJoinClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPlayClick, onHowToJoinClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden voxel-grid-bg"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#8B5CF6]/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#6D28D9]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Hero container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Branding, Statement, CTAs */}
          <div className="lg:col-span-7 text-left space-y-6 lg:pr-4">
            {/* Server Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-sm bg-[#131320] border border-[#27273C] text-xs font-bold text-zinc-300">
              <span className="w-2 h-2 rounded-sm bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-mono">GENESIS DAY 1</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400">BRAND NEW ROBLOX SERVER</span>
            </div>

            {/* Huge Custom Brand Wordmark */}
            <div className="space-y-3">
              <BloxfunLogo size="xl" />
              <div
                className="text-base sm:text-lg md:text-xl font-black uppercase tracking-widest text-[#A78BFA]"
                style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
              >
                YOUR TOKENS. YOUR SERVER.
              </div>
            </div>

            {/* Clear, direct value proposition */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed font-normal">
              A brand new Roblox server where players can create, play, and launch their own tokens directly onto <span className="text-emerald-400 font-bold underline decoration-emerald-500/40 underline-offset-4">pump.fun</span>. The realm has just initialized—step into the game, walk up to the Bloxfun Computer Terminal, and launch your token in seconds.
            </p>

            {/* Game UI Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  playButtonClick();
                  onPlayClick();
                }}
                onMouseEnter={playHoverBlip}
                className="btn-game-primary px-7 py-3.5 text-sm rounded-sm flex items-center gap-2.5 shadow-[0_4px_20px_rgba(139,92,246,0.4)]"
              >
                <Sparkles size={18} className="text-white" />
                <span>PLAY BLOXFUN</span>
              </button>

              <button
                onClick={() => {
                  playButtonClick();
                  onHowToJoinClick();
                }}
                onMouseEnter={playHoverBlip}
                className="btn-game-secondary px-6 py-3.5 text-sm rounded-sm flex items-center gap-2"
              >
                <Compass size={18} className="text-[#8B5CF6]" />
                <span>HOW TO JOIN</span>
                <ChevronRight size={16} className="text-zinc-400" />
              </button>
            </div>

            {/* Trust highlights */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#1C1C2A] max-w-lg">
              <div>
                <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">PLATFORM</div>
                <div className="text-sm font-black text-white" style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}>ROBLOX</div>
              </div>
              <div>
                <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">ON-CHAIN MARKET</div>
                <div className="text-sm font-black text-emerald-400" style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}>PUMP.FUN</div>
              </div>
              <div>
                <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">ENTRY</div>
                <div className="text-sm font-black text-[#A78BFA]" style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}>FREE TO PLAY</div>
              </div>
            </div>
          </div>

          {/* Right Column: Roblox Visual World Scene */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative block accents */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#8B5CF6]/30 border-2 border-[#8B5CF6] rounded-sm transform -rotate-6 hidden sm:block animate-pulse" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-[#1B1B2A] border-2 border-[#33334F] rounded-sm transform rotate-12 hidden sm:block" />

              {/* Main Visual Display Frame */}
              <div className="relative rounded-md overflow-hidden border-2 border-[#2C2C42] bg-[#0E0E18] shadow-[0_12px_40px_rgba(0,0,0,0.85)] group">
                <img
                  src="/src/assets/images/bloxfun_sc01_spawn_1790528062573.jpg"
                  alt="Authentic Roblox gameplay screenshot: player avatar standing in BLOXFUN spawn plaza"
                  className="w-full h-auto object-cover aspect-video sm:aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090E] via-transparent to-black/20 pointer-events-none" />

                {/* Floating In-Game Badge Over Image */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 bg-[#0D0D15]/90 backdrop-blur-md border border-[#27273C] rounded-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="/src/assets/images/bloxfun_avatar_builder_1790526123773.jpg"
                      alt="Bloxfun Player Avatar"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm border border-[#8B5CF6] object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-xs font-black text-white uppercase tracking-wider" style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}>
                        BLOXFUN SPAWN PLAZA
                      </div>
                      <div className="text-[11px] text-[#A78BFA] font-medium">
                        Actual Roblox Gameplay · Genesis Day 1
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded bg-[#1C1C2A] border border-[#2E2E44] text-[10px] font-bold text-zinc-300 shrink-0">
                    <ShieldCheck size={12} className="text-[#8B5CF6]" />
                    <span>IN-GAME SCREENSHOT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
