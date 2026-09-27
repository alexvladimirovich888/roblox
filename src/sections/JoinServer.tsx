import React from 'react';
import { HOW_TO_JOIN_STEPS } from '../utils/constants';
import { ServerTerminal } from '../components/ServerTerminal';
import { Gamepad2, ArrowRight } from 'lucide-react';
import { playHoverBlip } from '../utils/soundEffects';

export const JoinServer: React.FC = () => {
  return (
    <section id="join" className="py-24 relative bg-[#09090E] border-t border-[#1C1C29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#8B5CF6] mb-2">
            <Gamepad2 size={16} />
            <span>CONNECT & EXPLORE</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase"
            style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
          >
            JOIN BLOXFUN
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Joining takes less than 30 seconds. Follow the 3 steps below or copy the direct server connection address into your Roblox launcher.
          </p>
        </div>

        {/* 3 Steps + Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 3 Steps */}
          <div className="lg:col-span-6 space-y-4">
            {HOW_TO_JOIN_STEPS.map((stepItem) => (
              <div
                key={stepItem.step}
                onMouseEnter={playHoverBlip}
                className="group relative bg-[#0F0F18] hover:bg-[#131320] border-2 border-[#202030] hover:border-[#8B5CF6] rounded-md p-5 transition-all duration-200 shadow-md text-left"
              >
                <div className="flex items-start gap-4">
                  {/* Big Step Number Block */}
                  <div
                    className="w-12 h-12 rounded-sm bg-[#1A1A28] group-hover:bg-[#8B5CF6] border border-[#2D2D42] group-hover:border-white text-zinc-300 group-hover:text-white flex items-center justify-center font-black text-lg shrink-0 transition-colors shadow-inner"
                    style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
                  >
                    {stepItem.step}
                  </div>

                  {/* Step Description */}
                  <div className="flex-1">
                    <h3
                      className="text-base font-black text-white uppercase tracking-wider group-hover:text-[#A78BFA] transition-colors"
                      style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
                    >
                      {stepItem.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      {stepItem.description}
                    </p>
                    <div className="mt-2.5 text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                      <ArrowRight size={11} className="text-[#8B5CF6]" />
                      <span>{stepItem.hint}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Server Terminal */}
          <div className="lg:col-span-6">
            <ServerTerminal />
          </div>
        </div>
      </div>
    </section>
  );
};
