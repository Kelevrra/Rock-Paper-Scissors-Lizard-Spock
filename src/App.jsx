import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import GameField from './components/GameField/GameField';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  const [version, setVersion] = useState(true)
  const [gameInit, setGameInit] = useState(false)
  const [score, setScore] = useState(0)
  const [soundOn, setSoundOn] = useState(true)

  useEffect(() => {
    const raw = localStorage.getItem('RPSLSVersion') || true
    setVersion(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem('RPSLSVersion', JSON.stringify(version))
  }, [version])

  useEffect(() => {
    const raw = localStorage.getItem('RPSLSScore') || 0
    setScore(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem('RPSLSScore', JSON.stringify(score))
  }, [score])

  useEffect(() => {
    const raw = localStorage.getItem('RPSLSound') || true
    setSoundOn(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem('RPSLSound', JSON.stringify(soundOn))
  }, [soundOn])

  return (
    <div className="App">
      <Header
        score={score}
        setScore={setScore}
        version={version}
        setVersion={setVersion}
        soundOn={soundOn}
        setSoundOn={setSoundOn}
      />
      <main className="container">
        <GameField
          version={version}
          gameInit={gameInit}
          setGameInit={setGameInit}
          score={score}
          setScore={setScore}
          soundOn={soundOn}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
