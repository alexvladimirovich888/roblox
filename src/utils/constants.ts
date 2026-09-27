export const DISCORD_URL = "YOUR_DISCORD_INVITE"; // Replace with your live Discord community invite link
export const ROBLOX_GAME_URL = "https://www.roblox.com/games/bloxfun"; // Roblox experience URL
export const SERVER_IP = "play.bloxfun.net"; // Bloxfun direct server connection address
export const SERVER_PORT = "25565";

export const DEFAULT_SERVER_STATS = {
  serverName: "BLOXFUN",
  status: "ONLINE" as const,
  onlinePlayers: 1,
  maxPlayers: 100,
  serverIp: "play.bloxfun.net:25565",
  robloxExperienceId: "bloxfun-world-genesis",
  region: "US-East (Low Latency)",
  pingMs: 24,
  version: "v1.0.0-GENESIS",
};

export const HOW_TO_JOIN_STEPS = [
  {
    step: "01",
    title: "OPEN ROBLOX",
    description: "Launch the Roblox application on your PC, Mac, mobile device, or console.",
    hint: "Compatible with PC, Mac, iOS, Android & Xbox",
  },
  {
    step: "02",
    title: "FIND BLOXFUN",
    description: "Search for 'Bloxfun' in the Roblox experience directory or connect via direct link.",
    hint: "Search query: Bloxfun Server",
  },
  {
    step: "03",
    title: "JOIN THE SERVER",
    description: "Step into the server, walk up to the Bloxfun Computer Terminal, and interact with the monitor.",
    hint: "Press 'E' to use terminal · Free to play",
  },
];

export const WORLD_DISTRICTS = [
  {
    id: "terminal",
    name: "THE COMPUTER TERMINAL",
    type: "TOKEN LAUNCH WORKSTATION",
    description: "The in-game desktop PC workstation. Approach the monitor, press [E] to open the Bloxfun launcher app, and fill in your token parameters.",
    stats: "Interactive PC Desk · [E] Use Terminal",
  },
  {
    id: "plaza",
    name: "BUILDER'S PLAZA",
    type: "COMMUNITY HUB",
    description: "The primary spawn courtyard surrounded by glowing purple neon Bloxfun billboards, chat areas, and player trading plazas.",
    stats: "Social Zone · Safe Haven",
  },
  {
    id: "market",
    name: "VOXEL MARKET",
    type: "COMMERCE DISTRICT",
    description: "Trading platforms and player stalls where tokens created on Bloxfun can be swapped, staked, and celebrated.",
    stats: "Real-time Peer Trading",
  },
  {
    id: "biomes",
    name: "RESOURCE QUARRIES",
    type: "MINING ZONES",
    description: "Voxel resource nodes where players mine purple quartz and power cells required to fuel token creations.",
    stats: "Open World Exploration",
  },
];
