import React from 'react';
import PropTypes from 'prop-types';
import './SidebarOption.css';

function SidebarOption({
  text, Icon, active, onClick,
}) {
  return (
    <div className={`sidebarOption ${active ? 'sidebarOption__active' : ''}`} onClick={onClick}>
      <Icon />
      <h2>{text}</h2>
    </div>
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
