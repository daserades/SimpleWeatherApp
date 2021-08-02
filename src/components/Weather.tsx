import { FC } from "react";
import { Iinit } from "../state/reducers/weatherReducer";

interface Props {
  weather: Iinit;
}

const Weather: FC<Props> = ({ weather }) => {
  return (
    <div>
      <h1>{weather.payload && weather.payload.name}</h1>
      <h2>{weather.payload && weather.payload.main.temp}</h2>
    </div>
  );
};

export default Weather;
