export default function Button(props) {
  return (
    <>
      <button onClick={props.onclick} className={props.class}>
        {props.name}
      </button>
    </>
  );
}
