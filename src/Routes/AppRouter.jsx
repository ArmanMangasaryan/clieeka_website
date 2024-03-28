import { Route, Routes } from "react-router-dom"
import Layout from "../pages/Layout/Layout"

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route/>
            </Route>
        </Routes>
    )
} 
export default AppRouter