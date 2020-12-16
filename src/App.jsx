import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Cart from './components/Cart'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Router>
      <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </Router>

    </div>
  );
}

export default App;
