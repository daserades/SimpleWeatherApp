import { combineReducers } from "redux";
import { WeatherReducer } from "./weatherReducer";



export const RootReducer =combineReducers({
    weather:WeatherReducer
})

export type State = ReturnType<typeof RootReducer>