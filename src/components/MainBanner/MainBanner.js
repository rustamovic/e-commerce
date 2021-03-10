import { Link } from 'react-router-dom';
import './MainBanner.scss';
import { useTranslation } from 'react-i18next';
const MainBanner = () => {
  const { t } = useTranslation();
  return (
    <div className="banner">
      <div className="banner__hero">
        <h1 className="banner__title">
          {t('Home.Header.1')}
          <br />
          {t('Home.Header.2')}
          <br />
          {t('Home.Header.3')}
        </h1>
        <Link to="/products" className="btn btn-black">
          {t('Home.Header.4')}
        </Link>
      </div>
    </div>
  );
};
export default MainBanner;