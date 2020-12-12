import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signin from './pages/signin';
import Signup from './pages/signup';
import Home from './pages/home';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/sign-in" component={Signin}/>
        <Route path="/sign-up" component={Signup}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;