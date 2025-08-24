export function Button(props) {
  return (
    <div className="d-grid">
      <button type={props.type} onClick={props.onClick} className="btn btn-primary">
        {props.text}
      </button>
    </div>
  )
}
