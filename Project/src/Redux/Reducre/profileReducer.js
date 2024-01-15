import { GETAPI } from "../Type/type"

export let profileReducer = (state = [] , action) =>{
    switch(action.type) {
        case GETAPI : {
            return action.data
        }
        default:{
            return state
        }
    }
}