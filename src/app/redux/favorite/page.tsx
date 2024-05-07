import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState{
    value: any
}

const initialState: CounterState = {
    value: []
}

const favoriteSlice = createSlice({
    name:'favorites',
    initialState,
    reducers:{
        addToFav:(state,action:PayloadAction)=>{
            state.value = [...state.value, action.payload]
        },
        removeFromFav:(state,action:PayloadAction)=>{
            state.value = state.value.filter((item:number)=>item != action.payload)

        }    
    }
})


export const { addToFav, removeFromFav} = favoriteSlice.actions

export default favoriteSlice.reducer