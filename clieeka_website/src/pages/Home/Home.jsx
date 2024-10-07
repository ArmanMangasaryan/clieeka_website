import DirectionCards from "../../components/DirectionCards/DirectionCards"
import DoctorsCardsSlider from "../../components/DoctorsCardsSlider/DoctorsCardsSlider"
import TextImgHeader from "../../components/TextImgHeader/TextImgHeader"
import TopSlider from "../../components/TopSlider/TopSlider"

const Home = () => {
    return(
        <div>
            <TopSlider/>
            <TextImgHeader/>
            <DirectionCards/>
            <DoctorsCardsSlider/>
        </div>
    )
}

export default Home