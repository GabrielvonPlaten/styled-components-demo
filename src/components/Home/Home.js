import React, { useState } from 'react';
import './Home.sass';

// Styled Components
import Button from '../utils/Button';
import PrimaryButton from '../Buttons/PrimaryButton';
import DangerButton from '../Buttons/DangerButton';

const Home = () => {
  const [count, setData] = useState(0);

  const greet = message => {
    console.log(message);
  }

  return (
    <div className="app">
      <PrimaryButton onClick={() => greet("Hello there!")}>Primary</PrimaryButton>
      <DangerButton>Danger</DangerButton>
      <h1 className="title">Hello React!</h1>
      <Button onClick={() => setData(count + 1)}>+</Button>
      <Button onClick={() => setData(count - 1)}>-</Button>
      <Button onClick={() => setData(0)}>Reset</Button>
      <p>Count: {count}</p>
    </div>
  )
}

export default Home
