import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import Stack from './components/Stack';
import ScrollUp from './components/ScrollUp';

function App() {
  return (
    <div style={{
      overflowX: "hidden"
    }}>
     
      <Nav/>
      <Header/>
      <Stack/>
      <Contact/>
    </div>
  );
}

export default App;
