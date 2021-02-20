import 'bootstrap/dist/css/bootstrap.min.css';
import './Score.scss';
import { useTranslation } from 'react-i18next';

const Score = ({score}) => {
  const { t } = useTranslation();
  return (
    <div className="score">
      <span className="score__title">{t('score')}</span>
      <span className="score__counter">{score}</span>
    </div>
  );
};

export default Score;
