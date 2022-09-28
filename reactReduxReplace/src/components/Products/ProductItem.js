import React, {useContext} from 'react';
/*import { useDispatch } from 'react-redux';*/
import {ProductsContext} from '../../context/products-context'
import Card from '../UI/Card';
import './ProductItem.css';
/*import { toggleFav } from '../../store/actions/products';*/

const ProductItem = props => {
  /*const dispatch = useDispatch();*/
  /*const toggleFav = useContext(ProductsContext).toggleFav*/

  const toggleFavHandler = () => {
    /*dispatch(toggleFav(props.id));*/
    console.log('toggleFavHandler Fn 호출중')
    /*toggleFav(props.id)*/
    /*console.log('toggleFavHandler Fn toggleFav value', toggleFav)*/
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
