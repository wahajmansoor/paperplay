import AppShell from './components/AppShell.jsx';
import GamePanel from './components/GamePanel.jsx';
import LobbyGrid from './components/LobbyGrid.jsx';
import TabBar from './components/TabBar.jsx';

const games = [
  {
    name: 'Fold City',
    description: 'Fast-paced card battles with neon boosters.',
    status: 'Open tables',
    players: '1.2k players',
    color: 'var(--coral)',
    icon: '♠️',
  },
  {
    name: 'Riff Rally',
    description: 'Music-inspired rounds and combo multipliers.',
    status: 'Live tournament',
    players: '860 players',
    color: 'var(--sunburst)',
    icon: '🎸',
  },
  {
    name: 'Skyline Scribble',
    description: 'Draw, guess, and build out the skyline.',
    status: 'Party mode',
    players: '430 players',
    color: 'var(--sky)',
    icon: '✍️',
  },
  {
    name: 'Questline',
    description: 'Co-op quests with animated story cards.',
    status: 'New chapters',
    players: '520 players',
    color: 'var(--mint)',
    icon: '🧭',
  },
  {
    name: 'Orbit Ops',
    description: 'Strategize through cosmic missions.',
    status: 'Ranked draft',
    players: '970 players',
    color: 'var(--violet)',
    icon: '🪐',
  },
];

const lobbyPanels = [
  {
    title: 'Players online',
    value: '3,984',
    detail: 'Across all five lobbies right now.',
    accent: 'var(--mint)',
  },
  {
    title: 'Daily boosts',
    value: '2x XP',
    detail: 'Complete any match to claim rewards.',
    accent: 'var(--sunburst)',
  },
  {
    title: 'Community quests',
    value: '12 live',
    detail: 'Join a crew and climb the ladder.',
    accent: 'var(--violet)',
  },
];

export default function App() {
  return (
    <AppShell>
      <section className="content">
        <div className="content__header">
          <div>
            <p className="eyebrow">Welcome to Paperplay</p>
            <h1>Pick a table and jump in.</h1>
          </div>
          <button className="cta">Create lobby</button>
        </div>
        <TabBar tabs={games.map((game) => game.name)} activeTab={games[0].name} />
        <div className="game-grid">
          {games.map((game) => (
            <GamePanel key={game.name} game={game} />
          ))}
        </div>
      </section>
      <LobbyGrid panels={lobbyPanels} />
    </AppShell>
  );
}
