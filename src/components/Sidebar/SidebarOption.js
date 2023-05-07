import React from 'react';
import PropTypes from 'prop-types';
import './SidebarOption.css';

function SidebarOption({
  text, Icon, active, onClick,
}) {
  const handleClick = (event) => {
    if (onClick) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <button
      type="button"
      className={`sidebarOption ${active ? 'sidebarOption__active' : ''}`}
      onClick={handleClick}
    >
      <Icon />
      <h2>{text}</h2>
    </button>
  );
}

SidebarOption.propTypes = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

SidebarOption.defaultProps = {
  active: false,
  onClick: () => {},
};

export default SidebarOption;
