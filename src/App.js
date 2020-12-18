import './App.css';
import HomePage from './pages/homepage/homepage.page';

// Remember to import BrowserRouter inside index.js
import { Route, Switch, Link } from 'react-router-dom';

const Hats = () => (
  <div>
    <h1>Hats Page </h1>
  </div>
);

const Jackets = () => (
  <div>
    <h1>Jackets Page </h1>
  </div>
);

const Mens = () => (
  <div>
    <h1>Mens Page </h1>
  </div>
);

const Sneakers = () => (
  <div>
    <h1>Sneaker Page </h1>
  </div>
);

const Womens = () => (
  <div>
    <h1>Womens Page </h1>
  </div>
);

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
        <Route exact path='/shop/hats' component={Hats} />
        <Route exact path='/shop/jackets' component={Jackets} />
        <Route exact path='/shop/sneakers' component={Sneakers} />
        <Route exact path='/shop/mens' component={Mens} />
        <Route exact path='/shop/womens' component={Womens} />
        <Route exact path='/testpage/:name' component={TestPageWithParam} />
      </Switch>
    </div>
  );
}

export default App; 