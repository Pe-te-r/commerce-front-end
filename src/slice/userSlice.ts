import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { url } from './url';
import { authTypeSend, ManyUserResponse, OneUserResponse } from '../types/types';

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczNzI1MDY5MiwianRpIjoiNGRmMDc2YjItOTY4NS00ZTk1LWE2NTQtOGIxMGMxNzk5MzU0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InBldGVybWJ1cnU4NTI2QGdtYWlsLmNvbSIsIm5iZiI6MTczNzI1MDY5MiwiY3NyZiI6IjA0NTYwYjRlLTc5ZGQtNGVlZi1hN2NhLWMzOGMxOGZlYTk2MCIsImV4cCI6MTczNzU5NjI5Miwicm9sZSI6InVzZXIiLCJpZCI6IjFlMGU4ZDkyLWJkOTItNGFjNi1iNGNhLTdlZDJkOGI4NjNjMSJ9.X63csHoW2ms1qRvi_KDtzui0qsL7qnBFAKBsYk6VDO4"


export const userAPi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: url,
            prepareHeaders: (headers) => {
                // const token = localStorage.getItem('users');
                const user_info = localStorage.getItem('user');
                let userObject;
                if (user_info) {
                    userObject = JSON.parse(user_info);
                } else {
                    console.log('User not logged in');
                }

                headers.set('Authorization', `Bearer ${userObject.token}`);
            }
        }),
    
    endpoints: (builder) => ({
        oneUser: builder.query<OneUserResponse, string>({
            query:(id)=>`/users/${id}`
        }),
        allUser: builder.query<ManyUserResponse,undefined>({
            query: () => `/users`
        }),
        updateUser: builder.mutation<string, OneUserResponse>({
            query: ({id,...credentials}) => ({
                url: `/users/${id}`,
                method: 'put',
                body: credentials 
           })
        }),
            setAuthCode: builder.mutation<string, authTypeSend>({
            query: (id) => ({
                url: '/auth/auth',
                method: 'post',
                body:id
            })
            }),
        getTotp: builder.query<string, string>({
                query:(id)=>`/auth/totp/${id}`
        }),
        sendTotp: builder.mutation<string, {id:string,code:string}>({
            query: ({ id ,code}) => ({
                url: `/auth/totp/${id}`,
                method: 'post',
                body: {code}
            })
        })
    })

})
    
export const {useOneUserQuery,useSetAuthCodeMutation,useAllUserQuery,useGetTotpQuery,useSendTotpMutation,useUpdateUserMutation}  = userAPi