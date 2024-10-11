import { useMemo } from 'react';
import './TodoList.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark, faRotateLeft } from "@fortawesome/free-solid-svg-icons";

const TodoList = ({ todos, onComplete, onDelete }) => {

  const check = <FontAwesomeIcon icon={faCheck} />
  const cancel =  <FontAwesomeIcon icon={faXmark} />
  const undo = <FontAwesomeIcon icon={faRotateLeft} />

  const renderedTodos = useMemo(() => {
    return todos.map((todo, index) => (
      <li className={todo.completed ? 'task-completed' : 'task-uncompleted'} key={index}>
        {todo.title} : {todo.completed ? 'done' : 'not done'}
        <div>
          <button className={todo.completed ? 'task-button completed' : 'task-button uncompleted'} onClick={() => onComplete(index)}>{todo.completed ? undo : check }</button>
          <button className='task-button delete' onClick={() => onDelete(index)}>{cancel}</button>
        </div>
      </li>
    ));
  }, [todos, onComplete, onDelete]);

  return (
    <div className='list-container'>
      <h2>Todo List</h2>
      <ul>{renderedTodos}</ul>
    </div>
  );
};

export default TodoList;

