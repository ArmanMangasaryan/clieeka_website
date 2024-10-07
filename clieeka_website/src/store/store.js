import { configureStore } from "@reduxjs/toolkit"
import { HomeTopsliderReducer } from "./slices/directionHomeTopSlice/directionHomeTopSlice"
import { directionCardsReducer } from "./slices/directionCards/directionCardsSlice"
import { doctorsCardsReducer } from "./slices/doctorsCardsSliderSlice/doctorsCardsSlice"


const store = configureStore({
    reducer:{
        homeTopSlider: HomeTopsliderReducer,
        directionCards: directionCardsReducer,
        doctorsCards:doctorsCardsReducer

    }
})

export default store