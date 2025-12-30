// slice theme
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: { theme: "light"},
    reducers: {
        setTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload;
        },
    },
});

export default themeSlice;