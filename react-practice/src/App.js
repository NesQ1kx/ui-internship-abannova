import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.scss';
import HomePage from './components/HomePage/HomePage';
import Shop from "./components/Shop/Shop";
import ProductPage from "./components/ProductPage/ProductPage";
import Modal from "./components/Modal/Modal";
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route component={HomePage} path="/" exact />
            <Route component={Shop} path="/shop" exact />
            <Route component={ProductPage} path={"/shop/:id"} exact />
            <Route component={Modal} path={"/modal/"} exact />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
