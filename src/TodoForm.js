
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const TodoForm = ({ addTodo, updateTodo, editing, setEditing, currentTodo }) => {
  const [text, setText] = useState(editing ? currentTodo.text : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    
    if (editing) {
      updateTodo(currentTodo.id, text);
      setEditing(false);
    } else {
      addTodo(text);
    }
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
        className="form-control" 
      />
      <button type="submit" className="btn btn-primary">
        {editing ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default TodoForm;
