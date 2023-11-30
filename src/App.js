


import React, { useState } from 'react';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const addTodo = (text) => {
    const newTodo = {
      id: Math.random(),
      text,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (todo) => {
    setEditing(true);
    setCurrentTodo({
      id: todo.id,
      text: todo.text,
    });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm
        addTodo={addTodo}
        updateTodo={updateTodo}
        editing={editing}
        setEditing={setEditing}
        currentTodo={currentTodo}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
};

export default App;
