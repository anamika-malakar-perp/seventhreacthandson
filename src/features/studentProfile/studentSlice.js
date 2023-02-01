import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
    name: 'Student', 
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload.state)
            return state
        },
        editUser: (state, action) => {
            state[action.payload.index] = action.payload.state;
            console.log(action.payload)
            return state
        }
    }
});

export const {addUser, editUser} = studentSlice.actions;

export default studentSlice.reducer
