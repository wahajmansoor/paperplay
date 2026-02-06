import PropTypes from 'prop-types';

export default function TabBar({ tabs, activeTab, onSelect }) {
  return (
    <div className="tab-bar" role="tablist" aria-label="Game tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab${tab === activeTab ? ' tab--active' : ''}`}
          role="tab"
          aria-selected={tab === activeTab}
          onClick={() => onSelect(tab)}
          type="button"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

TabBar.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
