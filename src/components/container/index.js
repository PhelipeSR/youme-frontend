import './container.css'


function Container(props) {
  return (
    <div className={`container ${props.mode}`}>
      {props.children}
    </div>
  );
}

export default Container;
