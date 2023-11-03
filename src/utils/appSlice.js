import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        collapseMenu: (state) => {
            state.isMenuOpen = false;
        }
    }
});

export const {toggleMenu, collapseMenu} = appSlice.actions;
export default appSlice.reducer;