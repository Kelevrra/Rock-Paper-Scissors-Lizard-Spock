import React from 'react';
import AudioPlay from './components/AudioPlay';
import icon from '../../assets/sound-icn.svg';
import iconOn from '../../assets/sound-on.svg';
import iconMute from '../../assets/sound-mute.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AudioController.scss'

const AudioController = ({soundOn, setSoundOn}) => {
  
  return (
    <div className="audio-controller">
      <button type="button" onClick={() => setSoundOn(el => !el)}>
        <img className="audio-controller__wave" src={icon} width="40" alt=""/>
        <img className="audio-controller__wave-status" src={soundOn ? iconOn : iconMute} width="40" alt=""/>
      </button>
      <AudioPlay />
    </div>
  )
}

export default AudioController
