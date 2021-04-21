import './App.css';
import './components/Login'
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Map from './components/Map'
import Profil from './components/Profile'


function App() {
  return (
    <Router>
      <Route path="/" exact component={Login}/>
      <Route path="/dashboard" exact component={Dashboard}/>
      <Route path="/map" exact component={Map}/>
      <Route path="/profile" exact component={Profil}/>
    </Router>

  );
}

export default App;
