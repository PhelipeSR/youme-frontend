import { Link } from 'react-router-dom';

import Panel from '../components/panel';
import FormSignup from '../components/form/formSignup';
import Container from '../components/container';
import '../styles/pages/signin.css';
import RegisterImg from '../images/register.svg'


export default function Signup() {
  return (
    <Container mode="sign-up-mode">
      <div className="form-container">
        <div className="signin-signup">
          <FormSignup form="sign-up-form" />
        </div>
      </div>

      <div className="panel-container">
        
        <div className="panel left-panel"></div>
        <Panel diraction="right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
              <Link to="/sign-in" className="btn transparent">Sign in</Link>
            </div>
            <img src={RegisterImg} className="image" alt="Imagem Register" />
        </Panel>
      </div>
    </Container>
  );
}
