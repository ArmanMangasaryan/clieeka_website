import { createSlice } from "@reduxjs/toolkit";
import { fetchDoctorsCardsData,} from "./API";


const doctorsCardsSlice = createSlice({
    name:"doctorsCards",
    initialState:{
        datas:[],
        i:0
    },
    reducers:{
            rightLeftcorusel(state, {payload}){
                if (payload.A === false) {
                    if (state.i > 3) {
                        return{
                            ...state,
                            i:0
                        }
                    }else{
                        return{
                            ...state,
                            i: state.i + 1
                        }
                        
                    }
 
                    
                }else if (payload.A === true){
                    if(state.i < 1){
                        return{
                            ...state,
                            i:4
                        }
                    }else{
                        return{
                            ...state,
                            i: state.i - 1
                        } 
                    }
                  
                }
            }
    },

    extraReducers:(builder) => {
        builder
        .addCase(fetchDoctorsCardsData.pending, () => {
            console.log("pending")
        })
        .addCase(fetchDoctorsCardsData.fulfilled, (state, {payload}) => {
            return {
                ...state,
                datas: payload
            }
        })
        .addCase(fetchDoctorsCardsData.rejected, () => {
            console.log("error")
        })
    }
})


export const doctorsCardsReducer = doctorsCardsSlice.reducer
export const {rightLeftcorusel} = doctorsCardsSlice.actions