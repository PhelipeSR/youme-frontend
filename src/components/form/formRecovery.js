import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";

import './form.css';
import Button from '../button';
import api from '../../services/api';

export default function FormRecovery(props) {
  const [email, setEmail] = useState('');
  const [errors, setErros] = useState([]);
  const [success, setSuccess] = useState([]);

  function HandleSubmit(event){
    event.preventDefault();

    const data = {email};
    
    api.post('auth/recovery-password', data).then(function (response) {
      setErros([]);
      setSuccess(['E-mail de recuperação da conta enviado']);
      setEmail('');
    }).catch(function (error) {
      const responsErrors = error?.response?.data?.error?.errors?.map(element => {
        return element.message ? element.message : element;
      });
      setSuccess([]);
      setErros(responsErrors);
    });
  }


  return (
    <form onSubmit={HandleSubmit} className={props.form}>
      <h2 className="title">Recovery Password</h2>
      {errors.length > 0 &&
        <div className="alert">
          {errors.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      }
      {success.length > 0 &&
        <div className="success">
          {success.map((item, i) => (
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
      <Link to="/sign-in" className="recovery-link">Go back to sign in</Link>
      <Button type="button" styling="solid">Recovery</Button>
    </form>
  );
}