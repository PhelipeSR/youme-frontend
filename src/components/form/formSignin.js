import { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FaEnvelope, FaLock } from "react-icons/fa";

import './form.css';
import AuthContext  from '../../contexts/auth';
import Button from '../button';
import api from '../../services/api';

export default function FormSignin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErros] = useState([]);
  const history = useHistory();
  const { setUser, setSigned } = useContext(AuthContext);

  function HandleSubmit(event){
    event.preventDefault();

    const data = {email, password};
    
    api.post('auth/authenticate', data).then(function (response) {
      const user = {
        id: response.data.id,
        email: response.data.email,
        username: response.data.username,
      }

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(user));
      setSigned(true);
      setUser(user);

      history.push('/chat');
    }).catch(function (error) {
      const responsErrors = error?.response?.data?.error?.errors?.map(element => {
        return element.message ? element.message : element;
      });
      setErros(responsErrors);
    });
  }
  

  return (
    <form onSubmit={HandleSubmit} className={props.form}>
      <h2 className="title">Sign in</h2>
      {errors.length > 0 &&
        <div className="alert">
          {errors.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      }
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
      <Link to="/recovery-password" className="recovery-link">Forgot your password?</Link>
      <Button type="button" styling="solid">Login</Button>
    </form>
  );
}