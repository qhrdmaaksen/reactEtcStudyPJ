import React from 'react';
import ReactDOM from 'react-dom';
/*import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';*/
import { BrowserRouter } from 'react-router-dom';
import ProductsProvider from './context/products-context';
import configureProductsStore from './hooks-store/products-store';
import './index.css';
import App from './App';
import productReducer from './store/reducers/products';

/*const rootReducer = combineReducers({
  shop: productReducer
});

const store = createStore(rootReducer);*/

/*store 를 초기화하도록 해줌,store 사용 준비, 사용하려면 필요한곳으로 이동하면됨 ex containers 의  Products.js file 등
 * store.js 파일에서 initStore를 불렀기 때문에 여기 이 부분의 것들이 설정되고 products-store.js 파일에서 전달하는 값으로 초기화가 될 것
 * */
configureProductsStore();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
