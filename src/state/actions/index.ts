import axios from "axios"
import { Dispatch } from "react"
import { ActionTypes, ActionWeatherType } from "../action-types"



export const getWeather =(city:string)=>{
    return async (dispatch:Dispatch<ActionWeatherType>)=>{
        try {
            dispatch({
                type:ActionTypes.LOAD
            })

            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d58c9776916be7ba74bbdeff6fa4729b`).then(data=>data.data)
           
            dispatch({
                type:ActionTypes.SUCCESS,
                payload:res
            })
        
        } catch (error) {
            console.log(error)
        }
    }
}