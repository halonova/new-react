import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.js";
import Info from "./Pages/Info.js"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Info" element={<Info/>}/>
        </Routes>
    )
}