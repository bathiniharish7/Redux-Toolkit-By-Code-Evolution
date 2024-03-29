import { createSlice,createAsyncThunk} from '@reduxjs/toolkit';

import axios from 'axios';


const initialState ={
    loading:false,
    users:[],
    error:''
}
//Generates pending ,fulfilled and rejected action types automaticaly
export const fetchUsers = createAsyncThunk('fetching',()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.data)
})
const userSlice = createSlice(
    {
        name:'user',
        initialState:initialState,
        extraReducers:(builder)=>{
            builder.addCase(fetchUsers.pending,(state,action)=>{
                state.loading = true
            });
            builder.addCase(fetchUsers.fulfilled,(state,action)=>{
                state.loading = false,
                state.users = action.payload,
                state.error=''
            });
            builder.addCase(fetchUsers.rejected,(state,action)=>{
                state.loading = false,
                state.users=[],
                state.error = action.error.message
            })

        }
    }
)

export default userSlice.reducer;
