import React, { useEffect } from 'react';
import icon from '../../assets/sound-icn.svg';
import iconOn from '../../assets/sound-on.svg';
import iconMute from '../../assets/sound-mute.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AudioController.scss'

const AudioController = ({
  isSoundOn,
  setIsSoundOn
}) => {

  useEffect(() => {
    const raw = localStorage.getItem('RPSLSound') || true
    setIsSoundOn(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem('RPSLSound', JSON.stringify(isSoundOn))
  }, [isSoundOn])

  return (
    <div className="audio-controller">
      <button type="button" onClick={() => setIsSoundOn(el => !el)}>
        <img className="audio-controller__wave" src={icon} width="40" alt=""/>
        <img className="audio-controller__wave-status" src={isSoundOn ? iconOn : iconMute} width="40" alt=""/>
      </button>
    </div>
  )
}

export default AudioController
