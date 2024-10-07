import { Route, Routes } from "react-router-dom"
import Layout from "../pages/Layout/Layout"
import Home from "../pages/Home/Home"

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    )
} 
export default AppRouter