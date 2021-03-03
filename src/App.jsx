import React, { useState } from 'react';
import Header from './components/Header/Header';
import GameField from './components/GameField/GameField';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {

  const [isVersion, setIsVersion] = useState(true)
  const [isGameInit, setGameInit] = useState(false)
  const [score, setScore] = useState(0)
  const [isSoundOn, setIsSoundOn] = useState(true)

  return (
    <div className="App">
      <Header
        score={score}
        setScore={setScore}
        isVersion={isVersion}
        setIsVersion={setIsVersion}
        isSoundOn={isSoundOn}
        setIsSoundOn={setIsSoundOn}
      />
      <main className="container">
        <GameField
          isVersion={isVersion}
          isGameInit={isGameInit}
          setGameInit={setGameInit}
          score={score}
          setScore={setScore}
          isSoundOn={isSoundOn}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
