import Banner from '../components/Banner/Banner';
import AboutInfo from '../components/AboutInfo/AboutInfo';
import Reviews from '../components/Reviews/Reviews';
import Hero from '../components/Hero/Hero';
import { useTranslation } from 'react-i18next';
import aboutBanner from '../assets/images/about-usbanner.jpg';

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Banner image={aboutBanner} />
      <AboutInfo />
      <Reviews />
      <Hero
        subtitleHeading={t('Home.Discount.1')}
        subtitleFooter={t('Home.Discount.2')}
        offer={t('Home.Discount.3')}
        title={t('Home.Discount.4')}
        text={t('Home.Discount.5')}
      />
    </>
  );
};

export default AboutPage;
