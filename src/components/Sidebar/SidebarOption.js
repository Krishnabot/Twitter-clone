import React from 'react';
import './SidebarOption.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

SidebarOption.prototype = {
  active: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  Icon: PropTypes.string.isRequired,
};
export default SidebarOption;
