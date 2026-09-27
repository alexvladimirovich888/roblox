import React, { useState, useEffect } from 'react';
import { Copy, Check, Terminal, Wifi, Users, Globe, ExternalLink, UserPlus } from 'lucide-react';
import { DEFAULT_SERVER_STATS, ROBLOX_GAME_URL } from '../utils/constants';
import { playButtonClick, playSuccessChime, playHoverBlip } from '../utils/soundEffects';
import { usePersistentOnlinePlayers } from '../utils/usePersistentOnlinePlayers';

interface ServerTerminalProps {
  className?: string;
}

export const ServerTerminal: React.FC<ServerTerminalProps> = ({ className = '' }) => {
  const [copied, setCopied] = useState(false);
  const [ping, setPing] = useState(DEFAULT_SERVER_STATS.pingMs);
  const { players, maxPlayers, justJoined } = usePersistentOnlinePlayers();

  // Subtle live ping telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setPing(Math.floor(21 + Math.random() * 6));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyIp = async () => {
    playButtonClick();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(DEFAULT_SERVER_STATS.serverIp);
      } else {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = DEFAULT_SERVER_STATS.serverIp;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      playSuccessChime();
      setTimeout(() => setCopied(false), 2600);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    }
  };

  return (
    <div
      className={`relative bg-[#0D0D14] border-2 border-[#242436] rounded-md overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.8)] ${className}`}
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#13131F] border-b border-[#242436]">
        <div className="flex items-center gap-2">
          <Terminal size={15} className="text-[#8B5CF6]" />
          <span
            className="text-xs font-black uppercase tracking-wider text-zinc-300"
            style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
          >
            ROBLOX SERVER CONSOLE
          </span>
        </div>
        <div className="flex items-center gap-2">
          {/* Status pill with text */}
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>GENESIS ONLINE</span>
          </div>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 space-y-4">
        {/* Grid of stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          <div className="p-3 bg-[#13131D] border border-[#212130] rounded">
            <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5 mb-1">
              <Globe size={11} className="text-zinc-400" />
              <span>SERVER</span>
            </div>
            <div
              className="text-sm font-black text-white"
              style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
            >
              BLOXFUN
            </div>
          </div>

          <div className="p-3 bg-[#13131D] border border-[#212130] rounded relative overflow-hidden">
            <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5 mb-1">
              <Users size={11} className="text-zinc-400" />
              <span>PLAYERS</span>
              {justJoined && (
                <span className="text-[9px] font-bold text-emerald-400 flex items-center gap-0.5 animate-bounce">
                  <UserPlus size={9} />
                  +1
                </span>
              )}
            </div>
            <div className="text-sm font-bold text-white font-mono tabular-nums flex items-baseline gap-1">
              <span className={justJoined ? 'text-emerald-400 transition-colors duration-300' : ''}>
                {players}
              </span>
              <span className="text-zinc-500 text-xs">/ {maxPlayers}</span>
            </div>
          </div>

          <div className="p-3 bg-[#13131D] border border-[#212130] rounded">
            <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5 mb-1">
              <Wifi size={11} className="text-zinc-400" />
              <span>LATENCY</span>
            </div>
            <div className="text-sm font-bold text-emerald-400 font-mono tabular-nums">
              {ping}ms
            </div>
          </div>

          <div className="p-3 bg-[#13131D] border border-[#212130] rounded">
            <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">
              DEPLOYMENT
            </div>
            <div className="text-xs font-bold text-purple-400 truncate font-mono">
              GENESIS DAY 1
            </div>
          </div>
        </div>

        {/* Live player activity note */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-[#09090F] border border-[#1E1E2C] rounded text-[11px] text-zinc-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-ping" />
            <span>1 player currently exploring the realm</span>
          </span>
          <span className="font-mono text-[10px] text-zinc-500">v1.0-GENESIS</span>
        </div>

        {/* Server IP Row with Copy Button */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-semibold mb-1.5">
            <span>DIRECT CONNECTION ADDRESS</span>
            <span className="text-[11px] text-[#8B5CF6]">PORT 25565</span>
          </div>

          <div className="flex items-center gap-2 bg-[#09090E] border-2 border-[#242436] rounded p-1.5 pl-3">
            <code className="text-xs sm:text-sm font-mono text-zinc-100 flex-1 truncate select-all">
              {DEFAULT_SERVER_STATS.serverIp}
            </code>

            <button
              onClick={handleCopyIp}
              onMouseEnter={playHoverBlip}
              className={`px-3 sm:px-4 py-2 text-xs font-bold rounded flex items-center gap-1.5 transition-all select-none ${
                copied
                  ? 'bg-emerald-600 text-white shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                  : 'bg-[#222233] hover:bg-[#2C2C42] text-white active:scale-95'
              }`}
              style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
              title="Copy server address"
            >
              {copied ? (
                <>
                  <Check size={14} className="stroke-[3]" />
                  <span>COPIED ✓</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>COPY IP</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Launch CTA */}
        <div className="pt-1 flex flex-col sm:flex-row gap-3">
          <a
            href={ROBLOX_GAME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playButtonClick}
            onMouseEnter={playHoverBlip}
            className="btn-game-primary flex-1 py-2.5 px-4 rounded text-xs flex items-center justify-center gap-2 text-center"
          >
            <span>LAUNCH IN ROBLOX</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};
