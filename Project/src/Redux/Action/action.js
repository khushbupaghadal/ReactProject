import { GETAPI } from "../Type/type"
import axios from "axios"

let auth = {
    headers : {
        Authorization : `Bearer ${localStorage.getItem('token')}`
    }
}


export const getapi = () =>{
    return (dispatch) =>{
        axios.get("https://iris-api.mycodelibraries.com/api/Profile/GetAllProfile" , auth).then((res) =>{
            dispatch({type: GETAPI , data : res.data.responseData})
        })
    }
}

export const addApi = (obj) =>{
    return (dispatch) =>{
        axios.post("https://iris-api.mycodelibraries.com/api/Profile/CreateProfile" ,obj,auth).then((res) =>{
            dispatch(getapi())
        }).catch((err) => {  
            console.log(err)
        })
    }
}

export const editApi = (obj) =>{
    return (dispatch) =>{
            axios.post('https://iris-api.mycodelibraries.com/api/Profile/UpdateProfile' ,obj,auth).then((res)=>{
                dispatch(getapi())
            })
    }
}

export const deleteApi = (id) =>{
    return (dispatch) =>{
            axios.delete('https://iris-api.mycodelibraries.com/api/Profile/DeleteProfile/'+id , auth).then((res)=>{
                dispatch(getapi())
            })
    }
}

