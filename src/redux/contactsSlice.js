import {createSlice} from "@reduxjs/toolkit"


const slice = createSlice({
    name : "contacts",
    initialState: {
          items: []
        },
        reducers: {
            addContact : (state, action) => {
                state.items.push(action.payload)
            },
            deleteContact: (state,action) => {
                console.log(action.payload)
                state.items = state.items.filter((item) => item.id !== action.payload)
            }
            
        
    }

})

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;

