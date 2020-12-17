import './App.css';
import HomePage from './pages/homepage/homepage.page';

// Remember to import BrowserRouter inside index.js
import { Route } from 'react-router-dom';

const TestPage = () => (
  <div>
    <h1>Test Page </h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/testpage' component={TestPage} />
    </div>
  );
}

export default App; 