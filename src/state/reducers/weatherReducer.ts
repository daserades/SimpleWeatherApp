import { ActionTypes, ActionWeatherType, WeatherType } from "../action-types"

export interface Iinit{
    loading:boolean,
    payload?:WeatherType
}

export const InitialState ={
    loading:false
}

export const WeatherReducer = (state=InitialState,action:ActionWeatherType):Iinit=>{
    switch(action.type){
        case ActionTypes.LOAD:
            return{
                ...state,
                loading:true
            }
        case ActionTypes.SUCCESS:
            return{
                ...state,
                loading:false,
                payload:action.payload
            } 
        default:
            return {...state}    
    }
}