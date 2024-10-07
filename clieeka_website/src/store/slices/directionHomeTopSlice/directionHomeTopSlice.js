import { createSlice } from "@reduxjs/toolkit";

const directionHomeSlice = createSlice({
    name:"homeTopSlice",
    initialState: {
        datas:[
             {
                id:0,
                title:"Welcome to our advanced online clinic services",
                text:"Welcome to our online clinic, where you can access highly qualified medical consultations and treatment conveniently from your home. Our dedicated team of doctors is available around the clock to provide professional medical assistance tailored to your needs. Contact us for immediate support and care.",
                backgroundcolor:"#3BB96D",
                img:"",
                animation:"animation1",
                circle: true

            },
             {
                id:1,
                title:"Expert online consultations for your health needs",
                text:"Experience top-notch medical care through our online platform. Our team of experienced doctors offers comprehensive consultations for a wide range of health concerns. Trust our expertise and receive personalized care without leaving your home",
                backgroundcolor:"red",
                img:"",
                animation: "animation2",
                circle: false
            },
             {
                id:2,
                title:"Your health matters: reliable online medical",
                text:"Ensure your well-being with our accessible online clinic services, available 24/7. Our committed team of specialists is here to address your health concerns promptly and effectively. Entrust your health to our experienced professionals and receive the care you deserve, right from your home.",
                backgroundcolor:"blue",
                img:"",
                animation:"animation3",
                circle: false

            },     
             {
                id:3,
                title:"Welcome to our unique online clinic",
                text:"Discover our advanced medical services available online. Our team of doctors is ready to provide you with high-quality consultations and treatment without leaving your home. Ensure your health receives caring and qualified attention right now!",
                backgroundcolor:"purple",
                img:"",
                animation:"animation4",
                circle: false

            },            
             {
                id:4,
                title:"Online consultations experienced",
                text:"Gain access to professional medical assistance through our convenient online platform. Our experienced doctors are ready to assist you with a wide range of conditions. Entrust your health to us and receive high-quality care right from your home.",
                backgroundcolor:"rgb(209, 165, 108)",
                img:"",
                animation:"animation5",
                circle: false

            },
            
             ],
             lastData:{
                id:0,
                title:"Welcome to our advanced online clinic services",
                text:"Welcome to our online clinic, where you can access highly qualified medical consultations and treatment conveniently from your home. Our dedicated team of doctors is available around the clock to provide professional medical assistance tailored to your needs. Contact us for immediate support and care.",
                backgroundcolor:"#3BB96D",
                img:"",
                animation:"animation1",
                circle: false
             },
             in:0,
             x:0,
             y:0,
             stop: true,     
    },
    reducers:{
        rightLeft(state, {payload}){

        if(state.stop){

    
            if(state.x > 500){
                if(state.in === 4){
                    return {
                        ...state,
                        in:0,
                        stop: false
                    }
                }else{
                    return {
                        ...state,
                        in:state.in + 1,
                       stop: false,

                    }
                }
            }else if(state.x < -500){
                if(state.in === 0){
                    return {
                        ...state,
                        in: state.datas.length - 1,
                        stop: false
                    }
                }else{
                    return {
                        ...state,
                        in: state.in - 1,
                        stop: false
                    }
                }
            }
        }
        },
        tuchRightLeft(state, {payload}){

            return {
                ...state,
                x: state.x + payload.A,
                y: state.y + payload.B
            }
        
        },

        stopScroling(state, {payload}){
            return {
                ...state,
                x:0,
                stop:true,
            }
        },

        setLastData(state, {payload}){
            return {
                ...state,
                lastData: state.datas.filter((data) => data.id === state.in)[0],
            }
        },
        clickSetLastData(state, {payload}){
            return {
                ...state,
                lastData:payload,
                in: payload.id
            }
        }
    }
})


export const {rightLeft} = directionHomeSlice.actions
export const HomeTopsliderReducer = directionHomeSlice.reducer
export const {tuchRightLeft} = directionHomeSlice.actions
export const {stopScroling} = directionHomeSlice.actions
export const {setLastData} = directionHomeSlice.actions
export const {clickSetLastData} = directionHomeSlice.actions
