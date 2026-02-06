import PropTypes from 'prop-types';

export default function GamePanel({ game }) {
  return (
    <article className="game-panel">
      <div className="game-panel__top">
        <div className="icon-orb" style={{ '--icon-accent': game.color }}>
          <span className="icon-orb__emoji" aria-hidden="true">
            {game.icon}
          </span>
        </div>
        <div>
          <h3>{game.name}</h3>
          <p className="game-panel__desc">{game.description}</p>
        </div>
      </div>
      <div className="game-panel__meta">
        <span className="pill">{game.status}</span>
        <span className="meta">{game.players}</span>
      </div>
      <button className="primary">Join lobby</button>
    </article>
  );
}

GamePanel.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};
