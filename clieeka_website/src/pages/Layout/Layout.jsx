 import { NavLink, Outlet } from "react-router-dom"
 import LayoutCss from "./Layout.module.css"
import NavBotton from "../../components/NavBottom/NavBotton"
import NavTop from "../../components/NavTop/NavTop"

 
 const Layout = () => {
    return(
        <div>
            <div className={LayoutCss.container}>
            <NavTop/>
            <NavBotton/>
            </div>


            <Outlet/>
            
        </div>
    )
 }

 export default Layout