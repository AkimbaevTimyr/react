import {Routes, Route, Link} from 'react-router-dom';
import Button from "./components/Button";
import "./styles/index.scss"
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Suspense, useState} from "react";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

export enum Theme {
    LIGHT =  'light',
    DARK  = 'dark'
}


const App = () =>{

    const {theme, toogleTheme} = useTheme();

    return(
        <div className={classNames('app', {}, [theme])} >
            <button onClick={toogleTheme}>Toogle</button>
            <Link to={'/'}>
                Main
            </Link>
            <Link to={'/about'}>
                About
            </Link>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPageAsync />} />
                    <Route path={"/about"} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;