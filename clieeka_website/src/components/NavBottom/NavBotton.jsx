import { Link } from "react-router-dom"
import logoNav from "../../images/img1.png"
import NavBottonCss from "./NavBotton.module.css"

const NavBotton = () => {
    return(
        <div className={NavBottonCss.NavBotton}>
            <div>
                <Link className={NavBottonCss.Logo}>
                    <img src={logoNav} alt=";;" />
                </Link> 
            </div>
            <Link>Врачи</Link>
            <Link>Услуги</Link>
            <Link>Диагностика</Link>
            <Link>Анализы</Link>
            <Link>Акции</Link>
            <Link>Пациентам</Link>
            <Link>О клинике</Link>
            <Link>Отзывы</Link>
            <Link>Контакты</Link>
        </div>
    )
}

export default NavBotton