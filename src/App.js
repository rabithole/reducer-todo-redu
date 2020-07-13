import React, { useState, useReducer, useEffect } from 'react';
import { initialState, reducer } from './reducers/reducer';
import TodoForm from './components/TodoForm';
import ToDo from './components/ToDo';
import './App.css';

function App() {
	const [newTodo, setNewToDo] = useState();
	const [state, dispatch] = useReducer(reducer, initialState);
	const [form, formReset] = useState('');

	useEffect(() => {
			localStorage.setItem('cart', JSON.stringify(state))
		}, [state]);

	const handleChanges = e => {
		setNewToDo(e.target.value);
	}

	const handleSubmit = e => {
		e.preventDefault();
		dispatch({ type: 'ADD_TODO', payload: newTodo });
		setNewToDo('')
	}

	const toggleCompleted = (clickId) => {
		dispatch({ type: 'TOGGLE_COMPLETED', payload: clickId})
	}

	const clearCompleted = e => {
		e.preventDefault();
		dispatch({ type: 'CLEAR_COMPLETED' })
	}

	return (
		<div className="App">
		  <header className="App-header">
		    <TodoForm 
		    	handleSubmit={handleSubmit}
		    	handleChanges={handleChanges}
		    	clear={clearCompleted}
		    	newTodo={newTodo}
		    	setNewToDo={setNewToDo}
		    />

			<ToDo 
				state={state}
				toggleCompleted={toggleCompleted}
			/>
		  </header>
		</div>
	);
}

export default App;
