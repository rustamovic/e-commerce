import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../redux/products/products_actions';

import Product from '../components/Product/Product';
import Banner from '../components/Banner/Banner';
import Title from '../components/Title/Title';
import Hero from '../components/Hero/Hero';
import ClientSlider from '../components/ClientSlider/ClientSlider';
import { useTranslation } from 'react-i18next';
import headbanner from '../assets/images/headbanner4.jpeg';

const HeadPhonesPage = () => {
  const { t } = useTranslation();
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const headProducts = products.filter(
    (product) => product.title === 'headphones'
  );

  return (
    <>
      <Banner image={headbanner} />
      <section className="py-5">
        <div className="container">
          <Title title={t('Home.Pages.3')}/>
          <div className="row">
            {headProducts.map((product) => {
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

export default HeadPhonesPage;
