import { useState } from 'react'
import './form.css';
import { Link, useHistory } from 'react-router-dom';
import Button from '../button';
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import api from '../../services/api';


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
      <Button type="button" styling="solid">Login</Button>
    </form>
  );
}

export function FormSignup(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErros] = useState([]);
  const history = useHistory();

  function HandleSubmit(event){
    event.preventDefault();
    const data = {username, email, password};

    api.post('users', data).then(function (response) {
      history.push('/sign-in');
    }).catch(function (error) {
      const responsErrors = error?.response?.data?.error?.errors.map(element => {
        return element.message
      });
      setErros(responsErrors)
    });

  }

  return (
    <form onSubmit={HandleSubmit} className={props.form}>
      <h2 className="title">Sign Up</h2>
      {errors.length > 0 &&
        <div className="alert">
          {errors.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      }
      <div className="input-field">
        <FaUserAlt size={18} color="#acacac"/>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className="input-field">
        <FaEnvelope size={18} color="#acacac"/>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="input-field">
        <FaLock size={18} color="#acacac"/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <Button type="button" styling="solid">Sign Up</Button>
    </form>
  );
}

export default FormSignin;