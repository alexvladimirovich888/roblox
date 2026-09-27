import React from 'react';
import { BloxfunLogo } from '../components/BloxfunLogo';
import { DISCORD_URL } from '../utils/constants';
import { playButtonClick, playHoverBlip } from '../utils/soundEffects';

export const Footer: React.FC = () => {
  const handleScrollTo = (id: string) => {
    playButtonClick();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#060609] border-t border-[#191924] py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#14141E]">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
            <BloxfunLogo size="sm" />
            <p className="text-zinc-500 text-xs mt-1">
              Roblox server for token creation.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 font-bold uppercase tracking-wider text-xs">
            <button
              onClick={() => handleScrollTo('#home')}
              onMouseEnter={playHoverBlip}
              className="hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
            >
              Home
            </button>
            <button
              onClick={() => handleScrollTo('#join')}
              onMouseEnter={playHoverBlip}
              className="hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
            >
              How to Join
            </button>
            <button
              onClick={() => handleScrollTo('#tokens')}
              onMouseEnter={playHoverBlip}
              className="hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
            >
              Tokens
            </button>
            <button
              onClick={() => handleScrollTo('#world')}
              onMouseEnter={playHoverBlip}
              className="hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
            >
              World
            </button>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playButtonClick}
              onMouseEnter={playHoverBlip}
              className="hover:text-[#8B5CF6] transition-colors"
              style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
            >
              Discord
            </a>
          </nav>
        </div>

        {/* Bottom row: Legal & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © 2026 Bloxfun. All rights reserved.
          </div>
          <div className="text-zinc-500 text-center sm:text-right">
            Bloxfun is an independent Roblox community experience. Not affiliated with or endorsed by Roblox Corporation.
          </div>
        </div>
      </div>
    </footer>
  );
};
