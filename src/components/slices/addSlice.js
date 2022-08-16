import { createSlice } from "@reduxjs/toolkit";

const initialStatevalue=[];

const addSlice=createSlice({
    name:'Add',
    initialState:{
        value:initialStatevalue,
        val:''
    },
    reducers:{
        addval:(state,action)=>{
            state.value=[...state.value ,action.payload]
        },
        deleteval:(state,action)=>{
            state.value=state.value.filter(val=>val.id !==action.payload.id)
        },
        editVal:(val,action)=>{
            val.val=action.payload
         },
        edit:(state, action)=>{
               state.value=state.value.map(obj=>{
                if(obj.id ===action.payload.id){
                    console.log(obj)
                    return {...obj, add:state.val};  
                         
                   }
                   return obj
              });           
        }
       
    },
    });
    console.log(addSlice)
export const {addval, deleteval, edit,editVal} = addSlice.actions;
export default addSlice.reducer;
