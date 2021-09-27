import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/views/App';
import { Provider } from 'react-redux';
import { configStore } from './redux/store/store';

const store = configStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
