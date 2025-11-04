import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => { state.count += 1 },
        decreament: (state) => { state.count -= 1 },
        reset: (state) => { state.count = 0 }

    }
})

export const { increment, decreament, reset } = counterSlice.actions
export default counterSlice.reducer