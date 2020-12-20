import './App.css';
import HomePage from './pages/homepage/homepage.page';
// import Products from './pages/shop/products.component'
import ShopPage from './pages/shop/shop.component';

// Remember to import BrowserRouter inside index.js
import { Route, Switch, Link } from 'react-router-dom';

const TestPageWithParam = (props) => (
  <div>
    <h1>I am with param: {props.match.params.name}</h1>
  </div>
);

function App() {
  return (
    <div>
      Links: <Link to='/'>Home</Link> 
      <Link to='/testpage'>  Test Page</Link>

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        {/* <Route exact path='/shop/hats' component={Products.Hats} />
        <Route exact path='/shop/jackets' component={Products.Jackets} />
        <Route exact path='/shop/sneakers' component={Products.Sneakers} />
        <Route exact path='/shop/mens' component={Products.Mens} />
        <Route exact path='/shop/womens' component={Products.Womens} />
        <Route exact path='/testpage/:name' component={TestPageWithParam} /> */}
      </Switch>
    </div>
  );
}

export default App; 