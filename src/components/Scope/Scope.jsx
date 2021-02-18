import 'bootstrap/dist/css/bootstrap.min.css';
import './Scope.scss';
import { useTranslation } from 'react-i18next';

const Scope = () => {
  const { t } = useTranslation();
  return (
    <div className="scope m-left-auto">
      <span className="scope__title">{t('score')}</span>
      <span className="scope__counter">0</span>
    </div>
  );
};

export default Scope;
