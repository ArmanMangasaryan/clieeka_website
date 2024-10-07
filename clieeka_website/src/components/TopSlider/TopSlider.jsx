import imgSlider1 from "../../images/ProKnockout.png"
import TopSliderCss from "./topSlider.module.css"
import bakgroundImg from "../../images/background.png"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {  clickSetLastData, rightLeft, setLastData, stopScroling } from "../../store/slices/directionHomeTopSlice/directionHomeTopSlice"
import { tuchRightLeft } from "../../store/slices/directionHomeTopSlice/directionHomeTopSlice"
import { useRef } from "react"
import "./TopSlider.css"





const TopSlider = () => {
    const dispatch = useDispatch()
    const {lastData, datas} = useSelector((state) => state.homeTopSlider)
    const {x} = useSelector((state) => state.homeTopSlider)
    const timoutRef = useRef(null)
    console.log(lastData)
    console.log(x)


   
    const hendlerTuch = (e) => {

        console.log(e.view.innerWidth )
        console.log(e)
       dispatch(setLastData())

        if (timoutRef.current){
            clearTimeout(timoutRef.current);
        }
       
            
       
        timoutRef.current = setTimeout(() => {
           
            dispatch(stopScroling())

        }, 20)

        
            dispatch(rightLeft())
            
            dispatch(tuchRightLeft({A:e.deltaX, B:e.deltay}))
        
    }

    return(
        <div>

        <div className={TopSliderCss.bacground} style={{backgroundColor:`${lastData.backgroundcolor}`,animationName:lastData.animation}} onWheel={hendlerTuch} >

                            <img src={bakgroundImg} alt="" className={TopSliderCss.bacgroundImg}/>
            <div className={TopSliderCss.parentDiv} >
                <div className={TopSliderCss.text}>
                    <p className={TopSliderCss.page1}>{lastData.title}</p>
                    <p className={TopSliderCss.page2} >{lastData.text}</p>
                    <Link className={TopSliderCss.button} ><p>Подробнее<span class="material-symbols-outlined">arrow_forward_ios</span></p></Link>
                </div>
                <div className={TopSliderCss.imgsSlider}>
                    <img src={imgSlider1} alt="img2"  className={TopSliderCss.img}/>
                </div>
            </div>

               

        </div>
                <div className={TopSliderCss.clicker}>
                    {datas.map((data) => {
                        return(
                            <p style={{backgroundColor: lastData.id === data.id ? "#FFFFFF" : ""}} onClick={() => dispatch(clickSetLastData(data))}></p>
                        )
                    })}
                </div>

        </div>
    )
}


export default TopSlider