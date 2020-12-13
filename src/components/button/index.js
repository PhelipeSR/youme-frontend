import './button.css'


function Button(props) {
  return (
    <button className={`btn ${props.styling}`}>{props.children}</button>
  );
}

export default Button;
