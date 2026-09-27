import React, { useState, useEffect } from 'react';
import { BloxfunLogo } from './BloxfunLogo';
import { Menu, X, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { playHoverBlip, playButtonClick, setSoundEnabled } from '../utils/soundEffects';
import { usePersistentOnlinePlayers } from '../utils/usePersistentOnlinePlayers';

interface NavbarProps {
  onPlayClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPlayClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const { players } = usePersistentOnlinePlayers();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);
    setSoundEnabled(nextState);
    if (nextState) {
      playButtonClick();
    }
  };

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'GAMEPLAY', href: '#gameplay-story' },
    { label: 'HOW TO PLAY', href: '#join' },
    { label: 'TOKENS', href: '#tokens' },
    { label: 'WORLD', href: '#world' },
    { label: 'DISCORD', href: '#community' },
  ];

  const handleLinkClick = (href: string) => {
    playButtonClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlayNow = () => {
    playButtonClick();
    if (onPlayClick) {
      onPlayClick();
    } else {
      const joinSection = document.querySelector('#join');
      if (joinSection) {
        joinSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#08080C]/90 backdrop-blur-md border-b border-[#22222E]/80 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.7)]'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Zone 1: Single Brand element */}
          <div className="flex items-center gap-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
              aria-label="Bloxfun Home"
            >
              <BloxfunLogo size="md" />
            </a>

            {/* Live Online Badge */}
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#13131F] border border-[#27273C] text-[11px] font-mono text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-white tabular-nums">{players}</span>
              <span className="text-zinc-500">ONLINE</span>
            </div>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold tracking-wider text-zinc-300">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                onMouseEnter={playHoverBlip}
                className="relative py-1 hover:text-white transition-colors duration-150 uppercase"
                style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-3">
            {/* Audio Feedback Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-md bg-[#13131D] border border-[#272738] text-zinc-400 hover:text-zinc-100 hover:border-zinc-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
              title={soundOn ? 'Mute sound effects' : 'Enable sound effects'}
              aria-label={soundOn ? 'Mute sound effects' : 'Enable sound effects'}
            >
              {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Play Now Game Button */}
            <button
              onClick={handlePlayNow}
              onMouseEnter={playHoverBlip}
              className="btn-game-primary px-4 py-2 text-xs rounded-sm whitespace-nowrap hidden sm:inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Sparkles size={13} className="text-purple-200" />
              <span>PLAY NOW</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                playButtonClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-md bg-[#13131D] border border-[#272738] text-zinc-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A10] border-b border-[#22222E] px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="flex items-center justify-between px-3 py-2 bg-[#13131F] rounded border border-[#232334]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ROBLOX SERVER</span>
            </div>
            <span className="text-xs font-mono font-bold text-white">
              {players} PLAYERS ONLINE
            </span>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className="px-3 py-2.5 rounded text-sm font-bold tracking-wider text-zinc-200 hover:bg-[#151522] hover:text-[#8B5CF6] transition-colors"
                style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#1C1C2A]">
            <button
              onClick={handlePlayNow}
              className="btn-game-primary w-full py-3 text-sm rounded-sm flex items-center justify-center gap-2"
            >
              <Sparkles size={16} />
              <span>PLAY BLOXFUN NOW</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
