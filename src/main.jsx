// react
import ReactDOM from 'react-dom/client';

// app
import App from './App.jsx';

// redux
import { Provider } from 'react-redux';
import store from './redux/index.js';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// utility
import reportWebVitals from './utility/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
