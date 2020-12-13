import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { FaLock } from "react-icons/fa";

import './form.css';
import Button from '../button';
import api from '../../services/api';

export default function FormReset(props) {
  const [password, setPassword] = useState('');
  const [errors, setErros] = useState([]);
  const history = useHistory();
  const { token } = useParams();

  function HandleSubmit(event){
    event.preventDefault();

    const data = {password, token};
    console.log('oi')
    api.put('auth/reset-password', data).then(function (response) {
      history.push('/sign-in');
    }).catch(function (error) {
      const responsErrors = error?.response?.data?.error?.errors?.map(element => {
        return element.message ? element.message : element;
      });
      setErros(responsErrors);
    });
  }


  return (
    <form onSubmit={HandleSubmit} className={props.form}>
      <h2 className="title">Reset Password</h2>
      {errors.length > 0 &&
        <div className="alert">
          {errors.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      }
      <div className="input-field">
        <FaLock size={18} color="#acacac"/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <Button type="button" styling="solid">Reset</Button>
    </form>
  );
}