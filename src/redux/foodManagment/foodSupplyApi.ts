import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const foodManagementApi = createApi({
    reducerPath:'foodApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3000/'}),
    endpoints:(builder) => ({
        getAllSupply:builder.query({
            query: () => ({
                url:'/supples',
                method:'GET'
            })
        }),
        createSupply:builder.mutation({
            query: (data) => {
                console.log('inside base api' ,data)
                return {
                    url:'/create-supply',
                    method:"POST",
                    body:data,
                }
        }
        })
    })
})

export const {useGetAllSupplyQuery, useCreateSupplyMutation} = foodManagementApi