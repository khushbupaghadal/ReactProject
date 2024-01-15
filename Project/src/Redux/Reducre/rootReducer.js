import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { projectReducer } from "./projectReducer";
import { recentreducer } from "./recentactivites";
import { albumReducer } from "./albumReducer";
import { proDetailReducer } from "./proDetailReducer";
import { changePassReducer } from "./changePassReducer";

export const rootReducer = combineReducers({
    profileApi : profileReducer,
    projectApi : projectReducer,
    recentApi : recentreducer,
    albumapi : albumReducer,
    profileDetail : proDetailReducer,
    chandePassword: changePassReducer
})