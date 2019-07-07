import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'


const DangerButton = (props) => {
  const { text, active, dangerFunction, } = props;

  const DangerButton = styled.button`
    background: ${active ? "#d70000" : "#FFF"};
    border: 2px solid #ff0000;
    border-radius: 3px;
    box-shadow: 1px 2px 5px #d3d3d3;
    color: ${active ? "#fff" : "#000"};
    margin: 0.5rem;
    padding: 0.9rem 1.3rem;
    transition: all 0.3s;
    &:hover {
      background: #ff0000;
      color: #fff;
    }
  `;

  return (
    <DangerButton 
      active 
      callback 
      onClick={dangerFunction}>
      {text}
    </DangerButton>
  )
}

DangerButton.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  dangerFunction: PropTypes.func,
}

export default DangerButton
