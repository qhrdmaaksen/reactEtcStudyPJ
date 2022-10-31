import { Route, Routes } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        {/*더이상 Switch component 는 사용되지않으며 Routes component 로 대체되었음*/}
        <Routes>
          {/*구성요소 컴포넌트는 element 속성에 요소를 담아 사용*/}
          <Route path='/welcome' element={<Welcome />}></Route>
          <Route path='/products' exact element={<Products />}></Route>
          <Route path='/products/:productId' element={<ProductDetail />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
