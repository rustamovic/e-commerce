import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { fetchProducts } from '../redux/products/products_actions';

import Product from '../components/Product/Product';
import Banner from '../components/Banner/Banner';
import Title from '../components/Title/Title';
import Hero from '../components/Hero/Hero';
import ClientSlider from '../components/ClientSlider/ClientSlider';

import shirtBanner from '../assets/images/tshirt-banner.jpg';

const ShirtsPage = () => {
  const { t } = useTranslation();
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const shirtProducts = products.filter((product) => product.title === 'shirt');

  return (
    <>
      <Banner image={shirtBanner} />
      <section className="py-5">
        <div className="container">
          <Title title={t('Home.Pages.1')} />
          <div className="row">
            {shirtProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="col-10 col-md-6 col-lg-4 mx-auto"
                >
                  <Product product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Hero
        subtitleHeading={t('Home.Discount.1')}
        subtitleFooter={t('Home.Discount.2')}
        offer={t('Home.Discount.3')}
        title={t('Home.Discount.4')}
        text={t('Home.Discount.5')}
      />
      <ClientSlider />
    </>
  );
};

export default ShirtsPage;
