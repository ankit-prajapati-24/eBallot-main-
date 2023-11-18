import { combineReducers } from "@reduxjs/toolkit";
import  UserReducer from "../slices/SignUpData";
import UserDataSlice from "../slices/UserDataSlice";
import ServicesStepSlice from "../slices/ServicesStepSlice";


const rootReducer = combineReducers({
    User:UserReducer,
    UserData:UserDataSlice,
    Steps:ServicesStepSlice
});

export default  rootReducer