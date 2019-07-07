import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DangerButton from '../DangerButton/DangerButton';
import './Home.sass';

const Home = (props) => {
  const [count, setData] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  const Button = styled.button`
    background: #FFF;
    border: 2px solid #c5c5c5;
    border-radius: 3px;
    box-shadow: 1px 2px 5px #d3d3d3;
    color: #001c06;
    padding: 0.9rem 1.3rem;
    margin: 0.5rem
    transition: all 0.3s;
    &:hover {
      border: 2px solid #c5c5c5;
      background: #c5c5c5;
      color: #001c06;
    }
  `;

  const PrimaryButton = styled(Button)`
    background: #00c13f;
    border: 2px solid #00c13f;
    color: #FFF;
    &:hover {
      border: 2px solid #00e200;
      background: #00e200;
      color: #FFF;
    }
  `;

  const dangerFunction = message => {
    console.log("DANGER: " + message);
  }

  if (loading === false) {
    return (
      <div className="app">
        <Button>First</Button>
        <Button>Second</Button>
        <PrimaryButton>Primary</PrimaryButton>
        <DangerButton 
          text="Danger" 
          active={ false } 
          dangerFunction={() => dangerFunction("Danger Message here!")} 
        />
        <DangerButton text="Active" active={ true } />

        <h1 className="title">Hello React!</h1>
        <Button onClick={() => setData(count + 1)}>+</Button>
        <Button onClick={() => setData(count - 1)}>-</Button>
        <Button onClick={() => setData(0)}>Reset</Button>
        <p>Count: {count}</p>
      </div>
    )
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
}

export default Home
