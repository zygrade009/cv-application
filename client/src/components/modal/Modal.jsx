import "./modal.css"
function Modal(props) {

  return (
     <div className="modal-container">{props.children}</div>
  );
}

export default Modal