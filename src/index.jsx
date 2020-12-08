import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { createStore } from 'redux';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import rootreducer from './reducers/index';
import {BrowserRouter,Route} from 'react-router-dom';

import Home from './components/Home.jsx';


const App = () => (
  <div>
    <Route path="/" exact component={Home} />

  </div>
)

const store = createStore(rootreducer)


render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

