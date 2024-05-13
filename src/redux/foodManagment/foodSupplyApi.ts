import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const foodManagementApi = createApi({
    reducerPath:'foodApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://food-distribution-server-rouge.vercel.app/'}),
    endpoints:(builder) => ({
        getAllSupply:builder.query({
            query: () => ({
                url:'/supples',
                method:'GET'
            })
        })
    })
})

export const {useGetAllSupplyQuery} = foodManagementApi