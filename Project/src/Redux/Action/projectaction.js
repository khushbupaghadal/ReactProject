import axios from "axios"
import { PROJECTAPI } from "../Type/type"


let auth = {
    headers : {
        Authorization : `Bearer ${localStorage.getItem('token')}`
    }
}

export const getapi = () =>{
    return (dispatch) =>{
        axios.get("https://iris-api.mycodelibraries.com/api/Admin/GetAllProjects" , auth).then((res) =>{
            dispatch({type: PROJECTAPI , data : res.data.responseData})
        })
    }
}