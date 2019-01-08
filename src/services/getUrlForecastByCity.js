import {urlApiForecast, appid} from '../constans/urlApi'
export const getUrlForecast = (city)=>`${urlApiForecast}?q=${city}&appid=${appid}`
