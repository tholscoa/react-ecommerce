import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.page';
// import Products from './pages/shop/products.component'
import ShopPage from './pages/shop/shop.component';

// Remember to import BrowserRouter inside index.js
import { Route, Switch, Link } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInSignOut from './components/signinsignup/sign-in-sign-out.component';
import { auth, createUserAuthProfile } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'

const TestPageWithParam = (props) => (
  <div>
    <h1>I am with param: {props.match.params.name}</h1>
  </div>
);

class App extends React.Component {
  // constructor no longer needed because of redux connect we will also replace setState with props
  // constructor(){
  //   super();
  //   this.state = {
  //      currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null;



  componentDidMount() {
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser: user})
      if (userAuth) {
        const userRef = await createUserAuthProfile(userAuth);

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot); 
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        })
      }
      else {
        setCurrentUser(userAuth);
      }

      // console.log(user);
    });

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* <Header currentUser={this.state.currentUser} /> */}
        <Header />
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);