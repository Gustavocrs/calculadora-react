import "./Input.css";

 function Input(props) {
  return (
    <input
      className={props.className}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      id={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  ); 
}

export default Input
