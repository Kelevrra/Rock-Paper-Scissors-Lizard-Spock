import React from 'react';
import Header from './components/Header/Header';
import GameField from './components/GameField/GameField';
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <GameField />
      </main>
      <Footer />
    </div>
  );
}

export default App;
