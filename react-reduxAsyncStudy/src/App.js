import {useEffect} from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux';

function App() {
  /*카트를 보여줄 state boolean */
  const showCartDetails = useSelector(state => state.showCart.cartIsVisible);
  console.log('showCartDetails value:::', showCartDetails);
  /*현재 카트 전체의 state 를 갖고있는 cart*/
  const cart = useSelector(state => state.cart);
  /*cart 의 변경 사항을 관찰 할 useEffect
  * -effect 의 의존성으로 인해 redux Fn (cart) 이 변경될때마다 useEffect 안에 함수가 재실행되며 최신 state 의 cart 가 됨*/
  useEffect(() => {
   fetch('https://react-http-d5583-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
     body: JSON.stringify(cart)
    });
  }, [cart]);

  return (
    <Layout>
      {showCartDetails && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
