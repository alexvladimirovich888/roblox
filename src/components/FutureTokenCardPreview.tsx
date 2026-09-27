import React from 'react';
import { Token } from '../types';
import { Sparkles, User, Calendar, Users, ShieldAlert } from 'lucide-react';
import { playHoverBlip } from '../utils/soundEffects';

interface TokenCardProps {
  token: Token;
  className?: string;
}

/**
 * Standard Token Card component designed for when tokens are minted on Bloxfun.
 */
export const TokenCard: React.FC<TokenCardProps> = ({ token, className = '' }) => {
  return (
    <div
      onMouseEnter={playHoverBlip}
      className={`group relative bg-[#0F0F17] hover:bg-[#141420] border-2 border-[#242436] hover:border-[#8B5CF6] rounded-md p-5 transition-all duration-200 shadow-lg hover:shadow-[0_8px_30px_rgba(139,92,246,0.25)] hover:-translate-y-1 ${className}`}
    >
      {/* Top row: Name & Ticker */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3
            className="text-lg font-black text-white group-hover:text-[#A78BFA] transition-colors"
            style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
          >
            {token.name}
          </h3>
          <span className="text-xs font-mono font-bold text-[#8B5CF6]">
            {token.ticker}
          </span>
        </div>
        <div className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#8B5CF6]/15 text-[#C4B5FD] border border-[#8B5CF6]/30 uppercase">
          {token.status}
        </div>
      </div>

      {token.description && (
        <p className="text-xs text-zinc-400 mb-4 line-clamp-2">
          {token.description}
        </p>
      )}

      {/* Metadata fields */}
      <div className="space-y-2 pt-3 border-t border-[#1F1F2E] text-xs text-zinc-400">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-zinc-500">
            <User size={12} />
            <span>CREATOR</span>
          </span>
          <span className="font-semibold text-zinc-200">{token.creator}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-zinc-500">
            <Calendar size={12} />
            <span>CREATED</span>
          </span>
          <span className="font-mono text-zinc-300">{token.createdDate}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-zinc-500">
            <Users size={12} />
            <span>PLAYERS</span>
          </span>
          <span className="font-mono font-bold text-white tabular-nums">
            {token.players.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

/**
 * Genesis Slot Blueprint - shows the architecture and layout of the first token
 * while keeping 0 tokens created strictly accurate.
 */
export const GenesisBlueprintCard: React.FC<{ onHowToJoin?: () => void }> = ({ onHowToJoin }) => {
  return (
    <div className="relative max-w-md mx-auto bg-[#0B0B12]/80 border-2 border-dashed border-[#34344E] hover:border-[#8B5CF6] rounded-md p-6 text-left transition-colors group">
      {/* Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-mono tracking-wider text-[#A78BFA] uppercase flex items-center gap-1.5 font-bold">
          <Sparkles size={13} className="text-[#8B5CF6]" />
          <span>GENESIS TOKEN SLOT #0001</span>
        </span>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
          AWAITING IN-GAME MINTER
        </span>
      </div>

      <div className="mb-4">
        <div
          className="text-xl font-black text-zinc-300 group-hover:text-white transition-colors"
          style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
        >
          [ IN-GAME CREATION ONLY ]
        </div>
        <div className="text-xs font-mono font-bold text-[#8B5CF6] mt-0.5">
          $ROBLOX_EXPERIENCE_FEATURE
        </div>
      </div>

      <p className="text-xs text-zinc-400 leading-relaxed mb-5">
        Tokens cannot be created on this website. Token creation is the central feature of the Bloxfun Roblox server. When a player connects and uses the in-game Computer Terminal, their token will automatically be launched live on <span className="text-emerald-400 font-bold">pump.fun</span> and listed here.
      </p>

      {/* Blueprint Fields Spec */}
      <div className="space-y-2.5 pt-3 border-t border-[#1C1C2A] text-xs">
        <div className="flex items-center justify-between text-zinc-500">
          <span>CREATION LOCATION</span>
          <span className="font-mono text-zinc-200">Roblox PC Terminal Workstation</span>
        </div>
        <div className="flex items-center justify-between text-zinc-500">
          <span>ON-CHAIN PROTOCOL</span>
          <span className="font-mono text-emerald-400 font-bold">pump.fun Bonding Curve</span>
        </div>
        <div className="flex items-center justify-between text-zinc-500">
          <span>TOKEN NAME & TICKER</span>
          <span className="font-mono text-zinc-300">Set in-game by Creator</span>
        </div>
        <div className="flex items-center justify-between text-zinc-500">
          <span>CREATOR IDENTIFIER</span>
          <span className="font-mono text-zinc-300">Roblox Account Username</span>
        </div>
        <div className="flex items-center justify-between text-zinc-500">
          <span>STATUS</span>
          <span className="font-mono text-emerald-400">UNCLAIMED SLOT #0001</span>
        </div>
      </div>

      {onHowToJoin && (
        <button
          onClick={onHowToJoin}
          className="mt-5 w-full py-2.5 px-3 bg-[#1A1A2A] hover:bg-[#25253A] border border-[#33334D] hover:border-[#8B5CF6] text-xs font-bold text-zinc-200 hover:text-white rounded transition-colors flex items-center justify-center gap-2"
          style={{ fontFamily: 'var(--font-display, "Syne", sans-serif)' }}
        >
          <ShieldAlert size={14} className="text-[#8B5CF6]" />
          <span>VIEW HOW TO JOIN BLOXFUN SERVER</span>
        </button>
      )}
    </div>
  );
};
