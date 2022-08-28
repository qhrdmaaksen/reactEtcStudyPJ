import classes from './CartButton.module.css';
import {useDispatch, useSelector} from 'react-redux'
import {showCartActions} from '../../store/ui-slice'


const CartButton = (props) => {
  const dispatch = useDispatch()
  /*현재 cart 의 totalQuantity 에 접근*/
  const cartQuantity = useSelector(state=> state.cart.totalQuantity)

  const toggleCartHandler = () => {
    dispatch(showCartActions.toggleCartButton())
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
