import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : "counter",
    initialState : {
        countState : 0,
    },
    reducers :{
        increment : (state)=>{
            state.countState++;
        },
        decrement : (state)=>{
            state.countState = state.countState - 1 >=0 ? state.countState - 1 : 0;
        },
        reset : (state)=>{
            state.countState = 0;
        },
        incrementByRandomNumber : (state,action)=>{
            state.countState = state.countState + action.payload;
        },

        decrementByRandomNumber : (state,action)=>{
            state.countState = state.countState - action.payload >= 0 ? state.countState - action.payload : state.countState ;
            console.log(state.countState);
        },

    }
})

export const {increment ,decrement, reset , incrementByRandomNumber , decrementByRandomNumber} = counterSlice.actions;

export default counterSlice.reducer;