
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        cacheResults: (state, action) => {
            //action.payload would be like this
            //{iphone: ["iphone pro max", "iphone 15"..]}
            //search query & suggestions (key value pair)
            

            //merging 2 objects state & action.payload
            state = Object.assign(state, action.payload);
        }
    }
});

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;