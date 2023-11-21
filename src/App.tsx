import { Route, Routes } from "react-router-dom"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { Suspense } from "react"
import { MainPageAsync } from "./pages/HomePage/MainPage.async"
import "./styles/index.scss"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"


function App() {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {red: false}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Suspense fallback={"...Loading"}>
                <Routes>
                    <Route path={"/"} element={<MainPageAsync />} />
                    <Route path={"about"} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>

        </div>
    )

}

export default App