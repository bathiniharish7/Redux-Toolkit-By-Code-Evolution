import { ordered as cakeOrdered } from '../cake/cakeSlice';
import { createSlice } from '@reduxjs/toolkit';
const initialState ={
    numOfIceCreams : 20
}
const iceCreamSlice = createSlice(
    {
        name:'icecream2',
        initialState:initialState,
        reducers:
        {
            ordered:(state,action)=>
            {
                state.numOfIceCreams = state.numOfIceCreams - action.payload;
            },
            restocked:(state,action)=>
            {
                state.numOfIceCreams = state.numOfIceCreams + action.payload;
            }
        },
        extraReducers:(builder)=>{
            builder.addCase(cakeOrdered,(state,action)=>{
                state.numOfIceCreams = state.numOfIceCreams-action.payload;
            })
        }
    }
)

export default iceCreamSlice.reducer;
export const {ordered,restocked}  = iceCreamSlice.actions