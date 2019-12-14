import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router';

const { lazy, Suspense } = React;

const App = lazy(() => import('./containers/App/index'));

ReactDOM.render(
  <Suspense fallback={<div>loading</div>}>
    <BrowserRouter>
      <App>
        <Routes />
      </App>
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
);
