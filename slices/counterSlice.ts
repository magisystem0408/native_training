import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

const initialState = {
    count: 3,
}


export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increament: (state) => {
            state.count += 1;
        },
        decreament: (state) => {
            state.count -= 1;
        },

        addByPayload: (state, action: PayloadAction<number>) => {
            state.count = state.count + action.payload
        }
    }
})


export const {increament,decreament,addByPayload} =counterSlice.actions

// usestateみたいなの
export const selectCount =(state:RootState) => state.counter.count

export default counterSlice.reducer