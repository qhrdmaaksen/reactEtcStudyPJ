import { Fragment } from 'react';
import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

/*useEffect 에서 처음 로딩 시 빈 cart 를 보내지 않도록 도와줄 헬퍼 변수
 * -렌더링될때 변경되지 않도록 함수 외부에 선언*/
let isInitial = true;
function App() {
  const dispatch = useDispatch();

  /*카트를 보여줄 state boolean */
  const showCartDetails = useSelector(state => state.ui.cartIsVisible);
  console.log('showCartDetails value:::', showCartDetails);

  /*성공, 실패 알림 표시 state*/
  const notification = useSelector(state => state.ui.notification);

  /*현재 카트 전체의 state 를 갖고있는 cart*/
  const cart = useSelector(state => state.cart);

  /*cart 의 변경 사항을 관찰 할 useEffect
   * -effect 의 의존성으로 인해 redux Fn (cart) 이 변경될때마다 useEffect 안에 함수가 재실행되며 최신 state 의 cart 가 됨*/
  useEffect(() => {
    const sendCartData = async () => {
      /*알림 표시*/
      dispatch(
        uiActions.showNotification({
          status: '보류중..',
          title: '보내는중..',
          message: '카트 데이터 보내는중!',
        }),
      );
      /*요청 데이터*/
      const response = await fetch('https://react-http-d5583-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      if (!response.ok) {
        throw new Error('cart data 전송 중 에러 발생');
      }
      dispatch(
        uiActions.showNotification({
          status: '성공',
          title: '전송 성공!',
          message: '카트 데이터 전송 성공!',
        }),
      );
    };
    /*초기가 true 라면(useEffect 의 첫 전송을 막아줌) */
    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch(error => {
      dispatch(
        uiActions.showNotification({
          status: '에러',
          title: '전송 중 에러 발생',
          message: 'cart data 전송 중 에러가 발생하였습니다.',
        }),
      );
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification status={notification.status} title={notification.title} message={notification.message} />
      )}
      <Layout>
        {showCartDetails && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
