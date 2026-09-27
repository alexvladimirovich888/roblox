import React, { useState } from 'react';
import { Monitor, Terminal, Radio, Play, MousePointerClick } from 'lucide-react';
import { playHoverBlip, playButtonClick } from '../utils/soundEffects';

interface TokenCreationMechanicProps {
  onHowToJoinClick: () => void;
}

export const TokenCreationMechanic: React.FC<TokenCreationMechanicProps> = ({ onHowToJoinClick }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      icon: Terminal,
      title: 'WALK UP TO THE PC TERMINAL',
      desc: 'Inside the server, locate the Bloxfun Computer Desk. Look at the monitor and press [E] to activate the in-game token launcher.',
    },
    {
      num: '02',
      icon: MousePointerClick,
      title: 'ENTER TOKEN DETAILS',
      desc: 'Type your custom Token Name, 3–6 character ticker (e.g., DOGE2.0, RIZZ), and select an icon or badge directly in the on-screen window.',
    },
    {
      num: '03',
      icon: Monitor,
      title: 'HIT LAUNCH TOKEN',
      desc: 'Click the purple "Launch Token" button on the terminal monitor. Your token is minted directly onto the pump.fun bonding curve protocol.',
    },
    {
      num: '04',
      icon: Radio,
      title: 'PUMP.FUN LIVE & SERVER BROADCAST',
      desc: 'The token goes live on pump.fun instantly, the Roblox server chat announces your launch to all players online, and the token card appears on the web portal.',
    },
  ];

  return (
    <section className="py-24 relative bg-[#07070C] border-t border-[#1C1C29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Artwork of the In-Game Computer Terminal */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-md overflow-hidden border-2 border-[#2C2C42] bg-[#0E0E18] shadow-[0_12px_40px_rgba(139,92,246,0.25)] group">
              <img
                src="/images/bloxfun_sc03_computer_clean_1790528424805.jpg"
                alt="Bloxfun in-game computer desk workstation showing the token creation terminal on monitor"
                className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#09090E] via-transparent to-transparent pointer-events-none" />

              {/* In-game mechanic overlay */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 bg-[#0D0D15]/90 backdrop-blur-md border border-[#27273C] rounded-sm flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono text-[#A78BFA] font-bold">
                    IN-GAME COMPUTER DESK
                  </div>
                  <div
                    className="text-sm font-black text-white uppercase"
                    style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
                  >
                    [E] INTERACTIVE TERMINAL
                  </div>
                </div>

                <button
                  onClick={() => {
                    playButtonClick();
                    onHowToJoinClick();
                  }}
                  onMouseEnter={playHoverBlip}
                  className="btn-game-primary px-3 py-1.5 text-[11px] rounded-sm flex items-center gap-1.5"
                >
                  <Play size={12} fill="white" />
                  <span>HOW TO JOIN</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Step Mechanic Breakdown */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#8B5CF6] mb-2">
                <Monitor size={16} />
                <span>SERVER GAMEPLAY LOOP</span>
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase"
                style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
              >
                HOW TOKEN CREATION WORKS
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-400">
                Token creation takes place on an in-game desktop computer terminal inside the Bloxfun Roblox server. Walk up to the desk, press [E], and set up your token.
              </p>
            </div>

            {/* Steps Accordion / List */}
            <div className="space-y-3">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.num}
                    onClick={() => {
                      playButtonClick();
                      setActiveStep(idx);
                    }}
                    onMouseEnter={playHoverBlip}
                    className={`cursor-pointer p-4 rounded-md border-2 transition-all ${
                      isActive
                        ? 'bg-[#141421] border-[#8B5CF6] shadow-[0_4px_16px_rgba(139,92,246,0.2)]'
                        : 'bg-[#0E0E16] border-[#20202F] hover:border-zinc-600'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-sm flex items-center justify-center font-bold text-xs shrink-0 border ${
                          isActive
                            ? 'bg-[#8B5CF6] text-white border-white'
                            : 'bg-[#191926] text-zinc-400 border-[#2A2A3D]'
                        }`}
                      >
                        <Icon size={16} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4
                            className="text-sm font-black uppercase text-white tracking-wide"
                            style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
                          >
                            {step.num}. {step.title}
                          </h4>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

