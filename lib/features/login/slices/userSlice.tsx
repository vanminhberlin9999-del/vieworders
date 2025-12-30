// slice username
// create store + export type
import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { username: ""},
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        clearUsername: (state) => {
            state.username = ""
        }
    },
});

export default userSlice;