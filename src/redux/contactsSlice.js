import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    contacts: {
          items: []
      }
    }

    const slice = createSlice({
        name: 'contact',
        initialState,
        reducers: {
            addContact: (state, action) => {
                state.contacts.push(action.payload)
            },
        }
    })

    export const contactsReducer = slice.reducer;
    export const { addContact } = slice.actions;