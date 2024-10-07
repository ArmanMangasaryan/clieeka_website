import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchDoctorsCardsData} from "../../store/slices/doctorsCardsSliderSlice/API"
import SliderCss from "./DoctorsCardsSlider.module.css"
import { Link } from "react-router-dom"
import img1 from "../../images/img_img1.png"
import { rightLeftcorusel } from "../../store/slices/doctorsCardsSliderSlice/doctorsCardsSlice"

const DoctorsCardsSlider = () => {
    const dispatch = useDispatch()
    const datas = useSelector((state) => state.doctorsCards.datas)
    console.log(datas)
    const i = useSelector((state) => state.doctorsCards.i) 
    const lastData = datas.slice(0, 8)
    console.log(i)
    useEffect(() => {
        dispatch(fetchDoctorsCardsData())
    },[])

    return(
        <div className={SliderCss.bacgroundDiv}>
            <div className={SliderCss.ParentDiv}>
                <div className={SliderCss.ParentDivTextChevron}>
                    <p>Наши специалисты</p>
                    <div className={SliderCss.ParentDivChevron}>
                        <p className={SliderCss.ChevronLeft} onClick={ () => dispatch(rightLeftcorusel({A:true}))}><i class="fa-solid fa-chevron-left"></i></p>
                        <p className={SliderCss.ChevronRight} onClick={ () => dispatch(rightLeftcorusel({A: false}))}><i class="fa-solid fa-chevron-right"></i></p>
                    </div>
                </div>
                <div className={SliderCss.Slider}>
                    <div className={SliderCss.transform} style={{transform:`translateX(${-290 * i}px)`}}>
                        {
                            lastData.map((data) => {
                                return(
                                    <div className={SliderCss.Card}>
                                        <img className={SliderCss.CardImg} src={img1} alt="" />
                                        <p className={SliderCss.CardName}>{data.name}</p>
                                        <p className={SliderCss.CardSpecialization}>{data.specialization}</p>
                                        <p className={SliderCss.CardButton}>Запись на прием</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={SliderCss.ParentDivButton}>
                    <Link className={SliderCss.Button}>Все специалисты</Link>
                </div>  
            </div>
            
        </div>
    )
}

export default DoctorsCardsSlider