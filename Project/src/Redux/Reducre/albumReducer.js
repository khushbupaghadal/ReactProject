import { ALBUM } from "../Type/type"

export let albumReducer = (state = [] , action) =>{
    switch(action.type) {
        case  ALBUM: {
            return action.data
        }
        default:{
            return state
        }
    }
}