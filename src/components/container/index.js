import './container.css'


function ContainerAuth(props) {
  return (
    <div className={`container-auth ${props.mode}`}>
      {props.children}
    </div>
  );
}

export default ContainerAuth;
