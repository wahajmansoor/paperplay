import PropTypes from 'prop-types';

export default function LobbyGrid({ panels }) {
  return (
    <aside className="lobby-grid">
      <h2>Lobby highlights</h2>
      <div className="lobby-grid__items">
        {panels.map((panel) => (
          <article key={panel.title} className="lobby-card">
            <div className="lobby-card__accent" style={{ '--accent': panel.accent }} />
            <div>
              <p className="lobby-card__title">{panel.title}</p>
              <p className="lobby-card__value">{panel.value}</p>
              <p className="lobby-card__detail">{panel.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}

LobbyGrid.propTypes = {
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired,
      accent: PropTypes.string.isRequired,
    })
  ).isRequired,
};
