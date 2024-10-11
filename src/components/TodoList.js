import { useMemo } from 'react';

const TodoList = ({ todos, onComplete, onDelete }) => {
  const renderedTodos = useMemo(() => {
    return todos.map((todo, index) => (
      <li key={index}>
        {todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}
        <button onClick={() => onComplete(index)}>{todo.completed ? 'Undo' : 'Mark as completed' }</button>
        <button onClick={() => onDelete(index)}>Delete</button>
      </li>
    ));
  }, [todos, onComplete, onDelete]);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>{renderedTodos}</ul>
    </div>
  );
};

export default TodoList;

