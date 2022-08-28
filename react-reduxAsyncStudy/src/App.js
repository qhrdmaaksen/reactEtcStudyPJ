import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from "react-redux";

function App() {
  const showCartDetails = useSelector(state => state.showCart.cartIsVisible);
  console.log('showCartDetails value:::', showCartDetails);
  return (
    <Layout>
      {showCartDetails && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
