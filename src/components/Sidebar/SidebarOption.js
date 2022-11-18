import React from 'react';
import './SidebarOption.css';
import PropTypes from 'prop-types';

function SidebarOption({ text, Icon }) {
  return (
    <div className="sidebarOption">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

SidebarOption.propTypes = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.string.isRequired,
};
export default SidebarOption;
