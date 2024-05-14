import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TSupply = {
    title: string;
    category: string;
    quantity:string;
    image:string;
    description:string
}
type TInitial = {
    allSupply : TSupply[]
}
const initialState:TInitial= {
    allSupply:[]
}

const apiSlice = createSlice({
    name:'allSupply',
    initialState,
    reducers:{
        createSullpy:(state,action:PayloadAction<TSupply>) => {
            state.allSupply.push({...action.payload,})
        }
    }
})

export const {createSullpy} = apiSlice.actions
export default apiSlice.reducer