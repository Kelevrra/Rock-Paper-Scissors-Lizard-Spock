import React, { useState } from 'react';
import Header from './components/Header/Header';
import GameField from './components/GameField/GameField';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  const [version, setVersion] = useState(true)
  const [gameInit, setGameInit] = useState(false)
  const [scoreSet, setScoreSet] = useState(0)
  const [score, setScore] = useState(0)
  const [soundOn, setSoundOn] = useState(true)

  return (
    <div className="App">
      <Header
        score={score}
        version={version}
        setVersion={setVersion}
        soundOn={soundOn}
        setSoundOn={setSoundOn}
      />
      <main className="container">
        <GameField
          version={version}
          gameInit={gameInit}
          scoreSet={scoreSet}           
          setScoreSet={setScoreSet}
          setGameInit={setGameInit}
          score={score}
          setScore={setScore}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
