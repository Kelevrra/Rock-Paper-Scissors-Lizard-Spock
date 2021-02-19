import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import './ReloadPopup.scss'
import gameRulls from '../../../../data/gameRulls'

const ReloadPopup = ({setGameInit, setChosenItem, setScore, score, timerUp, chosenItem, botItem}) => {
  const { t } = useTranslation();

  return (
    <div className="reload-popup">
      { timerUp && gameRulls(chosenItem, botItem) === 'nobody' ? <div>
        <h1>{t("draw")}!</h1>
        <button className="btn btn-primary" type="button" onClick={() => {
          setGameInit(false)
          setChosenItem('')
          }}>{t("again")}!</button>
      </div>
      : timerUp && gameRulls(chosenItem, botItem) === 'win' ? <div>
        <h1>{t("win")}!</h1>
        <button className="btn btn-primary" type="button" onClick={() => {
          setGameInit(false)
          setChosenItem('')
          setScore(score + 1)
          }}>{t("again")}!</button>
        </div>
        : timerUp && gameRulls(chosenItem, botItem) === 'lose' ? <div>
        <h1>{t("lose")}!</h1>
        <button className="btn btn-primary" type="button" onClick={() => {
          setGameInit(false)
          setChosenItem('')
          setScore(score - 1)
          }}>{t("play again")}!</button>
        </div> 
        : '' }
    </div>
  );
};

export default ReloadPopup;
