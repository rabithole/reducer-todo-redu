import React, { useState } from 'react';

function AddToDoForm(props) {

	return (
		<div className="App">
		  <form onSubmit={props.handleSubmit}>
		  	<input 
		  		type='text'
		  		value={props.newTodo}
		  		name='newTodo'
		  		onChange={props.handleChanges}
		  		
		  	/>

		  	<button type='submit'>Add To Do</button>
		  	<button onClick={props.clear}>Clear Completed</button>
		  </form>
		</div>
	);
}

export default AddToDoForm;