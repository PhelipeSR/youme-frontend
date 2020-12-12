import { Link } from 'react-router-dom';
import Container from '../components/container';
import Panel from '../components/panel';
import ForSignin from '../components/form/index';

import '../styles/pages/signin.css';
import LoginImg from '../images/login.svg'


function Signin() {
  return (
    <Container>
      <div className="form-container">
        <div className="signin-signup">
          <ForSignin form="sign-in-form"/>
        </div>
      </div>

      <div className="panel-container">
        <Panel diraction="left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
              <Link to="/sign-up" className="btn transparent">Sign up</Link>
            </div>
            <img src={LoginImg} className="image" alt="Imagem login" />
        </Panel>
      </div>
    </Container>
  );
}

export default Signin;
