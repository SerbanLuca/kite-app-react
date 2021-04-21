import './App.css';
import './components/Login'
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard'


function App() {
  return (
    <Router>
      <Route path="/" exact component={Login}/>
    </Router>
  );
}

export default App;
