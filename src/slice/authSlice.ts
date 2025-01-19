
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { url } from './url';
import { SendLoginData,ReceiveLoginData,  authTypeSend } from '../types/types';

export const AuthApi = createApi({
    reducerPath: 'AuthApi',
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: (builder) => ({
        loginAuth: builder.mutation<ReceiveLoginData,SendLoginData>({
            query: (credentials) => ({
                url: '/login',
                method: 'post',
                body:credentials
            })
        }),
        registerAuth: builder.mutation({
            query: (credentials) => ({
                url: '/users',
                method: 'post',
                body:credentials
            })
        }),
        setAuthCode: builder.mutation<string, authTypeSend>({
            query: (id) => ({
                url: '/auth',
                method: 'post',
                body:id
            })
        })
    }),
},
    
)






export const { useRegisterAuthMutation, useLoginAuthMutation ,useSetAuthCodeMutation} = AuthApi;
