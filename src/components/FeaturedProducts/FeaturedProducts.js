import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Title from '../Title/Title';
import Product from '../Product/Product';
import Loading from '../Loading/Loading';

const FeaturedProducts = ({ featuredProducts }) => {
  const { loading } = useSelector((state) => state.products);
  const { t } = useTranslation();
  if (loading) {
    return (
      <section className="py-5">
        <div className="container">
          <Title title={t('Home.5')} />
          <div className="row">
            <div className="col-10 mx-auto col-md-6">
              <Loading />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-5">
        <div className="container">
          <Title title={t('Home.5')} />
          <div className="row">
            {featuredProducts.map((product) => {
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
    </>
  );
};

export default FeaturedProducts;
