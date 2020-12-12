import './button.css'


function Button(props) {
  return (
    <button className={`btn ${props.type}`}>{props.children}</button>
  );
}

export default Button;
