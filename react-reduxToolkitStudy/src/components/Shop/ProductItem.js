import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch} from 'react-redux'
import {cartActions} from '../../store/cart-slice'

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    /*장바구니에 항목을 추가할때 제품 항목 내부에서 작업에 대한 페이로드로 객체를 전달*/
    dispatch(cartActions.addItemToCart({
/*객체는 props 에서 추출하는 id 를 가리키는 id 필드를 가지고있기에 항상 바로가기를 사용할수있고 타이틀과 가격에 대해
* --동일한 작업을 수행할수 있음*/
      id,
      title,
      price,
      description,
    }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
