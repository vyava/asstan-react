import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

require('es6-promise').polyfill();
require('isomorphic-fetch');

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router';

// Font Awesome Imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

// Library Creation
library.add(fab, fas);

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
