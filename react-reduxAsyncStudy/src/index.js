import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import store from './store/index'

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*스토어 제공하여 컴포넌트 내에서 리덕스 활용 가능케 함*/
root.render(<Provider store={store}><App /></Provider>);
