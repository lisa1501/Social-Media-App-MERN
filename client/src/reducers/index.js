import { combineReducers } from "redux";
import authReducer from "./auth";

import posts from './posts'
import auth from './auth'

export const reducers= combineReducers({
    posts, 
    auth
})