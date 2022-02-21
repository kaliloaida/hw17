import "./Modal.css";
import Card from "./Card";
const Modal = (props) => {
  return (
    <>
      {/* <div onClick={props.onConfirm} className={classes.backdrop} /> */}
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          {props.children}
          <button onClick={props.onConfirm}>Okay</button>
        </footer>
      </Card>
    </>
  );
};
export default Modal