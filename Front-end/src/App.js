import './App.css';
import Singup from './component/SignUp';
import Singin from './component/SingIn';
import Reservation from './component/Reservation'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
function App() {
  return (

    <Router>
    <div className="App">
    <Switch>
      <Route exact path="/singup" component={Singup} />
      <Route exact path="/singin" component={Singin} />
      <Route exact path="/reservation" component={Reservation} />
      <Redirect from="/" to="home" />
    </Switch>
    </div>
  </Router>
  );
}

export default App;