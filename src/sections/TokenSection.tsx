import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Coins, HelpCircle } from 'lucide-react';
import { GenesisBlueprintCard } from '../components/FutureTokenCardPreview';
import { playButtonClick, playHoverBlip } from '../utils/soundEffects';

interface TokenSectionProps {
  onHowToJoinClick: () => void;
}

export const TokenSection: React.FC<TokenSectionProps> = ({ onHowToJoinClick }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayCount, setDisplayCount] = useState<number | string>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Counting animation sequence settling on 0
          let step = 0;
          const sequence = [7, 4, 2, 1, 0];
          const interval = setInterval(() => {
            if (step < sequence.length) {
              setDisplayCount(sequence[step]);
              step++;
            } else {
              clearInterval(interval);
              setDisplayCount(0);
            }
          }, 120);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="tokens"
      ref={sectionRef}
      className="py-24 relative bg-[#07070B] border-t border-[#1C1C29] voxel-grid-bg overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#8B5CF6]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#8B5CF6] mb-3">
            <Coins size={16} />
            <span>IN-GAME SERVER ECONOMY</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase"
            style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
          >
            TOKENS CREATED IN BLOXFUN
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Players enter the Bloxfun Roblox server and launch their tokens using the in-game Computer Terminal. Every token is automatically created and launched directly on <span className="text-emerald-400 font-bold">pump.fun</span>, receiving its own live bonding curve, ticker, and server-wide listing.
          </p>
        </div>

        {/* Big Counter Banner */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-[#0D0D14] border-2 border-[#242436] rounded-md p-8 sm:p-12 text-center relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.7)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent" />

            <div className="space-y-2">
              <div
                className="text-7xl sm:text-8xl md:text-9xl font-black text-white tracking-tighter tabular-nums drop-shadow-[0_4px_24px_rgba(139,92,246,0.3)]"
                style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
              >
                {displayCount}
              </div>

              <div
                className="text-lg sm:text-2xl font-black uppercase tracking-widest text-[#A78BFA]"
                style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
              >
                TOKENS CREATED
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto pt-2">
                All server tokens will appear here once players forge them in-game.
              </p>
            </div>
          </div>
        </div>

        {/* Empty Token State Showcase Scene */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          {/* Left Column: Visual Launchpad Pedestal Scene */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 bg-[#0D0D14] border-2 border-[#222234] rounded-md text-center relative group">
            {/* Glowing beam & floating halo representation */}
            <div className="relative w-44 h-44 mb-6 flex items-center justify-center">
              {/* Vertical light beam */}
              <div className="absolute inset-x-12 top-0 bottom-6 bg-gradient-to-t from-[#8B5CF6]/30 via-[#8B5CF6]/15 to-transparent blur-md" />

              {/* Holographic floating empty coin silhouette */}
              <div className="relative w-28 h-28 rounded-md border-2 border-dashed border-[#8B5CF6] bg-[#8B5CF6]/5 flex items-center justify-center animate-bounce shadow-[0_0_24px_rgba(139,92,246,0.3)]">
                <Coins size={36} className="text-[#A78BFA] opacity-60" />
                <span className="absolute -top-3 px-2 py-0.5 bg-[#8B5CF6] text-white text-[10px] font-black uppercase rounded-sm">
                  GENESIS #0001
                </span>
              </div>

              {/* Voxel platform base */}
              <div className="absolute bottom-0 w-36 h-6 bg-[#181826] border-2 border-[#2F2F45] rounded-sm transform skew-x-12 shadow-lg" />
            </div>

            <h3
              className="text-xl font-black text-white uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
            >
              The first token hasn't been created yet.
            </h3>

            <p className="text-xs text-zinc-400 mt-2 max-w-sm leading-relaxed">
              Tokens cannot be created on this website. Token creation is the exclusive in-game mechanic inside the Bloxfun Roblox server. Connect to the server, sit down at a computer terminal, and your token will be launched live onto <span className="text-emerald-400 font-bold">pump.fun</span>.
            </p>

            <button
              onClick={() => {
                playButtonClick();
                onHowToJoinClick();
              }}
              onMouseEnter={playHoverBlip}
              className="btn-game-primary mt-6 px-6 py-3 text-xs rounded-sm flex items-center gap-2"
            >
              <Sparkles size={16} />
              <span>JOIN SERVER TO LAUNCH TOKEN #0001</span>
            </button>
          </div>

          {/* Right Column: Genesis Blueprint Card System */}
          <div className="lg:col-span-6">
            <GenesisBlueprintCard onHowToJoin={onHowToJoinClick} />

            <div className="mt-4 p-3 bg-[#11111A] border border-[#1E1E2C] rounded text-left flex items-start gap-2.5">
              <HelpCircle size={15} className="text-zinc-500 shrink-0 mt-0.5" />
              <p className="text-[11px] text-zinc-400 leading-normal">
                <strong className="text-zinc-200">How token listing works:</strong> When a player mints a token in the Roblox server, the server transmits metadata and a permanent card is automatically indexed here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
