import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { createStore,applyMiddleware } from 'redux';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import {BrowserRouter,Route} from 'react-router-dom';
import thunk from 'redux-thunk'
import Home from './components/Home.jsx';


const App = () => (
  <div>
    <Route path="/" exact component={Home} />

  </div>
)

const store = createStore(reducers,applyMiddleware(thunk))


render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

