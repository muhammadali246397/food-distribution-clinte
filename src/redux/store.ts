import { configureStore } from "@reduxjs/toolkit";
import { foodManagementApi } from "./foodManagment/foodSupplyApi";

import supplyReducer from '../redux/feature/Slice'


export const store= configureStore({
    reducer:{
        [foodManagementApi.reducerPath]:foodManagementApi.reducer,
        allSupply:supplyReducer


    
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(foodManagementApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch