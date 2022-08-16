import {createSlice} from '@reduxjs/toolkit';
const initialStateValue=null;
const githubSlice=createSlice({
    name:'Username',
    initialState:{
        value:initialStateValue,
    },
    reducers:{
        githubdata:(state,action)=>{
           state.value=action.payload;
       }
    },
});

export const {githubdata}=githubSlice.actions;
export default githubSlice.reducer 