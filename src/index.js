import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './layout/home/home';
import ButtonSandbox from './components/button/Sandbox';
import ButtonGroupSandbox from './components/button-group/SandBox';
ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/button" component={ButtonSandbox} />
        <Route exact path="/button-group" component={ButtonGroupSandbox} />
      </Switch>
    </App>
  </BrowserRouter>
  )
  , document.getElementById('root'));
registerServiceWorker();
