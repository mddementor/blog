import {configureStore} from "@reduxjs/toolkit";
import postsReducer from '../store/postListSlice.tsx';
import fullPostReducer from "./fullPostSlice.ts";



const store = configureStore({
    reducer: {
        posts: postsReducer,
        fullPost: fullPostReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;