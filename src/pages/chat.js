import { useHistory } from 'react-router-dom';

function Chat() {
  const history = useHistory();

  function SignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    history.push('/');
  }

  return (
    <>
      <h1>Chat</h1>
      <button className="btn" onClick={SignOut}>Sair</button>
    </>
  );
}

export default Chat;