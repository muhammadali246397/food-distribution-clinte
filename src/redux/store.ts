import { configureStore } from "@reduxjs/toolkit";
import { foodManagementApi } from "./foodManagment/foodSupplyApi";


export const store= configureStore({
    reducer:{
        [foodManagementApi.reducerPath]:foodManagementApi.reducer,
    
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(foodManagementApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch