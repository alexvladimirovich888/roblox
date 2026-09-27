export interface Token {
  id: string;
  name: string;
  ticker: string;
  creator: string;
  createdDate: string;
  players: number;
  status: 'ACTIVE' | 'LAUNCHING' | 'GENESIS';
  color?: string;
  description?: string;
  supply?: string;
}

export interface ServerStats {
  serverName: string;
  status: 'ONLINE' | 'MAINTENANCE' | 'OFFLINE';
  onlinePlayers: number;
  maxPlayers: number;
  serverIp: string;
  robloxExperienceId: string;
  region: string;
  pingMs: number;
  version: string;
}
