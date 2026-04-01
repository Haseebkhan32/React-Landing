import { createSlice, nanoid } from "@reduxjs/toolkit";




const SearchSlice = createSlice({
    name: "Todo",
    initialState: {
        todos: [{
            id: '1',
            text: 'hello world',
        }]
    },
    reducers:{
        addtodo: (state, action)=>{
            const addtodo = {
                id: nanoid(),
                text: action.payload.text
            }
        },
        removetodo: (state, action)=>{
           state.todos = state.todos.filter( (todo) => todo.id !==  action.payload )
        },
    }
})

export const { addtodo ,removetodo } = SearchSlice.actions
export default SearchSlice.reducer