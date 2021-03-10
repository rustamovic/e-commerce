import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CgShoppingBag } from 'react-icons/cg';
import { FaBars } from 'react-icons/fa';
import {
  toggleSideCart,
  toggleSidebar,
} from '../../redux/sidebar/sidebar_actions';
import languageData from "../../assets/flag/languageData";
import '../../assets/flag/sprite-flags-24x24.css';
// navbar styles
import './Navbar.scss';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
const Navbar = () => {
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
  const { t } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  return (
    <header className="site-header">
      <div className="container">
        <nav className="site-header__navbar">
          <div className="site-header__navbar-nav">
            <div className="site-header__logo-container">
              <Link to="/">
              <h1 className="site-header__logo mr-5">LOGO</h1>
              </Link>
            </div>
            <ul className="site-header__links">
                  <li >
                    <Link to='/' className="site-header__link">
                    {t('Header.1')}
                    </Link>
                  </li>
                  <li >
                    <Link to='/products' className="site-header__link">
                    {t('Header.3')}
                    </Link>
                  </li>
                  <li >
                    <Link to='/about' className="site-header__link">
                    {t('Header.2')}
                    </Link>
                  </li>
                  <li >
                    <Link to='/contact' className="site-header__link">
                    {t('Header.4')}
                    </Link>
                  </li>
            </ul>
          </div>
          <div className="site-header__icons">
            <ul className="site-header__icons-list">
              <li className="site-header__icons-item">
              <Link><i onClick={()=>handleClick('en')} className={`flag flag-24 gx-mr-2 flag-${languageData[2].icon}`} /></Link>
              <Link><i onClick={()=>handleClick('uz')} className={`flag flag-24 gx-mr-2 flag-${languageData[0].icon}`} /></Link>
              </li>
              <li className="site-header__icons-item">
                <CgShoppingBag
                  onClick={() => dispatch(toggleSideCart())}
                  style={{ cursor: 'pointer' }}
                />
                <span className="site-header__cart-count">{cartCount}</span>
              </li>
              <li className="site-header__icons-item">
                <FaBars
                  className="site-header__toggle"
                  onClick={() => dispatch(toggleSidebar())}
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
