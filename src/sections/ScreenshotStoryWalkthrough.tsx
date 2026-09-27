import React, { useState } from 'react';
import { Camera, Eye, MapPin, Maximize2, Sparkles, Terminal, Users } from 'lucide-react';
import { playButtonClick, playHoverBlip } from '../utils/soundEffects';

interface ScreenshotStoryItem {
  id: string;
  step: string;
  badge: string;
  title: string;
  subtitle: string;
  narrative: string;
  imageSrc: string;
  alt: string;
  hudMetadata: {
    pov: string;
    coords: string;
    action: string;
  };
}

export const ScreenshotStoryWalkthrough: React.FC<{ onHowToJoinClick: () => void }> = ({ onHowToJoinClick }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const scenes: ScreenshotStoryItem[] = [
    {
      id: 'scene-01',
      step: 'SCENE 01',
      badge: 'SERVER SPAWN',
      title: 'ENTER THE BLOXFUN SERVER',
      subtitle: 'Spawn into the Central Roblox District',
      narrative:
        'A normal player joins the BLOXFUN multiplayer server. Standing in the dark futuristic spawn plaza, dark gray blocky architecture and glowing purple neon signs frame the bustling world. Overhead bridges and lighted walkways lead directly into the Token Launch Zone.',
      imageSrc: '/images/bloxfun_sc01_spawn_1790528062573.jpg',
      alt: 'Roblox player spawning in BLOXFUN server central plaza',
      hudMetadata: {
        pov: 'Third-Person Gameplay',
        coords: 'X: 120 · Y: 40 · Z: -15',
        action: 'WASD to Move · Explore Spawn',
      },
    },
    {
      id: 'scene-02',
      step: 'SCENE 02',
      badge: 'FINDING THE TERMINAL',
      title: 'WALK UP TO THE COMPUTER STATION',
      subtitle: 'Locate the Dedicated In-Game Launch Station',
      narrative:
        'Players navigate through the cyber district toward the raised launch pavilion. Marked by illuminated purple signage reading BLOXFUN TERMINAL, a physical desktop computer desk with dual-monitors and glowing gaming peripherals awaits interactions.',
      imageSrc: '/images/bloxfun_sc02_approach_1790528076363.jpg',
      alt: 'Player avatar approaching the BLOXFUN computer terminal desk in Roblox',
      hudMetadata: {
        pov: 'Player Camera Tracking',
        coords: 'X: 84 · Y: 42 · Z: 32',
        action: 'Approach Desk · Look at Monitor',
      },
    },
    {
      id: 'scene-03',
      step: 'SCENE 03',
      badge: 'INTERACTION',
      title: 'PRESS [E] TO USE TERMINAL',
      subtitle: 'Sit at the Gaming Desk & Engage Monitor',
      narrative:
        'When standing near the keyboard, the prompt "[E] Use Terminal" appears. The camera transitions over the shoulder of the avatar. The physical monitor powers up with the live BLOXFUN in-game interface, displaying token stats and launch fields.',
      imageSrc: '/images/bloxfun_sc03_computer_clean_1790528424805.jpg',
      alt: 'Over-the-shoulder Roblox view of player sitting at desktop monitor',
      hudMetadata: {
        pov: 'Over-The-Shoulder Desk View',
        coords: 'X: 84 · Y: 42 · Z: 34',
        action: 'Press [E] to Interact with Monitor',
      },
    },
    {
      id: 'scene-04',
      step: 'SCENE 04',
      badge: 'TOKEN CREATION',
      title: 'ENTER NAME, TICKER & DETAILS',
      subtitle: 'Type Parameters Directly on the Monitor',
      narrative:
        'Inside the in-game application on screen, players specify their token parameters: Token Name (e.g. BLOX DOG), Ticker ($BXDOG), description, and custom token icon. It is an authentic in-game UI rendered inside the Roblox 3D workspace connected to pump.fun protocol.',
      imageSrc: '/images/bloxfun_sc04_create_1790528090683.jpg',
      alt: 'Close Roblox screenshot of monitor interface during token setup',
      hudMetadata: {
        pov: 'First-Person Monitor Focus',
        coords: 'Terminal #01 · Screen View',
        action: 'Fill Token Form · Deploy to pump.fun',
      },
    },
    {
      id: 'scene-05',
      step: 'SCENE 05',
      badge: 'TOKEN LAUNCH',
      title: 'LIVE ON PUMP.FUN & SERVER BROADCAST',
      subtitle: 'Instant Server-Wide Announcement & On-Chain Status',
      narrative:
        'Clicking Launch Token triggers the registration sound and celebratory particle effects. The monitor confirms "BLOXFUN TOKEN LAUNCHED" live on pump.fun, displaying the active ticker and contract data. The server-wide chat alerts all online players to the newly minted token.',
      imageSrc: '/images/bloxfun_sc05_success_1790528103886.jpg',
      alt: 'Roblox gameplay screenshot showing token launch success confirmation on computer monitor',
      hudMetadata: {
        pov: 'Desk Close-Up Confirmation',
        coords: 'Terminal #01 · pump.fun Live',
        action: 'Live on pump.fun & Web Portal',
      },
    },
    {
      id: 'scene-06',
      step: 'SCENE 06',
      badge: 'MULTIPLAYER HUB',
      title: 'A LIVING MULTIPLAYER ECONOMY',
      subtitle: 'Players Gather, Trade & Launch Daily',
      narrative:
        'BLOXFUN is an active multiplayer social hub. Groups of players hang out around the terminal pavilion, discuss upcoming community tokens in text chat, check the leaderboard list on the top right, and inspect newly deployed tokens in real-time.',
      imageSrc: '/images/bloxfun_sc06_multiplayer_1790528117704.jpg',
      alt: 'Multiple Roblox players gathered around computer terminals in BLOXFUN launch lounge',
      hudMetadata: {
        pov: 'Wide Multiplayer Arena',
        coords: 'Central Launch Pavilion',
        action: 'Multiplayer Social & Trading',
      },
    },
  ];

  const current = scenes[selectedIdx];

  return (
    <section id="gameplay-story" className="py-24 relative bg-[#06060A] border-t border-[#1C1C29]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-[#8B5CF6]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#8B5CF6] mb-2">
              <Camera size={16} />
              <span>ROBLOX IN-GAME SCREENSHOT REPLAY</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase"
              style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
            >
              HOW IT ACTUALLY LOOKS IN-GAME
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl">
              Authentic player screenshots showing the exact progression: from joining the server and locating the computer desk to launching a token on the monitor.
            </p>
          </div>

          {/* Quick Scene Selector Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {scenes.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  playButtonClick();
                  setSelectedIdx(idx);
                }}
                onMouseEnter={playHoverBlip}
                className={`px-3 py-1.5 rounded-sm text-xs font-mono font-bold transition-all shrink-0 ${
                  selectedIdx === idx
                    ? 'bg-[#8B5CF6] text-white border border-white/40 shadow-[0_0_12px_rgba(139,92,246,0.5)]'
                    : 'bg-[#12121E] text-zinc-400 hover:text-white border border-[#232338]'
                }`}
              >
                {s.step}
              </button>
            ))}
          </div>
        </div>

        {/* Primary Interactive Screenshot Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0B0B14] border-2 border-[#222234] rounded-lg p-5 sm:p-8 shadow-[0_16px_50px_rgba(0,0,0,0.85)]">
          {/* Main Screenshot Viewport with In-Game HUD Elements */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-md overflow-hidden border-2 border-[#2A2A3E] bg-[#050508] shadow-2xl">
              <img
                src={current.imageSrc}
                alt={current.alt}
                className="w-full h-auto aspect-video object-cover transition-all duration-300"
                referrerPolicy="no-referrer"
              />

              {/* In-game Roblox HUD Overlay Corner Tag */}
              <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 bg-black/85 backdrop-blur-md border border-[#33334D] rounded-sm text-[11px] font-mono text-zinc-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold text-white uppercase">{current.badge}</span>
                <span className="text-zinc-500">|</span>
                <span className="text-zinc-400">{current.hudMetadata.pov}</span>
              </div>

              {/* Coordinates & Player Action HUD Banner */}
              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 p-2.5 bg-black/85 backdrop-blur-md border border-[#33334D] rounded-sm text-[11px] font-mono">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <MapPin size={12} className="text-[#8B5CF6]" />
                  <span>{current.hudMetadata.coords}</span>
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Terminal size={12} />
                  <span>{current.hudMetadata.action}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Narrative Storytelling Breakdown */}
          <div className="lg:col-span-5 text-left space-y-5">
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-[#8B5CF6] tracking-wider uppercase flex items-center gap-1.5">
                <Sparkles size={14} />
                <span>{current.step} · {current.badge}</span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight"
                style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
              >
                {current.title}
              </h3>
              <p className="text-sm font-semibold text-[#A78BFA]">
                {current.subtitle}
              </p>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed bg-[#10101C] p-4 rounded border border-[#202030]">
              {current.narrative}
            </p>

            {/* Quick Scene Stepper Selector Grid */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              {scenes.map((scene, idx) => (
                <button
                  key={scene.id}
                  onClick={() => {
                    playButtonClick();
                    setSelectedIdx(idx);
                  }}
                  onMouseEnter={playHoverBlip}
                  className={`p-2 rounded text-left border transition-all ${
                    selectedIdx === idx
                      ? 'bg-[#181828] border-[#8B5CF6] text-white shadow-sm'
                      : 'bg-[#0E0E17] border-[#1E1E2C] text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <div className="text-[10px] font-mono text-[#8B5CF6] font-bold">{scene.step}</div>
                  <div className="text-xs font-bold truncate mt-0.5">{scene.badge}</div>
                </button>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  playButtonClick();
                  onHowToJoinClick();
                }}
                onMouseEnter={playHoverBlip}
                className="btn-game-primary w-full py-3 text-xs rounded-sm flex items-center justify-center gap-2"
              >
                <Eye size={15} />
                <span>EXPERIENCE THIS IN ROBLOX</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3-Screenshot Filmstrip Showcase of the In-Game Loop */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0B0B14] border border-[#202030] rounded-md overflow-hidden text-left group">
            <div className="relative aspect-video overflow-hidden">
              <img
                src="/images/bloxfun_sc01_spawn_1790528062573.jpg"
                alt="Roblox Spawn Plaza"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 text-[10px] font-mono font-bold text-white rounded-sm border border-zinc-700">
                1. JOIN SERVER
              </span>
            </div>
            <div className="p-4">
              <h4 className="text-sm font-black text-white uppercase font-syne">SPAWN IN CENTRAL PLAZA</h4>
              <p className="text-xs text-zinc-400 mt-1">Dark futuristic voxel world with glowing purple signs and pathways.</p>
            </div>
          </div>

          <div className="bg-[#0B0B14] border border-[#202030] rounded-md overflow-hidden text-left group">
            <div className="relative aspect-video overflow-hidden">
              <img
                src="/images/bloxfun_sc03_computer_clean_1790528424805.jpg"
                alt="Interact with Computer Desk"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 text-[10px] font-mono font-bold text-[#A78BFA] rounded-sm border border-purple-500/50">
                2. PRESS [E] ON PC
              </span>
            </div>
            <div className="p-4">
              <h4 className="text-sm font-black text-white uppercase font-syne">FIND COMPUTER DESK</h4>
              <p className="text-xs text-zinc-400 mt-1">Engage the desktop terminal with glowing keyboard and monitor launcher.</p>
            </div>
          </div>

          <div className="bg-[#0B0B14] border border-[#202030] rounded-md overflow-hidden text-left group">
            <div className="relative aspect-video overflow-hidden">
              <img
                src="/images/bloxfun_sc05_success_1790528103886.jpg"
                alt="Token Launched Confirmation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 text-[10px] font-mono font-bold text-emerald-400 rounded-sm border border-emerald-500/50">
                3. LIVE ON PUMP.FUN
              </span>
            </div>
            <div className="p-4">
              <h4 className="text-sm font-black text-white uppercase font-syne">LAUNCH ON PUMP.FUN</h4>
              <p className="text-xs text-zinc-400 mt-1">Automatic on-chain deployment to pump.fun with live in-game Roblox chat broadcast.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
