import TodoList from './components/TodoList';
import AddTodoModal from './components/AddTodoModal';
import { useState, useCallback } from 'react';
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const handleCompleteTask = useCallback((index) => {
    setTodos(prevTodos => 
      prevTodos.map((todo, i) =>
        i === index ? {...todo, completed: !todo.completed} : todo
      )
    );
  }, []);
  const DeleteTaskHandler = useCallback((index) => {
    setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
  }, [])

  return (
    <div className='App'>
      <TodoList
        todos={todos}
        onComplete={handleCompleteTask}
        onDelete={DeleteTaskHandler}
      />
      {!isModalOpen && <button className="open-button" onClick={openModal}>Add Task</button>}

      {isModalOpen && <AddTodoModal closeModal={closeModal} setTodos={setTodos} />}
    </div>
  );
};

export default App;