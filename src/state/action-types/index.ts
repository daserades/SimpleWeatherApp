


export enum ActionTypes{
    LOAD='LOAD',
    SUCCESS='SUCCESS'
}

export interface Iload{
    type:ActionTypes.LOAD
}

export interface Isuccess{
    type:ActionTypes.SUCCESS,
    payload:WeatherType
}

export type WeatherType={
    main:{
        temp:number
    }
    name:string
}

export type ActionWeatherType=Iload|Isuccess