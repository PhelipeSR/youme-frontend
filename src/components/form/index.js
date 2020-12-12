import './form.css';
import { Link } from 'react-router-dom';
import Button from '../button';
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";


export function FormSignin(props) {
  return (
    <form className={props.form}>
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <FaUserAlt size={18} color="#acacac"/>
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-field">
        <FaLock size={18} color="#acacac"/>
        <input type="password" placeholder="Password" />
      </div>
      <Link to="/recovery-password" className="recovery-link">Forgot your password?</Link>
      <Button type="solid">Login</Button>
    </form>
  );
}

export function FormSignup(props) {
  return (
    <form className={props.form}>
      <h2 className="title">Sign Up</h2>
      <div className="input-field">
        <FaUserAlt size={18} color="#acacac"/>
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-field">
        <FaEnvelope size={18} color="#acacac"/>
        <input type="email" placeholder="E-mail" />
      </div>
      <div className="input-field">
        <FaLock size={18} color="#acacac"/>
        <input type="password" placeholder="Password" />
      </div>
      <Button type="solid">Sign Up</Button>
    </form>
  );
}

export default FormSignin;