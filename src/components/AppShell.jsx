import PropTypes from 'prop-types';

export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      <header className="top-nav">
        <div className="brand">
          <span className="brand__icon">🎲</span>
          <div>
            <p className="brand__name">Paperplay</p>
            <span className="brand__tagline">Play together, anywhere.</span>
          </div>
        </div>
        <nav className="nav-links">
          <button className="ghost">Discover</button>
          <button className="ghost">Schedule</button>
          <button className="ghost">Store</button>
        </nav>
        <div className="profile">
          <div className="profile__avatar">JS</div>
          <div>
            <p className="profile__name">Juno Sparks</p>
            <span className="profile__status">Ready to play</span>
          </div>
        </div>
      </header>
      <main className="main-grid">{children}</main>
    </div>
  );
}

AppShell.propTypes = {
  children: PropTypes.node.isRequired,
};
