import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './layout/home/home';
import ButtonSandbox from './components/button/Sandbox';
import ButtonGroupSandbox from './components/button-group/SandBox';
import IconSandbox from './components/icon/SandBox';
import ImageSandbox from './components/image/SandBox';
import ChipSandbox from './components/chip/SandBox';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/button" component={ButtonSandbox} />
        <Route exact path="/button-group" component={ButtonGroupSandbox} />
        <Route exact path="/icon" component={IconSandbox} />
        <Route exact path="/image" component={ImageSandbox} />
        <Route exact path="/chip" component={ChipSandbox} />
      </Switch>
    </App>
  </BrowserRouter>
  )
  , document.getElementById('root'));
registerServiceWorker();
