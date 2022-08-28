import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home';
import Cart from './Components/Cart';
import Context from './Component2/Context';

function App() {
  return (
    <Context>
      <BrowserRouter>
      <div className='App'>
        <Header/>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/cart' exact>
            <Cart/>
          </Route>
        </Switch>
        </div>
      </BrowserRouter>
    </Context>
  );
}

export default App;
