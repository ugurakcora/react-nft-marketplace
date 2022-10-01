import React from 'react';
import Client from './components/Client';
import CreateAndSell from './components/CreateAndSell';
import Home from './components/Home';

export default function App() {
  return (
    <div>
      <Home />
      <Client />
      <CreateAndSell />
    </div>
  )
}
