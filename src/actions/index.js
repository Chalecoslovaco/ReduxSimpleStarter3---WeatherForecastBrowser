import axios from 'axios';

const API_KEY = 'e729a074f9321d16bec10e41d35b1ad6';
export const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fecthWeather(city) {
    const url = `${ROOT_URL}&q=${city},es`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}