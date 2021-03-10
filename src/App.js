import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Suspense, lazy } from "react";
import Loading from './components/Loading/Loading'
// pages
import {
  Home,
  Shirts,
  Shoes,
  HeadPhones,
  About,
  Contact,
  Cart,
  AllProducts,
  SingleProduct,
  Error,
} from './pages';

// components
import Navbar from './components/Navbar/Navbar';
import CartSidebar from './components/CartSidebar/CartSidebar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <Router>
    <Suspense
          fallback={
            <><Loading/></>
          }
        >
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/shirts" component={Shirts}/>
        <Route exact path="/shoes" component={Shoes}/>
        <Route exact path="/headphones" components={HeadPhones}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/products" component={AllProducts}/>
        <Route exact path="/products/:id" children={<SingleProduct />} />
        <Route path="*" component={Error}/>
      </Switch>
      <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
