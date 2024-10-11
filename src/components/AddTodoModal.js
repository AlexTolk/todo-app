import { useEffect, useState, useRef } from "react";

const AddTodoModal = ({ closeModal, setTodos }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const modalRef = useRef();

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
      <h2>Add New Task</h2>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Task Title"
      />
      <button onClick={addTask}>Add</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};

export default AddTodoModal;
