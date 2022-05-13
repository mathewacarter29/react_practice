import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  //React hook called directly in functional component
  //Actual value - first argument
  //Function to assign to value - second argument
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  //Example of an arrow function
  //const <function name> = (<parameters>) => {<function body>}
  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/*To render something conditionally, use state and return NULL if you want to return nothing */}
      {modalIsOpen ? (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      ) : null}
      {/*We can also conditionally render things this way, utilizing short circuiting */}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
