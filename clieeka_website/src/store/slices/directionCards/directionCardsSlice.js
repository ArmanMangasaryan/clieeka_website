import { createSlice } from "@reduxjs/toolkit";
import { fetchDirectionCardData } from "./API";

const directionCardsSlice = createSlice({
    name:"directionCards",
    initialState: {
        datas:[],
        in: 0
    },
    reducers:{
    },

    extraReducers:(builder) => {
        builder
        .addCase(fetchDirectionCardData.pending, () => {
            console.log("pending")
        })
        .addCase(fetchDirectionCardData.fulfilled, (state, {payload}) => {
            return {
                ...state,
                datas: payload 
            }
        })
        .addCase(fetchDirectionCardData.rejected, () => {
            console.log("eror")
        })
        
    }
})


export const directionCardsReducer = directionCardsSlice.reducer