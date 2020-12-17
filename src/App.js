import './App.css';
import HomePage from './pages/homepage/homepage.page';

// Remember to import BrowserRouter inside index.js
import { Route, Switch } from 'react-router-dom';

const TestPage = () => (
  <div>
    <h1>Test Page </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/testpage' component={TestPage} />
      </Switch>
    </div>
  );
}

export default App; 