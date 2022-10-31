import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = props => {
  /*현재 카트의 아이템들에 접근*/
  const cartItems = useSelector(state => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {/*리덕스에서 가져오는 모든 항목에 대해 CartItem 에 전달하는 항목*/}
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name /*cartReducer 에서 title 을 name 으로 setting 했기에 name 으로 명시*/,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
