import React, { useState } from 'react';
import styled from 'styled-components';
// import Button from '../Button/Button';
import './Home.sass';

const Home = () => {
  const [count, setData] = useState(0);

  const Button = styled.button`
  color: #001c06;
  padding: 0.9rem 1.3rem;
  margin: 0.5rem
  background: #FFF;
  border: 2px solid #c5c5c5;
  border-radius: 3px;
  transition: all 0.4s;
  box-shadow: 1px 2px 5px #d3d3d3;
  &:hover {
    color: #001c06;
    border: 2px solid #c5c5c5;
    background: #c5c5c5;
  }
`;

const PrimaryButton = styled(Button)`
  color: #FFF;
  background: #00c13f;
  border: 2px solid #00c13f;
  &:hover {
    color: #FFF;
    border: 2px solid #00e200;
    background: #00e200;
  }
`;

  return (
    <div className="app">
      <Button>First</Button>
      <Button>Second</Button>
      <PrimaryButton>Primary</PrimaryButton>
      
      <h1 className="title">Hello React!</h1>
      <Button onClick={() => setData(count + 1)}>+</Button>
      <Button onClick={() => setData(count - 1)}>-</Button>
      <Button onClick={() => setData(0)}>Reset</Button>
      <p>Count: {count}</p>
    </div>
  )
}

export default Home
