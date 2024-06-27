import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cityInfos: {},
    listOfTemps: []
}

const slice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        fillInfos: (state, action) => {
            const { cityInfos, listOfTemps } = action.payload;
            state.cityInfos = cityInfos;
            state.listOfTemps = listOfTemps;
        },
    }
});


const { actions, reducer } = slice;

export const { fillInfos } = actions;
export default reducer;