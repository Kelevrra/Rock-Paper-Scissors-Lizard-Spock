import 'bootstrap/dist/css/bootstrap.min.css';
import './Scope.scss';
import { useTranslation } from 'react-i18next';

const Scope = ({score}) => {
  const { t } = useTranslation();
  return (
    <div className="scope">
      <span className="scope__title">{t('score')}</span>
      <span className="scope__counter">{score}</span>
    </div>
  );
};

export default Scope;
