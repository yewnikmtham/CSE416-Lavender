import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";


function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
            <Link to="/">Sprout</Link>
            <Link to="/leaderboard"> Create A Post</Link>
            <Link to="/login"> Login</Link>
            <Link to="/registration"> Registration</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/leaderboard" exact component={Leaderboard}/>
          <Route path="/login" exact component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
