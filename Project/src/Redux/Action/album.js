import axios from "axios"
import { ALBUM } from "../Type/type"

let auth = {
    headers : {
        Authorization : `Bearer ${localStorage.getItem('token')}`
    }
}

export const getapi = () =>{
    return (dispatch) =>{
        axios.get("https://iris-api.mycodelibraries.com/api/Album/GetAllAlbums", auth).then((res) =>{
            dispatch({type: ALBUM, data : res.data.responseData})
        })
    }
}