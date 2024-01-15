import { PROJECTAPI } from "../Type/type"

export let projectReducer = (state = [] , action) =>{
    switch(action.type) {
        case PROJECTAPI : {
            return action.data
        }
        default:{
            return state
        }
    }
}