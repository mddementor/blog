import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface demoPost {
    id: string;
    title: string;
    description: string;
}

interface PostsState {
    postsData: demoPost[];
    isLoading: boolean;
    error: string | null;
    page: number;
    total: number;
}

const initialState: PostsState = {
    postsData: [],
    isLoading: false,
    error: '',
    page: 1,
    total: 0,
}

const getPosts = createAsyncThunk(
    'fetchPosts',
    async (page: number) => {
        const offset = (page - 1) * 5;
        try{
            const response = await fetch(`https://blog-platform.kata.academy/api/articles?limit=5&offset=${offset}`);
            if(!response.ok){
                throw new Error(`Ошибка при получении постов: ${response.status}`);
            }
            const postsAnd = await response.json();
            console.log(postsAnd)

            const posts = await postsAnd.articles

            return {
                postData: posts,
                total: postsAnd.articlesCount,
                page
            }
        }
        catch (e) {
            console.log(e);
        }
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPage: (state,action: PayloadAction<number>) => {
            state.page = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(getPosts.fulfilled, (state, action: PayloadAction<{ postData: demoPost[]; total: number; page: number } | undefined>) => {
                if (action.payload) {
                    state.postsData = action.payload.postData;
                    state.total = action.payload.total;
                    state.page = action.payload.page;
                }
                state.isLoading = false;
            })

            .addCase(getPosts.rejected, (state, action) => {
                state.error = action.error.message || 'Unknown error';
                state.isLoading = false;
            });
    }
});


export { getPosts };
export default postsSlice.reducer;
export const { setPage } = postsSlice.actions