import React, { useState } from 'react';

const FetchTodos = () => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);
    const [inputMessage, setInputMessage] = useState('a');

    const fetchTodos = async (e) => {
        try {
            // e.preventDefault();
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${inputMessage}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            {error && <p>{error}</p>}
            <br />
            <br />
            <br />
            <br />
            inputMessage: {inputMessage} <br />
            data: {JSON.stringify(todos)}
            <form >
                Enter Number: <input
                    type='text'
                    onChange={event => setInputMessage(event.target.value)} />
                <button onClick={fetchTodos}>Submit</button>
            </form>
            <p>{(todos.length) && JSON.stringify(todos)}</p>
        </div>
    );
};

export default FetchTodos;
