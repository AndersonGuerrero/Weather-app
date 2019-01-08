import {urlApi, appid} from '../constans/urlApi'
export const getUrl = (city)=>`${urlApi}?q=${city}&appid=${appid}`
