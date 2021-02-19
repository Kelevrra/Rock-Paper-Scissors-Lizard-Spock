import React, { useState } from 'react';
import Header from './components/Header/Header';
import GameField from './components/GameField/GameField';
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  const [version, setVersion] = useState(true)
  const [gameInit, setGameInit] = useState(false)
  const [score, setScore] = useState(0)

  const [soundOn, setSoundOn] = useState(true)

  return (
    <div className="App">
      <Header
        setVersion={setVersion}
        version={version}
        score={score}

        soundOn={soundOn}
        setSoundOn={setSoundOn}
      />
      <main className="container">
        <GameField
          version={version}
          gameInit={gameInit}
          setGameInit={setGameInit}
          setScore={setScore}
          score={score}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
