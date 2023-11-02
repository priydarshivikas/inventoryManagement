import { configureStore } from "@reduxjs/toolkit";
import  userSilce  from "../Reducers/usersSlice";

const store = configureStore({
    reducer :{
        users :userSilce,
    },
});
export default store;