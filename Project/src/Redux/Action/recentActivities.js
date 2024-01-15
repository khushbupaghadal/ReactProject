import axios from "axios"
import { RECENTACTIVITIES } from "../Type/type"

let auth = {
    headers : {
        Authorization : `Bearer ${localStorage.getItem('token')}`
    }
}

export const getapi = () =>{
    return (dispatch) =>{
        axios.get("https://iris-api.mycodelibraries.com/api/Admin/GetAllRecentActivites" , auth).then((res) =>{
            dispatch({type:RECENTACTIVITIES , data : res.data.responseData})
        })
    }
}