import {Fragment, useEffect} from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from 'react-redux';
import Notification from './components/UI/Notification';
import {sendCartData, fetchCartData} from "./store/cart-actions";

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

  /*현재 Firebase 에 담긴 cart info 를 첫 렌더링 시 가져오기*/
  useEffect(()=> {
    dispatch(fetchCartData())
  },[dispatch])

  /*cart 의 변경 사항을 관찰 할 useEffect
   * -effect 의 의존성으로 인해 redux Fn (cart) 이 변경될때마다 useEffect 안에 함수가 재실행되며 최신 state 의 cart 가 됨*/
  useEffect(() => {
    /*초기가 true 라면(useEffect 의 첫 전송을 막아줌) */
    if (isInitial) {
      isInitial = false;
      return;
    }
    /*디스패치할때 리덕스가 계속진행되며 sendCartData 를 실행하면 다른 모든 작업이
    * --디스패치되고 리덕스 파일의 사용자 지정 작업 크리에이터 함수 내부에서 http 요청도 전송됨*/
    dispatch(sendCartData(cart))
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
