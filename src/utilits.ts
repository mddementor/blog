import { useSelector, useDispatch } from "react-redux";
import type {TypedUseSelectorHook} from  "react-redux"
import type { AppDispatch, RootState } from "./store/store.tsx";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const getDatePost = (isoDate: string) => {
    const months = ['January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];
    const date = new Date(isoDate);
    return `${ months[(date.getMonth())]} ${date.getDate()}, ${date.getFullYear()}`
};

