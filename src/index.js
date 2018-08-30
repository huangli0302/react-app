import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/';
import './common/style.css';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';
const render = Component => {  // eslint-disable-line no-unused-vars
    ReactDOM.render(
      //绑定redux、热加载
      
        <AppContainer>
          <Component />
        </AppContainer>,
      document.getElementById('root')
    )
  }
  render(Route); 
registerServiceWorker();
