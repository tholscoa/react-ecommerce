import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.page';
// import Products from './pages/shop/products.component'
import ShopPage from './pages/shop/shop.component';

// Remember to import BrowserRouter inside index.js
import { Route, Switch, Link } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInSignOut from './components/signinsignup/sign-in-sign-out.component';
import { auth } from './firebase/firebase.utils';

const TestPageWithParam = (props) => (
  <div>
    <h1>I am with param: {props.match.params.name}</h1>
  </div>
);

class App extends React.Component {
  constructor(){
    super();
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth = null;


  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      
      // console.log(user);
    });
    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <hr /> 
        {/* Links: <Link to='/'>Home</Link> 
        <Link to='/testpage'>  Test Page</Link> */}
  
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInSignOut} />
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
}

export default App; 