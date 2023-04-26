import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, ThemeContext} from "./ThemeContext";
import {Theme} from "../App";

export function useTheme(){
    const {theme, setTheme} = useContext(ThemeContext);

    const toogleTheme = () : void =>{
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        theme, toogleTheme
    }
}