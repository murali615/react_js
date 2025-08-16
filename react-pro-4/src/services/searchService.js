import axiosInstance from "../apis/axiosInstance"
import { API_END_POINTS } from "../constants/endPoints"


export const searchSuggestionsApi = async (data) =>{
   return await axiosInstance.post(API_END_POINTS.SEARCH_SUGGESTIONS, data)
}

