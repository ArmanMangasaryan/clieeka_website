import { useEffect } from "react"
import CardsCss from "./DirectionCards.module.css"
import { useDispatch, useSelector } from "react-redux"
import { fetchDirectionCardData } from "../../store/slices/directionCards/API"
import { Link } from "react-router-dom"

const DirectionCards = () => {
    const dispatch = useDispatch()
    const {datas} = useSelector((state) => state.directionCards)
    
    const lastData = datas.slice(0, 4)
    useEffect(() =>{
        dispatch(fetchDirectionCardData())
    },[])


    return(
        <div className={CardsCss.parentDiv}>
            <div className={CardsCss.pagesDiv}>
                <p className={CardsCss.page}>Направления нашей работы</p>
                <p className={CardsCss.button}>Все направления<span class="material-symbols-outlined">arrow_forward_ios</span></p>
            </div>
            <div className={CardsCss.cards}>
                    {lastData.map((data) => {
                        return(
                            <div key={data.id} className={CardsCss.card}>
                                <img src={data.img} alt="" className={CardsCss.img}/>
                                <p className={CardsCss.DataNames}>{data.name}</p>
                                <Link className={CardsCss.links}>Подробнее</Link>
                            </div>
                        )
                    })}
                
            </div>
        </div>
    )
}


export default DirectionCards