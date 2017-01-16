import React from 'react';
import { ScrollView } from '../dist/index';

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

const containerSizeStyles = {
  width: '300px',
  height: '200px'
}

const Button = ({ children, onClick }) => (
  <button
    style={buttonStyles}
    onClick={onClick}>
      {children}
  </button>
  );

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
