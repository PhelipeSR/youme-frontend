import { useContext, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


import Signin from './pages/signin';
import Signup from './pages/signup';
import Home from './pages/home';
import Chat from './pages/chat';
import AuthContext from './contexts/auth';


const PriveteRoute = ({ component: Component, ...rest }) => {
  const {signed} = useContext(AuthContext);
  console.log('ROTA')

  return (
    <Route
      {...rest}
      render={ props =>
        signed ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/sign-in", state: { from: props.location } }} />
        )
      }
    />
  );
}


export default function Routes() {
  const localToken = localStorage.getItem('token');
  const localUser = JSON.parse(localStorage.getItem('user'));


  const [signed, setSigned] = useState(localToken && true);
  const [user, setUser] = useState(localUser ?? {});

  return (
    <AuthContext.Provider value={{ signed, user, setSigned, setUser }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/sign-in" component={Signin}/>
          <Route path="/sign-up" component={Signup}/>

          <PriveteRoute path="/chat" component={Chat}/>
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
