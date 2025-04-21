import { configureStore } from "@reduxjs/toolkit";
import { login, logout } from "./authSlice";

const store = configureStore(
    {
        reducer: {login,logout
            // Add your reducers here
        },
    }
)


export default store;