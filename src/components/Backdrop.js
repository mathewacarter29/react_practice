function Backdrop(props) {
  //We can call a function in a different file if it is passed in through props
  return <div className="backdrop" onClick={props.onClick}></div>;
}

export default Backdrop;
