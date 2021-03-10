import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../redux/products/products_actions';

import MainBanner from '../components/MainBanner/MainBanner';
import Categories from '../components/Categories/Categories';
import BestProducts from '../components/BestProducts/BestProducts';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Hero from '../components/Hero/Hero';
import ClientSlider from '../components/ClientSlider/ClientSlider';
import { useTranslation } from 'react-i18next';
const HomePage = () => {
  const { t } = useTranslation();
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const featuredProducts = products.filter(
    (product) => product.featured === true
  );

  const bestProducts = products.filter((product) => product.best === true);

  return (
    <>
      <MainBanner />
      <Categories />
      <BestProducts bestProducts={bestProducts} />
      <Hero
        subtitleHeading={t('Home.Discount.1')}
        subtitleFooter={t('Home.Discount.2')}
        offer={t('Home.Discount.3')}
        title={t('Home.Discount.4')}
        text={t('Home.Discount.5')}
      />
      <FeaturedProducts featuredProducts={featuredProducts} />
      <ClientSlider />
    </>
  );
};

export default HomePage;
