import './panel.css'


function Panel(props) {
  return (
    <div className={`panel ${props.diraction}`}>
      {props.children}
    </div>
  );
}

export default Panel;