import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { ScreenshotStoryWalkthrough } from './sections/ScreenshotStoryWalkthrough';
import { JoinServer } from './sections/JoinServer';
import { TokenSection } from './sections/TokenSection';
import { WorldShowcase } from './sections/WorldShowcase';
import { TokenCreationMechanic } from './sections/TokenCreationMechanic';
import { CommunityDiscord } from './sections/CommunityDiscord';
import { Footer } from './sections/Footer';

export default function App() {
  const scrollToJoin = () => {
    const el = document.querySelector('#join');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08080C] text-[#F3F4F6] flex flex-col font-sans selection:bg-[#8B5CF6] selection:text-white">
      {/* Navigation */}
      <Navbar onPlayClick={scrollToJoin} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Scene 01 Spawn In-Game Screenshot */}
        <Hero
          onPlayClick={scrollToJoin}
          onHowToJoinClick={scrollToJoin}
        />

        {/* Authentic In-Game Gameplay Journey Walkthrough (Scenes 01 - 06) */}
        <ScreenshotStoryWalkthrough onHowToJoinClick={scrollToJoin} />

        {/* Server Connection & Terminal */}
        <JoinServer />

        {/* Tokens Created in Bloxfun (0 Tokens Empty State & In-Game Feature Explanation) */}
        <TokenSection onHowToJoinClick={scrollToJoin} />

        {/* Bloxfun World Presentation with Scene 07 Overhead Aerial Map */}
        <WorldShowcase />

        {/* Token Creation Mechanic Visual (Scene 03 / In-Game PC Desk Station) */}
        <TokenCreationMechanic onHowToJoinClick={scrollToJoin} />

        {/* Discord Community Callout with Scene 06 Multiplayer Hub */}
        <CommunityDiscord />
      </main>

      {/* Gaming Footer */}
      <Footer />
    </div>
  );
}
