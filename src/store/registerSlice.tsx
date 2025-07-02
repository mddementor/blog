import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface registerState {
    Username: string;
    email: string;
    password: string;
    repeatPassword: string;
};

const initialState: registerState = {
    Username: '',
    email: '',
    password: '',
    repeatPassword: '',
};

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<string>) => {

        }
    }

});