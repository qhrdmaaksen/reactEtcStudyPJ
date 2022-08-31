/*작업 객체를 반환할것이며 작업 크리에이터로 작성*/
import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-http-d5583-default-rtdb.firebaseio.com/cart.json',
      );
      if (!response.ok) {
        throw new Error('fetchCartData :::데이터를 불러오는중 에러 발생');
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      /*장바구니를 받아 cart-slice.js 에있는 replaceCart 에 cartData 전송*/
      dispatch(
        cartActions.replaceCart({
          /*replaceCart 에 전달하는 payload 가 cartData.items 인 키를 갖는 객체인지 확인*/
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        }),
      );
    } catch (error) {
      /*오류 있을 시 에러 알림*/
      dispatch(
        uiActions.showNotification({
          status: '에러',
          title: '카트 정보 불러오중 에러 발생',
          message: '카트 정보 불러오중 에러가 발생하였습니다.',
        }),
      );
    }
  };
};

export const sendCartData = cart => {
  /*아직 리듀서에 도달하지 않았기때문에 비동기 코드 또는 부수효과(sideEffect)를 수행 할수있음*/
  return async dispatch => {
    /*전송 알림 표시*/
    dispatch(
      uiActions.showNotification({
        status: '보류중..',
        title: '보내는중..',
        message: '카트 데이터 보내는중!',
      }),
    );
    const sendRequest = async () => {
      /*요청 데이터*/
      const response = await fetch(
        'https://react-http-d5583-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            /*changed 는 포함하지 않고 총수량과 아이템만있는 객체 생성*/ items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        },
      );
      if (!response.ok) {
        throw new Error('cart data 전송 중 에러 발생');
      }
    };
    try {
      await sendRequest();
      /*오류 없을 시 성공 알림*/
      dispatch(
        uiActions.showNotification({
          status: '성공',
          title: '전송 성공!',
          message: '카트 데이터 전송 성공!',
        }),
      );
    } catch (error) {
      /*오류 있을 시 에러 알림*/
      dispatch(
        uiActions.showNotification({
          status: '에러',
          title: '전송 중 에러 발생',
          message: 'cart data 전송 중 에러가 발생하였습니다.',
        }),
      );
    }
  };
};
