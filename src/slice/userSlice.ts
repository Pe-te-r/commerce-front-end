import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { url } from './url';

const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczNzEzMzQzMywianRpIjoiYjQyNzVkMDctYzk0Mi00ZDRkLWJhMjYtODhmN2QyZDJjYTBkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InBoYW50b21AZ21haWwuY29tIiwibmJmIjoxNzM3MTMzNDMzLCJjc3JmIjoiODEyY2Y4ODktZjYxMy00MTBkLThiZjItMjBiZDgxOWE2NjUxIiwiZXhwIjoxNzM3MjE5ODMzLCJyb2xlIjoidXNlciIsImlkIjoiMDZkMDdlNzItMzQzNC00NTU5LTlhMWUtNDlkZmI3ZWQ3MDhkIn0.53fGJpT3sHXnxq8ntQim1d-DKbBuqTMTNED4Rsmm6WA"


export const userAPi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: url,
            prepareHeaders: (headers) => {
                headers.set('Authorization', `Bearer ${token}`);
            }
        }),
    
    endpoints: (builder) => ({
        oneUser: builder.query<string, string>({
            query:(id)=>`/users/${id}`
        })
    })
})
    
export const {useOneUserQuery}  = userAPi