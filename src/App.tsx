import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;