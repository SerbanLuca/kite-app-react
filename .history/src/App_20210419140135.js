import './App.css';
import './components/Login'
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Route>
      <Route path="/" exact component={Login}></Route>
    </Route>
  );
}

export default App;
