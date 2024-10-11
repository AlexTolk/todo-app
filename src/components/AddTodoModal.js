import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import './AddTodoModal.css'

const AddTodoModal = ({ closeModal, setTodos }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const modalRef = useRef();

  const check = <FontAwesomeIcon icon={faCheck} />
  const cancel =  <FontAwesomeIcon icon={faXmark} />

  useEffect(() => {
    return () => {
      modalRef.current = null;
    };
  }, [])

  const addTask = () => {
    setTodos(prevTodos => [
      ...prevTodos,
      { title: taskTitle, completed: false }
    ]);
    closeModal();
  };

  return (
    <div className="modal">
      <h3>Add New Task</h3>
      <div className="modal-form">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Task Title"
          className="modal-input"
        />
        <button onClick={addTask} className="modal-button check">{check}</button>
        <button onClick={closeModal} className="modal-button cancel">{cancel}</button>
      </div>
    </div>
  );
};

export default AddTodoModal;
