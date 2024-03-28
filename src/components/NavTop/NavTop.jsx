import { Link } from "react-router-dom"
import NavTopCss from "./NavTop.module.css"

const NavTop = () => {
    return(
        <div className={NavTopCss.NavTop}>
            <Link>Сеть клиник Томской области</Link>
            <Link>Версия для слабовидящих</Link>
            <div className={NavTopCss.buttonNum}>
            <Link className={NavTopCss.num}>+ 7 (978) 00-00-000</Link>
            <Link className={NavTopCss.button}>Записаться на прием</Link>
            </div>
 
       </div>
    )
}

export default NavTop