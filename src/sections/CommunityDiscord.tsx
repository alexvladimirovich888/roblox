import React from 'react';
import { DISCORD_URL } from '../utils/constants';
import { MessageSquare, Users, Sparkles, ExternalLink, Hash } from 'lucide-react';
import { playButtonClick, playHoverBlip } from '../utils/soundEffects';

export const CommunityDiscord: React.FC = () => {
  return (
    <section id="community" className="py-24 relative bg-[#09090E] border-t border-[#1C1C29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#0E0E17] border-2 border-[#26263B] rounded-lg p-8 sm:p-14 overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.7)] text-left">
          {/* Background purple accent mesh */}
          <div className="absolute top-0 right-0 w-[450px] h-[350px] bg-[#8B5CF6]/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#8B5CF6]">
                <MessageSquare size={16} />
                <span>OFFICIAL COMMUNITY LAUNCH</span>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase"
                style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
              >
                JOIN THE COMMUNITY
              </h2>

              <p className="text-base text-zinc-300 leading-relaxed max-w-xl">
                The Bloxfun community hub has just opened its doors alongside the Roblox server. Be one of the first members to step inside, claim early founder roles, coordinate token ideas, and watch the server launch unfold.
              </p>

              {/* Community Stats */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-zinc-200 font-bold font-mono">Community Just Opened</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-[#8B5CF6]" />
                  <span className="text-zinc-200 font-bold font-mono">Genesis Member Roles Open</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-amber-400" />
                  <span>Slot #0001 Unclaimed</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3">
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playButtonClick}
                  onMouseEnter={playHoverBlip}
                  className="btn-game-primary inline-flex items-center gap-2.5 px-8 py-3.5 text-sm rounded-sm"
                >
                  <MessageSquare size={18} />
                  <span>JOIN DISCORD</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>

            {/* Right Side: Mock Discord Channels Hub Widget */}
            <div className="lg:col-span-5">
              <div className="bg-[#09090F] border border-[#222233] rounded-md p-4 text-xs space-y-3 font-mono">
                {/* Genuine Roblox Multiplayer Screenshot banner */}
                <div className="relative rounded overflow-hidden border border-[#2A2A3E]">
                  <img
                    src="/images/bloxfun_sc06_multiplayer_1790528117704.jpg"
                    alt="Authentic Roblox multiplayer gameplay in BLOXFUN launch hub"
                    className="w-full h-auto aspect-video object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/85 text-[10px] font-mono text-zinc-300 rounded border border-zinc-700 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>IN-GAME MULTIPLAYER HUB</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-zinc-500 pt-1 pb-2 border-b border-[#1A1A28]">
                  <span className="font-bold text-zinc-300">BLOXFUN DISCORD</span>
                  <span className="text-emerald-400">#NEW-LAUNCH</span>
                </div>

                <div className="space-y-1.5 text-zinc-400">
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded bg-[#13131F] text-white">
                    <Hash size={13} className="text-[#8B5CF6]" />
                    <span>welcome-and-rules</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded hover:bg-[#13131F] transition-colors">
                    <Hash size={13} className="text-zinc-600" />
                    <span>server-genesis</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded hover:bg-[#13131F] transition-colors">
                    <Hash size={13} className="text-zinc-600" />
                    <span>token-launch-ideas</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded hover:bg-[#13131F] transition-colors">
                    <Hash size={13} className="text-zinc-600" />
                    <span>general-chat</span>
                  </div>
                </div>

                <div className="p-2.5 bg-[#12121E] rounded text-[11px] text-zinc-400 leading-tight">
                  <span className="text-[#8B5CF6] font-bold">@ServerBot:</span> Realm #01 has just been initialized. The world is untouched and 0 tokens exist. Step in to make history!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
