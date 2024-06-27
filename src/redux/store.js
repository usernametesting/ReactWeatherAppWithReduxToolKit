import { configureStore } from '@reduxjs/toolkit';
import reducer from './slices/fbReducer';

const store = configureStore({
    reducer: {
        weather: reducer

    }
});

export default store;
