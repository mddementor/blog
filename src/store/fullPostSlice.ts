import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import type { PayloadAction } from "@reduxjs/toolkit";

export interface fullPost {
    article: string;
    favoriteCount: number;
    tags: string[];
    author: string;
    date: string;
    avatar: string;
    shortDescription: string;
    text: string;
    error?: string;
};

interface stateFullPost {
    post: fullPost | null;
    isLoading: boolean;
    error: string | null;
};

const initialState: stateFullPost = {
    post: null,
    isLoading: false,
    error: null
};

const loadFullPost = createAsyncThunk(
    'fullpost',
    async (slug: string, {rejectWithValue} ) => {
        try{
            const postPromise = await fetch(`https://blog-platform.kata.academy/api/articles/${slug}`);
            if (!postPromise.ok){
                throw new Error(`Ошибка при загрузке поста ${postPromise.status}`);
            };
            const resPost = await postPromise.json();
            const article = resPost.article

            return {
                article: article.title,
                favoriteCount: article.favoritesCount,
                tags: article.tagList,
                author: article.author.username,
                date: article.createdAt,
                avatar: article.author.image,
                shortDescription: article.description,
                text: article.body
            }
        }catch (error: any) {
          return rejectWithValue(error.message)
        }
    }
);

const fullPostSlice = createSlice({
        name: "fullPost",
        initialState: initialState,
        reducers: {

        },
        extraReducers: (builder) => {
            builder
                .addCase(loadFullPost.pending, (state) => {
                    state.isLoading = true;
                    state.error = null;
                    state.post = null;
                })
                .addCase(loadFullPost.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.post = action.payload;
                })
                .addCase(loadFullPost.rejected, (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload as string;
                });
        }
    })
export { loadFullPost };
export default fullPostSlice.reducer