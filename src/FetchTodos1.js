import React, { useState } from 'react';

const FetchTodo = () => {
  const [todo, setTodo] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const fetchTodo = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${inputValue}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTodo(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setTodo(null);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      fetchTodo();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter number"
        />
        <button type="submit">Fetch Todo</button>
      </form>
      {error && <p>{error}</p>}
      {todo && (
        <div>
          <h3>Todo:</h3>
          <p>ID: {todo.id}</p>
          <p>Title: {todo.title}</p>
          <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
};

export default FetchTodo;
