export const initialState = 
  !JSON.parse(localStorage.getItem('cart')) ? [] : JSON.parse(localStorage.getItem('cart'));


export function reducer(state, action) { // Action === dispatch
  switch (action.type) { // Action is an object, it is passed through reducer to dispatch in the App.js file. 
    case 'ADD_TODO':
      return [
        ...state,
          {
            todo: action.payload,
            completed: false,
            id: Date.now()
          },
        ];

      case 'TOGGLE_COMPLETED':
        return  state.map(item => {
                  if(action.payload === item.id){
                    item.completed = !item.completed
                  }  
                  return item
                });


      case 'CLEAR_COMPLETED':
        return state.filter(item => item.completed === false);
         
    default:
      return state;
  }
}
