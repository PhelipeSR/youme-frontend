import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/sign-in">Sign In</Link>
      <br />
      <Link to="/sign-up">Sign Up</Link>
    </>
  );
}

export default Home;
