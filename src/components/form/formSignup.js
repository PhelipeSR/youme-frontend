import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";

import './form.css';
import Button from '../button';
import api from '../../services/api';


export default function FormSignup(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErros] = useState([]);
  const history = useHistory();

  function HandleSubmit(event){
    event.preventDefault();
    const data = {username, email, password};

    api.post('users', data).then(function (response) {
      localStorage.setItem('token', response.token )
      history.push('/sign-in');
    }).catch(function (error) {
      const responsErrors = error?.response?.data?.error?.errors?.map(element => {
        return element.message ? element.message : element;
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
