import React, {useContext} from 'react';
import { useSelector } from 'react-redux';
import {ProductsContext} from '../context/products-context'
import ProductItem from '../components/Products/ProductItem';
import './Products.css';
import {useStore} from '../hooks-store/store'

const Products = props => {
  /*useStore 는 우리가 globalStore와 globalDispatch 함수에 접근할 수 있도록 해줍
  * 커스텀 훅의 커스텀 store가 반환하는 첫번째 요소(현 상태)만 뽑아냄,
  *  커스텀 훅에선 두가지를 반환(globalState,dispatch) 지금필요한건 globalState*/
  /*state를 초기화 할 때 initStore의 두번째 인자로 전달한 것은 객체인데요,
   products의 키를 추가해 주었습니다 이것이 초기화 되는 겁니다 두번째 인자이죠,
    initialState로 말이죠 이것이 globalState와 병합될 것이고 그러면
    globalState에 products의 키가 있게 되고 그것을 여기 state.products에서 접근*/
  const state = useStore()[0]

  /*const productList = useContext(ProductsContext).products*/
  /*const productList = useSelector(state => state.shop.products);*/
  console.log('productList value :::',state.products)
  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
