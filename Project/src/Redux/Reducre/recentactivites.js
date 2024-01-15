import { RECENTACTIVITIES } from "../Type/type"

export let recentreducer = (state = [] , action) =>{
    switch(action.type) {
        case RECENTACTIVITIES : {
            return action.data
        }
        default:{
            return state
        }
    }
}   